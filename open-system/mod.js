import { existsSync } from "@std/fs";

export function version() {
  return "open-system: version 2026.0304.172839";
}

export function args() {
  return Deno.args;
}

export function env() {
  return Deno.env.toObject();
}

export function getEnv() {
  return Deno.env.get(...arguments);
}

export function setEnv() {
  return Deno.env.set(...arguments);
}

export function hasEnv() {
  return Deno.env.has(...arguments);
}

export function deleteEnv() {
  return Deno.env.delete(...arguments);
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
  } catch(_e) {
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
  // deno-lint-ignore no-deprecated-deno-api
  const p = Deno.run({
    cmd: v,
  });
  const { success, code } = await p.status();
  if (!ignoreErrors && code !== 0) {
    console.log(JSON.stringify(v) + " exit code is " + code);
    throw new Error();
  }
  const result = {};
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
  // deno-lint-ignore no-deprecated-deno-api
  const p = Deno.run({
    cmd: v,
    stdout: "piped",
    stderr: "piped",
  });
  const { success, code } = await p.status();
  const result = {};
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
