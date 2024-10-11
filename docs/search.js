/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DW: () => (/* binding */ getSearchData)
/* harmony export */ });
/* unused harmony exports getArticles, getFortuneTellings, getTarotCards */
/* harmony import */ var _data_articles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5909);
/* harmony import */ var _data_fortuneTellings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8689);
/* harmony import */ var _data_tarotCards_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3029);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




// Функция для получения статей
function getArticles() {
  return new Promise(function (resolve) {
    resolve(articles);
  });
}

// Функция для получения предсказаний
function getFortuneTellings() {
  return new Promise(function (resolve) {
    resolve(fortuneTellings);
  });
}

// Функция для получения карт Таро
function getTarotCards() {
  return new Promise(function (resolve) {
    resolve(tarotCards);
  });
}

// Функция для поиска данных
function getSearchData() {
  return new Promise(function (resolve) {
    var searchData = [].concat(_toConsumableArray(_data_articles_json__WEBPACK_IMPORTED_MODULE_0__), _toConsumableArray(_data_fortuneTellings_json__WEBPACK_IMPORTED_MODULE_1__), _toConsumableArray(_data_tarotCards_json__WEBPACK_IMPORTED_MODULE_2__)); // Или какой-то другой способ объединения данных
    resolve(searchData);
  });
}

/***/ }),

/***/ 1784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A_HighlightHeading4)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2485);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var A_HighlightHeading4 = /*#__PURE__*/function (_React$Component) {
  _inherits(A_HighlightHeading4, _React$Component);
  var _super = _createSuper(A_HighlightHeading4);
  function A_HighlightHeading4() {
    _classCallCheck(this, A_HighlightHeading4);
    return _super.apply(this, arguments);
  }
  _createClass(A_HighlightHeading4, [{
    key: "render",
    value: function render() {
      var _classnames;
      var _this$props = this.props,
        text = _this$props.text,
        texttype = _this$props.texttype,
        none = _this$props.none;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classnames = {
        A_HighlightHeading4: true
      }, _defineProperty(_classnames, "".concat(texttype), true), _defineProperty(_classnames, "None", none), _classnames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes,
        texttype: texttype
      }, text);
    }
  }]);
  return A_HighlightHeading4;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ 6268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A_TarotCardImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var A_TarotCardImage = /*#__PURE__*/function (_React$Component) {
  _inherits(A_TarotCardImage, _React$Component);
  var _super = _createSuper(A_TarotCardImage);
  function A_TarotCardImage() {
    _classCallCheck(this, A_TarotCardImage);
    return _super.apply(this, arguments);
  }
  _createClass(A_TarotCardImage, [{
    key: "render",
    value: function render() {
      var imageName = this.props.image;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: __webpack_require__(1089)("./".concat(imageName)),
        className: "A_TarotCardImage"
      });
    }
  }]);
  return A_TarotCardImage;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ 8288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ M_TarotCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _A_HighlightHeading4_A_HighlightHeading4_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1784);
/* harmony import */ var _A_TarotCardImage_A_TarotCardImage_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6268);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2485);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var M_TarotCard = /*#__PURE__*/function (_React$Component) {
  _inherits(M_TarotCard, _React$Component);
  var _super = _createSuper(M_TarotCard);
  function M_TarotCard() {
    _classCallCheck(this, M_TarotCard);
    return _super.apply(this, arguments);
  }
  _createClass(M_TarotCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        color = _this$props.color,
        emoji = _this$props.emoji,
        line1 = _this$props.line1,
        line2 = _this$props.line2,
        image = _this$props.image,
        none = _this$props.none,
        texttype = _this$props.texttype,
        link = _this$props.link;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(_defineProperty({
        M_TarotCard: true
      }, "".concat(color), true));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: link
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "W_TarotCardShadow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "W_TarotCardInside"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_A_HighlightHeading4_A_HighlightHeading4_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        texttype: texttype,
        text: emoji
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_A_TarotCardImage_A_TarotCardImage_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        image: image
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_A_HighlightHeading4_A_HighlightHeading4_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        none: none,
        texttype: "Antiqua",
        text: line1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_A_HighlightHeading4_A_HighlightHeading4_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        texttype: "Grotesk",
        text: line2
      })))));
    }
  }]);
  return M_TarotCard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ 6496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ O_BlockOfTarotCards)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2485);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _M_TarotCard_M_TarotCard_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8288);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var O_BlockOfTarotCards = /*#__PURE__*/function (_React$Component) {
  _inherits(O_BlockOfTarotCards, _React$Component);
  var _super = _createSuper(O_BlockOfTarotCards);
  function O_BlockOfTarotCards() {
    _classCallCheck(this, O_BlockOfTarotCards);
    return _super.apply(this, arguments);
  }
  _createClass(O_BlockOfTarotCards, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var tarotCollection = data.map(function (tarotCard, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_M_TarotCard_M_TarotCard_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
          link: tarotCard.link,
          color: tarotCard.color,
          emoji: tarotCard.emoji,
          line1: tarotCard.line1,
          line2: tarotCard.line2,
          none: tarotCard.none,
          image: tarotCard.image,
          texttype: tarotCard.texttype,
          key: i
        });
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "O_BlockOfTarotCards"
      }, tarotCollection);
    }
  }]);
  return O_BlockOfTarotCards;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ 2485:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 2551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(6540),ca=__webpack_require__(9982);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b}
function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null)}
function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p(308));Og=a;Ng.dependencies={lanes:0,firstContext:a}}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a)}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ch(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q}}
function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var nh={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=
lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d))}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null)}
function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}
function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function th(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=zh(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p(174));return a}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(Eh);G(Eh,b)}function Jh(){E(Eh);E(Fh);E(Gh)}
function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c))}function Lh(a){Fh.current===a&&(E(Eh),E(Fh))}var M=Uf(0);
function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Nh=[];
function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321));}function Wh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e)}while(Th)}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(p(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function ei(a,b){return"function"===typeof b?b(a):b}
function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function hi(){}
function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p(349));0!==(Rh&30)||ni(c,b,e)}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a)}function ki(a,b,c){return c(function(){oi(b)&&pi(a)})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1)}
function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return[b.memoizedState,a]}
function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d)}
function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N.flags|=a;e.memoizedState=li(1|b,c,f,d)}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b()}finally{C=c,Qh.transition=d}}function Fi(){return di().memoizedState}
function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d)}}
function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d))}}
function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=
ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===R)throw Error(p(349));0!==(Rh&30)||ni(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
O?b.memoizedState=a:Di(b,O.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
function Mi(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b)};return c}
function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a))}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d)}
function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return kj(a,b,c,d,f,e)}
function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo)}
function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1))}uj();d=Li(Error(p(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c)}
function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(M,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G(M,M.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bj=function(){};
Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Ej(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),
Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304)}else{if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Nj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Oj=!1;
function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Oj;Oj=!1;return n}
function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f)}e=e.next}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}
function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling}
function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;
Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next}while(e!==d)}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c)}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a}h=h.return}if(null===X)throw Error(p(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling}
function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a)}catch(t){W(a,a.return,t)}try{Qj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V=y):hk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
a),fk(a)}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function ik(a,b,c){V=a;jk(a,b,c)}
function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f,b,c),f=f.sibling;V=e;Kj=h;U=l}lk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a,b,c)}}
function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}ih(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Sj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Sj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Sj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B()}
function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg())}
function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Gk(c,Hk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else{b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h)}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null}
function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a)}
function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Fk(a){if(0!==(K&6))throw Error(p(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d))}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null}
function Rk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Hj=B()+500,fg&&jg())}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a()}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg()}}function Ij(){gj=fj.current;E(fj)}
function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij()}c=c.return}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}Wg=null}return a}
function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Sh=!1}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return}while(null!==f)}Tk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z)}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e)}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p(261));R=null;Z=0;return T}function Uk(){for(;null!==Y;)Vk(Y)}function Mk(){for(;null!==Y&&!cc();)Vk(Y)}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null}
function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return}}else{c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d)}finally{pk.transition=e,C=d}return null}
function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c,a,e);dc();K=h;C=g;pk.transition=f}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode,d);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else{a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,pk.transition=b}}return!1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b))}
function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return}}
function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b)}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c))}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c)}
function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Zk(a,c)}var Wk;
Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ki(Error(p(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c)}b=b.child}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Yi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p(156,b.tag));};function Gk(a,b){return ac(a,b)}
function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b)}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a)};function ml(a){this._internalRoot=a}
nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));gl(a,b,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null)});b[uf]=null}};function nl(a){this._internalRoot=a}
nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a)}}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a)}}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d)});return k}
function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a)}}gl(b,g,a,e)}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c)}}),jl(a,1)}};
Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c)}jl(a,134217728)}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d)}jl(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Rk;Hb=Sk;
var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p(200));return dl(a,b,null,c)};exports.createRoot=function(a,b){if(!ol(a))throw Error(p(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Sk(a)};exports.hydrate=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new nl(b)};exports.render=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Rk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return sl(a,b,c,!1,d)};exports.version="18.2.0-next-9e3b772b8-20220608";


/***/ }),

/***/ 5338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var m = __webpack_require__(961);
if (true) {
  exports.H = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(2551);
} else {}


/***/ }),

/***/ 5287:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";


/***/ }),

/***/ 6540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5287);
} else {}


/***/ }),

/***/ 7463:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 9982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(7463);
} else {}


/***/ }),

/***/ 1089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./article1.png": 8711,
	"./article2.png": 9980,
	"./article3.png": 7493,
	"./articles": 5909,
	"./articles.json": 5909,
	"./fortuneTelling1.png": 9985,
	"./fortuneTelling2.png": 1002,
	"./fortuneTelling3.png": 6211,
	"./fortuneTellings": 8689,
	"./fortuneTellings.json": 8689,
	"./tarotCard1.jpeg": 8648,
	"./tarotCard10.png": 3567,
	"./tarotCard11.png": 4550,
	"./tarotCard12.png": 2109,
	"./tarotCard13.png": 9076,
	"./tarotCard14.png": 8987,
	"./tarotCard15.png": 7858,
	"./tarotCard16.png": 3945,
	"./tarotCard17.png": 7696,
	"./tarotCard18.png": 7607,
	"./tarotCard19.png": 2030,
	"./tarotCard2.png": 1780,
	"./tarotCard20.png": 3518,
	"./tarotCard21.png": 2359,
	"./tarotCard22.png": 3356,
	"./tarotCard23.png": 5621,
	"./tarotCard24.png": 5498,
	"./tarotCard25.png": 9603,
	"./tarotCard26.png": 2744,
	"./tarotCard27.png": 6609,
	"./tarotCard28.png": 9302,
	"./tarotCard29.png": 2591,
	"./tarotCard3.png": 4285,
	"./tarotCard30.png": 2265,
	"./tarotCard31.png": 6512,
	"./tarotCard32.png": 1915,
	"./tarotCard33.png": 8258,
	"./tarotCard34.png": 1053,
	"./tarotCard35.png": 9924,
	"./tarotCard36.png": 2383,
	"./tarotCard37.png": 3638,
	"./tarotCard38.png": 3441,
	"./tarotCard39.png": 728,
	"./tarotCard4.png": 2722,
	"./tarotCard40.png": 7064,
	"./tarotCard41.png": 1281,
	"./tarotCard42.png": 1114,
	"./tarotCard43.png": 2339,
	"./tarotCard44.png": 2172,
	"./tarotCard45.png": 7621,
	"./tarotCard46.png": 270,
	"./tarotCard47.png": 8583,
	"./tarotCard48.png": 8000,
	"./tarotCard49.png": 9177,
	"./tarotCard5.png": 1723,
	"./tarotCard50.png": 8259,
	"./tarotCard51.png": 6346,
	"./tarotCard52.png": 3777,
	"./tarotCard53.png": 2648,
	"./tarotCard54.png": 4791,
	"./tarotCard55.png": 5294,
	"./tarotCard56.png": 3125,
	"./tarotCard57.png": 860,
	"./tarotCard58.png": 2251,
	"./tarotCard59.png": 1746,
	"./tarotCard6.png": 6688,
	"./tarotCard60.png": 8194,
	"./tarotCard61.png": 9323,
	"./tarotCard62.png": 8032,
	"./tarotCard63.png": 4281,
	"./tarotCard64.png": 4886,
	"./tarotCard65.png": 3903,
	"./tarotCard66.png": 9412,
	"./tarotCard67.png": 2445,
	"./tarotCard68.png": 9498,
	"./tarotCard69.png": 4707,
	"./tarotCard7.png": 7865,
	"./tarotCard70.png": 8957,
	"./tarotCard71.png": 2804,
	"./tarotCard72.png": 6367,
	"./tarotCard73.png": 8278,
	"./tarotCard74.png": 2537,
	"./tarotCard75.png": 7712,
	"./tarotCard76.png": 2747,
	"./tarotCard77.png": 7394,
	"./tarotCard78.png": 9397,
	"./tarotCard8.png": 2622,
	"./tarotCard9.png": 311,
	"./tarotCards": 3029,
	"./tarotCards.json": 3029
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1089;

/***/ }),

/***/ 8711:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/80e0e1fc23703f12adf6.png";

/***/ }),

/***/ 9980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cb18d4f247162e8cace2.png";

/***/ }),

/***/ 7493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5a37a3760370a3cf102c.png";

/***/ }),

/***/ 9985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a3ac9d8ebf328810161d.png";

/***/ }),

/***/ 1002:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/20f32c8a819c3c7688cf.png";

/***/ }),

/***/ 6211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e5968766966ef3ef3c7a.png";

/***/ }),

/***/ 8648:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/6e22de70bb9d6debe418.jpeg";

/***/ }),

/***/ 3567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/da9aae11f821af102649.png";

/***/ }),

/***/ 4550:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/89093313616a11548dbe.png";

/***/ }),

/***/ 2109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/77e7cbf0c028c15aaaa3.png";

/***/ }),

/***/ 9076:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/05901900511aa00a6011.png";

/***/ }),

/***/ 8987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b19d2f7e4fe7e022c1ea.png";

/***/ }),

/***/ 7858:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4846b204e7369c3999de.png";

/***/ }),

/***/ 3945:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b888e66f429696c3e3d3.png";

/***/ }),

/***/ 7696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e98016fd056ba420744e.png";

/***/ }),

/***/ 7607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/2605350f58be958ad822.png";

/***/ }),

/***/ 2030:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/2bb51f30889d93ac38c3.png";

/***/ }),

/***/ 1780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/02537c7c9c99c830d02c.png";

/***/ }),

/***/ 3518:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/2320b0cb006d7db544a0.png";

/***/ }),

/***/ 2359:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0fc9b5c62e917f68b23b.png";

/***/ }),

/***/ 3356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/7ebc03f8d31f6c148489.png";

/***/ }),

/***/ 5621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fd6c0e22a77470901b48.png";

/***/ }),

/***/ 5498:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/05870a708d2b68842240.png";

/***/ }),

/***/ 9603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/6d69fb5cdc2f86001957.png";

/***/ }),

/***/ 2744:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/56ecf5fc26982e331f40.png";

/***/ }),

/***/ 6609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b31a7c4efba78274dcc6.png";

/***/ }),

/***/ 9302:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/8b9744fffd9123bdd3d2.png";

/***/ }),

/***/ 2591:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4457dc7cf0fe4e018c62.png";

/***/ }),

/***/ 4285:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/1b2b34d7952f2cd80547.png";

/***/ }),

/***/ 2265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/8eca0b21f3a9d03da046.png";

/***/ }),

/***/ 6512:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ad02be51d4baa1ec865d.png";

/***/ }),

/***/ 1915:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a72a591ef9edc28ffb72.png";

/***/ }),

/***/ 8258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ceb4b64a7761d65a60ac.png";

/***/ }),

/***/ 1053:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/500ba8ff7b36b4e110e9.png";

/***/ }),

/***/ 9924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/46823adb3d2f4f80639b.png";

/***/ }),

/***/ 2383:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/8fbd3fedb1b7103c7a97.png";

/***/ }),

/***/ 3638:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ee69b67d37ce9a3e908d.png";

/***/ }),

/***/ 3441:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c30dac0dd694577d03df.png";

/***/ }),

/***/ 728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/465d465023b4c3493e35.png";

/***/ }),

/***/ 2722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/602cd85b5f68fc8cecaa.png";

/***/ }),

/***/ 7064:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/15582b17c41bde88ad97.png";

/***/ }),

/***/ 1281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/bd2d743f129052656e6d.png";

/***/ }),

/***/ 1114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/24b653094b4295f647a6.png";

/***/ }),

/***/ 2339:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/82f228ef9e790eb2cac6.png";

/***/ }),

/***/ 2172:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a38c8c12cc6a0e1fb0bb.png";

/***/ }),

/***/ 7621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/485b20131f3ca1adf6b3.png";

/***/ }),

/***/ 270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f0e5ef1c026dfedf8755.png";

/***/ }),

/***/ 8583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c1bff6e0ed8c12fab8fe.png";

/***/ }),

/***/ 8000:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f8ee222d9e45ea581b37.png";

/***/ }),

/***/ 9177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0a3dfbcec94db6902873.png";

/***/ }),

/***/ 1723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/9617ee7b1e83763c70c9.png";

/***/ }),

/***/ 8259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/618e61630570017010e9.png";

/***/ }),

/***/ 6346:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f58704ff9bf9d20244da.png";

/***/ }),

/***/ 3777:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b59c407a570d0932522d.png";

/***/ }),

/***/ 2648:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c105d5e134521db8d2cd.png";

/***/ }),

/***/ 4791:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e2452af9fa15ff746eba.png";

/***/ }),

/***/ 5294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/083f7f5d709d40b00ae1.png";

/***/ }),

/***/ 3125:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d182f44b5d1a0f3553f0.png";

/***/ }),

/***/ 860:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e482866ed7c6ae6fecb5.png";

/***/ }),

/***/ 2251:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f118a8bf1d31e1ec244f.png";

/***/ }),

/***/ 1746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/938defeb672bb2c16076.png";

/***/ }),

/***/ 6688:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f6dad807b547cfb36ae4.png";

/***/ }),

/***/ 8194:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/44211919a9ed11b21928.png";

/***/ }),

/***/ 9323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f61df4476134cdbaa3b0.png";

/***/ }),

/***/ 8032:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4e08e6bd4eae3cbb52c4.png";

/***/ }),

/***/ 4281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/2ac958734f08b771c099.png";

/***/ }),

/***/ 4886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/d6b8c637f85ab2e662d7.png";

/***/ }),

/***/ 3903:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/99d3e7944dfac483b2fe.png";

/***/ }),

/***/ 9412:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ee03ca1966dae038b1c0.png";

/***/ }),

/***/ 2445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/8ae0fc5194f412d501cb.png";

/***/ }),

/***/ 9498:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4ac431e3545e5fc486df.png";

/***/ }),

/***/ 4707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/07598919c9f90fdd5965.png";

/***/ }),

/***/ 7865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/6d4f9dc9857a71723993.png";

/***/ }),

/***/ 8957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f6ec4a78dd53f002d246.png";

/***/ }),

/***/ 2804:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/774adbee3e084448da9f.png";

/***/ }),

/***/ 6367:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e73bfafc1ada8b7f601f.png";

/***/ }),

/***/ 8278:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/312acb2519ee030eb3fd.png";

/***/ }),

/***/ 2537:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0f1932a3609fff031791.png";

/***/ }),

/***/ 7712:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/093999b0d274f045de8c.png";

/***/ }),

/***/ 2747:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fa2422d49a373e8aef04.png";

/***/ }),

/***/ 7394:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/157bb570a5874e1108f6.png";

/***/ }),

/***/ 9397:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/31b9635e473bf7634212.png";

/***/ }),

/***/ 2622:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/41a896fddb0bdc153f71.png";

/***/ }),

/***/ 311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f91398f0c1bcc6307273.png";

/***/ }),

/***/ 5909:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"title":"что значат четверки в&nbsp;колоде таро","id":"article2","description":"стабильность, ограничения и&nbsp;фундамент: символики четверок в&nbsp;колоде таро","htmlPage":"foursInTarot","image":"article2.png"},{"title":"что такое таро уэйта","id":"article1","description":"что скрывает за&nbsp;собой одна из&nbsp;самых известных колод таро, и&nbsp;что делает ее&nbsp;такой классной","htmlPage":"waiteTarot","image":"article1.png"},{"title":"твоя первая колода","id":"article3","description":"как подобрать свою первую колоду таро так, чтобы стать гуру тарологиней в&nbsp;инстаграме","htmlPage":"yourFirstTarotCards","image":"article3.png"}]');

/***/ }),

/***/ 8689:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"emoji":"💰","line1":"погадать","line2":"на работу","image":"fortuneTelling2.png","id":"fortuneTelling2","htmlPage":"work"},{"emoji":"👀","line1":"карта","line2":"дня","image":"fortuneTelling3.png","id":"fortuneTelling3","htmlPage":"cardoftheday"},{"emoji":"🤍","line1":"расклад","line2":"на любовь","image":"fortuneTelling1.png","id":"fortuneTelling1","htmlPage":"love"}]');

/***/ }),

/***/ 3029:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"htmlname":"pentacles7","color":"pink","arcana":"pentacles","emoji":"VII","line1":"семерка","line2":"пентаклей","none":false,"link":"cards/pentacles7.html","image":"tarotCard75.png","id":"tarotCard75","texttype":"Antiqua","name":"семерка пентаклей, pentakles7","basics":"цветочек, подожди немного, пирамиды тоже не сразу строились ","love":"проблемесы, но всё обсуждаемо","work":"успех придёт, не сомневайся, но надо повременить, обдумай всё ещё раз хорошенько","advice":"не спеши принимать решения","basicMeaning":"награда придёт, не волнуйся, всему своё время, а пока не пришла, можешь подкорректировать проделанную тобой работу, не торопись никуда","loveTelling":"если хочешь нормальных отношений, прими своего бойчика таким, какой он есть, даже если он не хочет смотреть с тобой турецкие сериалы ","answer":"терпи терпи терпи, будет всё","cardOfTheDay":"день ваще не для спешки, если не настроена что-то предпринимать, то и не надо перекури, зачилься в лофте под лоу фай радио на ютубе","adviceLong":"спрячь подальше в склад свою импульсивность, не торопись и взвесь своё финальное решение, а если оно тебя в чём-то не устраивает, то подумай еще пару тройку раз"},{"htmlname":"swords8","color":"pink","arcana":"swords","emoji":"VIII","line1":"восьмерка","line2":"мечей","none":false,"link":"cards/swords8.html","image":"tarotCard63.png","id":"tarotCard63","texttype":"Antiqua","name":"восьмерка мечей, swords8","basics":"сомнения","love":"отдаляетесь друг от друга","work":"трудности","advice":"зай побеседуй ка ты с подружкой на все эти темы","basicMeaning":"ты пока не свободна от судьбы и обстоятельств, ты мудрая и к проблемам отнесешься по-философски и вынесешь для себя урок","loveTelling":"нельзя удержать людей вместе, если они не любят друг друга","answer":"грядут непредвиденные обстоятельства, которые невозможно избежать","cardOfTheDay":"скованный день, будешь чувствовать себя зажатой, возможно ты проявишь свои комплексы, но надо перебороть это зайка","adviceLong":"сфокусируйся на одном деле, не надо распыляться на многое, сейчас нужно поработать, отдых потом кис"},{"htmlname":"theDevil","color":"black","arcana":"major","emoji":"👹","line1":"","line2":"дьявол","none":true,"link":"cards/theDevil.html","image":"tarotCard20.png","id":"tarotCard20","texttype":"Emoji","name":"дьявол, devil","basics":"тебя ваще никто не спрашивал, но будь аккуратнее ","love":"никаких чувств, только секс и деньги ","work":"тю… тут все по черному, интриги, расследования, коррупция ","advice":"собраться с мыслями, поставить и зажечь свечу и начать разгребать дела","basicMeaning":"увлечения, которые появятся в ближайшем будущем не очень хорошие, стоит от них отказаться, а еще стоит отметить, что появится личность, которая сможет взять контроль над тобой, очень важно не подчиняться этому ","loveTelling":"нет искренних чувств и романтики, все основано на личной выгоде, мужикам скажи нет, сейчас вокруг одни тюбики, береги себя ","answer":"недобросовестные действия о которых ты будешь жалеть ","cardOfTheDay":"сегодня ты посмотришь на себя с другой стороны, будет немало искушений от которых стоит воздержаться ","adviceLong":"надо бороться со злом и несправедливостью, улыбайся и говори всем хорошего дня, держи в себе позитивный настрой!"},{"htmlname":"hermit","color":"black","arcana":"major","emoji":"💨","line1":"","line2":"отшельник ","none":true,"link":"cards/hermit.html","image":"tarotCard14.png","id":"tarotCard14","texttype":"Emoji","name":"отшельник, hermit","basics":"карта выпадает если ты реально любишь посидеть дома, а если и выходишь, то сразу поддаёшься влиянию внешних обстоятельств ","love":"ой в любви ваще лафа, если упал отшельник, то где-то тебя уже поджидает твоя идеальная половинка, осталось найти ","work":"в вопросах карьеры карта значит, что уже хорош, пора бы и честь знать, стать для кого-то наставником, ну или вовсе отчалить на пенсию ","advice":"сиди дома, кайфуй, забей на работу, полистай тиндер, может найдёшь себе наконец-то идеальную пару, такого же хиккана, как и ты сама ","basicMeaning":"ваще означает, что ты идейная личность, ищешь смысл жизни, секрет мироздания  и аля-улю, но на самом деле, все в курсе, что тебе просто впадлу из дома выходить","loveTelling":"указывает на чиловые отношения, без всякой суеты, ну тебе только такое и надо, забудь о прошлых душнилах, которые тащили тебя гулять в людные места","answer":"сиди дома, отшельничай, занимайся чем по кайфу, забей на всё, пис","cardOfTheDay":"если выпала карта дня, торгового ничего не скажу, сосредоточатся на себе, медитируй, если чото нужно сделать, то делай в соло, на других челов полагаться вообще не вариант","adviceLong":"думай сама, своей головой, думай о себе, тебе, в принципе, о других думать и неохота, если надо зачилить и уйти в тень, то дерзай, от тебя не убудет "},{"htmlname":"pentacles4","color":"pink","arcana":"pentacles","emoji":"IV","line1":"четверка","line2":"пентаклей","none":false,"link":"cards/pentacles4.html","image":"tarotCard72.png","id":"tarotCard72","texttype":"Antiqua","name":"четверка пентаклей, pentakles4","basics":"сделай распорядок дня","love":"медленное развитие отношений","work":"все ок","advice":"протри пыль и отложи сто рублев","basicMeaning":"здесь про расчетливость, финансовую грамотность и правильное распределение временем","loveTelling":"- Любишь?\\n- Люблю.\\n- Докажи!\\n- Докажу.\\n- А достанешь звезду?\\n- Да, достану, смогу.\\n- Ты солгал!\\n- Я не лгу!\\n- Ты не сможешь достать, до небес дотянуться, и как вишню сорвать.\\n- Я смогу!\\n«слезы асфальта»\\n\\n","answer":"тебя  интересует только кэш – вряд ли ты совершишь что-то значительное","cardOfTheDay":"подумай туда ли вбухиваешь свои силы, может это не напрвление","adviceLong":"не будь агрессором"},{"htmlname":"aceOfCups","color":"pink","arcana":"cups","emoji":"🌸","line1":"туз","line2":"кубков","none":false,"link":"cards/aceOfCups.html","image":"tarotCard39.png","id":"tarotCard39","texttype":"Emoji","name":"туз жезлов, ace of cups","basics":"ура победа ура ура победа","love":"ну ты ваще шальная, скоро появится тот с кем ты обретешь счастье, а если уже такой есть то у тебя будет еще больше счастья!","work":"будет что-то важное","advice":"фоткай что-нибудь на протяжении всего дня","basicMeaning":"светлая добрая карточка, каре резать не надо","loveTelling":"это карточка про большую любовь, это сплошная любовь, ты его бета он твоя альфа, а вместе вы число пи, выпейте пива.","answer":"зай просто шрека посмотри и ты все поймешь","cardOfTheDay":"все, что ты загадывала в течение этого дня, обязательно сбудется. карточка указывает на перемены в любви.\\nчто-то произойдет связанное с человеком из окружения\\nесли ты хочешь с кем-то помириться, то сейчас самое время","adviceLong":"встреться с близкими, позвони тем, кому хотела позвонить, а лучше приезжай в гости! создавай счастье и не жадничай добром"},{"htmlname":"knightOfPentacles","color":"pink","arcana":"pentacles","emoji":"🧩","line1":"рыцарь","line2":"пентаклей","none":false,"link":"cards/knightOfPentacles.html","image":"tarotCard68.png","id":"tarotCard68","texttype":"Emoji","name":"рыцарь пентаклей, knight of pentacles","basics":"энергия прёт из всех щелей","love":"стабильно и надёжно, как чугунная сковородка","work":"деловая хватка и уверенность в завтрашнем дне, соу джаст ду ит","advice":"«не важно с какой скоростью ты двигаешься, главное не останавливайся, братишка» ©Кама Пуля","basicMeaning":"инициатор любого движняка, реалистичная и прагматичная, когда ты в ресурсе, то всем капец","loveTelling":"у вас с масиком сильное влечение друг к другу, карта еще подсказывает, что есть в планах завести бэбуса, класс","answer":"не останавливайся на достигнутом","cardOfTheDay":"не дай себя обмануть зайка, он на серьёзных может пускать тебе пыль в глаза, и никакой он не бизнесмен ","adviceLong":"ты построила себя сама, можешь с лёгкостью продолжать в том же духе, но если какой-то масик захочет вложиться в такой удачный проект, как ты, то не отказывайся "},{"htmlname":"wands3","color":"pink","arcana":"wands","emoji":"III","line1":"тройка ","line2":"жезлов ","none":false,"link":"cards/wands3.html","image":"tarotCard31.png","id":"tarotCard31","texttype":"Antiqua","name":"тройка жезлов, wands3","basics":"money money полный липси ха","love":"начало любви","work":"деньги пахнут пуси а липси ха все в шоколаде","advice":"купи оверпраснутый кофе!","basicMeaning":"трудись и все будет супер, тут все просто","loveTelling":"первые шаги в любовь, если ты с кем-то встречаешься, значит у вас все будет заново, по-новому, очень нежно","answer":"будь уверена в себе ","cardOfTheDay":"соглашайся на любое предложение, сегодня день денег ","adviceLong":"отдохни, съезди на природу, послушай себя"},{"htmlname":"swords7","color":"pink","arcana":"swords","emoji":"VII","line1":"семерка","line2":"мечей","none":false,"link":"cards/swords7.html","image":"tarotCard62.png","id":"tarotCard62","texttype":"Antiqua","name":"семерка мечей, swords7","basics":"ама бэд бич липси деньги мани ха","love":"девки сучки берегитесь, ну у вас ваще кринг какойто.... лицемерие, никакой любви зай, амсори","work":"коллеги у тебя так себе, доверять некому","advice":"подыши маткой ей богу","basicMeaning":"карточка говорит, что может кража, ноне только материальная, возможно духовное истощение","loveTelling":"да кринж у вас, а не любовь, либо расставайтесь либо обговаривайте это говно, ну совсем все плохо зай","answer":"да я ангел, но крылья в ремонте\\nда я демон, но рога у бывших","cardOfTheDay":"сегодня нужно быть осторожной, поджидает где-то обман","adviceLong":"уффффф будь внимательнее, поделай добрые дела"},{"htmlname":"wands10","color":"pink","arcana":"wands","emoji":"X","line1":"десятка","line2":"жезлов","none":false,"link":"cards/wands10.html","image":"tarotCard38.png","id":"tarotCard38","texttype":"Antiqua","name":"десятка жезлов, wands10","basics":"ээээээ подруга ты конечно офигеть крутая, но притормози, ты слишком стараешься, так и до выгорания недалеко","love":"не хватает искренности, сходи на свидание!","work":"тебя ждет стлээссссс......котик нужно постепенно все делать","advice":"родная поспи","basicMeaning":"короче зай смотри, ты сделала уже очень много, ты хорошо потрудилась, но ты так упорно это делаешь, что результат тебя уже может и не порадовать, у тебя не будет сил буквально ни на что, притормози и отдохни","loveTelling":"над отношениями нужно работать вам двоих, кто-то из вас халявит, если ты одинока и влюблена, то питаешь слишком много чувств к этому человеку, зай он похоже тюбик","answer":"карточка говорит, что может начаться депрессия, поговори с близкими людьми, удели время внутреннему составляющему","cardOfTheDay":"сегодня будет сложный день, будет много дел, много проектов, однако ты благополучно с ним справишься, но устанешь как собака","adviceLong":"сейчас трудное время, потому что очень много всего нужно делать, бери руки в ноги и все будет ок"},{"htmlname":"pageOfSwords","color":"pink","arcana":"swords","emoji":"👺","line1":"паж","line2":"мечей","none":false,"link":"cards/pageOfSwords.html","image":"tarotCard57.png","id":"tarotCard57","texttype":"Emoji","name":"паж мечей, page of swords","basics":"ну и характер.... тяжелый как облако","love":"разногласия и конфликты","work":"на работе могут быть ссоры ","advice":"твори добро","basicMeaning":"ну короче такая карта, предупреждает о проблемках, но их можно будет решить добротой, анекдотами и смехом, короче будь легкой","loveTelling":"тююю старые обиды проявятся, а еще холод в отношениях, если ты кого-то любишь, то он кактой-то не оч","answer":"вырасти растение с нуля","cardOfTheDay":"сегодня ты услышишь критику в свой адрес, которую нужно принять спокойно и прислушаться к ней, эта критика дельная","adviceLong":"у тебя очень сильная энергетика, не многие могут ее понять и справиться с ней, не скрывай свои эмоции, если чувствуешь раздраженность покажи ее"},{"htmlname":"wheelOfFortune","color":"black","arcana":"major","emoji":"🎱","line1":"","line2":"фортуна ","none":true,"link":"cards/wheelOfFortune.html","image":"tarotCard15.png","id":"tarotCard15","texttype":"Emoji","name":"колесо фортуны, фортуна, wheel fortune","basics":"не стоит ничего менять","love":"все само наладится ","work":"надо радоваться, не надо напрягаться","advice":"перебери свой гардероб","basicMeaning":"старые ситуации будут проявляться вновь, однако у тебя есть шанс обернуть все в свою сторону","loveTelling":"верь в себя и будь собой, и тогда все наладится, важно знать, что карта говорит о налаживании отношений ","answer":"ситуацию ты не сможешь изменить, оставь так","cardOfTheDay":"день будет нежный, однако стоит принимать все с благодарностью, можно положиться на судьбу, все решится, дорогая","adviceLong":"важно понимать, что не все зависит от нас, карта показывает бессилие человека перед судьбой, однако стоит принимать это в хорошем ключе "},{"htmlname":"wands8","color":"pink","arcana":"wands","emoji":"VIII","line1":"восьмерка","line2":"жезлов ","none":false,"link":"cards/wands8.html","image":"tarotCard36.png","id":"tarotCard36","texttype":"Antiqua","name":"восьмерка жезлов, wands8","basics":"будь или не будь","love":"ватафак, похоже тебе напишет бывший, ","work":"ты все сможешь сделать сама, вумен супримаси","advice":"подари себе хризантему","basicMeaning":"многое произойдет намного раньше, чем ты на это расчитвваешь","loveTelling":"в целом в лбюбви все ок, нов всплевут старые отношения","answer":"все новое – все хорошее","cardOfTheDay":"сегодня хороший день, будут только положительные новости, выпей вкусного чаю","adviceLong":"моя хорошая, тут ваще без передышек пахать и пахать надо, но зато это все окупится"},{"htmlname":"moon","color":"black","arcana":"major","emoji":"🌙","line1":"","line2":"луна","none":true,"link":"cards/moon.html","image":"tarotCard22.png","id":"tarotCard22","texttype":"Emoji","name":"луна, moon","basics":"эта карта – твой оберег ","love":"моя хорошая, побудь одна, тебе лучше без мужчин, а если у тебя есть мужчина, то не верь иллюзиям и мечтам","work":"что-то тут не чисто, помойся ","advice":"сходи в душ, охладись, двигайся аккуратно ","basicMeaning":"короче ты отказываешься смотреть правде в глаза, потому что она неприятна, сейчас очень легко допустить ошибку, наступила темнота в определенных делах, и ответа пока что не видно","loveTelling":"карта говорит, что ты не уверена в своем партнере, стоит сбросить маски и посмотреть правде в глаза\\nон тебе не пара-не пара, вот такая вот запара-запара","answer":"ты считаешь, что у тебя недостаточно опыта для решения определенных вопросов, однако карта не знает права ли ты, стоит взглянуть на свои знания трезво","cardOfTheDay":"день может показаться неблагоприятным, однако стоит продолжать делать свои дела, прими этот день таким какой он есть","adviceLong":"перестань бояться, карта поможет тебе все исправить, она прямолинейна и говорит все как есть, но видит, что все наладится"},{"htmlname":"kingOfCups","color":"pink","arcana":"cups","emoji":"🤯","line1":"король","line2":"кубков","none":false,"link":"cards/kingOfCups.html","image":"tarotCard40.png","id":"tarotCard40","texttype":"Emoji","name":"король кубков, king of cups","basics":"про дом, заботу и уют","love":"карта символизирует масика. сходи уже на свидание!","work":"все ровно","advice":"проведи вечер с семьей","basicMeaning":"тютютютютю пупупу мяу мяу мяу это карта милоты и добра, все хорошо, моя хорошая, все чего ты так хотела уже вот ну прям ну вот уже здесь, чууууток подожди","loveTelling":"ну ты ваще, соу хот, соу хорни, в отношениях все супир, а если их нет то пора открыть тиндер зай.........\\n","answer":"как бы это не звучало, но обрати внимание на мужчин, тебе дадут совет","cardOfTheDay":"все рядом все близко, думай головой, а не сердцем и все будет суперрррррррр, но не забывай про любимых, скажи им сегодня как сильно ты их любишь","adviceLong":"поддерживайте друг друга, соу визис лас уугугугу вис из лав, мужик у тебя что надо, подруга!"},{"htmlname":"cups2","color":"pink","arcana":"cups","emoji":"II","line1":"двойка ","line2":"кубков","none":false,"link":"cards/cups2.html","image":"tarotCard44.png","id":"tarotCard44","texttype":"Antiqua","name":"двойка кубков, cups2","basics":"заюш, если ты с кем-то поссорилась, то мир не за горами ","love":"романтичные встречи, схождение конфликтов на нет, взаимопонимание","work":"коллективная работа, успешный успех, уважение коллег","advice":"не надейся только на себя, поищи помощи у товарищей","basicMeaning":"сейчас лучшее время, чтобы помириться со своим масиком, отложи амбиции и обиды и сделай первый шаг к примирению","loveTelling":"карта вещает, что люди созданы друг для друга. обычно о таких людях говорят так: родственные души. сможете найти общий язык и ваще всё пучком у вас, смотрю и радуюсь","answer":"не имей 100 биткоинов а имей 100 друзей, с ними у тебя все пойдут как по маслу","cardOfTheDay":"день запомнится делами сердечными, будет любовь, примирение, пиво, чипсы, короче самое лучшее, что есть на свете","adviceLong":"обрати внимание на свое окружение, не надо пытаться всё сделать самой, твои близкие, твоя опора, не бойся когда ты одна, бойся, когда ты ноль "},{"htmlname":"kingOfSwords","color":"pink","arcana":"swords","emoji":"🤴","line1":"король","line2":"мечей","none":false,"link":"cards/kingOfSwords.html","image":"tarotCard54.png","id":"tarotCard54","texttype":"Emoji","name":"король мечей, king of swords","basics":"ты осознаешь свою власть и лидерство, ты жоская личность","love":"ты абьюзерша, экспериментируешь над партнёром ","work":"ты невероятная бизнесменка, у тебя куча идей","advice":"используй все свои тузы в рукаве прямо сейчас","basicMeaning":"ты целеустремленная тётя к которой все обращаются за советом, ты серьёзный авторитет, в 90-е крышевала пару ларьков на арбате ","loveTelling":"может появиться ясность в отношениях, поставишь жоскую точку .","answer":"козыряй всем что есть, не стесняйся ","cardOfTheDay":"тебе приготовлено испытание, подготовься к нему получше используй всё, на войне все средства хороши ","adviceLong":"ты справишься со всем, на плюс морали, но не забивай о хорошей подготовке, без нее никуда"},{"htmlname":"wands6","color":"pink","arcana":"wands","emoji":"VI","line1":"шестерка","line2":"жезлов ","none":false,"link":"cards/wands6.html","image":"tarotCard34.png","id":"tarotCard34","texttype":"Antiqua","name":"шестерка жезлов, wands6","basics":"ура победа победа ура победа","love":"ну тут что-то новенькое будет","work":"все долгие дела наконец-то завершатся!","advice":"позвони бабушке и маме","basicMeaning":"появится новое знакомство, которые поможет решить сложные задачи, эта карта про успех, но не на ровном месте, а про заслуженный успех, поэтому поднажми, моя хорошая ","loveTelling":"эта карта про любовь, если ты одинока, то скоро тебя ждет романтик вайбс, а если ты не одинока, то твои отношения будут супир, вы ваще нереальные, а еще карта говорит, что скоро поступит важный звоночек или просто придет хорошая информэйшн, стоит хорошо общаться с новыми знакомыми","answer":"карточка говорит, что придется принять какое-то важное решение, но ты займешься верную сторону ","cardOfTheDay":"сегодня будет успешное решение дел над которыми ты так давно ломаешь голову, сегодня будет много дел, которые пройдут хорошо, а еще ожидается денежка, которую лучше всего потратить с близкими тебе людьми ","adviceLong":"это добрая карточка говорит о белой полосочке в в твоей жизни, денежка будет"},{"htmlname":"world","color":"black","arcana":"major","emoji":"🌍","line1":"","line2":"мир","none":true,"link":"cards/world.html","image":"tarotCard25.png","id":"tarotCard25","texttype":"Emoji","name":"мир, world","basics":"это мирный житель","love":"подруга в любви все невероятно ","work":"ты знаешь чего хочешь от жизни, просто иди к этому и мир тебе поможет ","advice":"послушай тейлор свифт ","basicMeaning":"гармония с миром, полнейшая удовлетворенность, стоит принять факт того, что удача будет на твоей стороне","loveTelling":"вы ваще нереальные, подходите друг другу так, что ваще невозможно, это невероятная любовь ","answer":"удача будет рядом с тобой постоянно, все сложится воедино, ты ваще афигеешь","cardOfTheDay":"счастье, любовь, дружба, новый дом – похоже кто-то сегодня ночует не дома, стоит учитывать, что сегодня все супер круто ","adviceLong":"ищи новые цели и иди к их реализации"},{"htmlname":"cups3","color":"pink","arcana":"cups","emoji":"III","line1":" тройка","line2":"кубков","none":false,"link":"cards/cups3.html","image":"tarotCard45.png","id":"tarotCard45","texttype":"Antiqua","name":"тройка кубков, cups3","basics":"хорошее время, чтобы вспомнить былое","love":"тупо на чилле на расслабоне","work":"на работе все ок, но повышений не будет ","advice":"позвони тем, кому ты так давно не звонила ","basicMeaning":"духовное умиротворение и спокойствие,   все новые дела будут успешными ","loveTelling":"вумен супримаси, крепкая женская дружба, не ставь мужчин на первое место ","answer":"будешь видеть выгоду в делах, тебя будут хвалить, ты ваше такая талантливая ","cardOfTheDay":"так ну день ваще кайф все по доброму, вспомни про близких, соберетесь вместе, не скупись на эмоции, возможно будет приятное знакомство, от которого не стоит отказываться ","adviceLong":"судьба тебя балует, все хорошо, все супер, все получается, построй планы на ближайшее время (неделя, месяц)"},{"htmlname":"lovers","color":"black","arcana":"major","emoji":"💕","line1":"","line2":"влюбленные","none":true,"link":"cards/lovers.html","image":"tarotCard11.png","id":"tarotCard11","texttype":"Emoji","name":"влюбленные, lovers","basics":"постоянный выбор","love":"в любви все супер здесь и сейчас, а если никого рядом нет, то скоро обязательно появится!","work":"никакого лидерства, только взаимопомощь","advice":"желай всем хорошего дня и скажи комплименты окружающим ","basicMeaning":"тебе придется выбирать между умом и сердцем, главное, чтобы твои поступки были добрыми ","loveTelling":"ты любишь, тебя любят, все вокруг друг друга любят. сплошная любовь и взаимопонимание ","answer":"не веди себя безответственно","cardOfTheDay":" сегодня пора принять окончательное решение и расставить точки над и, чтобы получить й, короче все чики пуки будет, сегодня дедлайн выполнения старых дел","adviceLong":"без суеты, не мороси, прислушивайся к людям, они уже дали тебе ответ"},{"htmlname":"swords2","color":"pink","arcana":"swords","emoji":"II","line1":"двойка","line2":"мечей","none":false,"link":"cards/swords2.html","image":"tarotCard58.png","id":"tarotCard58","texttype":"Antiqua","name":"двойка мечей, swords2","basics":"затворник, закрылась от мира","love":"скоро будет примирение ","work":"скоро закончишь проектик","advice":"не вступай ни с кем в ссоры, даже если очень хочется ","basicMeaning":"все тебя бесят, все раздражают и от всех закрылась, сидишь сама себе на уме, мух считаешь, ну так и надо, не давай никому к тебе лезть ","loveTelling":"твой масик покажет тебе свои лучшие качества и возможно отвезёт в дубай на шоппинг","answer":"продемонстрируй, что ты на всех обиделась, но готова простить, если постараются ","cardOfTheDay":"чот сегодня тебя будут преследовать сомнеееения, тревоооооги, отложи лучше на завтра все решения ","adviceLong":"тебя будут провоцировать на конфликты, не ведись, держи себя уверенно, знай себе цену, ты себя не на помойке нашла, ты выше этого"},{"htmlname":"theHangedMan","color":"black","arcana":"major","emoji":"👀","line1":"","line2":"повешенный ","none":true,"link":"cards/theHangedMan.html","image":"tarotCard17.png","id":"tarotCard17","texttype":"Emoji","name":"повешенный, hanged man","basics":"озарение","love":"скорее всего это не тот самый","work":"зай притормози и ниче пока не делай, подумай и подуши носиком ","advice":"пропей курс витаминов и купи себе комнатное растение ","basicMeaning":"ты находишься под давлением ситуации или человека, пересмотри свои решения","loveTelling":"пока что все не чики-пуки, но и предпринимать ничего не надо, стоит смириться и ждать ","answer":"попробуй подумать о том, что от этого можно отказаться ","cardOfTheDay":"зайка плыви по течению и особо не вые, поменять сегодня мало что можно","adviceLong":" подчинись обстоятельствам и все будет ок"},{"htmlname":"pageCups","color":"pink","arcana":"cups","emoji":"😌","line1":"паж ","line2":"кубков","none":false,"link":"cards/pageCups.html","image":"tarotCard43.png","id":"tarotCard43","texttype":"Emoji","name":"паж кубков, page of cups","basics":"тихая радость ","love":"драки будут не долгими ","work":"тебя будут хвалить, ты ваще умничка","advice":"сделай бутерброд с докторской колбасой и маслом ","basicMeaning":"ты ваще сама нежность, эта карта про любовь, любовь вокруг, все всех любят, все супер, благополучие ","loveTelling":"зай ну он конечно не масик, но и не тюбик, но довольно серьезный мен с серьезными намерениями, люби, но будь аккуратна ","answer":"стоит думать своей головой и положиться только на себя ","cardOfTheDay":"день будет полон маленькими радостями, не бойся принимать подарки судьбы ","adviceLong":"проекты, которыми ты занимаешься, лучше отложить, они не имеют сильного значения, доверься интуиции"},{"htmlname":"swords9","color":"pink","arcana":"swords","emoji":"IX","line1":"девятка","line2":"мечей","none":false,"link":"cards/swords9.html","image":"tarotCard64.png","id":"tarotCard64","texttype":"Antiqua","name":"девятка мечей, swords9","basics":"бессилие перед неудачами","love":"кринж он","work":"паника в работе с коллективом","advice":"зай ты себя накручиваешь и загоняешься с ничего, релакс, выпей винчика с хачапурей","basicMeaning":"тебя будут мучать тревоги и неудачи, которые засели в подсознании, зай они уже в прошлом, забей, ничего уже не поменять, живи кайфуй дальше","loveTelling":"а мой мальчик ездит на девятке.. так он от тебя и уедет, дорогая, он тюбик, не печалься, купи лучше тюбик зубной пасты, от нее больше пользы","answer":"принимай только позитивные мысли, ищи поводы для радости","cardOfTheDay":"мама этот день как сон, но это будет кошмар БУ, но просто надо пережить это говно","adviceLong":"не стоит быть одной, стоит делиться чувствами с друзьями, поеделись!"},{"htmlname":"justice","color":"black","arcana":"major","emoji":"🤝","line1":"","line2":"справедливость ","none":true,"link":"cards/justice.html","image":"tarotCard16.png","id":"tarotCard16","texttype":"Emoji","name":"справедливость, правосудие, justice","basics":"штош пора взяться за дела","love":"скромно, тихо и без страсти, но хорошо","work":"чето точно прояснится ","advice":"выучи 5 новых слов на английском и наведи порядок в комнате ","basicMeaning":"ну короче прошлые поступки могут аукнуться, но надо понимать, что их можно обернуть в правильную сторону. а еще пора браться за свои дела, стоит навести порядок","loveTelling":"уважать своего партнера и любить его, сейчас тихий период, возможно без страсти, но тоже добрый, важно пройти все без обид","answer":"большая ответственность перед собой и окружающими","cardOfTheDay":"стоит быть внимательной и присматриваться к каждой детали, а еще сегодня надо будет много подумать ","adviceLong":"ответственность за свои действия, тут уже без судьбы, работай и смотри сама по-ситуации"},{"htmlname":"emperor","color":"black","arcana":"major","emoji":"🫃","line1":"","line2":"император","none":true,"link":"cards/emperor.html","image":"tarotCard9.png","id":"tarotCard9","texttype":"Emoji","name":"император, emperor","basics":"рядом с&nbsp;тобой шуга деддик! какой-то сильный мужичина! осторожно! опасно! осторожно! осторожно! подумай! отец? брат? никита? прошу, аккуратней","love":"какой-то овен скорее всего. какой-то надежный партнер. это все про серьезные отношения, так что проработай на&nbsp;следующей сеансе с&nbsp;психотерапией свой паттерн с&nbsp;избеганием, чтобы не&nbsp;отпугнуть этого масика.&nbsp;но&nbsp;в&nbsp;целом, это все про стабильность и&nbsp;соулмейтов","work":"полное благополучие! займись только соушл нетворкингом по&nbsp;возможности, полистай новые вакансии на&nbsp;хедхантере и&nbsp;сходи по&nbsp;приколу на&nbsp;пару собесов. никогда не&nbsp;будет лишним, а&nbsp;так все в&nbsp;шоколаде!","advice":"пора расставить приоритеты с&nbsp;внешних на&nbsp;внутренние, проявить стойкость и&nbsp;терпение. тут висит ружье чехова&nbsp;&mdash; значит, скоро оно выстрелит","basicMeaning":"карта говорит обдумывать поступки, быть рассудительной, двигаться ровно и все будет супир","loveTelling":"долгие крепкие отношения, построенные на взаимоуважении, зайка это бинго","answer":"решения стоит принимать взвешенно, но быстро, эта карта про надежность и устойчивость, надо только подумать как и где ее правильно применить","cardOfTheDay":"сегодня дела идут хорошо, можно взяться за то, что так давно откладывалось, а если такого нет, то можно кучу всего заспидранить и оно будет отлично сделано","adviceLong":"стоит помнить о себе и быть рациональным, прежде чем помочь другому, стоит подумать не навредишь ли ты себе. а еще не стесняйся делать так, как считаешь нужным!"},{"htmlname":"pentacles8","color":"pink","arcana":"pentacles","emoji":"VIII","line1":"восьмерка","line2":"пентаклей","none":false,"link":"cards/pentacles8.html","image":"tarotCard76.png","id":"tarotCard76","texttype":"Antiqua","name":"восьмерка пентаклей, pentakles8","basics":"нежность","love":"удачное развитие отношений","work":"попробуй че нить новое","advice":"жоско уберись в квартире под моргернштерна","basicMeaning":"ты свободна и успешна, только если не ищешь личную выгоду, будут новые знакомства, не бойся быть клоунесссой","loveTelling":"все ок, и если отношения есть – все ок, если отношений нет – тоже все будет ок, это карточка про людей и любовь","answer":"если ты все хорошо обдумаешь, то ты добьешься нереального уважения к себе","cardOfTheDay":"не переоцени себя, не бери слишком много забот, набирайся опыта","adviceLong":"подумай прежде чем сказать, будь терпелива к окружающим "},{"htmlname":"temperance","color":"black","arcana":"major","emoji":"⚖️","line1":"","line2":"умеренность ","none":true,"link":"cards/temperance.html","image":"tarotCard19.png","id":"tarotCard19","texttype":"Emoji","name":"умеренность, temperance","basics":"ой ваще добрая карта все хорошо","love":"в любви все спокойно и нежно, можно зайти в тиндер","work":"относить с добром, без суеты, и все будет хайп ","advice":"можешь делать че хочешь, поиграю в майнкрафт, посмотри что хочешь, погуляй с подружками, все ваще суперрррр","basicMeaning":"все супер, все пройдет гладко, все разногласия закончатся, все будет тихо мирно и спокойствие, уровень сложность на нуле ","loveTelling":"в отношениях все прекрасно, штиль, гармония и нежность, а если ты одинока, то карта дарит новое знакомство","answer":"доводи все начатые дела до конца","cardOfTheDay":"замечательный день, дорогая! ты сможешь наладить все, что тебя терзало, а еще твои советы крайне ценны сегодня, поэтому общайся побольше и говори о своей точке зрения!","adviceLong":"придет смысл, дружелюбие, взаимопонимание, не стоит конфликтовать и помни о спокойствии "},{"htmlname":"wands7","color":"pink","arcana":"wands","emoji":"VII","line1":"семерка ","line2":"жезлов ","none":false,"link":"cards/wands7.html","image":"tarotCard35.png","id":"tarotCard35","texttype":"Antiqua","name":"семерка жезлов, wands7","basics":"ща будем драться со всеми твоими напастями ","love":"как-то все не ровно, будут трудности ","work":"самой тут не разобраться, стоит попросить о помощи, не бери на себя слишком много ","advice":"посмотри «драйв» с районом гослингом","basicMeaning":"карта хорошая, но говорит, чтобы это хорошее наступило надо будет пережить и побороть всякое говно, это продлится недолго","loveTelling":"карта в целом хорошая, говорит, что все будет окей, но вот каким путем. возможно стоит расстаться, а может надо проанализировать ситуацию и пережить эти трудности","answer":"прямо заявляй о себе и не бойся осуждения ","cardOfTheDay":"сегодня нужно позаниматься спортом, день очень активный ","adviceLong":"зай тут без героизма, попроси о помощи пжпжпжпж тебе так будет легче реально"},{"htmlname":"aceOfPentacles","color":"pink","arcana":"pentacles","emoji":"💋","line1":"туз","line2":"пентаклей","none":false,"link":"cards/aceOfPentacles.html","image":"tarotCard5.png","id":"tarotCard5","texttype":"Emoji","name":"туз пентаклей, ace of pentacles ","basics":"крепкая карта, скоро появится хорошая новость","love":"в любви все хорошо","work":"с денежками все супер, это ваще гениальная карта для материальных благ","advice":"поработай на улице и купи себе летний напиток","basicMeaning":"тот кого описывают этой картой просто нереалка. этот человек ваще гениальный, у него все супер, есть уверенность в завтрашнем дне полный хайп короче \\n","loveTelling":"в любви все супер, вы оба стремитесь объединиться, куча взаимопонимании и свободы, короче вы как шрек и фиона, нереальные и сладкие","answer":"штош пора начать то, что так давно откладывалось, дочитать книжку, сесть за английский и посмотреть в свой ту ду и понять, что работы будет много","cardOfTheDay":"МАММА МИЯ!! беги за лотерейным билетом, этот день невероятный, удача, хорошее настроение, никакой депрессии и ментал брейкдаунов","adviceLong":"считай, что это лучшая карта в колоде, реализуй все начинания! пуси джуси на тусе ты ваще, ну ваще и ну и карта, все просто нереально"},{"htmlname":"aceOfSwords","color":"pink","arcana":"swords","emoji":"🗡️","line1":"туз","line2":"мечей","none":false,"link":"cards/aceOfSwords.html","image":"tarotCard53.png","id":"tarotCard53","texttype":"Emoji","name":"туз мечей, ace of swords","basics":"аркан триумфа и победы, отставить сомнения","love":"кризис закончится, общий язык найдется ","work":"ты тратила силы и нервы не зря, скоро всё воздастся ","advice":"будь решительней, не ссы","basicMeaning":"есть новые планы? значит их надо воплощать в реальность. есть кризис? значит пройдёт","loveTelling":"внезапный разгар страсти, новые отношения, но избегай двусмысленности, говори лучше всё прямо, кому нужны эти ваши намёки","answer":"не стрессуй, не волнуйся и не сомневайся во всем и всё будет чики-пуки","cardOfTheDay":"сегодня выпадет шанс решить тяжкую задачку, которая не давала спать последние несколько недель","adviceLong":"быть решительной не так уж и сложно, как может показаться решение прийдет резко и само собой как понос"},{"htmlname":"priestess","color":"black","arcana":"major","emoji":"💅","line1":"","line2":"жрица","none":true,"link":"cards/priestess.html","image":"tarotCard3.png","id":"tarotCard3","texttype":"Emoji","name":"жрица, верховная жрица, priestess","basics":"ты&nbsp;что, дышишь маткой? тогда откуда такая мудрость и&nbsp;проницательность? можешь сделать свой инфопродукт об&nbsp;этом, потому что ты&nbsp;&mdash; сила, ты&nbsp;&mdash; красива. ❤️‍🔥 вокруг тебя окружает лишь успех, полный флекс.&nbsp;и&nbsp;все это не&nbsp;останется незамеченным!","love":"вокруг одни только траблы, подруга. полный непрогляд! ты&nbsp;будто главная героиня дурацкого фанфика, который так и&nbsp;не&nbsp;дописали, так что сейчас прислушийся к&nbsp;себе и&nbsp;делай, как тебе угодно","work":"выключай в&nbsp;себе конкуренцию, эта гонка никуда от&nbsp;тебя не&nbsp;денется! пора войти в&nbsp;поток и&nbsp;не&nbsp;надо спешить! ты&nbsp;все равно самая крутая герлллллл","advice":"&mdash;&nbsp;Никогда ничего не&nbsp;бойтесь! Живите здесь и&nbsp;сейчас! Кайфуйте. Жизнь одна... А&nbsp;мне так страшно, но&nbsp;я&nbsp;с&nbsp;Вами ничего не&nbsp;боюсь, слышите?!&thinsp;&copy;Ольга Бузова","basicMeaning":"остаемся дома, сидим в спокойствии, смотрим все что хотим, делаем все что хотим, главное быть умиротворенным и ждать, а ждать надо будет новой инфы, которая заставит посмотреть на ситуацию под другим углом\\n⠀\\nдуховная мудрость... короче ты ваще так преисполнился, что ваще....\\n⠀\\nстоит подумать над прошлым, вспомнить старые знания это может помочь для решения каких-либо задач, короче полистай свою галерею","loveTelling":"тюююююююю, отношения гавно, либо ты скрыто любишь, либо скрыто любят тебя, но в отношениях все не хайп от слова совсем, лучше сделай масочку для лица, сделай тренировочку и побудь с собой\\n⠀\\nкороче ты сильная и независимая, но и одникая.... нафик тебе эти мужики лучше поиграй в майнкрафт","answer":"так ну дела будут и очень даже хорошие, но торопиться не надо, только когда будешь чувствовать себя уверенно все, тогда и принимай решения и все будет супир\\n⠀\\nмедетируй!","cardOfTheDay":"вдох выход слушай себя, ты королева этой жизни, только ты знаешь как надо\\n⠀\\nкаких-то супер важных дел лучше не делать, если не хочешь чего-то делать – НЕ ДЕЛАЙ, сегодня стоит побольше подумать, чем что-либо делать","adviceLong":"наблюдай и следи за ситуацией"},{"htmlname":"cups6","color":"pink","arcana":"cups","emoji":"VI","line1":"шестерка","line2":"кубков","none":false,"link":"cards/cups6.html","image":"tarotCard48.png","id":"tarotCard48","texttype":"Antiqua","name":"шестерка кубков, cups6","basics":"ама бэд бич","love":"хайп хайп хайп ты ваще нереальная ","work":"ой мама все хайп","advice":"делай что делаешь, порешай судоку","basicMeaning":"все по-доброму, повезет в любых начинаниях, все ваще суперрррррр","loveTelling":"человек который с тобой рядом послан судьбой, чтобы ты была счастлива, еще будут новые знакомства ю ноу да","answer":"все люди как люди а я супер звезда ","cardOfTheDay":"побольше фотографируй в течение дня, этот день подарит добрые эмоции и воспоминания, что-то из старого вернется, человек, ручка потерянная несколько недель назад или вернут долг??? сегодня узнаешь","adviceLong":"будь с людьми, не сиди дома, сходи на тусовку и развейся, танцуй пока молодая девочка моя танцуй танцуй и верь в себя "},{"htmlname":"pageOfWands","color":"pink","arcana":"wands","emoji":"🕺 ","line1":"паж","line2":"жезлов ","none":false,"link":"cards/pageOfWands.html","image":"tarotCard30.png","id":"tarotCard30","texttype":"Emoji","name":"паж жезлов, page of wands","basics":"свежесть ","love":"это не любовь, а привязанность","work":"перспективы имеются ","advice":"ну такой вайб спелости и смелости, напиши карту желаний ","basicMeaning":"в твоей жизни появится какой-то новый человек ","loveTelling":"дорогая, тебе не нужен этот тюбик, это все влюбленность, не любовь ","answer":"есть возможет решить проблему, но как именно карта не скажет ","cardOfTheDay":"сегодня ждет яркое и неосновной событие, смотри в оба, вселенная даст тебе знаки, будет что-то смешное ","adviceLong":"стоит здраво оценивать свои силы, иначе жди беды "},{"htmlname":"pentacles9","color":"pink","arcana":"pentacles","emoji":"IX","line1":"девятка","line2":"пентаклей","none":false,"link":"cards/pentacles9.html","image":"tarotCard77.png","id":"tarotCard77","texttype":"Antiqua","name":"девятка пентаклей, pentakles9","basics":"нуждаешься в совете","love":"все ок","work":"денежка при тебе, котик","advice":"завари зеленый чай и побудь в тишине, а потом позвони друзьям по фэйстайму","basicMeaning":"конец долгой работы, но это еще не все, в тебе есть эгоизм и желание от всех отстраниться, что неправильно  ","loveTelling":"в отношениях новый уровень и судьбоносная встреча","answer":"материальный успех зависит не только от высоких доходов, но и от умения их сохранить","cardOfTheDay":"будут приятные известия, будь решительна в новых делах!","adviceLong":"поговори с людьми, не бойся спрашивать"},{"htmlname":"theMagician","color":"black","arcana":"major","emoji":"🔮","line1":"","line2":"маг","none":true,"link":"cards/theMagician.html","image":"tarotCard2.png","id":"tarotCard2","texttype":"Emoji","name":"маг, волшебник, magician","basics":"вайб оби-вана из&nbsp;звездных войн, вот такой вот троп ментора. это все про духовное, траты денег по&nbsp;пушкинской карте и&nbsp;пролистывание литературных тиктоков. апостол петр вошел в&nbsp;чат","love":"открывай тиндер, это время для новых знакомств. пора забанить своего дединсайдика и&nbsp;начать искать масика вместо этого тюбика. это активное и&nbsp;быстрое время, так что придется писать первой","work":"забудь про бедное мышление и&nbsp;начинай читать &laquo;бедный папа, богатый папа&raquo;, &laquo;думай и&nbsp;богатей&raquo;, &laquo;илон маск&raquo;. напиши боссу о&nbsp;повышении в&nbsp;11:11, может прокатить","advice":"визуализации и&nbsp;аффирмации работают.<br>Я&nbsp;лью Cristal или Chandon Mo&euml;t <br>Мечтал&nbsp;&mdash; теперь моё💅😇","basicMeaning":"ну ты ваще полный доминант, карта говорит, что у тебя есть право брать верх над кем-то и добиваться всего \\n⠀\\nмаг является первой картой семерицы, поэтому представлена, как начало нового жизненного этапа. это пустой период, где нет совершенных дел, а значит нет и ошибок!","loveTelling":"картв символизирует очаровательного человека, стоит проявить решительность (если гадаешь на себя), а если на кого-то(надеюсь уж точно на масика) то тут все кайф, жди его, он проявит первый шаг\\n⠀\\nкороче все ваще секси в отношениях, все будет, все друг друга понимают, ну ваще нежность","answer":"стоит рискнуть и&nbsp;все будет супир","cardOfTheDay":"короче, если чувствуешь, что все идет по плану и видишь логику каждого действия, то рискуй! день будет хорошим\\n⠀\\nне скромничай и не бойся показать себя, все будет проходить супир, если не будешь надевать маску и скрывать себя. рискуй!!!\\n⠀ \\nиди гулять, смотри на деревья, сфоткай все синие предметы по пути","adviceLong":"обрати внимание на свои таланты и на то, что тебе нравится, нужно полюбить себя и услышать себя\\n⠀\\nготовь себя к успеху, карта говорит открыться, выйди погулять, сходи в музей, кафе, выставку, куда угодно"},{"htmlname":"swords6","color":"pink","arcana":"swords","emoji":"VI","line1":"шестерка","line2":"мечей","none":false,"link":"cards/swords6.html","image":"tarotCard61.png","id":"tarotCard61","texttype":"Antiqua","name":"шестерка мечей, swords6","basics":"пора меняться ","love":"большие перемены","work":"все спокойно, все ровно, прямо как y=x","advice":"делай то, что ты никогда не делала","basicMeaning":"карта видит в тебе желание перемен, но ты этого стремаишься, не бойся, это откроет дорогу для счастья в твоей жизни","loveTelling":"это может быть расставанием, а может выходом отношений на новый уровень, новое знакомство точно будет","answer":"ты многое можешь, нужно \\n«вчера я был умным, и поэтому я хотел изменить мир. сегодня я стал мудрым, и поэтому я меняю себя» Джалаладдин Руми","cardOfTheDay":"интересный день и ничего плохого","adviceLong":"емае в тебе много не реализованных талантов, подумай над этим!!"},{"htmlname":"death","color":"black","arcana":"major","emoji":"⚰️","line1":"","line2":"смерть","none":true,"link":"cards/death.html","image":"tarotCard18.png","id":"tarotCard18","texttype":"Emoji","name":"смерть, death","basics":"штош что-то пришло к логическому завершению дорогая ","love":"этап расставаний и начала новых отношений","work":"новая работа, завершение проектов ","advice":"вдох-выдох идем дальше, сделай небольшую паузу ","basicMeaning":"новая жизнь, и не факт, что с понедельника!","loveTelling":"если ты одинока, скоро будет новый этап, а если ты думала о расставании и прекращении дружбы с кем-либо, подруга, пора действовать","answer":"в делах в н измениться, это может быть новый проект, новая должность, а вот со здоровьем тут не ладно","cardOfTheDay":"нет смысла воротить прошлое, отпусти его, сегодня завершится какой-то этап и к нему уже будет не вернуться ","adviceLong":"тебя ждут жоские перемены, будь готова к чему-то новому"},{"htmlname":"cups8","color":"pink","arcana":"cups","emoji":"VIII","line1":"восьмерка","line2":"кубков","none":false,"link":"cards/cups8.html","image":"tarotCard50.png","id":"tarotCard50","texttype":"Antiqua","name":"восьмерка кубков, cups8","basics":"поиск нового, теряя старое ","love":"ну такое себе, не очень все","work":"новая обстановка и все будет супер","advice":"нарисуй картину по урокам боба росса","basicMeaning":"то что ты ищешь у тебя под носом:/ ищи новые возможности, новые увлечения, будь скромной и не лги и все проблемы решаться ","loveTelling":"ты думаешь только о новом, старое тебя не привлекает, похоже у тебя остались чувства к твоему партнеру, рутина вымотала, если ты одинока, значит пока у тебя не будет сильной любви ","answer":"для многих дел стоит сменить обстановку, куда-то уехать, поменять взгляды на мир","cardOfTheDay":"зай не тупи сегодня, попробуй поездить маршрутами, которых ты не знаешь, делай так как непривычно, сегодня максимально надо вести себя не так как обычно, добавь драйва","adviceLong":"сама ситуация никак не разрешится, никто не поможет, только ты своими силами способна ее решить"},{"htmlname":"pentacles3","color":"pink","arcana":"pentacles","emoji":"III","line1":"тройка","line2":"пентаклей","none":false,"link":"cards/pentacles3.html","image":"tarotCard71.png","id":"tarotCard71","texttype":"Antiqua","name":"тройка пентаклей, pentakles3","basics":"прогресс","love":"обычно эта карта про свадьбу","work":"все в ажуре\\nбыстрый и верный успех","advice":"все чики пуки делай как делаешь","basicMeaning":"не стоит полагаться только на себя, прими помощь от окружающих, аркан предупреждает об излишней самодеятельности","loveTelling":"серьезные отношения, судьба никак н влияет на тебя, ты сама контролируешь ситуацию, поэтому все будет только так как ты сделаешь","answer":"улучшения не будет, но и ухудшения тоже!! все нормисно","cardOfTheDay":"хватит думать о прошлом, закончиться долгий рутинный этап","adviceLong":"нужно делать хорошо любое дело и не зацикливаться на нем"},{"htmlname":"star","color":"black","arcana":"major","emoji":"⭐️ ","line1":"","line2":"звезда ","none":true,"link":"cards/star.html","image":"tarotCard21.png","id":"tarotCard21","texttype":"Emoji","name":"звезда, star","basics":"это замечательная карточка – твоя подружка, которая говорит, что все будет хорошо, это твоя передышка","love":"если ты одна, то скоро кто-то появится, если ты не одна, то отношения будут долгими и нежными","work":"все улучшится на работе","advice":"почитай книжку про космос и звезды","basicMeaning":"есть что-то выше обыденного и материальной суеты, что-то сакральное, карта говорит о спокойствии и умиротворении, нет ничего недоступного, все в твоих руках","loveTelling":"произойдет свидание с расчетом на долгие отношения, короче лав лав лав и только","answer":"все чики пуки все супер вот так как ты думаешь все так и будет, поэтому думай, что все будет хорошо","cardOfTheDay":" цени свои возможности, да ты увидишь трудности, но ты сразу увидишь и их решение","adviceLong":"возможно ты слишком много взяла на себя, не стоило этого делать, однако верь в себя до конца, иди дальше по намеченным планам!"},{"htmlname":"wands4","color":"pink","arcana":"wands","emoji":"IV","line1":"четверка ","line2":"жезлов ","none":false,"link":"cards/wands4.html","image":"tarotCard32.png","id":"tarotCard32","texttype":"Antiqua","name":"четверка жезлов, wands4","basics":"супер удачная карточка","love":"наслаждайся любовью","work":"ну че можно открыть хх.ру и почесать вакансии на должности выше своей, а еще можешь купить себе лотерейный билетик","advice":"сейчас все по-доброму, желай всем добра, сделай комплимент","basicMeaning":"гармония,  мир, процветание, переезд – это все про эту карту, ты открытая и добрая, к тебе тянутся люди, стоит им помочь, сейчас легкиц этап в жизни","loveTelling":"сейчас период наслаждения временем, проверенным вдвоем \\nстоит ждать незабываемого свидания\\nсходите вдвоем на пикник!","answer":"все складывается наилучшим образом для тебя, даже если ты сейчас так не считаешь, подожди немного и ты увидишь, что все супииир и ты ваще нереалка","cardOfTheDay":"хммммммм это прекрасный день для знакомств с новыми людьми! можно встретить новых друзей, а любимым сегодня лучше сделать подарок!\\nне грусти, а то попа не будет расти ","adviceLong":"доверься интуиции, если хочешь отдохнуть – бери отгул, хочешь сказать о своих чувствах – говори, ты конфета и все у тебя получается"},{"htmlname":"cups9","color":"pink","arcana":"cups","emoji":"IX","line1":"девятка","line2":"кубков","none":false,"link":"cards/cups9.html","image":"tarotCard51.png","id":"tarotCard51","texttype":"Antiqua","name":"девятка кубков, cups9","basics":"это карта такая же приятная как та соточка в кармане зимней куртки….","love":"любовь сладкая как мед","work":"деньги давайте сюда бумажные ","advice":"соберитесь на паверпоинт пати, расскажи анекдоты","basicMeaning":"карта добра, в большей части она про денежку, которая придет и будет, все короче у тебя хорошо\\n—как дела у кошечки?\\n—она сказала зае**сь","loveTelling":"счастливая и крепкая любовь, ну я говорю тут ваще масик просто обеспечен, тиндер открывай, каблучок повыше, юбку покороче ","answer":"вайб миранды из дьявол носит прада ","cardOfTheDay":"пора в отпуск! сходи в ресторан, проведи этот вечер с важным человеком, он тебе поможет в будущем","adviceLong":"так смари, удача очень быстро ворвалась в твою жизнь, но так же быстро, она может и уйти, особо не налегай на нее"},{"htmlname":"wands2","color":"pink","arcana":"wands","emoji":"II","line1":"двойка","line2":"жезлов","none":false,"link":"cards/wands2.html","image":"tarotCard4.png","id":"tarotCard4","texttype":"Antiqua","name":"двойка жезлов, wands2","basics":"ну ты ваще.... владыка желания, произойдет что-то новое","love":"в любви все холодно, ты к нему нейтральна, а зачем он тебе, если с ним тебе некомфортно и нет искр, лучше не начинать сечйас отношения","work":"в работе ваще все хайп, денежка присутствует ","advice":"стоит быть внимательнее, разложи пасьянс","basicMeaning":"«Кто сказал, что ты должен чего-то добиться?\\nОткуда такие долги, ты долгов не брал\\nЗакричи: \\"Ничего не хочу, помогите, полиция!\\"»\\nдайте танк/ впереди","loveTelling":"тихая и скучная любовная жизнь, пока что все воспринимается несерьезно, но если не заняться проблемой, это может перерасти во что-то большое и плохое\\nты можешь расчитывать на новую встречу и како-нибудь сюрприз","answer":"зай просто тупо жди","cardOfTheDay":"от тебя будут требовать больше, чем ты сможешь сделать. пошли все на небо за звездочкой и отдохни. пора уже расслабиться и подождать","adviceLong":"ты сильная личность, но сейчас у тебя нет достаточного количества информации и ресурсов, чтобы решить свою ситуацию. стоит отложить этот вопрос и подумать о другом go little rockstar "},{"htmlname":"swords10","color":"pink","arcana":"swords","emoji":"X","line1":"десятка","line2":"мечей","none":false,"link":"cards/swords10.html","image":"tarotCard65.png","id":"tarotCard65","texttype":"Antiqua","name":"десятка мечей, swords10","basics":"самая страшная карта","love":"башня это не пи***ц, вот это пи***ц ","work":"башня это не пи***ц, вот это пи***ц ","advice":"зай поспи просто, ну это же должно когда-то закончиться","basicMeaning":"другие арканы говорят о временных неудачах, но с этой картой ты в полной жопе)))))","loveTelling":"разрыв отношений, никаких отношений, короче это ну не до отношений тебе зайка","answer":"ты жертва стресса и из-за этого ведешь себя безответственно, не вини себя, сейчас тебе тяжело","cardOfTheDay":"избавь себя от негатива и и нежелательного общения и день будет кайф","adviceLong":"различай мнимые и истинные ценности, стоит иногда сжигать мосты"},{"htmlname":"swords3","color":"pink","arcana":"swords","emoji":"III","line1":"тройка","line2":"мечей","none":false,"link":"cards/swords3.html","image":"tarotCard59.png","id":"tarotCard59","texttype":"Antiqua","name":"тройка мечей, swords3","basics":"тотальный депресс","love":"сердце разбито, ты одинока навечно…","work":"увольнение, сокращение, расстрел ","advice":"зайка, только смириться и пережить, дальше обязательно будет белая полоса","basicMeaning":"боль, слёзы, горе, потерю близкого человека, тревоги, разочарования, что может вызвать сильную депрессию","loveTelling":"ссоры, недопонимания, грубость, разбитые тарелки, это всё не за горами…","answer":"как только всё поймёшь и осознаешь, то сразу жить станет чуточку полегче","cardOfTheDay":"сегодня абсолютно не твой день, венера в весах, ретроградный меркурий и всякое такое, посылаю тебе моральных сил справиться ","adviceLong":"Я скажу то, что для тебя не новость: мир не такой уж солнечный и приветливый. Это очень опасное, жесткое место, и если только дашь слабину, он опрокинет с такой силой тебя, что больше уже не встанешь. Ни ты, ни я, никто на свете, не бьёт так сильно, как жизнь! Совсем не важно, как ты ударишь, а важно, какой держишь удар, как двигаешься вперёд. Будешь идти — ИДИ! Если с испугу не свернёшь... Только так побеждают!\\nЕсли знаешь, чего ты стоишь — иди и бери своё! Но будь готов удары держать, а не плакаться и говорить: «Я ничего не добился из-за него, из-за неё, из-за кого-то!» Так делают трусы! А ты не трус! Быть этого не может!"},{"htmlname":"priest","color":"black","arcana":"major","emoji":"👽","line1":"","line2":"жрец","none":true,"link":"cards/priest.html","image":"tarotCard10.png","id":"tarotCard10","texttype":"Emoji","name":"жрец, верховный жрец, priest","basics":"до-ро-гу пе-да-го-гу, тебя всему научат, все расскажут и покажут, а потом с подружкой будешь на бали тусить","love":"твоя жизнь станет похожа жевачау лав  из","work":"короче тут все как со шкафом в икее, следуешь по инструкции и все четко, отходишь и все не очень..","advice":"тебе нужно найти себя и погрузиться в себя, съешь печеньку с предсказанием  и сделай зарядку","basicMeaning":"двигайся ровно и не подавай виду, помни про правила, сейчас нужно следовать указаниям и правилам, не стоит выделяться из толпы пока что","loveTelling":"свадьба свадьба свадьба, карта кричит о свадьбе!!! все хорошо в отношениях, будьте добры друг к дуругу, и вы многому научитесь друг у друга","answer":"не бойся спрашивать, тебе скажут что-то важное","cardOfTheDay":"все идет по плану. встретишь новых знакомых. а еще если был конфликт, то он разрешится благодаря знаниям! ","adviceLong":"возможно то что тебя учили неправильно, поэтому стоит посмотреть на ситуацию с другой стороны🤧"},{"htmlname":"pentacles10","color":"pink","arcana":"pentacles","emoji":"X","line1":"десятка","line2":"пентаклей","none":false,"link":"cards/pentacles10.html","image":"tarotCard78.png","id":"tarotCard78","texttype":"Antiqua","name":"десятка пентаклей, pentakles10","basics":"нот э матириал герл","love":"благополучие","work":"создать бизнес, пойти в крипту????","advice":"кайф ты поймала тебе всегда мало ты не представляешь как мне тебя не хватало","basicMeaning":"да ок все, работаешь, трудишься, духовная составляющая сейчас очень важна и ты ее развиваешь, умница","loveTelling":"серьезные отношения, все короче ваще флекс, очень добрая карточка","answer":"полнейшее духовное развитие","cardOfTheDay":"подведи итоги проделанной работы, а вот кто знает за день, неделю или ваще всю жизнь","adviceLong":"осознай собственный потенциал ИТ ХЭС А ПОТЕШИАЛ"},{"htmlname":"fool","color":"black","arcana":"major","emoji":"🕊️","line1":"","line2":"дурак","none":true,"link":"cards/fool.html","image":"tarotCard1.jpeg","id":"tarotCard1","texttype":"Emoji","name":"шут, дурак, fool","basics":"очень стремительно и&nbsp;необдуманно.&nbsp;ну, кто-то из&nbsp;вас точно дурак. только не&nbsp;нужно блин этой драмы, как обычно, пожалуйста.&nbsp;ты, конечно, драма квин, но&nbsp;уже ту&nbsp;мач","love":"в любви все хорошо","work":"поле для новых возможностей! может, пора сновать открыть хх.ру? или тиндер, тут как ляжет карта! короче просто ворк хард, а&nbsp;остальное само приложится, если работать по&nbsp;помидорам под лоу-фай в&nbsp;кофейне","advice":"Мы&nbsp;разрисуем все заборы своими стихами <br>Достань, пожалуйста, краску из&nbsp;рюкзака <br>Нам ни&nbsp;к&nbsp;чему учителя&nbsp;&mdash; мы&nbsp;придумаем сами<br>Правила русского языка","basicMeaning":"стоит принимать все легче и&nbsp;слушать свою интуицию","loveTelling":"эта карта означает перемены, кто-то хочет сделать шаг навстречу, а тебе стоит смело его принять и поменять взаимоотношения\\n⠀\\nдурак это про легкого человека, который никогда не думает об ответственности. его взаимоотношения легкие и свободные. у него офигенное чувство юмора\\n⠀\\nв перевернутом положении карта говорит, что партнер лох и эгоист, он делает все для себя и не стремиться к переменам\\n⠀\\nесли это про двоих, то вы не хотите работать над отношениями и ничего не делаете друг для друга. карта говорит о том, что будет отношения начнутся заново, или же кто-то собирается сделать шаг навстречу, и тебе стоит принять смелое решение, чтобы все поменять","answer":"в ситуации карта говорит о нежном и хорошем человеке\\n⠀\\nв деловых делах все стоит делать быстро, карточка говорит, что появятся новые проекты, которые стоит делать не задумываясь\\n⠀\\nрасклад на деятельность человека говорит о том, что такой человек генерит идеи\\n⠀\\nв денежном раскладе говорится, что денежка придет, но так же быстро и уйдет\\n⠀\\nдля лечения лучше использовать нетрадиционные методы","cardOfTheDay":"короче буде много крутых темок, веди себя как добрый клоун, веселись, радуйся, приноси счастье и добро и все будет супир\\nстоит избегать предвзятости, делай все с приколом, ничего страшного, если придется что-то сделать заново\\nговори комплименты, желай хорошего дня, делай маленькие сюрпризы и радуйся!","adviceLong":"ам кржйзи райт нау, бат ам фри\\n\\nбудь дуроком! НО СМЕШНЫМ"},{"htmlname":"pentacles6","color":"pink","arcana":"pentacles","emoji":"VI","line1":"шестерка","line2":"пентаклей","none":false,"link":"cards/pentacles6.html","image":"tarotCard74.png","id":"tarotCard74","texttype":"Antiqua","name":"шестерка пентаклей, pentakles6","basics":"кисунь, я понимаю, что ты королева, но поубавь чсв ","love":"любовные дела в полном поряде ","work":"зайка, сегодня благотворительный день, помогай другим, выслушивай проблемы и тебе воздастся ","advice":"действуй смело зайка, если бить то до крови, если любить то гроба, если курить, то до фильтра","basicMeaning":"малышка ты зазналась, не строгий из себя ту, кем не являешься, иди лучше помоги страждущим","loveTelling":"эмоции, интим, любовь, всё как в сказке, все рады, все получают того, чего хотят","answer":"будь добрее к людям","cardOfTheDay":"поработай над собственным эгоизмом, ты не пуп земли, если получила прибавку, проставься, своди подружек в кофеманию ","adviceLong":"налаживай отношения с тем, с кем они натянуты, возможно тебе скоро нужен будет хелп именно от этого человечка "},{"htmlname":"cups7","color":"pink","arcana":"cups","emoji":"VII","line1":"семерка","line2":"кубков","none":false,"link":"cards/cups7.html","image":"tarotCard49.png","id":"tarotCard49","texttype":"Antiqua","name":"семерка кубков, cups7","basics":"у тебя выбор без выбора, судьба уже всё решила за тебя","love":"«синий туман, похож на обман» ты занимаешься самообманом, зайка, остановись, пока остановка не стала последней ","work":"перед тобой сложный выбор, карта говорит, иди на компромисс ","advice":"аккуратно шагай, внимательной будь, осторожной","basicMeaning":"семерка кубков иногда является символом человека, который живет мечтами, не желая находится в реальности","loveTelling":"сними розовые очки, твой партнёр ваще не идеал, а ты не можешь сама в это поверить, посмотри на всё объективно заюш","answer":"всегда всё перепроверяй, лишним не будет","cardOfTheDay":"сегодня надо быть на чеку, не соглашайся на всякие авантюры, не пей, не кури, сегодня двигаемся на ясном, нето разведут тебя","adviceLong":"с особым вниманием относись к каждому своему шагу, иначе сможешь угодить в бездну собственных неудач, из которой тяжеловато выбираться"},{"htmlname":"cups5","color":"pink","arcana":"cups","emoji":"V","line1":"пятерка","line2":"кубков","none":false,"link":"cards/cups5.html","image":"tarotCard47.png","id":"tarotCard47","texttype":"Antiqua","name":"пятерка кубков, cups5","basics":"грустная карточка","love":"грустно все в любви, неразбериха ","work":"и на работе все грустно, фальш","advice":"зай ну бывает и такое, бывает грусть, ну ниче, ниче, поешь сладенького, позвони друзьям, попроси о поддержке","basicMeaning":"да блин грустная карта, о том, что дела провалились, черная полоса настала, сейчас трудный период в жизни, но без трудностей никуда, через тернии к звездам ауф","loveTelling":"лучше не погружайся сильно в любовные истории, удели внимание себе и тому, что приносит тебе счастье, а это уж точно не мужчины ","answer":"да емае ну да. ну грустно, ну а кто хороший, релакс, плохие дни бывают, но их все переживают, помни, что у тебя есть поддержка ","cardOfTheDay":"огорчения будут, но прими их достойно, не скрывай свою грусть, будь искренней и открытой, тебе помогут ","adviceLong":"не погружайся полностью в свои мысли, помни об окружающих, думай позитивно, стакан всегда наполовину полон"},{"htmlname":"knightOfSwords","color":"pink","arcana":"swords","emoji":"🏌🏻‍♂️","line1":"рыцарь","line2":"мечей","none":false,"link":"cards/knightOfSwords.html","image":"tarotCard56.png","id":"tarotCard56","texttype":"Emoji","name":"рыцарь мечей, knight of swords","basics":"технократ и циник","love":"охлаждение чувств, дорогуша, возможно прекращение отношений","work":"есть проблемы, которые ты сама себе насоздовала","advice":"приведи мысли в порядок, у тебя хаос","basicMeaning":"твой большой потенциал истрактуют как бунт, или несогласие, ты не пытаешься себя зарекомендовать, оттого твой талант и не воспринимают как что-то доброе","loveTelling":"тебе хочется личного пространства, а твой партнёр этого не понимает, и из-за этого отношения теряют теплоту и кирдык","answer":"распределяй правильно свои силы и время, будь чуть добрее к людям","cardOfTheDay":"у тебя какой-то конфликт, постарайся не хипишевать, а урегулировать его адекватно, сложно, понимаю, но надо ","adviceLong":"прими мнение окружающих, не надо ко всем относиться с агрессией, никто тебе не хочет навредить, а ты только себе это сама надумала, чилл "},{"htmlname":"swords4","color":"pink","arcana":"swords","emoji":"IV","line1":"четверка","line2":"мечей","none":false,"link":"cards/swords4.html","image":"tarotCard60.png","id":"tarotCard60","texttype":"Antiqua","name":"четверка мечей, swords4","basics":"всё валиться из рук и ты залегла на дно","love":"кризис из-за недосказанности ","work":"бесперспективняк ","advice":"побудь наедине с собой","basicMeaning":"ты видимо перетрудилась, заюш, отдохни, набери роднулькам, пусть поддержат, только не уходи в себя","loveTelling":"ребят, сходите к семейному психологу, у вас не всё в порядке, вы накапливаете негатив","answer":"ты львица ты королева ты ваще по жизни победительница","cardOfTheDay":"зай ну сегодня уже нужно окончательно поставить во всем точку, пора решать эти вопросики, все обкашлять","adviceLong":"калм даун, релакс, побудь одна, наедине с собой, подумай о себе"},{"htmlname":"queenOfCups","color":"pink","arcana":"cups","emoji":"🟢","line1":"королева","line2":"кубков","none":false,"link":"cards/queenOfCups.html","image":"tarotCard41.png","id":"tarotCard41","texttype":"Emoji","name":"королева кубков, queen of cups","basics":"про вдохновение ","love":"вы друг друга лова лова ","work":"если че, то попроси совет у близкого человека ","advice":" испеки печенье и поделись им","basicMeaning":" карточка про улучшения отношений с партнером и/или необходимость в близком человеке ","loveTelling":"принимать любовь и давать ее в ответ🧐","answer":"послушай тэйлор свифт","cardOfTheDay":"такой сладкий, такооой хороший день, я бы его СЪЕЕЕЛЛААА сегодня все суп, добрый день, когда можно начать что-то новое и не боятся о последствиях","adviceLong":"тут непонятно, вроде бы эмоциональность это хорошо, но может быть осуждаема. как ее правильно применить подскажет интуиция "},{"htmlname":"wandsAce","color":"pink","arcana":"wands","emoji":"☁️","line1":"туз","line2":"жезлов ","none":false,"link":"cards/wandsAce.html","image":"tarotCard26.png","id":"tarotCard26","texttype":"Emoji","name":"туз жезлов, ace of wands","basics":"мен энерджи","love":"для любви все хорошо","work":"пора проработать все трудности ","advice":"сделай тренировочку и приготовь себе вкусную еду","basicMeaning":"тут про перспективы и что все будет хорошо, это добрая карта, она говорит, что произойдет что-то новое ","loveTelling":"новый этап в отношениях","answer":"ты поймешь свое жизненное предназначение ","cardOfTheDay":"локал инфа, которая поможет увеличить денежный доход ","adviceLong":"сложности будут, но стоит быть достаточно смелой, чтобы решить их. рассчитывай коллег и друзей, тебе помогут "},{"htmlname":"wands9","color":"pink","arcana":"wands","emoji":"IX","line1":"девятка","line2":"жезлов","none":false,"link":"cards/wands9.html","image":"tarotCard37.png","id":"tarotCard37","texttype":"Antiqua","name":"девятка жезлов, wands9","basics":"interesting reaction","love":"заяяяяя карточка говорит, что все ок с твоим меном, откройся новым чувствам, ","work":"много новых возможностей","advice":"переверни сегодня пару кружек пива или волчка","basicMeaning":"ужас моя хорошая ты столько всего сделала и через многое прошла, что теперь тебе нечего боятся, ты потрудилась на славу, теперь осталось дело за малым, посмотреть на проделанную работу и поверить в свои силы","loveTelling":"если ты только вышла из кхм ПЛОХИХ отношений, то карта говорит, что скоро ты совсем совсем успокоишься и забудешь об этом дол.. а эм плохом человеке))) если отношения есть, то все ок, и если их то все тоже ок, все сложится, главное не забывай о себе","answer":"Мне нравится тут, нравится быть\\nСреди отстающих\\n\\nМне нравится жизнь, нравится смерть\\nЩедрой рукой\\nМне нравится ждать, нравится знать\\nКто я такой\\n\\nВесна\\nГр. Полухутенко","cardOfTheDay":"капец ты мышь, сегодня ваще никому не говори о своих планах, лучше послушай че другие говорят, а лучше ваще останься дома зай","adviceLong":"не иди туда, где тебя не ждут, не напрашивайся к людям, побудь одна"},{"htmlname":"queenOfWands","color":"pink","arcana":"wands","emoji":"💋","line1":"королева","line2":"жезлов","none":false,"link":"cards/queenOfWands.html","image":"tarotCard28.png","id":"tarotCard28","texttype":"Emoji","name":"королева жезлов, queen of wands","basics":"сильная и независимая","love":"гаддэм ну тут все по маслу","work":"перспективы имеются, но все нужно распланировать","advice":"купи ежедневник и наклейки с котикам ","basicMeaning":"гордая и смелая, ты ваще вишенка на тортике, но съесть тебя нельзя, да и не стоит, ведь тебя столько хорошего ждут впереди","loveTelling":"можешь расчитывать на бурные отношения, он тебя любит ","answer":"эта карта про успех, роскошь и справедливость, ты ваще королева, вся в бархате и жемчугах, роковая женщина емае","cardOfTheDay":"поддерживай окружающих, сегодня будет много работы, но ты все сможешь сделать","adviceLong":"поспрашивай совет у друзей и близких, ты знаешь чего хочешь, стоит обратить внимание на свои желания и прислушаться к ним"},{"htmlname":"cups10","color":"pink","arcana":"cups","emoji":"X","line1":"десятка","line2":"кубков","none":false,"link":"cards/cups10.html","image":"tarotCard52.png","id":"tarotCard52","texttype":"Antiqua","name":"десятка кубков, cups10","basics":"счастливый конец текущего этапа и начало нового перспективняка ","love":"жесть, погон счастье, гармония, это ваще, завидую…","work":"ууу, дополнительный заработок, духовный рост, пересмотр жизненных ценностей, короче преисполнишься ","advice":"если переутомилась, то с кайфом возьми отпуск и отдохни, тебе будет на пользу","basicMeaning":"открыта к общению, позитив, радость при любых взаимодействиях с людьми, а эти взаимодействия еще и окажутся плодотворными","loveTelling":"у тебя уже всё супергуд в отношениях, а если нет, то вот этот переломный момент настал","answer":"у тебя ваще всё так хорошо, чо ты вообще гадать припёрлась, беги жизнью наслаждаться","cardOfTheDay":"любовные встречи, повышения, радость, халява, это всё сегодня, не прогляди","adviceLong":"у тебя жизнь бьёт ключом, полные штаны позитива, но ты только сильно не привыкай, а то потом от камешка в ботинке впадёшь в депрессию "},{"htmlname":"cups4","color":"pink","arcana":"cups","emoji":"IV","line1":"четверка","line2":"кубков","none":false,"link":"cards/cups4.html","image":"tarotCard46.png","id":"tarotCard46","texttype":"Antiqua","name":"четверка кубков, cups4","basics":"ооой, зайчик, ты упускаешь большие возможности","love":"чот у тебя никак не получается построить отношения с мальчиками, может, подумаешь о девочках?","work":"апатия ко всему, и личные проблемы, какая уж тут работа","advice":"хорош во всём сомневаться, судьба подкидывает тебя возможности, на которые ты почему-то забила","basicMeaning":"ты чот на всех обижена, считаешь себя выше остальных, но при этом так же собой недовольна, отсюда и неуверенность, комплексы, страхи","loveTelling":"сама виновата, что ничего не складывается, переосмысли своё отношение к отношениям, не будь такой дотошной, идеал ты фиг найдешь ","answer":"зайка, сделай переоценку ценностей, не душись лишними проблемами, может то, от чего тебе грустно, тебе и не надо","cardOfTheDay":"сегодня тебя ваще всё бесит, и из-за этой тоски даже заболеть можно, не увлекайся тоской и смотри на мир с позитивом","adviceLong":"не тупи, мир прекрасен, а ты депрессуешь по всякой ерунде, это же так просто, если чото бесит, так не занимайся этим "},{"htmlname":"kingOfWands","color":"pink","arcana":"wands","emoji":"👑","line1":"король","line2":"жезлов","none":false,"link":"cards/kingOfWands.html","image":"tarotCard27.png","id":"tarotCard27","texttype":"Emoji","name":"король жезлов, king of wands","basics":"настройся на перемены","love":"здесь про верность ","work":"все супир, без преград ","advice":"мяу мяу мяу посмотри смешные видео с котятами ","basicMeaning":"карточка говорит, что все у тебя улучшиться, ты ваще бомба и все знаешь, все умеешь, ты ваще лидер","loveTelling":"не ну тут ваще все хайп, отношения становятся крепче, а одиноким попадется новое знакомство ","answer":"работать работать пахать и работать и всееее будет супер","cardOfTheDay":"зай жди сегодня встречу с масиком, день нереальный ","adviceLong":"не иди на месте, а то твоя удачливость улетит другому"},{"htmlname":"knightOfWands","color":"pink","arcana":"wands","emoji":"🌪️ ","line1":"рыцарь","line2":"жезлов ","none":false,"link":"cards/knightOfWands.html","image":"tarotCard29.png","id":"tarotCard29","texttype":"Emoji","name":"рыцарь, knight of wands","basics":"наведешь ты суеты, дорогая","love":"кто-то слишком хорни","work":"какая-то поездка","advice":"выпей чаю дорогая и успокойся ","basicMeaning":"ты очаровашка, не бойся рисковать и не грусти из-за потерь, они компенсируются ","loveTelling":"Если хочешь, давай, себя на всех раздавай\\nЕсли ты не мужчина, а Wi-Fi\\nНо со мной тебе точно ничего не словить\\nТы всё знаешь о сексе, но не о любви\\nолечка бузова ","answer":"меньше слов и больше дела!","cardOfTheDay":"calm down, сегодня стоит закрыть свой ротик на замочек и выкинуть ключик, побудь наблюдателем ","adviceLong":"о своих планах на будущее никому не говори, рискуй, и не расстраивайся, сегодня задуманное не случится:/"},{"htmlname":"swords5","color":"pink","arcana":"swords","emoji":"V","line1":"пятерка","line2":"мечей","none":false,"link":"cards/swords5.html","image":"tarotCard6.png","id":"tarotCard6","texttype":"Antiqua","name":"пятерка мечей, swords5 ","basics":"грустная карта","love":"в любви стрессы, ссоры и конфликты жоский абьюз","work":"чето все ухудшается","advice":"сходи к психологу и уйди от задуманного","basicMeaning":"похоже ты в склонности  обвинять других людей в собственных неудачах или тот на кого ты гадаешь делает это🙁\\nесть риск стать жертвой","loveTelling":"уход и расставание с кем-то, в отношениях какой-то кринж, сплошные слезы и недопонимания","answer":"короче по-умному: предстоит какая-то борьба, исход которой неясен, а цена слишком высока","cardOfTheDay":"эмоционально тяжелый день, но помни, что каждая неудача дает новый шанс","adviceLong":"будет что-то плохое, но помни, что потом будет и хорошее, это надо пережить"},{"htmlname":"queenOfSwords","color":"pink","arcana":"swords","emoji":" 🥷🏻","line1":"королева","line2":"мечей","none":false,"link":"cards/queenOfSwords.html","image":"tarotCard55.png","id":"tarotCard55","texttype":"Emoji","name":"королева мечей, queen of swords","basics":"сильная, независимая, умная и сердитая","love":"побудь одна","work":"ой на работе ваще все супер!!!","advice":"посмотри 4 свадьбы","basicMeaning":"нифига ты умная, ваще айкью тыща, двигайся вперед, но не выходя за рамки, но сейчас тебе тяжело слушать интуицию и с добротой натянуто, агрессивная ты","loveTelling":"если ты одна, то любовь тебе пока не светит, а если ты в отношениях, то пока что все нейтрально, ниче нового","answer":"неприятности обойдут стороной, любые дела пройдут на супер","cardOfTheDay":"ты очень смелая и самостоятельная сегодня, но помни, все должно быть в меру, не бойся попросить о помощи","adviceLong":"доверься интуиции и не сдерживайся ни в чем, стань роковой женщиной"},{"htmlname":"kingOfPentacles","color":"pink","arcana":"pentacles","emoji":"🌺","line1":"король","line2":"пентаклей","none":false,"link":"cards/kingOfPentacles.html","image":"tarotCard66.png","id":"tarotCard66","texttype":"Emoji","name":"король пентаклей, king of pentacles","basics":"красотка, спортсменка, комсомолка","love":"всё сладко, страсть, любовь, надёжность","work":"стабильность и уверенность, мамина бизнесменша, ведёшь курсы по ноготочкам","advice":"расслабься и получай удовольствие ","basicMeaning":"надо немного постараться зайка и всё будет на мази, прислушивайся к себе, тогда успех не заставит долго ждать ","loveTelling":"отказываемся от легкомысленности и настраиваемся на серьёзное течение дел, тогда о вашей ячейке общества будут говорить как о сыне маминой подруги","answer":"заюш, ты вообще можешь всё, главное не ленись ","cardOfTheDay":"подведи итоги своей работы, порадуйся за себя и берись за новые свершения ","adviceLong":"жизнь – это не замкнутый круг из проблем. не стоит постоянно создавать вопросы на ровном месте, задумываться о том, как их решить. позволяй себе время от времени отдыхать, чтобы не навредить собственному здоровью."},{"htmlname":"pentacles2","color":"pink","arcana":"pentacles","emoji":"II","line1":"двойка","line2":"пентаклей","none":false,"link":"cards/pentacles2.html","image":"tarotCard70.png","id":"tarotCard70","texttype":"Antiqua","name":"двойка пентаклей, pentakles2","basics":"ожидаются хорошие, сочные перемены","love":"новая волна романтики на горизонте","work":"перспективная смена должности","advice":"задумайся, потянешь такие изменения?","basicMeaning":"в ближайшее время будет радостная новость, но не хватайся за всё сразу, сначала грамотно закончи начатые делишки","loveTelling":"снова приятный лёгкий флирт, бокалы просеко в летниках, прогулки по парку, смех и веселье, спонтанные поездки","answer":"подумай хорошенько, на сколько приятных дел одновременно тебя хватит","cardOfTheDay":"в своих заботах можешь расслабиться и веселиться, сегодня ты никак не накосячишь, развлекайся, могут даже за это приплатить ","adviceLong":"живи полной грудью, дыши полной жизнью, ты полна энергии и не стесняйся её тратить как тебе угодно "},{"htmlname":"bashnya","color":"black","arcana":"major","emoji":"💀","line1":"","line2":"башня","none":true,"link":"cards/bashnya.html","image":"tarotCard7.png","id":"tarotCard7","texttype":"Emoji","name":"башня, tower, the tower","basics":"пи***ц перемены","love":"освобождение копившихся чувств","work":"на работе все сменится","advice":"перемен не избежать, подумай о будущем, зажги свечку","basicMeaning":"я больше не могу когда же я наконец стану счастливой – эта карта говорит, что сейчас у вас есть трудности и они будут меняться, но этот этап будет довольно тяжелым, однако потом ты станешь наконец счастливой","loveTelling":"если в отношениях был тупик или их совсем не было, то башня означает, что сейчас все резко изменится, понять масштаб перемен довольно сложно, но ясно будет одно, жизнь разделится на «до» и «после»","answer":"негативные перемены – путь к новой жизни, где все доброе и хорошее","cardOfTheDay":"день вершит жизнь, очень много важного сегодня произойдет, будет много изменений","adviceLong":"тебе необходимы изменения и они будут"},{"htmlname":"judgement","color":"black","arcana":"major","emoji":"👩‍⚖️","line1":"","line2":"суд","none":true,"link":"cards/judgement.html","image":"tarotCard24.png","id":"tarotCard24","texttype":"Emoji","name":"суд, judgement","basics":"сеть новое будет","love":"все гут отношения будут хорошие","work":"тут тоже все гут, денежка будет ","advice":"купи себе вкусняшку ","basicMeaning":"карта говорит, что намеченная цель уже достигнута, хоть этого и не видно (пока что), а еще впереди будут перемены и новые открытия, вы освободитесь от старых убеждений ","loveTelling":"отношения выходят на новый уровень, если отношений нет, значит скоро будут ","answer":"карта говорит урегулировать старую проблему","cardOfTheDay":"сегодня ты сможешь решить любую проблему ","adviceLong":"не нужно бояться перемен "},{"htmlname":"wands5","color":"pink","arcana":"wands","emoji":"V","line1":"пятерка","line2":"жезлов","none":false,"link":"cards/wands5.html","image":"tarotCard33.png","id":"tarotCard33","texttype":"Antiqua","name":"пятерка жезлов, wands5","basics":"соперничество ","love":"ну такое, чето разногласия какие-то есть","work":"тюююю одни конфликты какие-то на работе ","advice":"дышим носиком, не кричим, сидим спокойно как мышки, нужно успокоится","basicMeaning":"карточка говорит, что сейчас есть какой-то конфликт, тебе стоит с ним разобраться, и карточка знает, что ты это сделаешь, главное идти до конца ","loveTelling":"тут ваще какая-то буря, то ссоры, то страсти, спокойствия пока что не будет ","answer":"агрессивное поведение, однако оно может помочь с успехами, главное знать меру","cardOfTheDay":"сегодня тебя ждет испытание, экзамен на хантера, однако его не стоит боятся, на его итогам ты сделаем выводы о себе и о ситуации ","adviceLong":"бро иди до конца, не сдавайся и все будет супер "},{"htmlname":"strength","color":"black","arcana":"major","emoji":"💪","line1":"","line2":"сила","none":true,"link":"cards/strength.html","image":"tarotCard13.png","id":"tarotCard13","texttype":"Emoji","name":"сила, strength","basics":"вумен супримаси, пуси павэр ","love":"ты горишь как огонь я у меня агония это любовь или ДА! это любовь❤️","work":"жоско поработала, жоско получила деньги, все честно без обмана, деньги есть ","advice":"послушай свою любимую музыку и посмотри 4 свадьбы ","basicMeaning":"уверенность в своей правоте, ты ваще нереалка, все знаешь как надо, куда надо, зачем. обрати внимание на природу и творчество, там может быть подсказка ","loveTelling":"ну ты и горячая штучка, тут намечается какая-то страсть, если ее все еще не было, а в семенной жизни все супир, быт дается легко ","answer":"стоит от чего-то отказаться, чтоы получить лучшее","cardOfTheDay":"сил хватит на все, активируй все что угодно, доставай все дела, как личные, так и рабочие, сегодня будет сделано все. действуй без агрессии и решительно","adviceLong":"чувству себя готкой, потому что черные полосы тебе не страшны, делай все с полной самоотдачей "},{"htmlname":"empress","color":"black","arcana":"major","emoji":"👑","line1":"","line2":"императрица","none":true,"link":"cards/empress.html","image":"tarotCard8.png","id":"tarotCard8","texttype":"Emoji","name":"empress, императрица","basics":"ну&nbsp;ты&nbsp;мамми! вайб инстасамки на&nbsp;сегодня обеспечен. все роскошно, шик блеск, красота, счастье и&nbsp;сестринство! проведи этот день в&nbsp;компании прекрасных подруг, включай свою вумен пауэр и&nbsp;все будет суп!","love":"женская энергия просто на&nbsp;высоте, моя хорошая, моя ты&nbsp;бубочка! такая ты&nbsp;прямо роковая, будто&nbsp;бы фем фаталь, так что будь аккуратнее, чтобы не&nbsp;травмировать какого-то очередного тюбика.&nbsp;а&nbsp;если ты&nbsp;одинока, то&nbsp;это ненадолго! скоро в&nbsp;твоей жизни появится кто-то новый, присмотрись","work":"все круто, особенно, если ты&nbsp;работаешь с&nbsp;женщинами! только женская солидарность, никакого стеклянного потолка, долой белых цис мужчин и&nbsp;патрирхат! на&nbsp;костер!","advice":"свари пельменей и сделай масочку","basicMeaning":"вумен пауер, люби себя, принимай себя, будь собой, ты ваще только ты ты ты, ты нереальная, надо быть наедине с собой, забйдь про комплексы, про буллинг, ты прекрасна, береги себя","loveTelling":"штош присмотришь к коллегам, возможно кто-то из них твоя судьба. отношения которые предстоят (или есть сейчас) будут крепкими и без абьюза. полнейшая нежность","answer":"все дела идут к развязке, скоро будет виден ответ. стоит положиться на судьбу и плыть по течению","cardOfTheDay":"дорогая.. тебе нужно на природу, детокс от телефона, бери друзей или одна, сходи в лес, в парк, сядь на электричку и съезди куда-нибудь. старые дела, о которых ты забыла сегодня найдут решение, все будет хорошо, это невероятно добрый день, наполненный любовью к себе и к окружающим! люби себя, будь женщиной","adviceLong":"замечательная карта, замечательная ты, замечательная жизнь, верь в себя и в судьбу!"},{"htmlname":"sun","color":"black","arcana":"major","emoji":"🌞","line1":"","line2":"солнце","none":true,"link":"cards/sun.html","image":"tarotCard23.png","id":"tarotCard23","texttype":"Emoji","name":"солнце, sun","basics":"хорошая карта","love":"добрый период, где происходит что-то новое","work":"на работе все супер","advice":"жить жить жить пожить! живи, у тебя все хорошо получается, делай как делаешь","basicMeaning":"сейчас все трудности даются легко, жизнь воспринимается легкой и солнечной\\nсамбо белого мотылька, у открытого огонька, ты как мотылек который летит на яркое солнышко и пускай мотылек может сгореть, у тебя все суп","loveTelling":"полностью отсутствуют проблемы в отношениях и любви ","answer":"любые твои начинания перспективные ","cardOfTheDay":"добрый добрый день, следует взяться за новое занятие и затащить туда хороших людей ","adviceLong":"ты все знаешь, ты все можешь, верь в себя "},{"htmlname":"pentacles5","color":"pink","arcana":"pentacles","emoji":"V","line1":"пятерка","line2":"пентаклей","none":false,"link":"cards/pentacles5.html","image":"tarotCard73.png","id":"tarotCard73","texttype":"Antiqua","name":"пятерка пентаклей, pentakles5","basics":"кому-то пора проработать тревогу и фобии","love":"зай, у тебя не в порядке эмоциональный фон, необоснованная ревность и т.п.","work":"ты в неустойчивом положении, прийдется что-то пережить, повышение, или сокращение, на выбор","advice":"относись ко всем трудностям философски","basicMeaning":"придется на серьёзных щщах принять удар и испытание, но это норм, просто новый период жизни","loveTelling":"кто-то из вас нагнетает обстановочку, из-за этого отношения болеют, хватить всё запрещать","answer":"не паникуй раньше времени, всё, что не делается, всё к лучшему ","cardOfTheDay":"ожидается неблагоприятная полоса, на сегодня лучше планов не строить, беттер будет подумать о дальнейшей жизни","adviceLong":"возможно, что предстоящие трудности не так уж и страшны, как их малюют, прими удар достойно"},{"htmlname":"pageOfPentacles","color":"pink","arcana":"pentacles","emoji":"🎨","line1":"паж","line2":"пентаклей","none":false,"link":"cards/pageOfPentacles.html","image":"tarotCard69.png","id":"tarotCard69","texttype":"Emoji","name":"паж пентаклей, page of pentakles","basics":"благоприятно влияет на повседневные дела","love":"нужно изучить того, о ком мечтаешь","work":"новые знания","advice":"полепи из пластилина или глины","basicMeaning":"сейчас стоит обратить внимание на то, что ты делаешь ручками","loveTelling":"если хочешь любви, то действуй","answer":"тут говорится про хороший урожай, штош, мб посади рассаду?!!?!?!??!","cardOfTheDay":"сегодня решаться дела и споры, которые копились годами","adviceLong":"есть вероятность получить фейк инфу, доверяй только проверенной инфе\\nне отказывайся от работы ручками"},{"htmlname":"chariot","color":"black","arcana":"major","emoji":"🎡","line1":"","line2":"колесница","none":true,"link":"cards/chariot.html","image":"tarotCard12.png","id":"tarotCard12","texttype":"Emoji","name":"колесница, chariot","basics":"короче всё у тебя попрёт ту зе мун, впереди нереальные высоты, и масштабные свершения, типа покупки фисташек","love":"если ты одна, то тебе никого и не надо, если ты два, то у вас всё чики-пуки","work":"не сбавляй темп и раскрутишься как следует, нельзя терять хватку, а ваще в целом всё хорошо, шоу мас гоу он ","advice":"в целом всё примерно так: хочешь скажу фразу, всё будет, но не сразу, хочешь что-то заработать, иди работать ","basicMeaning":"успех, победа, цель, рывок вперед, ты способна преодолевать препятствия, у тебя появляется уверенность в себе и собственных силах, как будто хлопнула перед заданием стаканчик нефильтрованного","loveTelling":"нефиг думать обо всяких там шурах-мурах, сконцентрируйся на цели и души до конца, а эти любовные дела только отвлекать будут, ну, ладно, максимум курортный романчик ","answer":"делай как надо и всё будет как надо, всё просто","cardOfTheDay":"надо стартовать сейчас, дам совет, самое худшее время для старта, это любое, кроме «сейчас», отбрось сомнения и судьба сама тебе подскажет чего делать, погнали","adviceLong":"если уж выпала колесница, значит по-любому нужно поднажать райт нау, это литерали тот самый знак, который ты  так долго ждала, всё, пути назад нет, ты уже на пол пути к успеху, осталось только не тупить "},{"htmlname":"cupsKnight","color":"pink","arcana":"cups","emoji":"🤺","line1":"рыцарь","line2":"кубков","none":false,"link":"cards/cupsKnight.html","image":"tarotCard42.png","id":"tarotCard42","texttype":"Emoji","name":"рыцарь кубков, knight of cups","basics":"романтичная целеустремлёнка, рыцарка","love":"малышка да ты влюблена и хочешь посвятить себя этому человеку","work":"какая может быть работа возлюбленный на подходе, а может он будет ждать тебя на деловой встрече?","advice":"не надо хапать всё сразу, делай постепенно и по порядку ","basicMeaning":"ты уже взрослая, но еще не зрелая, летаешь в облаках и ждёшь своего рыцаря, но ничо в этом плохого нет, кто хочет, тот получит","loveTelling":"тебя влечёт к новому партнёру, а если партнёр есть, то всё у вас наладится и в духовном и в моральном и в интимном","answer":"строй реальные планы, цели, прорабатывай желания, витать в облаках конечно классно, но особого результата не принесёт, посмотри пару мотивационных роликов на ютубчике","cardOfTheDay":"день будет довольно светлым и наполненным событиями. настроение и самочувствие прекрасное, а энергия бьет ключом. используй день по назначению, реши дела, на которые давно не хватало времени и сил","adviceLong":"лишние проблемы – это тока нагрузка на организм, душу и разум, оставь их в другом дне, сегодня устрой себе праздник, сабантуйчик "},{"htmlname":"queenOfPentacles","color":"pink","arcana":"pentacles","emoji":"✨","line1":"королева","line2":"пентаклей","none":false,"link":"cards/queenOfPentacles.html","image":"tarotCard67.png","id":"tarotCard67","texttype":"Emoji","name":"королева пентаклей, queen of pentacles","basics":"ты зрелая самодостаточная тётя","love":"твой мужик ещё не в курсе, но ты уже готова нацепить кольцо на пальчик","work":"сильным характером пушишь все рабочие моментики ","advice":"никого не слушай, ты сама королева","basicMeaning":"мне мало лет, я мало жил, на ваш закон я х*й ложил - это про тебя, ты умна не по годам и тебе ваще по на мнение окружающих","loveTelling":"в отношениях ты настроена серьёзнее некуда и это гуд, ты себя в них ощущаешь комфортнее некуда","answer":"никого не слушай, ты прекрасна и сама это знаешь","cardOfTheDay":"никому не давай тобой помыкать, всё зависит сегодня только от тебя, так же вещают, что сегодня может встретиться на пути такая же сильная и независимая, как и ты","adviceLong":"любые дела выполняй не суетясь, суетятся пусть все остальные, ты действуй по своему четкому плану"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _airtableData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3772);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5338);
/* harmony import */ var _components_O_BlockOfTarotCards_O_BlockOfTarotCards_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6496);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var content;
function getSearchRequest() {
  var url = new URL(window.location.href);
  var searchParams = new URLSearchParams(url.search);
  if (searchParams.has('request')) {
    return searchParams.get('request');
  }
}
function setSearchRequest(requestText) {
  var url = getPathFromUrl(window.location.href);
  window.location.href = url + '?request=' + requestText;
}
function getPathFromUrl(url) {
  return url.split('?')[0];
}
function createArticleCard(contentItemData) {
  var contentItemLink = document.createElement('a');
  contentItemLink.href = contentItemData.link;
  var contentItem = document.createElement('div');
  contentItem.classList.add('M_CardArticle');
  var contentItemImage = document.createElement('img');
  contentItemImage.classList.add('A_CardArticleImage');
  contentItemImage.src = contentItemData.image;
  var contentItemTitle = document.createElement('div');
  contentItemTitle.classList.add('A_Heading5');
  contentItemTitle.innerHTML = contentItemData.title;
  var contentItemDescription = document.createElement('div');
  contentItemDescription.classList.add('A_Paragraph', 'Center');
  contentItemDescription.innerHTML = contentItemData.description;
  contentItem.appendChild(contentItemImage);
  contentItem.appendChild(contentItemTitle);
  contentItem.appendChild(contentItemDescription);
  contentItemLink.appendChild(contentItem);
  return contentItemLink;
}
function createTarotCards(tarotCardData) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .H)(document.querySelector('.C_FoundTarotCards'));
  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_O_BlockOfTarotCards_O_BlockOfTarotCards_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    data: tarotCardData
  }));
}
function createFortuneTellings(fortuneTellings) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .H)(document.querySelector('.C_FoundFortuneTellings'));
  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_O_BlockOfTarotCards_O_BlockOfTarotCards_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    data: fortuneTellings
  }));
}
function renderCardsByIds(container, ids) {
  ids = _toConsumableArray(new Set(ids));
  var tarotCards = [];
  var fortuneTellings = [];
  ids.forEach(function (id) {
    content.forEach(function (item) {
      if (item.id === id && id.startsWith('article')) {
        container.appendChild(createArticleCard(item));
      } else if (item.id === id && id.startsWith('tarotCard')) {
        tarotCards.push(item);
      } else if (item.id === id && id.startsWith('fortuneTelling')) {
        fortuneTellings.push(item);
      }
    });
  });
  createTarotCards(tarotCards);
  createFortuneTellings(fortuneTellings);
}
function rerenderSearchedContent(requestText) {
  var contentItemsContainer1 = document.querySelector('.C_FoundArticleCards');
  contentItemsContainer1.innerHTML = '';
  var Ids = [];
  var articleFound = false;
  var tarotCardFound = false;
  var fortuneTellingFound = false;
  content.forEach(function (contentItem) {
    var nbspRegex = /[\u202F\u00A0]/gm;
    var punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm;
    var title = contentItem.title,
      description = contentItem.description,
      line1 = contentItem.line1,
      line2 = contentItem.line2,
      name = contentItem.name,
      similarWords = contentItem.similarWords;
    similarWords = similarWords.replaceAll(nbspRegex, ' ');
    similarWords = similarWords.replaceAll(punctuationRegex, '');
    if (contentItem.id.startsWith('article') && requestText.length >= 3) {
      if (title.includes(requestText) || description.includes(requestText) || similarWords.includes(requestText)) {
        title = title.replaceAll(nbspRegex, ' ');
        title = title.replaceAll(punctuationRegex, '');
        description = description.replaceAll(nbspRegex, ' ');
        description = description.replaceAll(punctuationRegex, '');
        Ids.push(contentItem.id);
        articleFound = true;
      }
    } else if (contentItem.id.startsWith('tarotCard') && requestText.length >= 3) {
      line1 = line1.replaceAll(nbspRegex, ' ');
      line1 = line1.replaceAll(punctuationRegex, '');
      line2 = line2.replaceAll(nbspRegex, ' ');
      line2 = line2.replaceAll(punctuationRegex, '');
      name = name.replaceAll(nbspRegex, ' ');
      name = name.replaceAll(punctuationRegex, '');
      if (line1.includes(requestText) || line2.includes(requestText) || name.includes(requestText) || similarWords.includes(requestText)) {
        Ids.push(contentItem.id);
        tarotCardFound = true;
      }
    } else if (contentItem.id.startsWith('fortuneTelling') && requestText.length >= 3) {
      line1 = line1.replaceAll(nbspRegex, ' ');
      line1 = line1.replaceAll(punctuationRegex, '');
      line2 = line2.replaceAll(nbspRegex, ' ');
      line2 = line2.replaceAll(punctuationRegex, '');
      if (line1.includes(requestText) || line2.includes(requestText) || similarWords.includes(requestText)) {
        Ids.push(contentItem.id);
        fortuneTellingFound = true;
      }
    }
  });
  if (articleFound) {
    var articlesSection = document.querySelector('.W_FoundArticlesSection');
    if (articlesSection) {
      articlesSection.style.display = 'flex';
    }
  }
  if (tarotCardFound) {
    var tarotCardsSection = document.querySelector('.W_FoundTarotCardsSection');
    if (tarotCardsSection) {
      tarotCardsSection.style.display = 'flex';
    }
  }
  if (fortuneTellingFound) {
    var fortuneTellingsSection = document.querySelector('.W_FoundFortuneTellingsSection');
    if (fortuneTellingsSection) {
      fortuneTellingsSection.style.display = 'flex';
    }
  }
  if (Ids.length > 0) {
    renderCardsByIds(contentItemsContainer1, Ids);
  } else {
    renderNothingFound();
  }
  function renderNothingFound() {
    var NothingFound = document.querySelector('.M_NothingFound');
    NothingFound.style.display = 'flex';
  }
}
function initSearch() {
  var O_Search = document.querySelector('.M_Search');
  var A_SearchInput = O_Search.querySelector('.A_SearchInput');
  var Q_SearchIcon = O_Search.querySelector('.Q_SearchIcon');
  var requestText = getSearchRequest();
  if (requestText != undefined) {
    A_SearchInput.value = requestText;
    if (content) {
      rerenderSearchedContent(requestText);
    }
  } else {
    A_SearchInput.value = '';
  }
  A_SearchInput.addEventListener('input', function (e) {
    var requestText = e.target.value;
    if (requestText.length >= 3) {
      Q_SearchIcon.classList.remove('disabled');
    } else {
      Q_SearchIcon.classList.add('disabled');
    }
  });
  A_SearchInput.addEventListener('keydown', function (e) {
    requestText = e.target.value;
    if (requestText.length >= 3) {
      if (e.key === 'Enter') {
        setSearchRequest(requestText);
      }
    }
  });
  Q_SearchIcon.addEventListener('click', function (e) {
    if (!e.target.classList.contains('disabled')) {
      var _requestText = A_SearchInput.value;
      setSearchRequest(_requestText);
      rerenderSearchedContent(_requestText);
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  (0,_airtableData_js__WEBPACK_IMPORTED_MODULE_1__/* .getSearchData */ .DW)().then(function (data) {
    content = data;
    initSearch();
  });
});

// export { getSearchRequest }
})();

/******/ })()
;