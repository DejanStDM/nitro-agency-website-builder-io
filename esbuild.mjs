import * as esbuild from 'esbuild';
async function watch() {
    let ctx = await esbuild.context({
        entryPoints: ["src/js/**/*.js"],
        entryNames: "[name].min",
        outdir: "js",
        bundle: true,
        minify: true,
        sourcemap: true
    });
    await ctx.watch();
    console.log('Watching js...');
}
watch();