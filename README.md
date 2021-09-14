# @frsource/vite-plugin-stylelint

[![npm](https://img.shields.io/npm/v/@frsource/vite-plugin-stylelint)](https://www.npmjs.com/package/@frsource/vite-plugin-stylelint)
[![GitHub license](https://img.shields.io/github/license/FRSOURCE/vite-plugin-stylelint)](https://github.com/FRSOURCE/vite-plugin-stylelint/blob/master/LICENSE)

Stylelint plugin for vite. Supports autofixing &amp; lints only the files imported in your project. [See the `example` directory](https://github.com/FRSOURCE/vite-plugin-stylelint/tree/main/example) to check Vue / React usage.

## Install

```bash
npm install @frsource/vite-plugin-stylelint --save-dev
# or
yarn add @frsource/vite-plugin-stylelint --dev
```

## Usage

```js
import { defineConfig } from 'vite';
import stylelintPlugin from '@frsource/vite-plugin-stylelint';

export default defineConfig({
  plugins: [stylelintPlugin({ /** Options */ })],
});
```

> If you need to use stylelintPlugin in a Vue project, make sure the vue compilation plugin is specified **before** stylelintPlugin. See the example:
>
>```js
>import { defineConfig } from 'vite';
>import vue from '@vitejs/plugin-vue';
>import stylelintPlugin from '@frsource/vite-plugin-stylelint';
> 
>export default defineConfig({
>  plugins: [vue(), stylelintPlugin({ /** Options */ })],
>});
>```

## Options

Apart from the standard [Stylelint options](https://stylelint.io/user-guide/usage/options) this plugin can be configured using the ones below:

### `fix`

- Type: `boolean`
- Default: `false`

Auto fix the source code.

### `include`

- Type: `string | string[]`
- Default: `['src/**/*.css', 'src/**/*.less', 'src/**/*.styl', 'src/**/*.scss', 'src/**/*.sass', 'src/**/*.vue']`

A single file, or array of files, to include when linting.

### `exclude`

- Type: `string | string[]`
- Default: `'node_modules'`

A single file, or array of files, to exclude when linting.

### `formatter`

- Type: `string | Stylelint.FormatterType`
- Default: `'string'`

Custom error formatter or the name of a built-in [Styleling formatter](https://stylelint.io/user-guide/usage/options#formatter), defaults to `'string'`.

### `throwOnWarning`

- Type: `boolean`
- Default: `true`

Should the warnings found be emitted, defaults to true.

### `throwOnError`

- Type: `boolean`
- Default: `true`

Whether errors found should be emitted to console & stop the build, defaults to true.

### `cache`

- Type: `boolean`
- Default: `true`

Decrease execution time by enabling [Stylelint cache](https://stylelint.io/user-guide/usage/options/#cache). Defaults to true.

### `cacheLocation`

- Type: `string`
- Default: `'<cwd>/node_modules/.vite/@frsource-vite_plugin-stylelint'`

Path for the cache, defaults to `'<cwd>/node_modules/.vite/@frsource-vite_plugin-stylelint'`.

## Development

This project is using yarn version 3. Make sure to use [`yarn set version latest` to download it](https://yarnpkg.com/getting-started/install) before doing any changes.

## License

MIT
