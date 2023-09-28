import prettier from "eslint-plugin-prettier";

import { globalIgnores } from "../globs/ignores.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const prettierConfig = {
  ignores: globalIgnores,
  languageOptions: {
    ecmaVersion: "latest"
  },
  plugins: { prettier },
  rules: {
    ...prettier.configs.recommended.rules,
    "prettier/prettier": "error"
  }
};
