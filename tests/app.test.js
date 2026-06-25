import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../src/index.html", import.meta.url), "utf8");
const health = JSON.parse(readFileSync(new URL("../src/health.json", import.meta.url), "utf8"));

test("G82 app exposes release and health contract", () => {
  assert.match(html, /Olympe Operating Loop/);
  assert.match(html, /g82-operating-loop-001/);
  assert.equal(health.status, "ok");
  assert.equal(health.release, "g82-operating-loop-001");
});
