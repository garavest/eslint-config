import typescriptESLint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";

import { typescriptFiles } from "../globs/files.js";
import { typescriptIgnores } from "../globs/ignores.js";
import { baseRules } from "../rules/base.js";
import { typescriptBaseRules } from "../rules/typescript/base.js";
import { typescriptOverrideRules } from "../rules/typescript/overrides.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const typescriptConfig = {
  files: typescriptFiles,
  ignores: typescriptIgnores,
  languageOptions: {
    ecmaVersion: "latest",
    globals: { ...globals.es2017, ...globals.node },
    parser: typescriptParser,
    parserOptions: {
      extraFileExtensions: [".svelte"],
      project: "./tsconfig.json"
    }
  },
  plugins: {
    "@typescript-eslint": typescriptESLint
  },
  rules: {
    ...baseRules,
    ...typescriptBaseRules,
    ...typescriptOverrideRules
  }
};
