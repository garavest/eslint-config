import eslintConfigPrettier from "eslint-config-prettier";

import { globalConfig } from "./lib/configs/global.js";
import { javascriptConfig } from "./lib/configs/javascript.js";
import { svelteConfig } from "./lib/configs/svelte.js";
import { prettierConfig } from "./lib/configs/prettier.js";
import { typescriptConfig } from "./lib/configs/typescript.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
const defaultConfig = [
  globalConfig,
  prettierConfig,
  svelteConfig,
  javascriptConfig,
  typescriptConfig,
  eslintConfigPrettier
];

export const garavest = {
  default: defaultConfig,
  global: globalConfig,
  javascript: javascriptConfig,
  prettier: prettierConfig,
  svelte: svelteConfig,
  typescript: typescriptConfig
};
