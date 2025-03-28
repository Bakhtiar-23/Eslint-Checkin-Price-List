export default [
  {
    ignores: ["node_modules"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly", // Add console as a global if necessary
        module: "readonly",  // Add module as a global if necessary
      },
    },
    rules: {
      "no-var": "error", // Ensure 'var' is not used
      "semi": ["error", "always"],
    },
  },
];
