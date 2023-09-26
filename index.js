import prettier from "eslint-config-prettier";

import { garavestJavascriptConfig } from "./lib/configs/javascript.js";
import { garavestSvelteConfig } from "./lib/configs/svelte.js";
import { garavestTypescriptConfig } from "./lib/configs/typescript.js";
import { globalIgnores } from "./lib/globs/ignores.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
const garavestDefaultConfig = [
  {
    ignores: globalIgnores,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
      }
    },
    linterOptions: {
      /*
       * This rule will be enabled in a later version of this configuration, once all of the bugs
       * have been ironed out. In the meantime, feel free to use inline configs.
       */
      // noInlineConfig: true
      reportUnusedDisableDirectives: true
    }
  },
  garavestSvelteConfig,
  garavestJavascriptConfig,
  garavestTypescriptConfig,
  prettier
];

export {
  garavestDefaultConfig,
  garavestJavascriptConfig,
  garavestSvelteConfig,
  garavestTypescriptConfig
};
