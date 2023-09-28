import { globalIgnores } from "../globs/ignores.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const globalConfig = {
  ignores: globalIgnores,
  languageOptions: {
    ecmaVersion: "latest"
  },
  linterOptions: {
    /*
     * This option will be enabled in a later version of this configuration, once all of the bugs
     * have been ironed out. In the meantime, feel free to use inline configs.
     */
    // noInlineConfig: true
    reportUnusedDisableDirectives: true
  }
};
