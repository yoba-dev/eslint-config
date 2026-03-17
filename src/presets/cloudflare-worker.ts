import {
    baseConfig,
    eslintConfig,
    globalsCloudflareWorkerConfig,
    ignoreConfig,
    importConfig,
    jsdocConfig,
    prettierConfig,
    typescriptEslintConfig,
    unicornConfig,
} from '../configs';
import { defineConfig } from '../core';

export const cloudflareWorkerPreset = defineConfig(
    baseConfig,
    ignoreConfig,
    globalsCloudflareWorkerConfig,
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
