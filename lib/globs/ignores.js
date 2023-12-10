const globalIgnores = ["node_modules/**"];
const javascriptIgnores = [...globalIgnores];
const svelteIgnores = [...globalIgnores, ".svelte-kit/**"];
const typescriptIgnores = [...globalIgnores, "**/*.d.ts"];

const allIgnores = [...globalIgnores, ...javascriptIgnores, ...svelteIgnores, ...typescriptIgnores];

export { allIgnores, globalIgnores, javascriptIgnores, svelteIgnores, typescriptIgnores };
