module.exports = {
  // 1. Root: Stop ESLint from looking in parent folders
  root: true,

  // 2. Settings: Configure paths for TypeScript resolution
  settings: {
    react: {
      version: "detect", // Auto-detects React version
    },
    "import/resolver": {
      typescript: {}, // Enables TypeScript path resolution
    },
  },

  // 3. Environment: Define the environments where the code runs
  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  // 4. Parser: Specify the parser to handle TypeScript and TSX files
  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // Tell ESLint where your main tsconfig file is located:
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },

  // 5. Extensions: Define files to process
  extends: [
    // ESLint's recommended baseline rules
    "eslint:recommended",

    // TypeScript recommended rules
    "plugin:@typescript-eslint/recommended",

    // React core rules
    "plugin:react/recommended",

    // Accessibility rules
    "plugin:jsx-a11y/recommended",

    // Essential React Hooks rules (missing in 'react/recommended')
    "plugin:react-hooks/recommended",

    // Tailwind best practices (e.g., consistent class order)
    "plugin:tailwindcss/recommended",

    // **ADD THIS LINE FOR STRICTER TS CHECKS:**
    "plugin:@typescript-eslint/recommended-type-checked",
    // Accessibility rules
  ],

  // 6. Custom Rules: Define project-specific rules or override plugin defaults
  rules: {
    // 🔴 OFF for React component prop definitions (handled by TypeScript interfaces)
    "react/prop-types": "off",
    // 🔴 OFF for Vite/Modern JSX (React is imported implicitly)
    "react/react-in-jsx-scope": "off",

    // ✅ Recommended: Force explicit accessibility modifiers on class members (TS)
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { accessibility: "explicit" },
    ],
    // ✅ Recommended: Enforce consistent typing for function components
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function" },
    ],
    // 🔴 OFF: Prevents issues with generic component prop types
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
