module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb'
  ],

  globals: {
    __DEV__: true
  },

  rules: {
    "no-plusplus": 'off',
    "arrow-parens": [2, "as-needed"],
    "arrow-parent": false,
    'comma-dangle': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": [0, { "ignorePureComponents": false}],
    "react/prop-types": [2, { skipUndeclared: true }],
    "react/no-array-index-key" : false,
    "sort-imports": [0],
    "no-invalid-this": [0],
    "no-return-assign": [0],
    "arrow-body-style": [0],
    "comma-dangle": [1, "never"],
    "react/no-unused-prop-types": 1,
    "react/no-children-prop": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": false
  },

  env: {
    jest: true
  }
}
