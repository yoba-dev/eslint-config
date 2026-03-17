import { formatjsConfig } from '../configs';
import { defineConfig } from '../core';

import { vuePreset } from './vue';

export const vueI18nPreset = defineConfig(
    vuePreset,

    formatjsConfig.map((config) => ({
        ...config,
        files: ['**/*.{ts,vue}'],
    })),
);
