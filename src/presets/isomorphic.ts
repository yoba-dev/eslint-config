import {
    baseConfig,
    eslintConfig,
    globalsIsomorphicConfig,
    ignoreConfig,
    importConfig,
    jsdocConfig,
    prettierConfig,
    typescriptEslintConfig,
    unicornConfig,
} from '../configs';
import { defineConfig } from '../core';

export const isomorphicPreset = defineConfig(
    baseConfig,
    ignoreConfig,
    globalsIsomorphicConfig,
    eslintConfig,
    importConfig,
    unicornConfig,
    jsdocConfig,

    typescriptEslintConfig.map((config) => ({
        ...config,
        files: ['**/*.ts'],
    })),

    prettierConfig,
);
