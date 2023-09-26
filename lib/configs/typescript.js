import typescriptESLint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

import { typescriptFiles } from "../globs/files.js";
import { typescriptIgnores } from "../globs/ignores.js";
import { baseRules } from "../rules/base.js";
import { prettierRules } from "../rules/plugins/prettier.js";
import { typescriptBaseRules } from "../rules/typescript/base.js";
import { typescriptOverrideRules } from "../rules/typescript/overrides.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const garavestTypescriptConfig = {
  files: typescriptFiles,
  ignores: typescriptIgnores,
  languageOptions: {
    globals: { ...globals.es2017, ...globals.node },
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: "latest",
      extraFileExtensions: [".svelte"],
      project: "./tsconfig.json",
      sourceType: "module"
    }
  },
  plugins: {
    "@typescript-eslint": typescriptESLint,
    prettier
  },
  rules: {
    ...baseRules,
    ...typescriptBaseRules,
    ...typescriptOverrideRules,
    ...prettierRules
  }
};
