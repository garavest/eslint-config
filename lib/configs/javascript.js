import prettier from "eslint-plugin-prettier";
import globals from "globals";

import { javascriptFiles } from "../globs/files.js";
import { javascriptIgnores } from "../globs/ignores.js";
import { baseRules } from "../rules/base.js";
import { javascriptRules } from "../rules/javascript.js";
import { prettierRules } from "../rules/plugins/prettier.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const garavestJavascriptConfig = {
  files: javascriptFiles,
  ignores: javascriptIgnores,
  languageOptions: {
    globals: {
      ...globals.es2017,
      ...globals.node
    }
  },
  plugins: { prettier },
  rules: {
    ...baseRules,
    ...javascriptRules,
    ...prettierRules
  }
};
