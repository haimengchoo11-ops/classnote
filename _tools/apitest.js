const http = require("http");

function call(method, path, body) {
  return new Promise(function (resolve, reject) {
    const data = body ? JSON.stringify(body) : null;
    const req = http.request({ host: "127.0.0.1", port: 8777, path: path, method: method,
      headers: data ? { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(data) } : {} },
      function (res) {
        let s = "";
        res.on("data", function (c) { s += c; });
        res.on("end", function () { resolve({ status: res.statusCode, body: s }); });
      });
    req.on("error", reject);
    if (data) req.write(data);
    req.end();
  });
}

(async function () {
  let r = await call("GET", "/api/health");
  console.log("HEALTH", r.status, r.body);

  // --- Java ---
  const javaCode = [
    "import java.util.Scanner;",
    "public class Main {",
    "  public static void main(String[] a) {",
    "    Scanner sc = new Scanner(System.in);",
    "    int n = sc.nextInt();",
    "    System.out.println(n * 7);",
    "    System.out.println(\"中文输出测试\");",
    "  }",
    "}"].join("\n");
  r = await call("POST", "/api/run", { lang: "java", code: javaCode, tests: [
    { name: "n=6", stdin: "6", out: "42\n中文输出测试" },
    { name: "n=3", stdin: "3", out: "21\n中文输出测试" }
  ] });
  console.log("\nJAVA", r.status);
  const j = JSON.parse(r.body);
  console.log(" compile ok:", j.compile.ok, "ms:", j.ms, "log:", JSON.stringify(j.compile.log.slice(0, 200)));
  (j.runs || []).forEach(function (x) { console.log("  [" + (x.match ? "PASS" : "FAIL") + "] " + x.name + " stdout=" + JSON.stringify(x.stdout) + " expected=" + JSON.stringify(x.expected)); });

  // --- Java compile error ---
  r = await call("POST", "/api/run", { lang: "java", code: "public class Main { public static void main(String[] a) { int x = ; } }" });
  const je = JSON.parse(r.body);
  console.log("\nJAVA bad code -> compile ok:", je.compile.ok);
  console.log(je.compile.log.split("\n").slice(0, 3).join("\n"));

  // --- VB ---
  const vbCode = [
    "Module Program",
    "    Sub Main(args As String())",
    "        Dim n As Integer = Integer.Parse(Console.ReadLine())",
    "        Console.WriteLine(n * 7)",
    "        Console.WriteLine(\"中文输出测试\")",
    "    End Sub",
    "End Module"].join("\n");
  r = await call("POST", "/api/run", { lang: "vb", code: vbCode, tests: [
    { name: "n=6", stdin: "6", out: "42\n中文输出测试" },
    { name: "n=3", stdin: "3", out: "21\n中文输出测试" }
  ] });
  console.log("\nVB", r.status);
  const v = JSON.parse(r.body);
  console.log(" compile ok:", v.compile.ok, "ms:", v.ms, "log:", JSON.stringify(v.compile.log.slice(0, 300)));
  (v.runs || []).forEach(function (x) { console.log("  [" + (x.match ? "PASS" : "FAIL") + "] " + x.name + " stdout=" + JSON.stringify(x.stdout) + " expected=" + JSON.stringify(x.expected)); });
})();