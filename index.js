import { globalConfig } from "./lib/configs/global.js";
import { importConfig } from "./lib/configs/import.js";
import { javascriptConfig } from "./lib/configs/javascript.js";
import { prettierConfig } from "./lib/configs/prettier.js";
import { stylisticConfig } from "./lib/configs/stylistic.js";
import { svelteConfig } from "./lib/configs/svelte.js";
import { typescriptConfig } from "./lib/configs/typescript.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
const defaultConfig = [
  globalConfig,
  prettierConfig,
  importConfig,
  javascriptConfig,
  typescriptConfig,
  stylisticConfig
];

export const garavest = {
  default: defaultConfig,
  global: globalConfig,
  import: importConfig,
  javascript: javascriptConfig,
  prettier: prettierConfig,
  stylistic: stylisticConfig,
  svelte: svelteConfig,
  typescript: typescriptConfig
};
