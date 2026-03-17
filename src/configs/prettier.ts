import eslintPrettier from 'eslint-config-prettier/flat';

import { defineConfig } from '../core';

const base = {
    ...eslintPrettier,
    rules: { ...eslintPrettier.rules },
};

delete base.rules.curly;
delete base.rules.quotes;
delete base.rules['vue/html-self-closing'];

export const prettierConfig = defineConfig(base);
