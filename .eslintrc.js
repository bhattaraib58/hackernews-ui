module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "indent": [
        "error",
        2,
        {
          "SwitchCase": 1
        }
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ],
      "comma-dangle": [
        "error",
        {
          "arrays": "never",
          "imports": "never",
          "exports": "never",
          "functions": "ignore",
          "objects": "always-multiline"
        }
      ],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error"
    }
};
