module.exports = {
  extends: ['./base'],
  plugins: ['react'],
  rules: {
    'react/function-component-definition': ['warn', { 'namedComponents': 'arrow-function' }],
  },
};
