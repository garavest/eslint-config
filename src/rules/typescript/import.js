import importPlugin from "eslint-plugin-import";

import { importRules } from "../import.js";

export const typescriptImportRules = {
  ...importRules,
  ...importPlugin.configs.typescript.rules,
  "import/no-unresolved": "off"
};
