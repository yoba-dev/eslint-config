import {
    baseConfig,
    eslintConfig,
    globalsNodeConfig,
    ignoreConfig,
    importConfig,
    jsdocConfig,
    nodeConfig,
    prettierConfig,
    typescriptEslintConfig,
    unicornConfig,
} from '../configs';
import { defineConfig } from '../core';

export const nodePreset = defineConfig(
    baseConfig,
    ignoreConfig,
    globalsNodeConfig,
    eslintConfig,
    importConfig,
    unicornConfig,
    jsdocConfig,

    typescriptEslintConfig.map((config) => ({
        ...config,
        files: ['**/*.ts'],
    })),

    nodeConfig,
    prettierConfig,
);
