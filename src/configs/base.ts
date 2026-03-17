import { defineConfig } from '../core';

export const baseConfig = defineConfig({
    languageOptions: {
        parserOptions: {
            projectService: true,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
});
