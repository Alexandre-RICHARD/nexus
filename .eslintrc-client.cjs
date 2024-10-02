module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ["node_modules", "build", ".eslintrc.cjs"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["@stylistic", "simple-import-sort", "react-refresh"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Classic rules
    "no-console": ["warn", { allow: ["error"] }],

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
        jsxSingleQuote: false,
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

    // React rules
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/require-default-props": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    // Typescript
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],

    // React-refresh, default vite rules
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};


// Todo gérer les styles provenant de Eslint COnfig
// module.exports = {
//   // Eslint conf
//   env: {
//     "browser": true,
//     "es2021": true,
//     "node": true,
//   },
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaVersion: "latest",
//     sourceType: "module",
//     project: [
//       "./tsconfig.json",
//       "./tsconfig.eslint.json"
//     ]
//   },
//   // On wich files doesn't lint
//   ignorePatterns: [
//     ".eslintrc.js",
//     "**/*.config.js",
//     "**/*.config.ts",
//     "node_modules",
//     "dist",
//     "coverage",
//   ],

//   // Include shared configuration
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react-hooks/recommended",
//     "airbnb",
//     "airbnb-typescript",
//     "airbnb/hooks",
//     "plugin:@typescript-eslint/recommended-type-checked",
//     "plugin:@typescript-eslint/stylistic-type-checked",
//     "plugin:promise/recommended",
//     "plugin:prettier/recommended",
//     "plugin:import/recommended",
//   ],

//   // Apply plugins
//   plugins: [
//     "@typescript-eslint",
//     "promise",
//     "simple-import-sort",
//     "import",
//   ],

//   rules: {
//     // Disable to use typescript version and prevent conflicts
//     "no-use-before-define": "off",

//     // Typescript
//     "@typescript-eslint/no-use-before-define": "error",
//     "@typescript-eslint/consistent-type-definitions": "off",
//     "@typescript-eslint/consistent-type-exports": "error",
//     "@typescript-eslint/consistent-type-imports": "error",

//     // Prettier rules
//     "prettier/prettier": [
//       "error",
//       {
//         "trailingComma": "es5",
//         "tabWidth": 2,
//         "semi": true,
//         "singleQuote": true,
//         "bracketSpacing": true,
//         "bracketSameLine": false,
//         "endOfLine": "auto",
//         "quoteProps": "consistent",
//       }
//     ],

//     // Import rules
//     "simple-import-sort/imports": "error",
//     "simple-import-sort/exports": "error",
//     "import/first": "error",
//     "import/prefer-default-export": "off",
//     "import/no-default-export": "error",

//     // React rules
//     "react/require-default-props": "off",
//   },
// }


/*
This Eslint configuration extends eslint-config-edition → https://bitbucket.org/predell/eslint-config-edition
This one require some plugin and package to be installed :
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint                            : In version 8 because flat config (Eslint version 9+) isn't ready for all config
- eslint-config-airbnb
- eslint-config-airbnb-typescript
- eslint-config-next                : Specific to this project
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-simple-import-sort
- eslint-plugin-vitest              : In version 0.4.1 because after, only flat config is handled
- prettier
*/

// module.exports = {
//   root: true,
  // Need to redeclare parser to prevent error
  // parser: "@typescript-eslint/parser",
  // Include external configuration
//   extends: [
//     "next/core-web-vitals",
//     "plugin:vitest/recommended",
//     "@predell/edition",
//   ],
//   plugins: [
//     "vitest"
//   ],
//   // On wich files lint
//   ignorePatterns: [
//     ".eslintrc.js",
//     "**/*.config.js",
//     "**/*.config.ts",
//     "node_modules",
//     "dist",
//     "coverage",
//     "src/infra/types/api/**/*.ts",
//   ],
//   rules: {
//     "@typescript-eslint/prefer-nullish-coalescing": "warn",
//     "import/no-unused-modules": ["error", { "missingExports ": true, "unusedExports": true }],
//     "react/jsx-props-no-spreading": ["error", {
//       "exceptions": ["TextInput", "TextArea"]
//     }]
//   },
//   overrides: [
//     {
//       // Force use of "this" key word in class. Temporary while interface/service/repository still in project
//       files: [
//         "**/*"
//       ],
//       rules: {
//         "class-methods-use-this": "off"
//       }
//     },
//     {
//       // Next.js needs default exports for pages and API points 
//       files: [
//         "src/pages/**/*",
//       ],
//       rules: {
//         "import/no-default-export": "off",
//         "import/no-unused-modules": "off"
//       }
//     },
//     {
//       // We want to work with zustand reducer without return (mutable state)
//       files: [
//         "src/**/*.slice.ts",
//         "src/store/**/*.ts"
//       ],
//       rules: {
//         "no-param-reassign": [
//           "error",
//           {
//             "props": true,
//             "ignorePropertyModificationsFor": [
//               "state"
//             ]
//           }
//         ],
//       }
//     },
//     {
//       // Use in configApi.ts, for infra, where we reassign key of object param "api" → api.default.baseUrl & api.default.fetch
//       files: [
//         "src/infra/api/config/configApi.ts"
//       ],
//       rules: {
//         "no-param-reassign": [
//           "error",
//           {
//             "props": true,
//             "ignorePropertyModificationsFor": [
//               "api"
//             ]
//           }
//         ]
//       }
//     },
//     {
//       // We need to import devDependencies in tests files, and we don't want to handle promise/async
//       files: [
//         "__tests__/**/*",
//         "**/*.test.ts",
//         "**/*.test.tsx",
//         "vitest*"
//       ],
//       rules: {
//         "import/no-extraneous-dependencies": [
//           "error",
//           {
//             "devDependencies": true,
//             "optionalDependencies": false,
//             "peerDependencies": false
//           }
//         ],
//         "import/no-unused-modules": "off",
//         "promise/always-return": "off",
//         "promise/catch-or-return": "off"
//       }
//     },
//     {
//       // Because we need to export default
//       files: ["src/middleware.ts", "src/infra/store/feature/*.ts"],
//       rules: {
//         "import/no-unused-modules": "off",
//       }
//     }
//   ]
// }
