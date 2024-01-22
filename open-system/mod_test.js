import * as asst from "https://deno.land/std@0.203.0/testing/asserts.ts";
import * as sys from "./mod.js";

Deno.test("test#01", async () => {
  //asst.assert(helloWorld.startsWith("hello"));
  try {
    console.log(sys.cwd());
    sys.mkdir("./tmp/abc/xyz");
    sys.writeTextFileSync("./tmp/abc/xyz.txt", "helloハロー©");
    await sys.run(["ls", "-l", "./tmp/abc"]);
    asst.assertEquals(sys.readTextFileSync("./tmp/abc/xyz.txt"), "helloハロー©");
  } finally {
    sys.remove("./tmp");
  }
});
