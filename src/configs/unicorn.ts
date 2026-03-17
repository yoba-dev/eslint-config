import unicorn from 'eslint-plugin-unicorn';

import { defineConfig } from '../core';

export const unicornConfig = defineConfig(
    unicorn.configs.recommended,

    {
        rules: {
            'unicorn/better-regex': 'error',
            'unicorn/consistent-destructuring': 'error',
            'unicorn/prefer-import-meta-properties': 'error',
            // 'unicorn/prefer-json-parse-buffer': 'error',

            'unicorn/consistent-function-scoping': [
                'error',
                {
                    checkArrowFunctions: false,
                },
            ],

            'unicorn/prevent-abbreviations': 'off',
            'unicorn/no-array-callback-reference': 'off',
            'unicorn/no-null': 'off',
            'unicorn/import-style': 'off',
            'unicorn/prefer-event-target': 'off',
            'unicorn/prefer-global-this': 'off',
            'unicorn/no-process-exit': 'off', // дублирует функциональность из плагина node
        },
    },
);
