const CHUNK_PUBLIC_PATH = "transform.js";
const runtime = require("./build/chunks/[turbopack]_runtime.js");
runtime.loadChunk("build/chunks/Tesseract_tesseract-hall-of-heroes_postcss_config_mjs_transform_ts_8e0e2cf7._.js");
runtime.loadChunk("build/chunks/[root-of-the-server]__9d7cb39b._.js");
runtime.getOrInstantiateRuntimeModule("[turbopack-node]/globals.ts [postcss] (ecmascript)", CHUNK_PUBLIC_PATH);
runtime.getOrInstantiateRuntimeModule("[turbopack-node]/ipc/evaluate.ts/evaluate.js { INNER => \"[project]/Tesseract/tesseract-hall-of-heroes/postcss.config.mjs/transform.ts { CONFIG => \\\"[project]/Tesseract/tesseract-hall-of-heroes/postcss.config.mjs [postcss] (ecmascript)\\\" } [postcss] (ecmascript)\", RUNTIME => \"[turbopack-node]/ipc/evaluate.ts [postcss] (ecmascript)\" } [postcss] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[turbopack-node]/ipc/evaluate.ts/evaluate.js { INNER => \"[project]/Tesseract/tesseract-hall-of-heroes/postcss.config.mjs/transform.ts { CONFIG => \\\"[project]/Tesseract/tesseract-hall-of-heroes/postcss.config.mjs [postcss] (ecmascript)\\\" } [postcss] (ecmascript)\", RUNTIME => \"[turbopack-node]/ipc/evaluate.ts [postcss] (ecmascript)\" } [postcss] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
