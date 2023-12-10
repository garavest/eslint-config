declare module "lib/globs/ignores" {
    export const allIgnores: string[];
    export const globalIgnores: string[];
    export const javascriptIgnores: string[];
    export const svelteIgnores: string[];
    export const typescriptIgnores: string[];
}
declare module "lib/configs/global" {
    /** @type {import("eslint").Linter.FlatConfig} */
    export const globalConfig: import("node_modules/.pnpm/@types+eslint@8.44.8/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "lib/rules/plugins/import" {
    export const importRules: any;
}
declare module "lib/configs/import" {
    /** @type {import("eslint").Linter.FlatConfig} */
    export const importConfig: import("node_modules/.pnpm/@types+eslint@8.44.8/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "lib/globs/files" {
    export const javascriptFiles: string[];
    export const svelteFiles: string[];
    export const typescriptFiles: string[];
}
declare module "lib/rules/base" {
    export const baseRules: {
        "array-callback-return": (string | {
            checkForEach: boolean;
        })[];
        "block-scoped-var": string;
        "class-methods-use-this": string;
        "consistent-return": string;
        "consistent-this": string[];
        "default-case": string;
        "default-case-last": string;
        eqeqeq: string;
        "func-name-matching": string;
        "func-names": string[];
        "func-style": (string | {
            allowArrowFunctions: boolean;
        })[];
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
        "no-implicit-coercion": (string | {
            disallowTemplateShorthand: boolean;
        })[];
        "no-implicit-globals": string;
        "no-implied-eval": string;
        "no-iterator": string;
        "no-labels": string;
        "no-lone-blocks": string;
        "no-multi-assign": string;
        "no-multi-str": string;
        "no-nested-ternary": string;
        "no-new": string;
        "no-new-func": string;
        "no-new-wrappers": string;
        "no-object-constructor": string;
        "no-octal-escape": string;
        "no-param-reassign": string;
        "no-promise-executor-return": string;
        "no-proto": string;
        "no-return-assign": string;
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
        "object-shorthand": (string | {
            avoidExplicitReturnArrows: boolean;
            avoidQuotes: boolean;
            ignoreConstructors: boolean;
        })[];
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
    };
}
declare module "lib/configs/javascript" {
    /** @type {import("eslint").Linter.FlatConfig} */
    export const javascriptConfig: import("node_modules/.pnpm/@types+eslint@8.44.8/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "lib/configs/prettier" {
    /** @type {import("eslint").Linter.FlatConfig} */
    export const prettierConfig: import("node_modules/.pnpm/@types+eslint@8.44.8/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "lib/rules/plugins/stylistic" {
    const _default: import("node_modules/.pnpm/@stylistic+eslint-plugin@1.5.0_eslint@8.55.0_typescript@5.3.3/node_modules/@stylistic/eslint-plugin/dist/dts/index").StylisticCustomizeOptions;
    export default _default;
}
declare module "lib/configs/stylistic" {
    /** @type {import("eslint").Linter.FlatConfig} */
    export const stylisticConfig: import("node_modules/.pnpm/@types+eslint@8.44.8/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "lib/rules/plugins/svelte" {
    export const svelteRules: {
        "svelte/no-target-blank": string;
        'svelte/comment-directive': string;
        'svelte/no-at-debug-tags': string;
        'svelte/no-at-html-tags': string;
        'svelte/no-dupe-else-if-blocks': string;
        'svelte/no-dupe-style-properties': string;
        'svelte/no-dynamic-slot-name': string;
        'svelte/no-inner-declarations': string;
        'svelte/no-not-function-handler': string;
        'svelte/no-object-in-text-mustaches': string;
        'svelte/no-shorthand-style-property-overrides': string;
        'svelte/no-unknown-style-directive-property': string;
        'svelte/no-unused-svelte-ignore': string;
        'svelte/system': string;
        'svelte/valid-compile': string;
    };
}
declare module "lib/rules/typescript/base" {
    export const typescriptBaseRules: {
        "@typescript-eslint/consistent-type-exports": string;
        "@typescript-eslint/consistent-type-imports": string;
        "@typescript-eslint/default-param-last": string;
        "@typescript-eslint/explicit-function-return-type": string;
        "@typescript-eslint/explicit-member-accessibility": string;
        "@typescript-eslint/member-ordering": (string | {
            default: {
                memberTypes: string[];
                order: string;
            };
        })[];
        "@typescript-eslint/method-signature-style": string;
        "@typescript-eslint/naming-convention": string;
        "@typescript-eslint/no-loop-func": string;
        "@typescript-eslint/no-require-imports": string;
        "@typescript-eslint/no-shadow": string;
        "@typescript-eslint/no-unnecessary-qualifier": string;
        "@typescript-eslint/prefer-regexp-exec": string;
        "@typescript-eslint/promise-function-async": string;
        "@typescript-eslint/require-array-sort-compare": string;
        "@typescript-eslint/switch-exhaustiveness-check": string;
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
    export const svelteConfig: import("node_modules/.pnpm/@types+eslint@8.44.8/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "lib/configs/typescript" {
    /** @type {import("eslint").Linter.FlatConfig} */
    export const typescriptConfig: import("node_modules/.pnpm/@types+eslint@8.44.8/node_modules/@types/eslint/index").Linter.FlatConfig;
}
declare module "index" {
    export namespace garavest {
        export { defaultConfig as default };
        export { globalConfig as global };
        export { importConfig as import };
        export { javascriptConfig as javascript };
        export { prettierConfig as prettier };
        export { stylisticConfig as stylistic };
        export { svelteConfig as svelte };
        export { typescriptConfig as typescript };
    }
    /** @type {import("eslint").Linter.FlatConfig[]} */
    const defaultConfig: import("node_modules/.pnpm/@types+eslint@8.44.8/node_modules/@types/eslint/index").Linter.FlatConfig[];
    import { globalConfig } from "lib/configs/global.js";
    import { importConfig } from "lib/configs/import.js";
    import { javascriptConfig } from "lib/configs/javascript.js";
    import { prettierConfig } from "lib/configs/prettier.js";
    import { stylisticConfig } from "lib/configs/stylistic.js";
    import { svelteConfig } from "lib/configs/svelte.js";
    import { typescriptConfig } from "lib/configs/typescript.js";
    export {};
}
