module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    ignorePatterns: ["report"],
    extends: [".eslintrc-client.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
    overrides: [
        {
            files: [
                "src/nexusExporter.ts",
            ],
            rules: {
                "import/no-unused-modules": "off",
            }
        },
        {
            files: [
                "vite.config.ts",
            ],
            rules: {
                "import/no-extraneous-dependencies": "off",
            }
        },
    ],
};
