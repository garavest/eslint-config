import stylistic from "@stylistic/eslint-plugin";

import stylisticRules from "../rules/plugins/stylistic.js";

/** @type {import("eslint").Linter.FlatConfig} */
export const stylisticConfig = stylistic.configs.customize(stylisticRules);
