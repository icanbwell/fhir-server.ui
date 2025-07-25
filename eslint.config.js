const { defineConfig, globalIgnores } = require('eslint/config');
const security = require('eslint-plugin-security');
const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');

module.exports = defineConfig([
    globalIgnores([
        '**/*.json',
        'src/config',
        'src/scripts',
        '**/*.config.js',
        'dist/*',
        '**/node_modules/**',
        'build/**',
    ]),
    reactHooks.configs['recommended-latest'],
    {
        ...reactPlugin.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
    {
        ...reactPlugin.configs.flat['jsx-runtime'],
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
    {
        files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
        plugins: {
            security,
        },
        extends: ["security/recommended"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.mocha,
                ...globals.jest,
                ...globals.node,
            },
            parser: tsParser,
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        "rules": {
            "quotes": [2, "single", "avoid-escape"],
            "no-compare-neg-zero": 0,
            "no-console": 0,
            "no-debugger": 2,
            "no-array-constructor": 2,
            "no-caller": 2,
            "no-catch-shadow": 2,
            "no-eval": 2,
            "no-extend-native": 2,
            "no-extra-bind": 2,
            "no-implied-eval": 2,
            "no-iterator": 2,
            "no-label-var": 2,
            "no-labels": 2,
            "no-lone-blocks": 2,
            "no-loop-func": 2,
            "no-multi-spaces": 2,
            "no-multi-str": 2,
            "no-native-reassign": 2,
            "no-new": 2,
            "no-new-func": 2,
            "no-new-object": 2,
            "no-new-wrappers": 2,
            "no-octal-escape": 2,
            "no-proto": 2,
            "no-return-assign": 2,
            "no-script-url": 2,
            "no-sequences": 2,
            "no-shadow": 2,
            "no-shadow-restricted-names": 2,
            "no-spaced-func": 2,
            "no-trailing-spaces": 2,
            "no-undef-init": 2,
            "no-unused-expressions": 2,
            "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "argsIgnorePattern": "^_"
            }
            ],
            "no-use-before-define": 2,
            "no-with": 2,
            "comma-spacing": 2,
            "curly": [2, "all"],
            "dot-notation": [
            0,
            {
                "allowKeywords": true
            }
            ],
            "eol-last": 2,
            "no-extra-parens": [2, "functions"],
            "eqeqeq": 2,
            "key-spacing": [
            2,
            {
                "beforeColon": false,
                "afterColon": true
            }
            ],
            "new-parens": 2,
            "semi": 2,
            "semi-spacing": [
            2,
            {
                "before": false,
                "after": true
            }
            ],
            "space-infix-ops": 2,
            "keyword-spacing": 2,
            "space-unary-ops": [
            2,
            {
                "words": true,
                "nonwords": false
            }
            ],
            // http://eslint.org/docs/rules/#strict-mode
            //    "strict": [
            //      2,
            //      "global"
            //    ],
            "yoda": [2, "never"],
            "no-process-exit": "off",
            //    "require-await": "error",
            "security/detect-non-literal-fs-filename": "off",
            "node/no-unpublished-require": "off",
            "no-undef": "error",
            // https://blog.appsignal.com/2020/05/06/avoiding-memory-leaks-in-nodejs-best-practices-for-performance.html
            "no-invalid-this": "error",
            "@typescript-eslint/no-explicit-any": "off"
        },
    },
]);
