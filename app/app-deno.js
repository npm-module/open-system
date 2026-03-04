import * as sys from "npm:open-system@2026.304.172839";

//console.log(emojify(":t-rex: :heart: NPM"));
console.log(sys.version());
console.log(sys.cwd());
console.log(sys.exists("c:/Windows/notepad.exe"));
await sys.run(["ls", "-ltr"]);
console.log(sys.args());
