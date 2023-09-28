import typescriptESLint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import svelteParser from "svelte-eslint-parser";

import { svelteFiles } from "../globs/files.js";
import { svelteIgnores } from "../globs/ignores.js";
import { baseRules } from "../rules/base.js";
import { svelteRules } from "../rules/plugins/svelte.js";
import { typescriptBaseRules } from "../rules/typescript/base.js";
import { typescriptOverrideRules } from "../rules/typescript/overrides.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const svelteConfig = {
  files: svelteFiles,
  ignores: svelteIgnores,
  languageOptions: {
    ecmaVersion: "latest",
    globals: {
      ...globals.browser,
      ...globals.es2017
    },
    parser: svelteParser,
    parserOptions: {
      extraFileExtensions: [".svelte"],
      parser: typescriptParser,
      project: "./tsconfig.json"
    }
  },
  plugins: {
    "@typescript-eslint": typescriptESLint,
    svelte
  },
  rules: {
    ...baseRules,
    ...typescriptBaseRules,
    ...typescriptOverrideRules,
    ...svelteRules
  }
};
