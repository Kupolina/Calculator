const { off } = require("process");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  overrides: [
    {
      "files": ["*.js"],
      "rules": {
          "no-unused-expressions": "off",
          "no-plusplus" : "off"
      }
  }
    
  ],
  plugins: [
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-unused-expressions": "off"
  },
};
