import { parser as typescriptEslintParser } from 'typescript-eslint';
import vueEslintParser from 'vue-eslint-parser';

import {
    baseConfig,
    eslintConfig,
    globalsBrowserConfig,
    ignoreConfig,
    importConfig,
    jsdocConfig,
    prettierConfig,
    typescriptEslintConfig,
    unicornConfig,
    vueConfig,
} from '../configs';
import { defineConfig } from '../core';

// https://typescript-eslint.io/troubleshooting/typed-linting/performance/#changes-to-extrafileextensions-with-projectservice
// https://github.com/vuejs/eslint-config-typescript/blob/main/src/internals.ts

export const vuePreset = defineConfig(
    baseConfig,
    ignoreConfig,
    globalsBrowserConfig,
    eslintConfig,
    importConfig,
    unicornConfig,
    jsdocConfig,

    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptEslintParser,
        },
    },

    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueEslintParser,
            parserOptions: {
                parser: {
                    js: typescriptEslintParser,
                    jsx: typescriptEslintParser,
                    ts: typescriptEslintParser,
                    tsx: typescriptEslintParser,
                    '<template>': 'espree',
                },
                extraFileExtensions: ['.vue'],
            },
        },
    },

    typescriptEslintConfig.map((config) => ({
        ...config,
        files: ['**/*.{ts,vue}'],
    })),

    vueConfig,
    prettierConfig,
);
