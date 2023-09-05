import prettier from "eslint-config-prettier";

import { javascriptConfig } from "./configs/javascript.js";
import { svelteConfig } from "./configs/svelte.js";
import { typescriptConfig } from "./configs/typescript.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export const garavest = [
  {
    ignores: [".svelte-kit/*"],
    linterOptions: {
      // noInlineConfig: true,
      reportUnusedDisableDirectives: true
    },
    settings: {
      "import/parsers": {
        "@babel/eslint-parser": [".js", ".cjs", ".mjs"],
        "@typescript-eslint/parser": [".ts"],
        "svelte-eslint-parser": [".svelte"]
      },
      "import/resolver": {
        typescript: {}
      }
    }
  },
  svelteConfig,
  javascriptConfig,
  typescriptConfig,
  prettier
];
