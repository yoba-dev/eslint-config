import eslintNode from 'eslint-plugin-n';

import { defineConfig } from '../core';

export const nodeConfig = defineConfig(
    eslintNode.configs['flat/recommended'],

    {
        rules: {
            'n/no-sync': 'error',
            'n/prefer-global/buffer': ['error', 'always'],
            'n/prefer-global/console': ['error', 'always'],
            'n/prefer-global/process': ['error', 'always'],
            'n/prefer-global/text-decoder': ['error', 'always'],
            'n/prefer-global/text-encoder': ['error', 'always'],
            'n/prefer-global/url': ['error', 'always'],
            'n/prefer-global/url-search-params': ['error', 'always'],
            'n/prefer-node-protocol': 'error',
            'n/prefer-promises/dns': 'error',
            'n/prefer-promises/fs': 'error',

            'n/no-missing-import': 'off',
            'n/no-extraneous-import': 'off', // есть аналогичное правило в import-x
        },
    },
);
