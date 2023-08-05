import babelParser from "@babel/eslint-parser";
import babel from "@babel/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

import { baseRules } from "../rules/base.js";
import { importRules } from "../rules/import.js";
import { javascriptRules } from "../rules/javascript.js";
import { prettierRules } from "../rules/prettier.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const javascriptConfig = {
  files: ["**/*.js", "**/*.cjs"],
  ignores: [".svelte-kit/**"],
  languageOptions: {
    globals: {
      ...globals.es2017,
      ...globals.node
    },
    parser: babelParser,
    parserOptions: {
      babelOptions: {
        babelrc: false,
        configFile: false,
        presets: ["@babel/preset-env"]
      },
      ecmaVersion: 2015,
      requireConfigFile: false,
      sourceType: "module"
    }
  },
  plugins: { babel, import: importPlugin, prettier },
  rules: {
    ...baseRules,
    ...javascriptRules,
    ...importRules,
    ...prettierRules
  }
};
