const images = require( './rule-images' );
const scripts = require( './rule-scripts' );
const less = require( './rule-less' );
const sass = require( './rule-sass' );
const css = require( './rule-css' );
const fonts = require( './rule-fonts' );

module.exports = {
  rules: [ images, scripts, less, sass, css, fonts ]
}
