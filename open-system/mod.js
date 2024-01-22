import { existsSync } from "https://deno.land/std@0.203.0/fs/exists.ts";

export function version() {
  return "open-system: version 2024.0122.125830";
}

export function args() {
  return Deno.args;
}

export function chdir(path) {
  return Deno.chdir(path);
}

export function cwd() {
  return Deno.cwd();
}

export function exists(path) {
  try {
    return existsSync(path);
  } catch(e) {
    return false;
  }
}

export function mkdir(path) {
  return Deno.mkdirSync(path, { recursive: true });
}

export function remove(path) {
  return Deno.removeSync(path, { recursive: true });
}

export async function run(v, ignoreErrors) {
  const p = Deno.run({
    cmd: v,
  });
  const { success, code } = await p.status();
  if (!ignoreErrors && code !== 0) {
    console.log(JSON.stringify(v) + " exit code is " + code);
    throw new Error();
  }
  let result = {};
  result.success = success;
  result.code = code;
  return result;
}

export async function runWithOutput(
  v,
  ignoreErrors,
  encoding,
) {
  if (encoding == null) encoding = "utf-8";
  const p = Deno.run({
    cmd: v,
    stdout: "piped",
    stderr: "piped",
  });
  const { success, code } = await p.status();
  let result = {};
  if (!ignoreErrors && code !== 0) {
    console.log(JSON.stringify(v) + " exit code is " + code);
    throw new Error();
  }
  result.success = success;
  result.code = code;
  const rawOutput = await p.output();
  result.stdout = new TextDecoder(encoding).decode(rawOutput);
  const rawError = await p.stderrOutput();
  result.stderr = new TextDecoder(encoding).decode(rawError);
  return result;
}

export function readTextFile(path) {
  return Deno.readTextFile(path);
}

export function readTextFileSync(path) {
  return Deno.readTextFileSync(path);
}

export function writeTextFile(path, text) {
  return Deno.writeTextFile(path, text);
}

export function writeTextFileSync(path, text) {
  return Deno.writeTextFileSync(path, text);
}
