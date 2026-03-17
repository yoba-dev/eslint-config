import eslintFormatjs from 'eslint-plugin-formatjs';

import { defineConfig } from '../core';

export const formatjsConfig = defineConfig(
    eslintFormatjs.configs.strict,

    {
        settings: {
            formatjs: {
                additionalFunctionNames: ['t'],
            },
        },

        rules: {
            'formatjs/enforce-id': [
                'error',
                { idInterpolationPattern: '[sha512:contenthash:base64:6]' },
            ],
        },
    },
);
