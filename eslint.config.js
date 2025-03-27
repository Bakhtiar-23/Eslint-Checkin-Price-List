module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-var": "error", // Disallow 'var'
      "semi": ["error", "always"], // Enforce semicolons
      "quotes": ["error", "double"], // Enforce double quotes
    },
  };
  