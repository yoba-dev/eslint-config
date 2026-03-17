import eslintNest from '@darraghor/eslint-plugin-nestjs-typed';

import { defineConfig } from '../core';

export const nestConfig = defineConfig(
    eslintNest.configs.flatRecommended,
    eslintNest.configs.flatNoSwagger,
);
