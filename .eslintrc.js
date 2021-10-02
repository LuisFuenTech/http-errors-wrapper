const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn',
};

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },

  globals: {
    MyGlobal: true,
  },
  rules: {
    'no-console': RULES.WARN,
    'no-template-curly-in-string': RULES.WARN,
    'no-alert': RULES.ERROR,
    'no-eq-null': RULES.ERROR,
    'no-eval': RULES.ERROR,
    'no-implied-eval': RULES.ERROR,
    'no-iterator': RULES.ERROR,
    'no-lone-blocks': RULES.ERROR,
    'no-loop-func': RULES.ERROR,
    'no-param-reassign': RULES.ERROR,
    'no-proto': RULES.ERROR,
    'no-return-assign': RULES.ERROR,
    'no-script-url': RULES.ERROR,
    'no-self-compare': RULES.ERROR,
    'no-unused-expressions': RULES.ERROR,
    'no-useless-concat': RULES.ERROR,
    'no-undefined': RULES.ERROR,
    curly: RULES.ERROR,
    eqeqeq: RULES.ERROR,
    'no-else-return': RULES.ERROR,
    'no-useless-return': RULES.ERROR,
    'no-duplicate-imports': RULES.ERROR,
    'no-var': RULES.ERROR,
    'prefer-const': RULES.ERROR,
    'prefer-spread': RULES.WARN,
    'prefer-template': RULES.ERROR,
    'no-await-in-loop': RULES.WARN,
    'no-unreachable-loop': RULES.WARN,
  },
};
