# @garavest/eslint-config

[![npm version](https://badge.fury.io/js/@garavest%2Feslint-config.svg)](https://badge.fury.io/js/@garavest%2Feslint-config)
![Github Actions](https://github.com/garavest/eslint-config/actions/workflows/code-quality.yml/badge.svg)
![Known Vulnerabilities](https://snyk.io/test/github/garavest/eslint-config/badge.svg)

This package provides Garavest's `eslint.config.js` as an extendable, shareable
config.

## Usage

To use our config, you **_must_** use the new [ESLint Flat Config][1],
otherwise our config will result in errors. Our config is designed around using
TypeScript; however, our config will also check your JavaScript files. Assuming
you are using a [Flat Config][1], using our config is very simple.

### Standalone Usage

If you don't intend to extend (or modify) our config, import the config object,
and then use the default config as shown below.

```js
import { garavest } from "@garavest/eslint-config";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default garavest.default;
```

### Extended Usage

If you **do** wish to extend our config, you will need to export an array with
our config spread in it as shown below:

```js
import { garavest } from "@garavest/eslint-config";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...garavest.default
  // Your other configuration can go here
];
```

Alternatively, if you wish to take only parts of our config, you can spread
parts of our config into your own. In the example below, we'll say you are only
using Javascript.

```js
import { garavest } from "@garavest/eslint-config";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [garavest.global, garavest.prettier, garavest.javascript];
```

### Framework Support

You can bake your own framework support in or, optionally, we provide a config
for Svelte that can be used with or without SvelteKit. To enable this, you can
simply use the following snippet for the default config:

```js
import { garavest } from "@garavest/eslint-config";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [...garavest.default, ...garavest.svelte];
```

## API

### TL;DR

Our package exports the following:

```js
export const garavest = {
  default: defaultConfig,
  global: globalConfig,
  javascript: javascriptConfig,
  prettier: prettierConfig,
  svelte: svelteConfig,
  typescript: typescriptConfig
};
```

The API of the config is pretty simple. The config exports a single object
called `garavest` that contains all the flat configs. Each config is documented
below.

> **IMPORTANT NOTE**
>
> Nowhere in our config do we define a `sourceType` (except for
> `eslint-plugin-import`); however, we **_ALWAYS_** set the `ecmaVersion` to
> latest. We do this so that you can use whatever `ecmaFeatures` you want (that
> ESLint supports), but you are not locked into using modules or commonjs.
> Since `sourceType` is never defined, ESLint will default to what you specify
> in your `package.json`.

### `default`

The `default` config is our "recommended" config with Javascript, Prettier,
Typescript, Import, and Stylistic support enabled by default. The `default`
config is functionally equivalent to the code snippet below.

```js
import { garavest } from "@garavest/eslint-config";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  garavest.global,
  garavest.prettier,
  garavest.import,
  garavest.javascript,
  garavest.typescript,
  garavest.stylistic
];
```

### `global`

The `global` config just sets some useful global options for ESLint. It can
safely be omitted, if you prefer. The options set are:

- ignore all files in the `globalIgnores` array
- set `ecmaVersion` to `"latest"`
- set `reportUnusedDisableDirectives` to `true`

#### NOTE

In version 3, the `noInlineConfig` option will also be turned on, so if you
encounter bugs, let us know.

### `javascript`

The `javascript` config contains all of the Javascript rules we use.

### `prettier`

The `prettier` config basically just enables the Prettier plugin and enables
Prettier errors.

### `svelte`

The `svelte` config contains all of the Svelte/SvelteKit rules we use.

### `typescript`

The `typescript` config contains all of the Typescript rules we use.

### `stylistic`

The `stylistic` config contains our stylistic rules.

[1]: https://eslint.org/docs/latest/use/configure/configuration-files-new
