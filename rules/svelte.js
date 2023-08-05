import svelte from "eslint-plugin-svelte";

export const svelteRules = {
  ...svelte.configs.recommended.rules,
  // These rules are known not to work with svelte
  "import/extensions": "off",
  "import/no-unresolved": "off",
  "svelte/no-target-blank": "error"
};
