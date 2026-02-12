module.exports = {
  "plugins": [],
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:jsx-a11y/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '^(React|jsx)$' }],
    'react/prop-types': 0,
    'react/no-unknown-property': ['error', { ignore: ['sx'] }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-no-bind': 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    },
    'import/core-modules': ['gatsby', 'react-leaflet']
  }
}
