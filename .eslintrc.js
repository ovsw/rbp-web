module.exports = {
  "plugins": [],
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:jsx-a11y/recommended', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'react/no-unknown-property': ['error', { ignore: ['sx'] }]
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}
