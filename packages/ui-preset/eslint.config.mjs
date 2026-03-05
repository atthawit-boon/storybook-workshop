import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
  { plugins: { js }, extends: ["js/recommended"] },
  { languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    rules: {
      "sort-imports": ["error", { allowSeparatedGroups: true }],
      quotes: [
        "error",
        "double",
        {
          allowTemplateLiterals: true,
        },
      ],
      semi: ["error", "always"],
    },
  },
]);
