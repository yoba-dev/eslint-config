import type { Config, ConfigWithExtendsArray } from '@eslint/config-helpers';

export function defineConfig(...configs: ConfigWithExtendsArray) {
    // @ts-ignore
    return configs.flat(Infinity) as Config[];
}
