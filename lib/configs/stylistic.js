import stylistic from "@stylistic/eslint-plugin";

import stylisticRules from "../rules/plugins/stylistic.js";

/** @type {import("eslint").Linter.FlatConfig} */
const stylisticConfig = stylistic.configs.customize(stylisticRules);
stylisticConfig.rules["@stylistic/comma-dangle"] = ["error", "never"];
stylisticConfig.rules["@stylistic/quote-props"] = ["error", "as-needed"];

export { stylisticConfig };
