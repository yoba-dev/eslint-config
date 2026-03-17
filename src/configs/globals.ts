import globals from 'globals';

import { defineConfig } from '../core';

export const globalsBrowserConfig = defineConfig({
    languageOptions: {
        globals: {
            ...globals.browser,
        },
    },
});

export const globalsNodeConfig = defineConfig({
    languageOptions: {
        globals: {
            ...globals.nodeBuiltin,
        },
    },
});

export const globalsIsomorphicConfig = defineConfig({
    languageOptions: {
        globals: {
            ...globals['shared-node-browser'],
            ...globals.es2025,
        },
    },
});

export const globalsCloudflareWorkerConfig = defineConfig({
    languageOptions: {
        globals: {
            ...globals.serviceworker,
            ...globals.es2025,
        },
    },
});
