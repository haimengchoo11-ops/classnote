# ClassNote Android 工程

把仓库根目录的静态网站装进 WebView 的最小 Android 工程，无第三方 UI 依赖（只依赖 `androidx.core` 的 FileProvider / WindowInsets）。

## 环境

- JDK 17
- Android SDK：platform `android-37`、build-tools `36.0.0`
- Gradle 由 wrapper 固定为 9.7.1，AGP 9.5.2

## 构建

```powershell
# 在仓库根目录执行，把网站同步进 app/src/main/assets/
powershell -ExecutionPolicy Bypass -File tools\sync-assets.ps1

cd android
.\gradlew.bat :app:assembleDebug
```

产物：`app/build/outputs/apk/debug/app-debug.apk`

装到设备：

```powershell
adb install -r app\build\outputs\apk\debug\app-debug.apk
```

## 精简版

原始讲义占 130MB+。若只要图文内容，同步 assets 时跳过六个讲义目录：

```powershell
# 手工把根目录除 00p/ cs/ dcn/ os/ sadm/ vb/ 以外的内容复制到 app/src/main/assets/
```

这样 APK 约 7 MB，「打开原文件」会提示找不到文件，其余功能不变。

## 代码结构

```
app/src/main/java/com/classnote/app/MainActivity.java   全部逻辑
app/src/main/res/                                      主题、图标、FileProvider 路径
app/src/main/assets/                                   网站文件（由脚本生成，不入库）
```

## 实现说明

- 虚拟源：`https://appassets.androidplatform.net/`，`shouldInterceptRequest` 从 assets 读文件并给正确的 MIME。
  用 https 源而不是 `file://`，localStorage、hash 路由才正常。
- `/api/*` 返回 503：编程实验室探测本地编译服务时直接走离线面板。
- 文档：`.pdf/.pptx/.docx/.xlsx/.zip` 的链接会被拦截，复制到 `cache/docs/` 后用 `FileProvider` + `ACTION_VIEW` 交给系统应用。
- 返回：先 `document.body.classList.remove('nav-open')` 收抽屉，再 `webView.goBack()`，最后 `finish()`。
- 边到边：`WindowCompat.setDecorFitsSystemWindows(false)` + insets padding（targetSdk 37 强制 edge-to-edge）。
- 配置变更（旋转、深色模式）不重建 Activity，由 WebView 自己处理。
