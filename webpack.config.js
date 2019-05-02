module.exports = {
  watch: true,
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.json$/,
        use: [
          {
            loader: 'file-loader',
            options: {
               name: '[path][name].[ext]',
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000
  }
};
