module.exports = {
  plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
  presets: [['@babel/preset-env', {targets: {node: 'current'}}], '@babel/preset-typescript'],
};
