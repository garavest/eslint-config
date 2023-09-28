declare module "lib/globs/ignores" {
  export const globalIgnores: string[];
  export const javascriptIgnores: string[];
  export const svelteIgnores: string[];
  export const typescriptIgnores: string[];
}
declare module "lib/configs/global" {
  /** @type {import("eslint").Linter.FlatConfig} */
  export const globalConfig: import("node_modules/.pnpm/@types+eslint@8.44.3/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "lib/globs/files" {
  export const javascriptFiles: string[];
  export const svelteFiles: string[];
  export const typescriptFiles: string[];
}
declare module "lib/rules/base" {
  export const baseRules: {
    "array-callback-return": (
      | string
      | {
          checkForEach: boolean;
        }
    )[];
    "block-scoped-var": string;
    "class-methods-use-this": string;
    "consistent-return": string;
    "consistent-this": string[];
    "default-case": string;
    "default-case-last": string;
    eqeqeq: string;
    "func-name-matching": string;
    "func-names": string[];
    "func-style": (
      | string
      | {
          allowArrowFunctions: boolean;
        }
    )[];
    "grouped-accessor-pairs": string[];
    "max-classes-per-file": string;
    "max-statements-per-line": string;
    "multiline-comment-style": string[];
    "new-cap": string;
    "no-alert": string;
    "no-array-constructor": string;
    "no-await-in-loop": string;
    "no-caller": string;
    "no-console": string;
    "no-constructor-return": string;
    "no-continue": string;
    "no-else-return": string;
    "no-empty-function": string;
    "no-eq-null": string;
    "no-eval": string;
    "no-extend-native": string;
    "no-extra-bind": string;
    "no-implicit-coercion": (
      | string
      | {
          disallowTemplateShorthand: boolean;
        }
    )[];
    "no-implicit-globals": string;
    "no-implied-eval": string;
    "no-iterator": string;
    "no-labels": string;
    "no-lone-blocks": string;
    "no-mixed-operators": string;
    "no-multi-assign": string;
    "no-multi-str": string;
    "no-nested-ternary": string;
    "no-new": string;
    "no-new-func": string;
    "no-new-object": string;
    "no-new-wrappers": string;
    "no-octal-escape": string;
    "no-param-reassign": string;
    "no-promise-executor-return": string;
    "no-proto": string;
    "no-return-assign": string;
    "no-return-await": string;
    "no-script-url": string;
    "no-sequences": string;
    "no-template-curly-in-string": string;
    "no-undef-init": string;
    "no-undefined": string;
    "no-underscore-dangle": string;
    "no-unmodified-loop-condition": string;
    "no-unneeded-ternary": string;
    "no-unreachable-loop": string;
    "no-useless-call": string;
    "no-useless-computed-key": string;
    "no-useless-concat": string;
    "no-useless-rename": string;
    "no-useless-return": string;
    "no-var": string;
    "no-void": string;
    "object-shorthand": (
      | string
      | {
          avoidExplicitReturnArrows: boolean;
          avoidQuotes: boolean;
          ignoreConstructors: boolean;
        }
    )[];
    "one-var": string[];
    "operator-assignment": string[];
    "prefer-const": string;
    "prefer-destructuring": string;
    "prefer-exponentiation-operator": string;
    "prefer-object-spread": string;
    "prefer-promise-reject-errors": string;
    "prefer-regex-literals": string;
    "prefer-rest-params": string;
    "prefer-template": string;
    "require-atomic-updates": string;
    "require-await": string;
    "sort-keys": string;
    "sort-vars": string;
    "spaced-comment": string;
    strict: string;
    "vars-on-top": string;
  };
}
declare module "lib/rules/javascript" {
  export const javascriptRules: {
    camelcase: string;
    "default-param-last": string;
    "dot-notation": string;
    "no-invalid-this": string;
    "no-loop-func": string;
    "no-shadow": string;
    "no-throw-literal": string;
    "no-useless-constructor": string;
    "padding-line-between-statements": (
      | string
      | {
          blankLine: string;
          next: string[];
          prev: string;
        }
      | {
          blankLine: string;
          next: string;
          prev: string[];
        }
      | {
          blankLine: string;
          next: string[];
          prev: string[];
        }
    )[];
  };
}
declare module "lib/configs/javascript" {
  /** @type {import("eslint").Linter.FlatConfig} */
  export const javascriptConfig: import("node_modules/.pnpm/@types+eslint@8.44.3/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "lib/rules/plugins/svelte" {
  export const svelteRules: {
    "import/extensions": string;
    "import/no-unresolved": string;
    "svelte/no-target-blank": string;
    "svelte/comment-directive": string;
    "svelte/no-at-debug-tags": string;
    "svelte/no-at-html-tags": string;
    "svelte/no-dupe-else-if-blocks": string;
    "svelte/no-dupe-style-properties": string;
    "svelte/no-dynamic-slot-name": string;
    "svelte/no-inner-declarations": string;
    "svelte/no-not-function-handler": string;
    "svelte/no-object-in-text-mustaches": string;
    "svelte/no-shorthand-style-property-overrides": string;
    "svelte/no-unknown-style-directive-property": string;
    "svelte/no-unused-svelte-ignore": string;
    "svelte/system": string;
    "svelte/valid-compile": string;
  };
}
declare module "lib/rules/typescript/base" {
  export const typescriptBaseRules: {
    "@typescript-eslint/array-type": (
      | string
      | {
          default: string;
        }
    )[];
    "@typescript-eslint/ban-ts-comment": string;
    "@typescript-eslint/ban-types": (
      | string
      | {
          extendDefaults: boolean;
          types: {
            Boolean: {
              fixWith: string;
              message: string;
            };
            Function: {
              message: string;
            };
            Number: {
              fixWith: string;
              message: string;
            };
            Object: {
              message: string;
            };
            String: {
              fixWith: string;
              message: string;
            };
            Symbol: {
              fixWith: string;
              message: string;
            };
            "{}": {
              message: string;
            };
          };
        }
    )[];
    "@typescript-eslint/class-literal-property-style": string[];
    "@typescript-eslint/consistent-indexed-object-style": string;
    "@typescript-eslint/consistent-type-assertions": (
      | string
      | {
          assertionStyle: string;
          objectLiteralTypeAssertions: string;
        }
    )[];
    "@typescript-eslint/consistent-type-exports": string;
    "@typescript-eslint/consistent-type-imports": (
      | string
      | {
          disallowTypeAnnotations: boolean;
          prefer: string;
        }
    )[];
    "@typescript-eslint/default-param-last": string;
    "@typescript-eslint/dot-notation": string;
    "@typescript-eslint/explicit-member-accessibility": string;
    "@typescript-eslint/member-ordering": (
      | string
      | {
          default: {
            memberTypes: string[];
            order: string;
          };
        }
    )[];
    "@typescript-eslint/method-signature-style": string;
    "@typescript-eslint/naming-convention": (
      | string
      | {
          format: string[];
          selector: string;
          modifiers?: undefined;
          custom?: undefined;
        }
      | {
          format: any;
          modifiers: string[];
          selector: string[];
          custom?: undefined;
        }
      | {
          custom: {
            match: boolean;
            regex: string;
          };
          format: string[];
          selector: string;
          modifiers?: undefined;
        }
    )[];
    "@typescript-eslint/no-base-to-string": string;
    "@typescript-eslint/no-confusing-non-null-assertion": string;
    "@typescript-eslint/no-confusing-void-expression": string;
    "@typescript-eslint/no-dynamic-delete": string;
    "@typescript-eslint/no-extraneous-class": string;
    "@typescript-eslint/no-invalid-this": string;
    "@typescript-eslint/no-invalid-void-type": string;
    "@typescript-eslint/no-loop-func": string;
    "@typescript-eslint/no-meaningless-void-operator": string;
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": string;
    "@typescript-eslint/no-require-imports": string;
    "@typescript-eslint/no-shadow": string;
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": string;
    "@typescript-eslint/no-unnecessary-condition": string;
    "@typescript-eslint/no-unnecessary-qualifier": string;
    "@typescript-eslint/no-unnecessary-type-arguments": string;
    "@typescript-eslint/no-useless-constructor": string;
    "@typescript-eslint/non-nullable-type-assertion-style": string;
    "@typescript-eslint/padding-line-between-statements": (
      | string
      | {
          blankLine: string;
          next: string[];
          prev: string;
        }
      | {
          blankLine: string;
          next: string;
          prev: string[];
        }
      | {
          blankLine: string;
          next: string[];
          prev: string[];
        }
    )[];
    "@typescript-eslint/prefer-for-of": string;
    "@typescript-eslint/prefer-includes": string;
    "@typescript-eslint/prefer-literal-enum-member": string;
    "@typescript-eslint/prefer-nullish-coalescing": string;
    "@typescript-eslint/prefer-optional-chain": string;
    "@typescript-eslint/prefer-reduce-type-parameter": string;
    "@typescript-eslint/prefer-regexp-exec": string;
    "@typescript-eslint/prefer-return-this-type": string;
    "@typescript-eslint/prefer-string-starts-ends-with": string;
    "@typescript-eslint/prefer-ts-expect-error": string;
    "@typescript-eslint/promise-function-async": string;
    "@typescript-eslint/require-array-sort-compare": string;
    "@typescript-eslint/return-await": string;
    "@typescript-eslint/switch-exhaustiveness-check": string;
    "@typescript-eslint/unified-signatures": string;
  };
}
declare module "lib/rules/typescript/overrides" {
  export const typescriptOverrideRules: {
    camelcase: string;
    "default-param-last": string;
    "dot-notation": string;
    "no-invalid-this": string;
    "no-loop-func": string;
    "no-magic-numbers": string;
    "no-shadow": string;
    "no-throw-literal": string;
    "no-undefined": string;
    "no-useless-constructor": string;
    "padding-line-between-statements": string;
  };
}
declare module "lib/configs/svelte" {
  /** @type {import("eslint").Linter.FlatConfig} */
  export const svelteConfig: import("node_modules/.pnpm/@types+eslint@8.44.3/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "lib/configs/prettier" {
  /** @type {import("eslint").Linter.FlatConfig} */
  export const prettierConfig: import("node_modules/.pnpm/@types+eslint@8.44.3/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "lib/configs/typescript" {
  /** @type {import("eslint").Linter.FlatConfig} */
  export const typescriptConfig: import("node_modules/.pnpm/@types+eslint@8.44.3/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "index" {
  export namespace garavest {
    export { defaultConfig as default };
    export { globalConfig as global };
    export { javascriptConfig as javascript };
    export { prettierConfig as prettier };
    export { svelteConfig as svelte };
    export { typescriptConfig as typescript };
  }
  /** @type {import("eslint").Linter.FlatConfig[]} */
  const defaultConfig: import("node_modules/.pnpm/@types+eslint@8.44.3/node_modules/@types/eslint/index").Linter.FlatConfig[];
  import { globalConfig } from "lib/configs/global.js";
  import { javascriptConfig } from "lib/configs/javascript.js";
  import { prettierConfig } from "lib/configs/prettier.js";
  import { svelteConfig } from "lib/configs/svelte.js";
  import { typescriptConfig } from "lib/configs/typescript.js";
  export {};
}
