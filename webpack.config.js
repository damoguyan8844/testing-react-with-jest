module.exports = {
  entry: ['./webpack.init.js','./app/index.js'],
  output: {
    filename: 'bundle.js',
    publicPath:  '/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
}
