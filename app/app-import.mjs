import * as sys from "open-system";
console.log(sys.cwd());
console.log(sys.exists("c:/Windows/notepad.exe"));
console.log(sys.exists("c:/Windows/notepad.exeX"));
await sys.run(["ls", "-ltr"]);
console.log(sys.args());
