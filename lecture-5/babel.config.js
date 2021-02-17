module.exports = api => {
  const isProd = process.env.NODE_ENV === 'production';
  api.cache.forever();

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    'babel-preset-mobx'
  ];
  const plugins = [
    [
      'react-css-modules',
      {
        'filetypes': {
          '.scss': {
            'syntax': 'postcss-scss',
            'plugins': ['postcss-nested']
          }
        },
        'generateScopedName': !isProd ? '[path][name]__[local]' : '[hash:base64]',
        'webpackHotModuleReloading': true,
        'autoResolveMultipleImports': true
      }
    ],
    !isProd && 'react-refresh/babel',
    '@babel/plugin-proposal-optional-chaining'
  ].filter(Boolean);

  return {
    presets,
    plugins
  }
}