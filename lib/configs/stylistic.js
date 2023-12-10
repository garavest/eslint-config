import stylistic from "@stylistic/eslint-plugin";

import { allIgnores } from "../globs/ignores.js";
import stylisticRules from "../rules/plugins/stylistic.js";

// Build the config
/** @type {import("eslint").Linter.FlatConfig} */
const stylisticConfig = stylistic.configs.customize(stylisticRules);

// Set the ignores
stylisticConfig.ignores = allIgnores;

// Rule overrides
stylisticConfig.rules["@stylistic/comma-dangle"] = ["error", "never"];
stylisticConfig.rules["@stylistic/quote-props"] = ["error", "as-needed"];

export { stylisticConfig };
