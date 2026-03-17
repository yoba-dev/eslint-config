/* eslint-disable n/no-sync */

import fs from 'node:fs';
import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';

import { defineConfig, GLOB_EXCLUDE } from '../core';

function createIgnoreConfig() {
    const gitignorePath = path.resolve(process.cwd(), '.gitignore');

    return defineConfig(
        fs.existsSync(gitignorePath) ?
            includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns')
        :   {},
        { ignores: GLOB_EXCLUDE },
    );
}

export const ignoreConfig = createIgnoreConfig();
