'use strict';

const babelJest = require('babel-jest').default;

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false;
  }

  try {
    require.resolve('react/jsx-runtime');
    return true;
  } catch (e) {
    return false;
  }
})();

module.exports = babelJest.createTransformer({
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        targets: { node: 'current' }
      }
    ],
    [
      require.resolve('@babel/preset-react'),
      {
        runtime: hasJsxRuntime ? 'automatic' : 'classic',
      },
    ],
    require.resolve('@babel/preset-typescript'),
  ],
  babelrc: false,
  configFile: false,
});
