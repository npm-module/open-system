//import { emojify } from "npm:node-emoji@2";
//import * as sys from "../open-system/mod.js";
import * as sys from "npm:open-system@2026.109.195107";

//console.log(emojify(":t-rex: :heart: NPM"));
console.log(sys.version());
console.log(sys.cwd());
console.log(sys.exists("c:/Windows/notepad.exe"));
await sys.run(["ls", "-ltr"]);
console.log(sys.args());
