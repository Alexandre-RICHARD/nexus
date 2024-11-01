module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    ignorePatterns: ["node_modules", "build", ".eslintrc.js"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "airbnb",
        "airbnb-typescript",
        "plugin:prettier/recommended",
    ],
    plugins: ["@stylistic", "simple-import-sort"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
    rules: {
        // Classic rules
        "no-console": ["warn", {allow: ["error"]}],

        // Prettier rules
        "prettier/prettier": [
            "error",
            {
                printWidth: 80,
                tabWidth: 2,
                useTabs: false,
                semi: true,
                singleQuote: false,
                quoteProps: "consistent",
                trailingComma: "all",
                bracketSpacing: true,
                bracketSameLine: false,
                arrowParens: "always",
                endOfLine: "auto",
                singleAttributePerLine: true,
            },
        ],

        // Import rules
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",

        // Typescript
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
};
