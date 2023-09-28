import globals from "globals";

import { javascriptFiles } from "../globs/files.js";
import { javascriptIgnores } from "../globs/ignores.js";
import { baseRules } from "../rules/base.js";
import { javascriptRules } from "../rules/javascript.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const javascriptConfig = {
  files: javascriptFiles,
  ignores: javascriptIgnores,
  languageOptions: {
    globals: {
      ...globals.es2017,
      ...globals.node
    }
  },
  rules: {
    ...baseRules,
    ...javascriptRules
  }
};
