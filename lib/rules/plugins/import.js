import importPlugin from "eslint-plugin-import";

export const importRules = {
  ...importPlugin.configs["recommended"].rules,

  "import/exports-last": "error",
  "import/first": "error",
  "import/group-exports": "error",
  "import/newline-after-import": "error",
  "import/no-depreciated": "warn",
  "import/error": [
    "error",
    {
      "newlines-between": "always",
      pathGroups: [
        {
          group: "external",
          pattern: "$**",
          position: "after"
        }
      ]
    }
  ]
};
