import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import init, { convert } from "../pkg/converter.js";

test("the generated JavaScript package converts a LiveSplit file", async () => {
  const wasm = await readFile(new URL("../pkg/converter_bg.wasm", import.meta.url));
  await init({ module_or_path: wasm });

  const input = await readFile(
    new URL("./fixtures/sa2_fallen-hero.lss", import.meta.url),
    "utf8",
  );
  const output = convert(input);

  assert.equal(typeof output, "string");
  assert.ok(output.length > 0);
});
