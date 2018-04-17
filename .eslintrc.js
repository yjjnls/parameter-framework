module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "no-undef": 0,
        // 错误
        "array-callback-return": "error",
        "brace-style": ["error", "1tbs", {
            "allowSingleLine": true
        }],
        "comma-dangle": [2, "only-multiline"],
        "comma-spacing": ["error"],
        "comma-style": ["error"],
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "key-spacing": ["error"],
        "keyword-spacing": ["error"],
        "lines-around-comment": ["error"],
        "new-cap": ["warn"],
        "no-empty-function": ["error"],
        "no-extra-bind": "error",
        "no-floating-decimal": "error",
        "no-multi-spaces": ["warn"],
        "no-multiple-empty-lines": ["error", {
            "max": 2,
            "maxBOF": 0,
            "maxEOF": 1
        }],
        "no-self-compare": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-whitespace-before-property": "error",
        "quote-props": ["error", "consistent"],
        "quotes": [0, "single", {
            "allowTemplateLiterals": true,
            "avoidEscape": true
        }],
        "semi": 1,
        "semi-spacing": ["error"],
        "space-before-blocks": ["error"],
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never"
        }],
        "space-infix-ops": ["error"],
        "spaced-comment": ["error", "always"],
        "valid-jsdoc": ["error", {
            "requireReturn": false
        }],

        // 警告
        "dot-notation": ["warn"],
        "no-shadow": ["warn"],
        "no-trailing-spaces": ["warn", {
            "skipBlankLines": true
        }]
    }
};