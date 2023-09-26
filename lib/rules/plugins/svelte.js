import svelte from "eslint-plugin-svelte";

export const svelteRules = {
  ...svelte.configs.recommended.rules,

  // #region Rules incompatible with Svelte
  /*
   * This rule poses issues with Svelte because in Svelte files the import plugin expects file
   * extensions, which causes conflicts with TypeScript.
   */
  "import/extensions": "off",

  /*
   * This rule doesn't play nicely with SvelteKit's generated files. The plugin thinks the
   * generated files don't exist. To be fair, TypeScript sometimes has issues too.
   */
  "import/no-unresolved": "off",
  // #endregion

  "svelte/no-target-blank": "error"
};
