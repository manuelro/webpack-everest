const { images } = require( './rule-images' );
const { scripts } = require( './rule-scripts' );
const { styles } = require( './rule-styles' );
const { fonts } = require( './rule-fonts' );

module.exports = {
  rules: [ images, scripts, styles, fonts ]
}
