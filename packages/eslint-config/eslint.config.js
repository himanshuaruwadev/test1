import js from "@eslint/js";
import eslintPluginImport from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tailwindcss from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["**/dist/**", "**/build/**", "**/.next/**", "**/node_modules/**"]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}", "**/*.cjs", "**/*.mjs"],
    plugins: {
      import: eslintPluginImport,
      react,
      "react-hooks": reactHooks,
      jsxA11y,
      tailwindcss
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "import/order": [
        "error",
        {
          "alphabetize": { "order": "asc", "caseInsensitive": true },
          "newlines-between": "always"
        }
      ],
      "tailwindcss/no-custom-classname": "off"
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: ["./tsconfig.json"],
        tsconfigRootDir: process.cwd()
      }
    }
  }
];
