module.exports = {
  entry: {
    app: './src/index.ts',
  },
  output: {
    filename: 'dist/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts']
  }
}
