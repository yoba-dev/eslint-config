import eslint from '@eslint/js';

import { defineConfig } from '../core';

import type { RulesConfig } from '@eslint/core';

export const eslintConfig = defineConfig({
    rules: {
        ...eslint.configs.recommended.rules,

        'array-callback-return': [
            'error',
            {
                allowImplicit: true,
            },
        ],

        // 'no-await-in-loop': 'error',
        'no-constructor-return': 'error',
        'no-inner-declarations': 'error',
        'no-promise-executor-return': 'error',
        'no-self-compare': 'error',
        'no-template-curly-in-string': 'error',
        'no-unassigned-vars': 'error',
        'no-unmodified-loop-condition': 'error',

        'no-unreachable-loop': [
            'error',
            {
                ignore: [],
            },
        ],

        'no-use-before-define': [
            'error',
            {
                functions: true,
                classes: true,
                variables: true,
            },
        ],

        // 'no-useless-assignment': 'error',

        'accessor-pairs': [
            'error',
            {
                setWithoutGet: true,
                enforceForClassMembers: true,
                enforceForTSTypes: true,
            },
        ],

        // 'arrow-body-style': ['error', 'as-needed'],
        'block-scoped-var': 'error',

        camelcase: [
            'error',
            {
                properties: 'never',
                ignoreDestructuring: false,
            },
        ],

        // 'class-methods-use-this': [
        //     'error',
        //     {
        //         exceptMethods: [],
        //     },
        // ],

        // 'consistent-return': 'error',
        curly: ['error', 'all'],

        'default-case': [
            'error',
            {
                commentPattern: '^no default$',
            },
        ],

        'default-case-last': 'error',
        'default-param-last': 'error',

        'dot-notation': [
            'error',
            {
                allowKeywords: true,
            },
        ],

        eqeqeq: [
            'error',
            'always',
            {
                null: 'ignore',
            },
        ],

        'func-names': 'warn',
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'error',

        'logical-assignment-operators': [
            'error',
            'always',
            {
                enforceForIfStatements: true,
            },
        ],

        'max-classes-per-file': ['error', 1],

        'new-cap': [
            'error',
            {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
            },
        ],

        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        // 'no-console': 'warn',
        // 'no-continue': 'warn',

        'no-else-return': [
            'error',
            {
                allowElseIf: false,
            },
        ],

        'no-empty-function': [
            'error',
            {
                allow: ['arrowFunctions', 'functions', 'methods'],
            },
        ],

        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',

        'no-implicit-coercion': [
            'error',
            {
                disallowTemplateShorthand: true,
            },
        ],

        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',

        'no-labels': [
            'error',
            {
                allowLoop: false,
                allowSwitch: false,
            },
        ],

        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-multi-assign': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',

        'no-param-reassign': [
            'error',
            {
                props: true,
            },
        ],

        'no-plusplus': 'error',
        'no-proto': 'error',

        'no-restricted-exports': [
            'error',
            {
                restrictedNamedExports: ['default', 'then'],
            },
        ],

        'no-restricted-globals': [
            'error',
            {
                name: 'isFinite',
                message:
                    'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
            },
            {
                name: 'isNaN',
                message:
                    'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
            },
        ],

        'no-restricted-properties': [
            'error',
            {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated',
            },
            {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            },
        ],

        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            // {
            //     selector: 'ForOfStatement',
            //     message:
            //         'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            // },
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        'no-return-assign': ['error', 'always'],
        'no-script-url': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',

        // 'no-underscore-dangle': [
        //     'error',
        //     {
        //         allow: [],
        //         allowAfterThis: false,
        //         allowAfterSuper: false,
        //         enforceInMethodNames: true,
        //     },
        // ],

        'no-unneeded-ternary': [
            'error',
            {
                defaultAssignment: false,
            },
        ],

        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: false,
                allowTernary: false,
                allowTaggedTemplates: false,
            },
        ],

        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',

        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],

        'no-useless-return': 'error',
        'no-var': 'error',

        'no-void': [
            'error',
            {
                allowAsStatement: true,
            },
        ],

        'object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true,
            },
        ],

        'one-var': ['error', 'never'],
        'operator-assignment': ['error', 'always'],

        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],

        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],

        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: true,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],

        'prefer-exponentiation-operator': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-object-has-own': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',

        'prefer-regex-literals': [
            'error',
            {
                disallowRedundantWrapping: true,
            },
        ],

        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        radix: 'error',
        'require-await': 'error',
        'symbol-description': 'error',
        'vars-on-top': 'error',
        yoda: 'error',

        // TODO: deprecated
        quotes: ['error', 'single'], // prettier отключает автоисправление `` на '', поэтому повторно активируем правило

        'no-unused-vars': 'warn',
    },
});

export const eslintRules = eslintConfig.at(0)?.rules as RulesConfig;
