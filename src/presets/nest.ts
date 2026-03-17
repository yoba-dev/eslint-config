import { nestConfig } from '../configs';
import { defineConfig } from '../core';

import { nodePreset } from './node';

export const nestPreset = defineConfig(nodePreset, nestConfig);
