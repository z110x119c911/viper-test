module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/viper-file'
  : './'
  // publicPath: './',
  // outputDir: path.resolve(__dirname, 'dist')
}