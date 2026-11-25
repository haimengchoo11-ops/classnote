const http = require("http");
function call(method, p, body) {
  return new Promise(function (res2, rej) {
    const d = body ? JSON.stringify(body) : null;
    const q = http.request({ host: "127.0.0.1", port: 8777, path: p, method: method,
      headers: d ? { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(d) } : {} },
      function (r) { let s = ""; r.on("data", c => s += c); r.on("end", () => res2(JSON.parse(s))); });
    q.on("error", rej); if (d) q.write(d); q.end();
  });
}
const vb = ["Module Program", "    Sub Main(args As String())",
  "        Dim n As Integer = Integer.Parse(Console.ReadLine())",
        Console.WriteLine(n * 3)", "    End Sub", "End Module"].join("\n");
const java = ["import java.util.Scanner;", "public class Main {",
  "  public static void main(String[] a) {",
    Scanner s = new Scanner(System.in);",
    System.out.println(s.nextInt() * 3);", "  }", "}"].join("\n");
(async function () {
  for (let i = 1; i <= 3; i++) {
    let r = await call("POST", "/api/run", { lang: "vb", code: vb, tests: [{ stdin: "5", out: "15" }] });
    console.log("VB run " + i + ": ms=" + r.ms + " ok=" + r.ok + " match=" + (r.runs[0] && r.runs[0].match));
  }
  for (let i = 1; i <= 2; i++) {
    let r = await call("POST", "/api/run", { lang: "java", code: java, tests: [{ stdin: "5", out: "15" }] });
    console.log("Java run " + i + ": ms=" + r.ms + " ok=" + r.ok + " match=" + (r.runs[0] && r.runs[0].match));
  }
  // compile error readability
  let e = await call("POST", "/api/run", { lang: "java", code: "public class Main { public static void main(String[] a) { int x = ; } }" });
  console.log("\nJAVA ERROR LOG:\n" + e.compile.log);
  let v = await call("POST", "/api/run", { lang: "vb", code: "Module Program\n    Sub Main(args As String())\n        Dim x As Integer = \"abc\"\n    End Sub\nEnd Module" });
  console.log("\nVB ERROR LOG:\n" + v.compile.log);
})();