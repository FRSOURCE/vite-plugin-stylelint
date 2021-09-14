import * as path from "path";
import type { Plugin } from "vite";
import { lint } from "stylelint";
import { createFilter } from "@rollup/pluginutils";

import { normalizePath, Options } from "./utils";

export default function stylelintPlugin(options: Options = {}): Plugin {
  const defaultOptions: Options = {
    cache: true,
    include: [
      "**/*.css",
      "**/*.less",
      "**/*.styl",
      "**/*.scss",
      "**/*.sass",
      "**/*.vue",
      "**/*.vue?*type=style*",
    ],
    exclude: "node_modules",
    formatter: "string",
    cacheLocation: path.resolve(
      process.cwd(),
      // maybe vite config cacheDir is better ?
      "./node_modules/.vite/@frsource_vite-plugin-stylelint.json"
    ),
    throwOnWarning: true,
    throwOnError: true,
    allowEmptyInput: true,
  };

  const opts = { ...defaultOptions, ...options };
  const filter = createFilter(opts.include, opts.exclude || /node_modules/);

  return {
    name: "vite:stylelint",
    async transform(_, id) {
      if (!filter(id)) return null;

      const report = await lint({
        ...opts,
        files: [normalizePath(id)],
      }).catch((err) => this.error(err));

      if (!report.output) return null;

      if (opts.throwOnError) {
        if (report.errored) this.error(report.output);
        else this.warn(report.output);
      } else if (opts.throwOnWarning) {
        this.warn(report.output);
      }

      return null;
    },
  };
}
