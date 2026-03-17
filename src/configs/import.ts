import importX from 'eslint-plugin-import-x';

import { defineConfig } from '../core';

export const importConfig = defineConfig(
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,

    {
        rules: {
            'import-x/no-empty-named-blocks': 'error',
            'import-x/no-extraneous-dependencies': 'error',
            'import-x/no-mutable-exports': 'error',
            'import-x/no-named-as-default': 'off',
            'import-x/no-named-as-default-member': 'off',
            'import-x/no-amd': 'error',
            'import-x/no-commonjs': 'error',
            'import-x/no-import-module-exports': 'error',
            'import-x/no-absolute-path': 'error',

            'import-x/no-cycle': [
                'error',
                {
                    maxDepth: '∞',
                },
            ],

            'import-x/no-dynamic-require': 'error',
            'import-x/no-relative-packages': 'error',
            'import-x/no-self-import': 'error',

            'import-x/no-useless-path-segments': [
                'error',
                {
                    noUselessIndex: true,
                    commonjs: true,
                },
            ],

            'import-x/no-webpack-loader-syntax': 'error',

            'import-x/extensions': [
                'error',
                'ignorePackages',
                {
                    fix: true,

                    js: 'never',
                    ts: 'never',
                    'd.ts': 'never',
                    tsx: 'never',
                },
            ],

            'import-x/first': 'error',
            'import-x/newline-after-import': 'error',

            'import-x/no-anonymous-default-export': [
                'error',
                {
                    allowArray: true,
                    allowObject: true,
                },
            ],

            'import-x/no-named-default': 'error',

            'import-x/no-unassigned-import': [
                'error',
                {
                    allow: ['**/*.css'],
                },
            ],

            'import-x/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                        'type',
                    ],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: false,
                    },
                },
            ],

            'import-x/namespace': 'off', // TS делает это лучше и быстрее
        },
    },

    // {
    //     files: [
    //         '**/eslint.config.ts',
    //         '**/prettier.config.js',
    //         '**/vite.config*.ts',
    //         '**/vite-plugin*.ts',
    //     ],
    //     rules: {
    //         'import-x/no-extraneous-dependencies': 'off',
    //     },
    // },
);
