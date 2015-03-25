var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    library: 'ReactTextSplit',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?optional=react'
      }
    ],
    preLoaders: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        loader: 'jscs'
      }
    ]
  },
  externals: [
    {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    }
  ]
};
