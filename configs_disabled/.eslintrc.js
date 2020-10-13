// eslint-disable-next-line import/no-commonjs
module.exports = {
  parser: 'babel-eslint',
  extends: 'recommended/esnext',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
      modules: true
    },
    babelOptions: {
      configFile: '.babelrc',
    },
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    'no-tabs': 'warn',
    'import/no-nodejs-modules' : ['error', {'allow': ['path']}],
    'import/no-commonjs': 'off',
    semi: 0,
    'comma-dangle': 0,
    'require-jsdoc': [ 2, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: false,
        ClassDeclaration: false,
      }
    } ]
  }
};
