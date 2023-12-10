import js from "@eslint/js";

export const javascriptRules = {
  ...js.configs.recommended.rules,
  camelcase: "error",
  "default-param-last": "error",
  "dot-notation": "error",
  "no-invalid-this": "error",
  "no-loop-func": "warn",
  "no-shadow": "warn",
  "no-throw-literal": "error",
  "no-useless-constructor": "error"
};
