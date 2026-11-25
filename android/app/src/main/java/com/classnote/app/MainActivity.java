package com.classnote.app;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.res.AssetManager;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.webkit.MimeTypeMap;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.core.content.FileProvider;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class MainActivity extends Activity {

    private static final String HOST = "appassets.androidplatform.net";
    private static final String START_URL = "https://" + HOST + "/index.html";
    private static final int BG = 0xFFF6F7F9;

    private WebView web;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getWindow().setBackgroundDrawable(new ColorDrawable(BG));
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);

        web = new WebView(this);
        web.setBackgroundColor(BG);

        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(BG);
        root.addView(web, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        setContentView(root);

        final int fallbackTop = dimen("status_bar_height");
        final int fallbackBottom = dimen("navigation_bar_height");

        ViewCompat.setOnApplyWindowInsetsListener(root, (v, insets) -> {
            Insets bars = insets.getInsets(WindowInsetsCompat.Type.systemBars()
                    | WindowInsetsCompat.Type.displayCutout());
            int top = Math.max(bars.top, fallbackTop);
            int bottom = Math.max(bars.bottom, fallbackBottom);
            android.util.Log.i("ClassNoteInsets",
                    "rawTop=" + bars.top + " rawBottom=" + bars.bottom
                            + " resTop=" + fallbackTop + " resBottom=" + fallbackBottom);
            v.setPadding(bars.left, top, bars.right, bottom);
            return WindowInsetsCompat.CONSUMED;
        });

        WindowInsetsControllerCompat controller = WindowCompat.getInsetsController(getWindow(), web);
        controller.setAppearanceLightStatusBars(true);
        controller.setAppearanceLightNavigationBars(true);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setMediaPlaybackRequiresUserGesture(true);

        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Uri url = request.getUrl();
                if (!HOST.equals(url.getHost())) {
                    return null;
                }
                return serveAsset(url.getPath());
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri url = request.getUrl();
                if (HOST.equals(url.getHost())) {
                    String path = url.getPath() == null ? "" : url.getPath();
                    if (isDocument(path)) {
                        openBundledDocument(path);
                        return true;
                    }
                    return false;
                }
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, url));
                } catch (ActivityNotFoundException e) {
                    Toast.makeText(MainActivity.this, "No app can open this link", Toast.LENGTH_SHORT).show();
                }
                return true;
            }
        });
        web.setWebChromeClient(new WebChromeClient());

        if (Build.VERSION.SDK_INT >= 33) {
            getOnBackInvokedDispatcher().registerOnBackInvokedCallback(
                    android.window.OnBackInvokedDispatcher.PRIORITY_DEFAULT, this::handleBack);
        }

        if (savedInstanceState != null) {
            web.restoreState(savedInstanceState);
        } else {
            web.loadUrl(START_URL);
        }
    }

    private int dimen(String name) {
        int id = getResources().getIdentifier(name, "dimen", "android");
        return id > 0 ? getResources().getDimensionPixelSize(id) : 0;
    }

    /* ------------------------- local asset server ------------------------- */

    private WebResourceResponse serveAsset(String rawPath) {
        if (rawPath != null && rawPath.startsWith("/api/")) {
            byte[] body = "{\"ok\":false,\"offline\":true}".getBytes(StandardCharsets.UTF_8);
            WebResourceResponse r = new WebResourceResponse(
                    "application/json", "UTF-8", new ByteArrayInputStream(body));
            Map<String, String> headers = new HashMap<>();
            headers.put("Access-Control-Allow-Origin", "*");
            r.setResponseHeaders(headers);
            r.setStatusCodeAndReasonPhrase(503, "Service Unavailable");
            return r;
        }

        String path = rawPath == null ? "" : Uri.decode(rawPath);
        while (path.startsWith("/")) {
            path = path.substring(1);
        }
        if (path.isEmpty()) {
            path = "index.html";
        }
        if (path.endsWith("/")) {
            path = path + "index.html";
        }

        AssetManager am = getAssets();
        InputStream in = openAsset(am, path);
        if (in == null && !path.contains(".")) {
            in = openAsset(am, path + "/index.html");
        }
        if (in == null) {
            byte[] body = ("Not found: " + path).getBytes(StandardCharsets.UTF_8);
            WebResourceResponse r = new WebResourceResponse(
                    "text/plain", "UTF-8", new ByteArrayInputStream(body));
            r.setStatusCodeAndReasonPhrase(404, "Not Found");
            return r;
        }
        return new WebResourceResponse(mimeOf(path), charsetOf(path), in);
    }

    private InputStream openAsset(AssetManager am, String path) {
        try {
            return am.open(path);
        } catch (IOException e) {
            return null;
        }
    }

    private static boolean isDocument(String path) {
        String p = path.toLowerCase(Locale.ROOT);
        return p.endsWith(".pdf") || p.endsWith(".pptx") || p.endsWith(".ppt")
                || p.endsWith(".docx") || p.endsWith(".doc") || p.endsWith(".xlsx")
                || p.endsWith(".zip");
    }

    private static String mimeOf(String path) {
        String p = path.toLowerCase(Locale.ROOT);
        if (p.endsWith(".html") || p.endsWith(".htm")) return "text/html";
        if (p.endsWith(".css")) return "text/css";
        if (p.endsWith(".js")) return "application/javascript";
        if (p.endsWith(".json")) return "application/json";
        if (p.endsWith(".svg")) return "image/svg+xml";
        if (p.endsWith(".png")) return "image/png";
        if (p.endsWith(".jpg") || p.endsWith(".jpeg")) return "image/jpeg";
        if (p.endsWith(".gif")) return "image/gif";
        if (p.endsWith(".webp")) return "image/webp";
        if (p.endsWith(".ico")) return "image/x-icon";
        if (p.endsWith(".woff2")) return "font/woff2";
        if (p.endsWith(".woff")) return "font/woff";
        if (p.endsWith(".ttf")) return "font/ttf";
        if (p.endsWith(".pdf")) return "application/pdf";
        if (p.endsWith(".txt") || p.endsWith(".md")) return "text/plain";
        if (p.endsWith(".pptx")) return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
        if (p.endsWith(".docx")) return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        if (p.endsWith(".xlsx")) return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        String ext = MimeTypeMap.getFileExtensionFromUrl(path);
        String m = ext == null ? null : MimeTypeMap.getSingleton().getMimeTypeFromExtension(ext);
        return m == null ? "application/octet-stream" : m;
    }

    private static String charsetOf(String path) {
        String m = mimeOf(path);
        return m.startsWith("text/") || m.contains("javascript") || m.contains("json") ? "UTF-8" : null;
    }

    /* --------------------- opening bundled pdf / pptx --------------------- */

    private void openBundledDocument(String path) {
        final String rel = path.startsWith("/") ? path.substring(1) : path;
        Toast.makeText(this, "正在准备文件…", Toast.LENGTH_SHORT).show();
        new Thread(() -> {
            try {
                File dir = new File(getCacheDir(), "docs");
                if (!dir.exists() && !dir.mkdirs()) {
                    throw new IOException("cannot create cache dir");
                }
                File out = new File(dir, new File(rel).getName());
                if (!out.exists() || out.length() == 0) {
                    InputStream in = getAssets().open(rel);
                    FileOutputStream fos = new FileOutputStream(out);
                    byte[] buf = new byte[128 * 1024];
                    int n;
                    while ((n = in.read(buf)) > 0) {
                        fos.write(buf, 0, n);
                    }
                    fos.close();
                    in.close();
                }
                Uri uri = FileProvider.getUriForFile(this, getPackageName() + ".fileprovider", out);
                Intent intent = new Intent(Intent.ACTION_VIEW);
                intent.setDataAndType(uri, mimeOf(rel));
                intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                runOnUiThread(() -> {
                    try {
                        startActivity(intent);
                    } catch (ActivityNotFoundException e) {
                        Toast.makeText(this, "手机上没有可打开该文件的 App", Toast.LENGTH_LONG).show();
                    }
                });
            } catch (Exception e) {
                runOnUiThread(() -> Toast.makeText(this, "打开失败：" + e.getMessage(), Toast.LENGTH_LONG).show());
            }
        }).start();
    }

    /* ------------------------------ lifecycle ----------------------------- */

    private void handleBack() {
        if (web == null) {
            finish();
            return;
        }
        web.evaluateJavascript("document.body.classList.contains('nav-open')", value -> {
            if ("true".equals(value)) {
                web.evaluateJavascript("document.body.classList.remove('nav-open')", null);
            } else if (web.canGoBack()) {
                web.goBack();
            } else {
                finish();
            }
        });
    }

    @Override
    public void onBackPressed() {
        handleBack();
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        if (web != null) {
            web.saveState(outState);
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (web != null) {
            web.onPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (web != null) {
            web.onResume();
        }
    }

    @Override
    protected void onDestroy() {
        if (web != null) {
            web.destroy();
            web = null;
        }
        super.onDestroy();
    }
}
