import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser"; // eslint-disable-line import/default
import importPlugin from "eslint-plugin-import";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import svelteParser from "svelte-eslint-parser";

import { baseRules } from "../rules/base.js";
import { svelteRules } from "../rules/svelte.js";
import { typescriptBaseRules } from "../rules/typescript/base.js";
import { typescriptImportRules } from "../rules/typescript/import.js";
import { typescriptOverrideRules } from "../rules/typescript/overrides.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const svelteConfig = {
  files: ["**/*.svelte"],
  ignores: [".svelte-kit/**"],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.es2017
    },
    parser: svelteParser,
    parserOptions: {
      ecmaFeatures: {
        modules: true
      },
      ecmaVersion: 2020,
      extraFileExtensions: [".svelte"],
      parser: typescriptParser,
      project: "./tsconfig.json"
    }
  },
  plugins: {
    "@typescript-eslint": typescriptPlugin,
    import: importPlugin,
    svelte
  },
  rules: {
    ...baseRules,
    ...typescriptBaseRules,
    ...typescriptOverrideRules,
    ...typescriptImportRules,
    ...svelteRules,
    "import/group-exports": "off"
  }
};
