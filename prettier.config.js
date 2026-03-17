/**
 * @type {import('prettier').Config &
 *     import('prettier-plugin-jsdoc').Options &
 *     import('prettier-plugin-tailwindcss').PluginOptions} }
 *
 * @see https://prettier.io/docs/en/configuration.html
 */
const config = {
    singleQuote: true,
    trailingComma: 'all',
    experimentalTernaries: true, // https://prettier.io/docs/en/options#experimental-ternaries
    vueIndentScriptAndStyle: true,
    singleAttributePerLine: true,
};

export default config;
