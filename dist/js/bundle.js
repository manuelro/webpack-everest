webpackJsonp([0],{

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _name = __webpack_require__(25);

var _name2 = _interopRequireDefault(_name);

var _bar = __webpack_require__(83);

var _bar2 = _interopRequireDefault(_bar);

var _foo = __webpack_require__(85);

var _foo2 = _interopRequireDefault(_foo);

var _bez = __webpack_require__(84);

var _bez2 = _interopRequireDefault(_bez);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_name2.default, 'reloaded');

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'Manuel Ro is awesome!';
module.exports = name;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _name = __webpack_require__(25);

var _name2 = _interopRequireDefault(_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { date: new Date() };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Hello, world!'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'It is ',
          this.state.date.toLocaleTimeString(),
          '.'
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  return App;
}(_react2.default.Component);

module.exports = App;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _name = __webpack_require__(25);

var _name2 = _interopRequireDefault(_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _name = __webpack_require__(25);

var _name2 = _interopRequireDefault(_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = 'Manuel';

/***/ })

},[196]);
//# sourceMappingURL=bundle.js.map