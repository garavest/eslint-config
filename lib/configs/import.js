import importPlugin from "eslint-plugin-import";

import { allIgnores } from "../globs/ignores.js";
import { importRules } from "../rules/plugins/import.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const importConfig = {
  ignores: allIgnores,
  languageOptions: {
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    }
  },
  plugins: {
    import: importPlugin
  },
  rules: importRules,
  settings: {
    "import/parsers": {
      espree: [".js", ".cjs", ".mjs", ".jsx"]
    },
    "import/resolver": {
      node: true,
      typescript: true
    }
  }
};
