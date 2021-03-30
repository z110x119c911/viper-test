module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? 'viper-test'
  : './dist/',
  // publicPath: './dist/',
  // outputDir: '',
  // assetsDir:'../',
  indexPath:'../index.html/',
}