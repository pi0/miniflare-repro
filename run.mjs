import { Miniflare } from "miniflare";
import { fileURLToPath } from "node:url";

const mf = new Miniflare({
  modules: true,
  scriptPath: fileURLToPath(new URL("index.mjs", import.meta.url)),
});

const res = await mf.dispatchFetch("http://localhost/", {
  method: "GET",
  headers: {},
});

console.log(res.status, res.statusText);
console.log(res.headers);
console.log(await res.text());

await mf.dispose();
