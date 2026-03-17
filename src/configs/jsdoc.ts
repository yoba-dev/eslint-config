import eslintJsdoc from 'eslint-plugin-jsdoc';

import { defineConfig } from '../core';

export const jsdocConfig = defineConfig(
    eslintJsdoc.configs['flat/logical-typescript'],
    eslintJsdoc.configs['flat/requirements-typescript'],

    {
        rules: {
            'jsdoc/check-param-names': [
                'warn',
                {
                    checkDestructured: false,
                },
            ],

            'jsdoc/require-param': [
                'warn',
                {
                    checkDestructured: false,
                },
            ],

            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-returns': 'off',
            'jsdoc/require-example': 'off',
            'jsdoc/require-param-description': 'off',
            'jsdoc/require-returns-description': 'off',
            'jsdoc/no-undefined-types': 'off',
            'jsdoc/require-param-type': 'off',
            'jsdoc/require-property-type': 'off',
            'jsdoc/require-returns-type': 'off',
        },
    },
);
