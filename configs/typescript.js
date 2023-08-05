import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser"; // eslint-disable-line import/default
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

import { baseRules } from "../rules/base.js";
import { prettierRules } from "../rules/prettier.js";
import { typescriptBaseRules } from "../rules/typescript/base.js";
import { typescriptImportRules } from "../rules/typescript/import.js";
import { typescriptOverrideRules } from "../rules/typescript/overrides.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const typescriptConfig = {
  files: ["**/*.ts"],
  ignores: ["**/*.d.ts", ".svelte-kit/**"],
  languageOptions: {
    globals: { ...globals.es2017, ...globals.node },
    parser: typescriptParser,
    parserOptions: {
      ecmaFeatures: {
        modules: true
      },
      ecmaVersion: 2020,
      extraFileExtensions: [".svelte"],
      project: "./tsconfig.json"
    }
  },
  plugins: {
    "@typescript-eslint": typescriptPlugin,
    import: importPlugin,
    prettier
  },
  rules: {
    ...baseRules,
    ...typescriptBaseRules,
    ...typescriptOverrideRules,
    ...typescriptImportRules,
    ...prettierRules
  }
};
