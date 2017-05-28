/*
  This is an empty webpack configuration file,
  head to the official Everest repo to learn how to configure
  your app.
*/
//Replace with webpack-everest package
const everest = require('./config/webpack');

everest.webpack.apply({
  output: {
    root: __dirname,
  },
  entry: {
    common: ['react', 'react-dom', 'normalize.css']
  }
})
.provide({
  $: 'jquery',
  jQuery: 'jquery'
})

console.log(everest.webpack.options);

module.exports = everest.webpack.config
