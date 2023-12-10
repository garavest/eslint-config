import prettier from "eslint-plugin-prettier";

import { allIgnores } from "../globs/ignores.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const prettierConfig = {
  ignores: allIgnores,
  languageOptions: {
    ecmaVersion: "latest"
  },
  plugins: { prettier },
  rules: {
    ...prettier.configs.recommended.rules,
    "prettier/prettier": "error"
  }
};
