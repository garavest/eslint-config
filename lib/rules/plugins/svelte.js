import svelte from "eslint-plugin-svelte";

export const svelteRules = {
  ...svelte.configs.recommended.rules,

  "svelte/no-target-blank": "error"
};
