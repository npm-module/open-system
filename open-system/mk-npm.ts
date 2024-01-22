import { build, emptyDir } from "https://deno.land/x/dnt@0.39.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.js"],
  outDir: "../npm-module",
  shims: {
    deno: true,
  },
  package: {
    name: "open-system",
    version: Deno.args[0],
    description: "String function that returns where the cow says Hello nus3",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/npm-module/open-system.git",
    },
    bugs: {
      url: "https://github.com/npm-module/open-system/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("../LICENSE", "../npm-module/LICENSE");
    Deno.copyFileSync("../README.md", "../npm-module/README.md");
  },
});
