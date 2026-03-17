import eslintVue from 'eslint-plugin-vue';

import { defineConfig } from '../core';

import { eslintRules } from './eslint';

const templateRuleNames = [
    'array-bracket-newline',
    'array-bracket-spacing',
    'array-element-newline',
    'arrow-spacing',
    'block-spacing',
    'brace-style',
    'camelcase',
    'comma-dangle',
    'comma-spacing',
    'comma-style',
    'dot-location',
    'dot-notation',
    'eqeqeq',
    'func-call-spacing',
    'key-spacing',
    'keyword-spacing',
    'max-len',
    'multiline-ternary',
    'no-console',
    'no-constant-condition',
    'no-empty-pattern',
    'no-extra-parens',
    'no-implicit-coercion',
    'no-irregular-whitespace',
    'no-loss-of-precision',
    'no-negated-condition',
    'no-restricted-syntax',
    'no-sparse-arrays',
    'no-useless-concat',
    'object-curly-newline',
    'object-curly-spacing',
    'object-property-newline',
    'object-shorthand',
    'operator-linebreak',
    'prefer-template',
    'quote-props',
    'space-in-parens',
    'space-infix-ops',
    'space-unary-ops',
    'template-curly-spacing',
];

export const vueConfig = defineConfig(
    eslintVue.configs['flat/recommended'],

    {
        rules: {
            'vue/block-lang': [
                'error',
                {
                    script: {
                        lang: 'ts',
                    },
                },
            ],

            'vue/block-tag-newline': [
                'error',
                {
                    singleline: 'always',
                },
            ],

            'vue/component-name-in-template-casing': 'error',
            'vue/custom-event-name-casing': 'error',
            'vue/define-emits-declaration': 'error',

            'vue/define-macros-order': [
                'error',
                {
                    order: [
                        'defineOptions',
                        'defineProps',
                        'defineEmits',
                        'defineSlots',
                        'defineModel',
                    ],
                    defineExposeLast: true,
                },
            ],

            'vue/define-props-declaration': 'error',

            'vue/define-props-destructuring': [
                'error',
                {
                    destructure: 'never',
                },
            ],

            'vue/enforce-style-attribute': [
                'error',
                {
                    allow: ['plain'],
                },
            ],

            'vue/html-button-has-type': [
                'error',
                {
                    button: true,
                    submit: true,
                    reset: false,
                },
            ],

            'vue/html-comment-content-newline': 'error',
            'vue/html-comment-content-spacing': 'error',
            'vue/html-comment-indent': ['error', 4],
            'vue/new-line-between-multi-line-property': 'error',
            'vue/next-tick-style': 'error',
            'vue/no-boolean-default': 'error',

            'vue/no-duplicate-attr-inheritance': [
                'error',
                {
                    checkMultiRootNodes: true,
                },
            ],

            // 'vue/no-duplicate-class-names': 'error',
            'vue/no-empty-component-block': 'error',
            'vue/no-import-compiler-macros': 'error',
            'vue/no-multiple-objects-in-class': 'error',
            'vue/no-negated-v-if-condition': 'error',
            'vue/no-ref-object-reactivity-loss': 'error',
            // 'vue/no-root-v-if': 'error',
            'vue/no-setup-props-reactivity-loss': 'error',
            'vue/no-static-inline-styles': 'error',
            // 'vue/no-template-target-blank': 'error',

            'vue/no-undef-components': [
                'error',
                {
                    ignorePatterns: ['RouterView', 'Story', 'Variant'],
                },
            ],

            'vue/no-use-v-else-with-v-for': 'error',
            'vue/no-useless-mustaches': 'error',
            'vue/no-useless-v-bind': 'error',
            'vue/padding-line-between-blocks': 'error',
            'vue/padding-line-between-tags': 'error',
            'vue/prefer-define-options': 'error',
            'vue/prefer-prop-type-boolean-first': 'error',
            'vue/prefer-true-attribute-shorthand': 'error',
            'vue/prefer-use-template-ref': 'error',
            'vue/require-explicit-slots': 'error',

            'vue/require-macro-variable-name': [
                'error',
                {
                    defineProps: 'props',
                    defineEmits: 'emits',
                    defineSlots: 'slots',
                    useSlots: 'slots',
                    useAttrs: 'attrs',
                },
            ],

            'vue/require-typed-ref': 'error',
            'vue/slot-name-casing': 'error',
            'vue/v-for-delimiter-style': ['error', 'of'],

            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always',
                    },
                },
            ],

            'vue/return-in-computed-property': [
                'error',
                {
                    treatUndefinedAsUnspecified: false,
                },
            ],

            ...Object.fromEntries(
                templateRuleNames
                    .filter((name) => name in eslintRules)
                    .map((name) => [`vue/${name}`, eslintRules[name]]),
            ),

            'vue/multi-word-component-names': 'off',
        },
    },
);
