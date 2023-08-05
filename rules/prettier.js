import prettier from "eslint-plugin-prettier";

export const prettierRules = {
  ...prettier.configs.recommended.rules,
  "prettier/prettier": "error"
};
