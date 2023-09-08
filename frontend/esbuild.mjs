import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["./src/index.tsx"],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ["chrome58", "firefox57", "safari11", "edge16"],
    outfile: "./build/index.js",
    loader: { ".tsx": "tsx" },
});
