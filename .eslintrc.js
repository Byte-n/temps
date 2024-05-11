module.exports = {
    root: true,
    extends: [
        'eslint-config-ay',
        'eslint-config-ay/import',
        'eslint-config-ay/typescript',
    ],
    globals: {
        __PROJECT_NAME__: 'readonly',
        __PROJECT_VERSION__: 'readonly',
    },
    rules: { 'linebreak-style': 'off' },
};
