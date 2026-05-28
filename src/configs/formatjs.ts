import eslintFormatjs from 'eslint-plugin-formatjs';

import { defineConfig } from '../core';

import type { ESLint, Rule } from 'eslint';

const defineMessagesLocation: Rule.RuleModule = {
    meta: {
        type: 'problem',
        docs: { description: 'defineMessages разрешён только в *.intl.ts' },
        messages: {
            wrongLocation:
                'defineMessages разрешён только в *.intl.ts. Вынесите сообщения в соседний файл.',
        },
        schema: [],
    },
    create(context) {
        if (context.filename.endsWith('.intl.ts')) {
            return {};
        }

        return {
            'CallExpression[callee.name="defineMessages"]': (node: Rule.Node) => {
                context.report({ node, messageId: 'wrongLocation' });
            },
        };
    },
};

export const formatjsExtendedPlugin: ESLint.Plugin = {
    meta: { name: 'formatjs-extended', version: '1.0.0' },
    rules: { 'define-messages-location': defineMessagesLocation },
};

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

    {
        plugins: { 'formatjs-extended': formatjsExtendedPlugin },

        rules: {
            'formatjs-extended/define-messages-location': 'error',
        },
    },
);
