import type { LinterOptions } from "stylelint";

export interface Options extends Partial<LinterOptions> {
  /** The cache is enabled by default to decrease execution time */
  cache?: boolean;
  /** Location where the cache will be stored */
  cacheLocation?: string;
  /** auto fix source code */
  fix?: boolean;
  /** A single file, or array of files, to include when linting */
  include?: string | string[];
  /** A single file, or array of files, to exclude when linting */
  exclude?: string | string[];
  /** The warings found will be emitted */
  throwOnWarning?: boolean;
  /** The errors found will be emitted */
  throwOnError?: boolean;
}

export function normalizePath(id: string): string {
  return id.split("?", 2)[0];
}
