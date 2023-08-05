# @garavest/eslint-config

<!-- TODO: NPM badge-->

This package provides Garavest's `eslint.config.js` as an extendable, shareable config.

## Usage

To use our config, you **_must_** use the new [ESLint Flat Config][1], otherwise our config will
result in errors. Our config is designed around a SvelteKit application using TypeScript and
Tailwind CSS. However, our config will also check your JavaScript configuration files. Assuming
you are using a [Flat Config][1], using our config is very simple.

### Standalone Usage

If you don't intend to extend (or modify) our config, you can simply export it, and ESLint will
use it as is.

```js
import { garavestConfig } from "@garavest/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
export default garavestConfig;
```

### Extended Usage

If you **do** wish to extend (or modify) our config, you will need to export an array with our
config spread in it as shown below:

```js
import { garavestConfig } from "@garavest/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  ...garavestConfig
  // Your other configuration can go here
];
```

[1]: https://eslint.org/docs/latest/use/configure/configuration-files-new
