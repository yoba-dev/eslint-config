import typescriptEslint from 'typescript-eslint';

import { defineConfig } from '../core';

import { eslintRules } from './eslint';

export const typescriptEslintConfig = defineConfig(
    typescriptEslint.configs.strictTypeChecked,
    typescriptEslint.configs.stylisticTypeChecked,

    {
        rules: {
            '@typescript-eslint/consistent-type-exports': 'error',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    disallowTypeAnnotations: true,
                    fixStyle: 'separate-type-imports',
                    prefer: 'type-imports',
                },
            ],

            'default-param-last': 'off',
            '@typescript-eslint/default-param-last': eslintRules['default-param-last'],

            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    accessibility: 'no-public',
                },
            ],

            camelcase: 'off',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'variable',
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                },
                {
                    selector: 'function',
                    format: ['camelCase', 'PascalCase'],
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                },
            ],

            '@typescript-eslint/no-import-type-side-effects': 'error',

            'no-loop-func': 'off',
            '@typescript-eslint/no-loop-func': eslintRules['no-loop-func'],

            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': eslintRules['no-shadow'],

            '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
            '@typescript-eslint/no-unnecessary-qualifier': 'error',

            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': eslintRules['no-use-before-define'],

            '@typescript-eslint/no-useless-empty-export': 'error',

            'prefer-destructuring': 'off',
            '@typescript-eslint/prefer-destructuring': eslintRules['prefer-destructuring'],

            '@typescript-eslint/prefer-readonly': 'error',
            '@typescript-eslint/promise-function-async': 'error',

            '@typescript-eslint/switch-exhaustiveness-check': [
                'error',
                {
                    considerDefaultExhaustiveForUnions: true,
                },
            ],

            '@typescript-eslint/no-extraneous-class': [
                'error',
                {
                    allowConstructorOnly: true,
                    allowEmpty: true,
                    allowWithDecorator: true,
                },
            ],

            '@typescript-eslint/restrict-template-expressions': [
                'error',
                {
                    allowNumber: true,
                },
            ],

            '@typescript-eslint/no-unused-vars': eslintRules['no-unused-vars'],

            '@typescript-eslint/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: false,
                },
            ],

            '@typescript-eslint/return-await': ['error', 'in-try-catch'],

            '@typescript-eslint/no-empty-object-type': [
                'error',
                {
                    allowInterfaces: 'with-single-extends',
                    allowObjectTypes: 'always',
                },
            ],

            '@typescript-eslint/prefer-nullish-coalescing': [
                'error',
                {
                    ignorePrimitives: {
                        string: true,
                    },
                },
            ],

            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-confusing-void-expression': 'off',
            '@typescript-eslint/prefer-regexp-exec': 'off',
            '@typescript-eslint/no-unnecessary-condition': 'off',
            '@typescript-eslint/no-unnecessary-type-parameters': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/unified-signatures': 'off',
        },
    },
);
