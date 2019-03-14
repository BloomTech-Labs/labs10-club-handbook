module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/flaticon.css":
/*!**********************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/css/flaticon.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/style.js":
/*!******************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/css/style.js ***!
  \******************************************************************************************************/
/*! exports provided: ResetCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCSS", function() { return ResetCSS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flaticon.css */ "../../node_modules/common/src/assets/css/flaticon.css");
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flaticon_css__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  html {\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html,\n  html a,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  a,\n  p,\n  li,\n  dl,\n  th,\n  dt,\n  input,\n  textarea,\n  span,\n  div {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  // modal default style\n  .reuseModalOverlay {\n    z-index: 99999 !important;\n  }\n\n  .reuseModalHolder {\n    padding: 0 !important;\n    &.demo_switcher_modal {\n      border: 0 !important;\n      background-color: rgba(16, 30, 77, 0.9) !important;\n      .innerRndComponent {\n        border-radius: 8px !important;\n      }\n    }\n  }\n\n  button.modalCloseBtn {\n    position: fixed !important;\n    z-index: 999991 !important;\n    background-color: transparent !important;\n    top: 10px !important;\n    right: 10px !important;\n    min-width: 34px !important;\n    min-height: 34px !important;\n    padding: 0 !important;\n    span.btn-icon {\n      font-size: 22px !important;\n      transform: rotate(45deg) !important;\n    }\n\n    &.alt {\n      border-radius: 50% !important;\n      z-index: 999999 !important;\n      padding: 0 !important;\n      transition: all 0.3s ease !important;\n      top: 25px !important;\n      right: 30px !important;\n      min-width: 40px !important;\n      min-height: 40px !important;\n\n      span.btn-icon {\n        font-size: 20px !important;\n      }\n\n      &:hover {\n        opacity: 0.88 !important;\n      }\n    }   \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ResetCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/footer-bg.png":
/*!*********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/hosting/footer-bg.png ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-bg-61e61976e8a4ea1e4ff698142517ef3a.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasThree/author-1.jpg":
/*!**********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasThree/author-1.jpg ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA7ADsBAREA/8QAGwABAAICAwAAAAAAAAAAAAAAAAQFAgcDBgj/xAAkEAABBQACAgICAwAAAAAAAAABAAIDBAUGERIhByMxURMVIv/aAAgBAQAAPwD1AiIiIiIiIiIiIiIiIo+haFGhZuuMYFeF8pMsgjYPFpP+nH00evZPoLQ2TzT5PzcV2FyPkuhc22swb1/RzhS0Gx0bjpmPkpRw1I/KQvrv7jcyfpha5hkPatcP5y2qWbxensYZv2uSa+lj0rVmyylI41tJ1aOWzF4fUHwhri5o6MxbEGNMsYVc/nXydmN3DY3f7C3rZ+tqYApWqNupXq178cR6ayvG/wDmjisRBgdNM2R7Xh3TumrYHxNyjV5HHyepo2tK5BibYoUrmnRFO3YhNOtOTLEI4/FwknkaPrYfFrex32T31EQgEdEdgqhg4BwSrlWcKtwrBhzbkjZbNOPNhbBM9vRa58Yb4uI8W9EjsdD9LnfxDiUkDar+L5DoW1WUmxmlEWiuxwcyEDx68GuAcG/gEdgLGHhfDq8mlLX4njRP2WubpOZQiabrXElwmIb9gJc7vy778j+1NycfIwaLMzDyqedTiLiyvUgbDE0k9nprQAOyST6/JUxERERERERERERERERF/9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasThree/author-2.jpg":
/*!**********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasThree/author-2.jpg ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA6ADoBAREA/8QAGAABAAMBAAAAAAAAAAAAAAAAAAYHCAT/xAAlEAABBQABAwMFAAAAAAAAAAADAAECBAUGBxIiERQhEyMyQXH/2gAIAQEAAD8A1AiIiIiIiIiIiIiIiIufQPOtn2bIvzEGc4/bkT5aLu3jFnlL+Mzu/wCvlZNDyfWz6efxmn1GFuVPo1LNrkZuWaedRsnlSts9U1shjTrHgSATOMbQYjEi0xj7W9bIyesPKg6HFMAxqpaulg59u7pXs48bNa4SoQjVDiFJ4tZO8GnCMX8WjOLxlKYe+HZXJdPK4Vcx6XPJchHCfHJWOTQ39AVWblNP3NaxYMc0qUuwPrOYex29yJnFHxZ7s6Lad/X6b5lzTvFuHY1wLnmeR2JAdosIOM0vI4uyMew0vIsO0jszydlN0RERERERERERERERERERERF//9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasThree/author-3.jpg":
/*!**********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasThree/author-3.jpg ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA3ADcBAREA/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMFBgcI/8QAJxAAAQQBAwQCAgMAAAAAAAAAAQACAwQFBhESBxMUIRUiIzEXMkH/2gAIAQEAAD8A9QIiIiIiIiIihu3aeNpz5HI24atSrE+eeeeQMjijaCXPc4+mtABJJ9ABZN3Wjo6zHwZZ/VjRraNmaStBZOdqiKWZgaXxtfz2c5okjJaDuA9u/wCwtZdu08bTnyORtw1alWJ88888gZHFG0Eue5x9NaACST6ACzX8tdKjgDqsdTNKfCC14JyXzNbxfJ48uz3efDucftx33297LSUb1LKUq+SxtyC3TtxMnr2IJBJHNG4BzXsc3cOaQQQR6IKnRZjqbjosv091DirGMyWRguY+aCepjXtZanhc3aRkRPrmWlwA/wB/Q9lcHy2Lzck2byuMo9VXSwwX6+gLhfkO9HLJDTcYrTZB3hE63G4tN38RYx3L6iNXOp8drPLan1hjs9i9b5HRuQx12pWp0ZZWmW6YIRcDA8biB0fcFYP+hkFnj/eBSSYyO5VFrUNDqfZ0tS1JNPp+eB+TGVqsdjRGXyNA88xGaS2xhd7HIcvxFq7JoIagGhdODVplOcGJp/J97hz8vst73Lh9d+fLfj63/XpXyIiIiIiIiIiIiIi//9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasThree/banner-image.jpg":
/*!**************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasThree/banner-image.jpg ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-image-32b681061bd89fe2a162622dea50d6d9.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasThree/logo-white.png":
/*!************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasThree/logo-white.png ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-white-876c9a8284bfdf03fa414489643b9a2c.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasThree/logo.png":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasThree/logo.png ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-b73048211d7a9a05b4c449061f130c5f.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasThree/map.png":
/*!*****************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasThree/map.png ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-10e10ded925671b8246ffacd63957e6f.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasThree/partner.png":
/*!*********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasThree/partner.png ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasThree/screen-1.png":
/*!**********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasThree/screen-1.png ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasThree/vendor-logos.png":
/*!**************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasThree/vendor-logos.png ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/author-1.jpg":
/*!********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/author-1.jpg ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA7ADsBAREA/8QAGwABAAICAwAAAAAAAAAAAAAAAAQFAgcDBgj/xAAkEAABBQACAgICAwAAAAAAAAABAAIDBAUGERIhByMxURMVIv/aAAgBAQAAPwD1AiIiIiIiIiIiIiIiIo+haFGhZuuMYFeF8pMsgjYPFpP+nH00evZPoLQ2TzT5PzcV2FyPkuhc22swb1/RzhS0Gx0bjpmPkpRw1I/KQvrv7jcyfpha5hkPatcP5y2qWbxensYZv2uSa+lj0rVmyylI41tJ1aOWzF4fUHwhri5o6MxbEGNMsYVc/nXydmN3DY3f7C3rZ+tqYApWqNupXq178cR6ayvG/wDmjisRBgdNM2R7Xh3TumrYHxNyjV5HHyepo2tK5BibYoUrmnRFO3YhNOtOTLEI4/FwknkaPrYfFrex32T31EQgEdEdgqhg4BwSrlWcKtwrBhzbkjZbNOPNhbBM9vRa58Yb4uI8W9EjsdD9LnfxDiUkDar+L5DoW1WUmxmlEWiuxwcyEDx68GuAcG/gEdgLGHhfDq8mlLX4njRP2WubpOZQiabrXElwmIb9gJc7vy778j+1NycfIwaLMzDyqedTiLiyvUgbDE0k9nprQAOyST6/JUxERERERERERERERERF/9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/author-2.jpg":
/*!********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/author-2.jpg ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA6ADoBAREA/8QAGAABAAMBAAAAAAAAAAAAAAAAAAYHCAT/xAAlEAABBQABAwMFAAAAAAAAAAADAAECBAUGBxIiERQhEyMyQXH/2gAIAQEAAD8A1AiIiIiIiIiIiIiIiIufQPOtn2bIvzEGc4/bkT5aLu3jFnlL+Mzu/wCvlZNDyfWz6efxmn1GFuVPo1LNrkZuWaedRsnlSts9U1shjTrHgSATOMbQYjEi0xj7W9bIyesPKg6HFMAxqpaulg59u7pXs48bNa4SoQjVDiFJ4tZO8GnCMX8WjOLxlKYe+HZXJdPK4Vcx6XPJchHCfHJWOTQ39AVWblNP3NaxYMc0qUuwPrOYex29yJnFHxZ7s6Lad/X6b5lzTvFuHY1wLnmeR2JAdosIOM0vI4uyMew0vIsO0jszydlN0RERERERERERERERERERERF//9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/author-3.jpg":
/*!********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/author-3.jpg ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA3ADcBAREA/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMFBgcI/8QAJxAAAQQBAwQCAgMAAAAAAAAAAQACAwQFBhESBxMUIRUiIzEXMkH/2gAIAQEAAD8A9QIiIiIiIiIihu3aeNpz5HI24atSrE+eeeeQMjijaCXPc4+mtABJJ9ABZN3Wjo6zHwZZ/VjRraNmaStBZOdqiKWZgaXxtfz2c5okjJaDuA9u/wCwtZdu08bTnyORtw1alWJ88888gZHFG0Eue5x9NaACST6ACzX8tdKjgDqsdTNKfCC14JyXzNbxfJ48uz3efDucftx33297LSUb1LKUq+SxtyC3TtxMnr2IJBJHNG4BzXsc3cOaQQQR6IKnRZjqbjosv091DirGMyWRguY+aCepjXtZanhc3aRkRPrmWlwA/wB/Q9lcHy2Lzck2byuMo9VXSwwX6+gLhfkO9HLJDTcYrTZB3hE63G4tN38RYx3L6iNXOp8drPLan1hjs9i9b5HRuQx12pWp0ZZWmW6YIRcDA8biB0fcFYP+hkFnj/eBSSYyO5VFrUNDqfZ0tS1JNPp+eB+TGVqsdjRGXyNA88xGaS2xhd7HIcvxFq7JoIagGhdODVplOcGJp/J97hz8vst73Lh9d+fLfj63/XpXyIiIiIiIiIiIiIi//9k="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/dash-3.png":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/dash-3.png ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dash-3-93904cff96748d03ca5773879ff6bb96.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/dash-4.png":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/dash-4.png ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dash-4-93904cff96748d03ca5773879ff6bb96.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/icon-1.png":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/icon-1.png ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/icon-2.png":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/icon-2.png ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAHbElEQVRoge2ae4hcVx3HP+fembmzu7M7k92YSCZarK1UbFzdmrTFVqJiJSRKqmL9w+ADQUWoYCtq6MNYTUmgoBJLFYX6SlsSXyQWrKJRA7a11loNpsmmaaObjUn2kZ33fZzjH2d2d+bMzJ07j60KfmGYOef87u9xf7/zO79zzojyo9sIQRJ4EHhHGNFLiCLwCeDnYUSxNkzGgFv6pVEfMAp8gB6NmgbuRHtK9EevnlAAvt6OSLQJPwCcsfgksKoPSvWCucqMd0UUwnae0rDja4DhXjTqA+LgRSKMASO0C614wu9dp57hQzEdgc6LAX8EwomlSmP1OqUUPU1LqdLAcxEoH4kB64BU99KiQPWDiQWsjUC3yiJqoHYLJSGWgfR1IFdWVBWBteIilAuDr4a120HE6JPXQtEs+z0MHKnrEeI+YKgrCUrC8AZIroeB9VA8DVaicz5CFIDbjF4buAsjLGNAYBAeAb5Zz5DddGWUhNgwpDboZmocCieBboyi0qCXxq3UG+VbQM4gWte5xBaQLgxeAU5VZvqaqpf6FoIp9JJUiwULOG90vrIzvgqUD8pr/EgXRiaWSQcvB2cdBMXm9MoMmrYYAzJG37kYcBq4tqbzNU0ebrHAKLAcSKzVCUGp+jHseqNEDFbdALIMVtKQENc83POtxTXiMmDA6HshBhwzOq9CV8OzNX3llmylD+lNsGYbYNW8bQXCqma8Gqy9GV62dVlxUTWoPAX//DZUphufaY0Jo50DnrOAp4yBUeBNRt+J5jyFDr3pH8KZ+yEogBWvfhKtlbMSy3QiDgtPw/O7IX+sE4MA3tpEz0kL+BNwyRh8t9E+25KtsHQozf4WTt4B+b9FV0l5cHY/PL8XvBkdytGxGrjR6DsKFC3gAvAHY3A79Sn8TFsR9iBUzsGpe+HcQT1vwlB6ESbvgX8dBMvWHguHOdG20bgdehR0PQVwwBjMAu+taf+9nURgeVE9+12Y/V1rOuXDmW9A/q9gD9WoEYqC0f6k0T6D9tQSt58BMwbRZ1leJZ8FZBTJCAH2MAy+KoQmBgOXE9GYRRyv+b0N2GSMP4I+w1jiOgM8ZBBdDXy8+vsEMBVJtPQhmYUB0yhjwU1P6PkYHY9XvxPAvcaYC3xnsVHL9WtAySC+C1iPdv3RSKKVp8ui2ix27kdwYicUTy33DV0F8bFOFtxfVL9vR7/wWhygZq9Va9QksM8gXg08UP29v71cBVYMRq7RTW8GTu+F6f265pu8By4+psdiIzB4pV5w2+MY2lPXol90LfLArtoO0/9fAk4afVsrU/NfBH4FnCIM0ofkZTD8Olj4C5y8G+af0JnRHtAG/ONb8OI+CEowujlqGfhwZWp+NfADwMz7u0ydTaPywKdoFHV3ZWr+I+iDzRAEOqzOH4LTe8C9oA1ahLDBTsLsr2FyFyDBeXm7ECwERfcw8GPAPE06CnzVfKDVEdlXgJ0NxHH7jsSa4c+gq47msIfAm9NzKiwRSFd7T8RBlmhZ70m1vzJ96UpgozEyA1xPY2S1zKl3otN8HZQXfFmWXLNWrIefq5ZIbTKblahW8iEGQcm9kL+eRoMC4EM0MQhaGyWBHeh5VAdvrnSjCqSZJZfRUZq2CKvIg1zZVn7QbG34GCFHz2Ea5ID3sJxKqywV/nzJLPf7DuUF+LmKuUUOgI/SZm63e6054GZ01lmCLHsEhUqHanYABf58ydifMQ+8j7bJKlqdUnK2HNoBfB5YOqn1L5WR7soc3PoLJZP3n9HbjJ9GeT7yBHC2HNqDvv14BtBhOFtEBdFKwqgIChWC/FIUSPQtx2Ynm3kmKo+Oii8nmzkCvBnttSkVSLyZQt8MC4quDjuNx9DGfNrJZhY64dPxYaaTzRSdbGYP8Ebgc8oLjnsXCyi/N8OCgos/V6ygl5KbnGzmnU428/tueHV9QutkMxecbGYvMKH84F3eTOEh6fqtU30IgnzlBX+++AVgwslmtjvZzC+71Qui3k+FwMlmSsBh4LA3VxwRlnWfiFkfjsRbqSnpBTvtlPM9O9XRVj4UQqkODhaf3RGV8jpgN40HI4soAfejy7G5yPJf//1IZCt1QfA48Hb3idyDwbSLKkn9KQT4x0s5cmozel8U3aAO0JmnFtHMYwmBe/gS/lNlhCMAYUnPf9qvuOMIEEKgpEIISI6m32/HEweQCmJg3TKAGBU1q2AVET1jouc5tYRAkXhLmsTFFFQUWOJtSDnulcq4uQKB5xEfSuIMp7AT8VuBg7goxi1YLfSGvE/oo1HAiILXAk8qSKjbAOKDA8QHkigpEbataZW6AclmUvyGDaLx3qVH9HdO+cDVFmTYSIWb8AFPgQ9CWfp3tY3L7YxbkO6/Ud16Ko3Obm+g9sVI9GZ7a+wVFJTV8pXpO+0tjIkn8ZqalEdnx590o1y3Ru0DPth0RKJvjDKi3fmDQLIxhGYTL7FR4X+TkUQ9+gxD10HZ7Zxa+dvoHmT8NxvVNVb+Lwf/AfzfqP8VdGtUlH9z9YquZXSb0h+g23/ARId5yRYZ/waim3OEw7Os3AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/icon-3.png":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/icon-3.png ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAISElEQVRogc2ae4xcdRXHP+d379yZ2dld2u2LR1ekLTQVaLUJYtCaCKiUqg2gJWCNKD5QgonPP0A0GhMMEBPSRCqJpNgaYjUWEmMaMdU0StQiWGtbtrhbWkt3y3a32+3szHRm7u/4x713HjszO7OP7vab3J177+91Pvec3/n9Zu/IjhdfBODGNWuuTcTjv+hIpZa5joOIgAgCwXnwqYiAKhKWEZYhgqgq5bpEUhSUKmn0VyuvK0prmmhwrTW1DgH39dzY3gfgRgOn2toendfRsTaZSNBIQYc1Q4cnCiLj7b6QMNHfdcAPgc1VQF4sdkU8Hp86TI1hswITDb8sOneNMQAYY4rRU74YYdQvgrUQ88bDABRLQFXzo47mEiZ/oo+xPbvI/nMv/ttvYX0f55IuvFVrSX1oI4k176+x15XIQ2ESuBhgNDfG8LYnGN35NDaTLpXZQgEch+yBvzPyq5+S+uDH6PrKD/DeeU0ZyJQhqsaZKxibPkv/tzeRfe0vVX3YbAGvu5vi6BlsLgsipPf+jsz+l1nyvWc6S0ClkAs91QzmUG8vI+k0F0R+kfYt3yJ24OXSeKqKf67I/I2fZOmjW+nf8l0Gt2/FtLlBk5Fh+r9//7sUVgGHS0lBQKUJDKrM6+jAi8Xql9eokWca1P79dvwQRkMb7PkiXXfdyzt+/EsATFs7asv9KaCjZ2MKW1BuLXnIiKgC0iTMLlu0aFz5zCQAm8twfPcOipXhrIqKMO/2exk78A9S178XtYqt6FTDvhRuQXWdEZHSrmAuU3N2/9/In+iLjAsOEXANfV+7m7e3PV7qz9rAJKtgVdHwsMrdpZAbP/ZsrzO5g/tKIJX1VAR/dAy1ZXM0AqkwMQhT1lWG3JzBABROD5QMK90Or62E3gpbWaVqnFI7pbucFMKFtRnMm/0nGctk68A0Ui183VpjmXoGBkCUk0QUauOBwvOiW7ErVo120BN4plAocj6fbxGmdZkFl2GUai+FYVWCCMezCkItuEJPeWGNPpuE2Yru7nEwUw+zyj5y/kZ6tz8ZjqNVT95WQYZAWuGZqD68ZMQYxJgg5OZw15y4ZjXJa2+IslXNURFWFfc1OIJ7eVWeN4iHEUGM8YW5gQFQMSz60iPVEJHxFnCCnYG4sYp0Hc6vgoWs/ZmftW+YS3UPVtqRzGC71mxOZwkmPG1/3y0s+vx3wNpgAY3AHMj87yjpQ6+S/u9hcCjDZCzODesyIzetf6Ttw8sRfQKPIk/5n3rhiyzf6ASPozHMaDpNvlCgnjfrAtaFmbj+4LNPcu65n+AUfHxXUATrWzAG9S0YgaJCHsz6O7jqq1/QK/+wYQeGB1yWyj5O6moRp2INaOyZ4wMDpDOZOigzqI/cw0D3daSee5zUm4cweYsBrLWIgnUUXbGK1OaHWHjrnSTSB4UYn2GJvMflcl3tJxOo2vCpTxxmy664goLvV5fWCbPKj6o+ous67q28dfWVV3Ls+nfT/69XiJ86jnNmEIPgLr6c1Mrr6Fy+kmR7J8Zrw6SLFLrbiS1OXyf6JywOgrcSf/WLqLeiIcz4Qac7Z2pKq9oEFycGBhgYOkMiHifueXgxl5jr4ojgxeJYUdr7HmBBYRf4aPlLUL4HZ/8HkOEXLhoYgKVLLqV78SIcFBfFQXEE4l4SP3eShX3rA5hQBsO50lXhNM7rmzAnHqO0VM0hTDTG4oULWbJwAa7rEIt5eLEEhZF9dJ+4mVTh1XJ9wznRvQwBXYyTXXAn/rKnwe2qMty3Pmq1KUyl0VOFQYRgrxncz+TOk8udx5x+nu6z36iXZofdmluhzNBvkewRiit+Dqm1pVGO9zfPcvXSed3SiSuSSiZZeumS0nXCyREbeJiu9LaGbRp6qCSnk+KyLdiF98xqmFXWBzBjr5F8835MtqehqcCwmagUAH8U943P4hx7GNVClXGzBeMO7aTtyIZmMAA0BwrlnHySWM9dSKGf2YTx3voRyaOfQ/yzLdnZMhCAGdlN7ODNyLm/TgrG5I5gRvcgfrri7sQwUhwm0buZeP9jkzERE+y9Wz8k04t3cAPOqWdagnFPbSXxn5tIvL6BxOFbMJn9TWFM5iDJ128nNrRrUrZhwUTLzaQOP0us9yHcvofAjtWHsVm8ow/iHft6qY7J/JtEz224wzsbwrjDL9B2+DacsQOTt0unChQebv8zxA9+HMkdq4KR/HESPZ/AHXyW8ZLiCIne+/BOPlYD4731OMkjn0YKw1O2SfSPTdJ2C1LvcvJXP40//6M4o3/GO/pl5Pyxpu2K8+8gd9VWUCHR+yDu6V9PxwyAYdGXpg8UrOoxipdtwh3ZBbb1rxd+ai0UDM7oK8F/PqanYdHdMwAE4AEN9x1NpECe4LXV9KCGXew0mmtoQBJwptGPANHb0HzFvSnIxW9eqa6UwCNtBDBN9mUtKUGwMmYoP6xJysVOslVkeFwhFQ46EzBR3x4BVFqCEJzU0j9ZD0VPLaWBZ6J0OZOKPN+pcE7gPJPyVOtzyBKEVocGoTHTIJVSAs9EUGMEUC2AteYhSzBp5ynEuLAwkaIxOjXw2Ii0NK+aA1mCudKlwVObDZhKKWHiURgSKDDhvHLLP1mo05EQrFCXaPneXEgJwnyxwqAEWbABVH0PWQI3L1DogCmn9pmUJYBYHHpqhLrzyqUotQ0TGjSMU17oLibN1+D1z1DtvKr2kCVIyQvC2Kp+UXdxKanBvB4yVVsmlyJSouwAOoGCXJyeGS9D4K0zpfVKXHxsabGMAznmbvJPRQK0K6hADuMC24jzTRS4QL94mRW5Cq78xkV4lAKD5GUlM/GNZG6kCH0IT/0fSN6PPgBvKCQAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/icon-4.png":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/icon-4.png ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/icon-5.png":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/icon-5.png ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/icon-6.png":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/icon-6.png ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/logo.png":
/*!****************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/logo.png ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-b73048211d7a9a05b4c449061f130c5f.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/process-1.svg":
/*!*********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/process-1.svg ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODciIGhlaWdodD0iODciIHZpZXdCb3g9IjAgMCA4NyA4NyI+DQogIDxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MDQgLTEzNzkpIj4NCiAgICA8aW1hZ2UgaWQ9Il9QYXRoX1BhdGhfIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7IiB3aWR0aD0iODciIGhlaWdodD0iODciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwNCAxMzc5KSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGY0FBQUJYQ0FZQUFBQnh5TmxzQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQTJSSlJFRlVlSnp0M1U5SWsyRWN3UEh2ODh5eHZVNmJPbWVtVUoyNkZOMkNEcEZVRXBRV25qcEYwQ1VJdkJSRmh6cDFLWWlnb0tJL3R5QVVpZFFnT3RpcFM3Y3VVY2NJclZCTFZEQVZ3VDBkWHVlZk9lZXIrWFA1N3ZjQllXeDc1Y2VYbDJkNzNzTmVZOTdmWnhYMXdIR2dHZGdQMUFHeDFRN2FzbHdHOXV6OFNEUnlocW1aVWY1TWd3RWNFSTFBUE9vL0RxQ3N3R3Yxd0ZYZ0xIN1EwdUFNeEtMTlZDWjZtQjVwd2JrSmpGblh2N0lyUE44R2ZBQXVVMHBoc3h4UUZqMU1WV1VIMXBUakFwNnFPZkxGdlExMEE3di9ZYndRY0pEd1dtbE12OGFhcXZVRXpvMTdCN2kySWJOdFpmT3JnSU9FZDR5R2RNOTZBaStPZXc2NHNrSGpoWWlEaE5kRVkyMFAxbXdMK21FR0MzSFQrTXVCeXN0Qm9yeUo3VFV2Y0M0VzlBek94cjBCN0JDYkxSUWNsSHV0MUZhOXdwaGtrTUFXYUFET2k4OFdDZzdpc1pPa2t0MUJBbHZnRkZDNUtiT0Znb040N01oYzRJSnJzTVhmZmFrMW1RdGNrK3lFbGRkZ0MremIzTUhDd29FWE8wR3Fxc3MvZzVjSHRrRHQ1Zy8yUDNPUXlRUi9yeGM3VFNyWmsyOE5YbW43VzdveURpYW0xbkRBa2pVNHVYZ04xcmk1cklYaGNjak1ydUdnK2NBdmdYajJETmE0dWF5QmlVbjROb2lmSitnVk1RZnhXRE9wWkFmR1ZPQTBibjVsRWVnZmdxL2ZZWFlXUDFPUVB3T2UxMFpkZFM5bGtXU2g2N21sTFdLaGZ4aEd4aUZkRFJXZS8xd1F4aHdGdWpSdUlSRUxrek56U3dTczZhSzVjWWMwN21xc0lmaTZ1NWlaMWpWWGtNWVZwSEVGYVZ4QkdsZVF4aFdrY1FWcFhFRWFWNURHRmFSeEJXbGNRUnBYa01ZVnBIRUZhVnhCR2xlUXhoV2tjUVZwWEVFYVY1REdGYVJ4QldsY1FScFhrTVlWcEhFRmFWeEJHbGVReGhXa2NRVnBYRUVhVjVER0ZhUnhCV2xjUVJwWGtNWVZwSEVGYVZ4QkdsZVF4aFdrY1FWcFhFRWFWNURHRmFSeEJXbGNRUnBYa01ZVnBIRUZhVnhCR2xlUXhwVmpOSzZjR1F1TUZudUtrQnEyd09kaVR4RlNueXpRVit3cFFxclBBcjNBUkxFbkNaa3g0SzBGQm9ET0lnOFROcytCb2V5M2hadkE3eUlPRXlZL2dWdXc4RDEzQUxoZXRISENwUjBZaEtXYmlLZkFvNktNRXg1MzhXOTNCaXpmb2JVRER6ZDFuUEM0Ujg1ZHVYTGpPdnpBRjVrN3RkV3FmZ0FYZ0V1NUw2eTAvWDBNSEFTZUFPTnljMjFwWThBRDRBRHdMTjhiVElDN3ArNENXdkR2bnJvWFNMRyszNW5lNmh6d0MvZ0N2QVBlQVAyRkR2Z0xUSTZkb09VazlZVUFBQUFBU1VWT1JLNUNZSUk9Ii8+DQogICAgPGltYWdlIGlkPSJfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiB3aWR0aD0iMTAiIGhlaWdodD0iOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDgxIDEzOTcpIiBvcGFjaXR5PSIwLjIiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBSkNBWUFBQUFMcHIwVEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFIVkpSRUZVR0pXRnpLRUtBa0VVaHRIaklCYWpQb2FQWVRBSmluVzZyeWVZZHNHZ1JidlJaclNzaTdZRkxSTkVkblp2K2o4NDNFR01jWVlkcG1pMDMyMklLN2JZWTVTQms1QkdpVGtlR2RpRW56aGhpYnBOaHI4K1k0Vm5INFJEK3Z6dWczREVHbFhxVHc1Q2dRVmVHSGRCdUdDRCt4ZlNmUlgxY1VURjNRQUFBQUJKUlU1RXJrSmdnZz09Ii8+DQogICAgPGltYWdlIGlkPSJfUGF0aF9QYXRoX1BhdGhfUGF0aF9QYXRoX1BhdGhfUGF0aF9QYXRoX1BhdGhfUGF0aF9QYXRoX1BhdGhfUGF0aF9QYXRoX1BhdGhfUGF0aF9QYXRoXyIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7wqArwqAmbHQ7UGF0aCZndDvCoCvCoCZsdDtQYXRoJmd0OyIgd2lkdGg9IjU1IiBoZWlnaHQ9IjM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjEgMTQwNykiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBbkNBWUFBQUNyRGREZEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJ5aEpSRUZVYUlITm1XdU1KRlVWeDMvblZsVjNkVmUvcHJ0WFlHQUR1RzlaOW9PdVJoSFUrUHFDbTVoTmZJUWxDK3dtS0loS1NJd2tHeFA5SXNwSGlmckYrTWdxK1BxQVJDUkUxMmpVUkpTRW9QZ0lxTVFsZ1Izc2NmbzVYZS9qaCs0ZTV6MDkwNzJyLzZUU1hWWDNubnYrZGM0OTU5eDdwZGxzTWtJY3h3RFl0czI0aUtJSVZVVkVFQkdxMVNvaVVnZHVBTjROdkI3WURSU0dYUktnQWZ3ZCtBM3dNK0Rwc1FmY0JtUmE1QUNNTWRWcXRYcWZpSndDcnRpR0hyOEN2Z2c4dm8wK1c4Sk1ROGpRY3U4ckZvdFBpY2dadGtjTTRDYmd4OEMzZ05vMGRJSUp5WW5JeUdxZktwZkxqMlV5bWIwVDZuTVMrRGt3cVJ4Z0UzSnBtbTU1SlVsQ21xWm55dVh5ZzQ3anlEUVVBbzRBUHdJdW0xVFFtam1ucXVUemVYcTlIbW1hYnR4UmhEaU9QMUF1bDcvdmVkNmtlcXlIWHdQdkJmbzdGYkN1NVd6YnBsUXFrU1RKeURwcnJpaUtyckp0K3l2NWZINm5ZMitGRzRFemt3aFlsNXlxa3MxbUtaZkxpQWpHbURXWHFuNjJXQ3pXUmFibGpldmlQbURmVm8xRzBYbzFOZzBvbnVlUnkrVUlnb0FvaXBhdU1BejNXWloxd25YZG5hazhQbkxBSnpkNnFhb2JFb014b21XbFVxRlVLZzBhRDYwRzNPRzZybnVSclRiQ2gxZ25QWXlteTJZWUt4VlVLaFh5K1R4UkZKRWtpYVdxTjJlejJaMnB1bjNVR2VUQkpTUkpRaHpIYlBWeHg4NXpNek16ZUo1SG1xWlhBdnVHZ1dWam41Z3Uzakw2TTVvYTQzak4ySFdXaUZDcjFVaVNaSS92KzduNStYbHROcHRrczFrdEZBcmtjcmtOUjF0TUl4cFJCeGcyVWVVMW1SS3VHWHY0L1FCaEdOTHY5eG5YYThhUnZwZUJXeHdWa1lQMWVuMVBITWVxcWtSUlJCQUVMQ3dzMEdxMXRGZ3M0bm5lQ3BMbm1zOXoxL01QODByVUFSazZTcHB5alZ2bGtVT25PT3lOVmFtVmZkK24yV3lTeitmSHN0cFc1UFlEOXdNZkJKYXl0R1ZaV0pZRmdPdTZGSXRGVkpYRnhVWHRkRHJxKzc1V3ExVXpVdUFMTC8yVUY3b3ZnYjB5SHo3WCtodmYrZGZUUE9BZDIxQUJWZFdoRys1dU5wdDNEKzhYakRFdk9vN3pKeEhwTGlzQnh5YjNDZUJ6UUdVVDhrc1FFVHpQRTgvenBObHM2dno4dk5hcU5SRWpCQnFEeVNDeWNucXJjVWgwL1dnWFJaRjJ1MTM2L2Y1bzFiRlhSTDRNME8xMjZmVjZXSmIxejF3dTkyU2hVUGg2SnBONWFrdHlxdW9BWDNVYzUvUTRwTlpEcFZLUlhxK243WFk3TFZmS3hyQ3hDOG1xZDJtYWFydmRwdFZxb2FyaU9JN21jamxzMjFiTHNnVFFORTJKNDFqQ01MeTYzVzdmMmVsMFRwZEtwYlBsY3ZuVHhwaFhOeVFYUmRGRGxVcmw5RENYN1JpZTUwbmcrMmlVcFArZGFKc2ppaUp0TkJxRVlVaWhVTUR6UE0xa01oaGpsbitCcGY5cG1tb1lodlI2UGF2VDZkenUrLzZiZHUzYWRZdHQyOCtPMnBpUnYvcStmNjlsV1IvSjVYSVRFUnNoNjdvaWxoSFlPbHNFUWFCemMzTmtNaGxtWjJlcDFXcml1cTZzSXJZQ3hoaHhYVmRxdFJxenM3UHFPTTdyNXVibXpvVmhlT05TbXlBSThIMy9vTy83bjU5NkVXeTJDR3NDS0xxd3NFQ2xVcUZXcThsT2xrNjJiVXU5WHFkVUt0WG01K2UvbHlUSmJnQVR4ekZoR0g1R1JIS1pUT1pTSldWZ01PZVNqcS9GWXBGQ29UQnhMVmNzRmltVlNyT3RWdXRMQUxhSXZGWlZqMXVXdGEyOWs0a2hRdC92cTdFTlh0NmRXcEU2cktMZTcvditlNHlxSGxkVjE3WnRuVFNRYkJjaWd1UXpVeCswVUNpUUpNbTlSbFhmT1h4MlNWMFNWZHpzOUN5MkhDS0M0emhIelRCQkFwc2twRWtHMnV6bFJmeWNtVXpHc1lFWkdDd2pScHVyazhCUEkyNzk2MW5PK3cyTXNmbkw0Z1hFT0d2YWlaWGw3S3UvNHhldEYwalRtTXV5RlI0NWVCc0ZhMnBMS2JVQlMwU1cxa2lPczFhUjdjQVNnMjBNdi8vM244SEpnVGpyZnpBeHZCd3M4TExmZ0tqUHNTdHV3QkZyb3JGWHd6RGNYVXJUVk1Jd25GaWdJeGJmUG5DU0QxLzVEa2czWDFDS1dKREUzSHo1bS9uQm9WTmt4MThDalFVRHZESzY2ZmQzdkl1MkFyWVl2bm5nVm83dE9vckdHOHZVdU04YlovWno5dURKcVJPREFibG5ZYkEvTXF6Q3B6TE5zOGJtNFVPMzgvYnFkV2k4dU9hOXhqNkhpMWZ6NkhWM01tTmZsTzFCTWNCUFJuZHBta3FyMVpxYTlJS1Y1YnVIN3VCSTZWbzA5cGVlYXhKd29IQVZqeDMrS0xPWjh0VEdXd1Uxd0JQQWl6Q3dYcS9YazA2bk03VWdmWG1teEJQWDM4UDFwV3ZRcUl0R1hmWjdzeng1NUdOYzYwN3R6R005UENmbno1OEh1QWQ0YVBSVVZiVmVyNVBQNTZlVys4NEhDOXovajBmcEp5RVA3am5PdnR5dWFZbmVDQ2RHNUxJTURnTGZBRXRIVWxxcjFhWks4QkxpdDhCTm83b3VBRTRCYlZnNm1wSkdvMEdyMWRKTHVJVTNNYUlvNnNWeGZIY2N4L0h5b3ZVUHdBbUdlVzk0REN6TlpsTXVYTGhBdTkzV09JNy9YMGxxRUFRMEdvMmcyKzNlWWxuV003WnRNM0xMNVhnWDhBMEc1OWlEbnNNOWVjdXlOSnZOa3MxbUdhNGlSQzdSbnZwcXFLb21TVUlVUlJJRUFXRVl6b3ZJYmNWaThmRnllUkNCMTh1YzU0QzNBZzh3c09UU1liNnFTci9mWjNGeGtmOFZxV1dRWldmeHY3UXM2K01pOHNjVkRkYXgzSEs4RGJocitIdlJqM1MyaVJSNHhoanpOV1BNRDRmMzVQTjVScGI3RHlpRklkNGRtSm1HQUFBQUFFbEZUa1N1UW1DQyIvPg0KICAgIDxpbWFnZSBpZD0iX1BhdGhfMiIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDQ0IDE0MjYpIiBvcGFjaXR5PSIwLjEwMiIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBd0FBQUFPQ0FZQUFBQWJ2ZjNzQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQU1sSlJFRlVLSkdOMEtGT0EwRVFnT0h2THBpS2FreUQ0UjJxRVFpd1RjR2Rxa09jb3haRFVrTkNFRlVWYmNJNUVnemhMUkJWSUREWWlpcFVnemhFNzVMTjVySXd5U1k3cy84L081bXNLQXFKNkdHQXo3YVFwMmhVT0E4TEtXR09FYjcvSTVTNDZucm9FaVo0Q1BJNkpWeGlFZFd5TURrSTdxZFl4UUJtdUc2YXY3WENFTS8yYTR6anNEbFE1VGpHRS9vZGNCaDN1TTF4ajZNLzRDV21tcmxLZkNUZ1Ivdk4xYTN3aFRFMkhmQkxDTGNDdk9Nc2tsNXhnWit3UTdqV05VNmFXYmU0d1M3KzhoZkh0Q0JMVm05ZlNRQUFBQUJKUlU1RXJrSmdnZz09Ii8+DQogIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/process-2.svg":
/*!*********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/process-2.svg ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODMiIGhlaWdodD0iODciIHZpZXdCb3g9IjAgMCA4MyA4NyI+DQogIDxnIGlkPSJDYXBhXzEiIGRhdGEtbmFtZT0iQ2FwYSAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODE1IC0xMzc5KSI+DQogICAgPGcgaWQ9Il9HcnVwb18iIGRhdGEtbmFtZT0iJmx0O0dydXBvJmd0OyI+DQogICAgICA8ZyBpZD0iX0dydXBvXzIiIGRhdGEtbmFtZT0iJmx0O0dydXBvJmd0OyI+DQogICAgICAgIDxpbWFnZSBpZD0iX1RyYXphZG9fIiBkYXRhLW5hbWU9IiZsdDtUcmF6YWRvJmd0OyIgd2lkdGg9IjY4IiBoZWlnaHQ9Ijg3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MTUgMTM3OSkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVFBQUFCWENBWUFBQUM5VWVPSEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFhQkpSRUZVZUp6dDNFc3lBMUVZUi9Famd0M1lGNUtnV0FWS0tZL3QyWUNCTXNCQWVReHVoK1JmOFVxNkt2UTl2MG5QdmtwTzNmNjZZMkRsOXViNmxmL3JBamdBbnRvYTJBTWUyaHEyQkVQZ2xQSTlXdEhhb0NVYUFKZkFSaHZEdWhBRVlBczRBbFlYSGRTVklBQWo0QnhZVzJSSWw0SUFiRk4yeXZxOEEvcnRmWlkvWTlCY1I4Q3ZuNkJkT3lGakErQ0tPVTVLVjRQQW5JdTJ5MEVBZGltTDlzZXJvZXRCb0N6YU0zNTQrM1J4cWM2eUE3d0FlODMxVXpXY2tMRWg1WTMyeTVOU1V4QW9pL2FZTDE3ZWFnc0M1ZjNrakUrZVBqVUdnYkpvejVueGc3Q1dwVHJMTnZBTTdEZFhvTjRUTWphay9KSHBmYWZVSGdUS29qMmhlZnJVZk10TUdsR1c3S0ZCUHV3QWQ5NHkwellOTXUzSklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnd1NEQklNRWd3U0RCSU1FZ3dTREJJTUVnb1lkUkp2WDZ3RDNmL0R1OGlqeStBZFpWSkVpdm8wWm1BQUFBQUVsRlRrU3VRbUNDIi8+DQogICAgICAgIDxpbWFnZSBpZD0iX0dydXBvXzMiIGRhdGEtbmFtZT0iJmx0O0dydXBvJmd0OyIgd2lkdGg9IjQxIiBoZWlnaHQ9IjUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MjkgMTM5OCkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2tBQUFBekNBWUFBQUFLTFNFTEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFYTkpSRUZVYUlIdDJiRnFGRUVZd1BIZjdRMkJWSGFwSW1wSzBVNnhzaER5QUxZMkZqWVdkalkraEE4Z0NCWnFtenFGZVlLZ3hLUklJU2hZUkFpQ2lFS0lJUUV0ZHRMdG5jSjlNck13UHhnTzdtRDRzd3Z6M2Q1TjluZTMzdUNLeFR6Rjh3WDNtR215djd2MU8yQ2ZkN2dac00rZ0R0OEM5dGtPMkdPbWhGdTR0TUFleDlpSnlSbVc4Q212YW5XbEEvNUZpNHpTSXFPTUlqSmhpcFhTSVFNNmZNVnB3bXRjelI5RWpNZ281MmY0dzRSN2hXUG11WVpYSFg2V0xwbmpCejRuckdPMWNNd3NCOWhKZUp0WHRVWnhCTFhJS0MweXlpZ2lVMzVkS2xveGJJSVQrc2dYdUlFemRjM3VKZjJqOHBPRUI0Vmo1cm1PemFTZmo4dnF1b3IwdC9zWUJ3bDNjRkYvdTJzeXhSZDVkci9QcTFxak9JSmFaSlFXR2FWRlJrbDRpY3VsUTJZNHhLT0UrNlZML21LancxSHBpamxPNU5sOUcydjV6WnErWkV6eEVYdHRka2Rwa1ZGYVpKUlJSSjQvZDE4b1dqR3N3M2Y2eUdmNlI4ZmFKSHpBNDZqL3UvK251NTM4VTBhbGZ1SHdEOVRJUG8rakJFQ1FBQUFBQUVsRlRrU3VRbUNDIi8+DQogICAgICAgIDxpbWFnZSBpZD0iX1RyYXphZG9fMiIgZGF0YS1uYW1lPSImbHQ7VHJhemFkbyZndDsiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODYyIDEzNzkpIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJZQUFBQVZDQVlBQUFCQ0lCNlZBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBTDlKUkVGVU9JMnQxTTFwQW1FUWdPRm5ROGcxTVpvY3JTYnhwd094TnlFaVJzekp1NlFITDFaaEV4NEdXUkYxZDkzNUNuajRtSGVZWXIvYmJqSEZRZUo3d2hjV2VNdUdZWWcvZkdiRDhJMGZkTE5oR09NWG5Xd1lCbGhwT1pack1ESHp1UlkvdndYRENHdDhaTU5FMERsNjJUQVJkSW5YYkpnSTJtalA2OEludkhiUUpqQmwwTXFaTjRXSm9Bc1YyL0lJVFB6ODd1RjZGS2JpY0xXQktRL1hlelpNN1BucUVzK0FpVlZjT2d1YUJSTkJOK2lqZU1aL0VsemdCUlBNanRzekdVWnFjUVIvQUFBQUFFbEZUa1N1UW1DQyIvPg0KICAgICAgPC9nPg0KICAgICAgPGltYWdlIGlkPSJfR3J1cG9fNCIgZGF0YS1uYW1lPSImbHQ7R3J1cG8mZ3Q7IiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg2MiAxNDMwKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FZQUFBRGhBSmlZQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQkx0SlJFRlVXSVc5Mkg5c2xWY2R4L0hYOHp6M1h0cENoNVE2bEc2TXpWRkdCdEZ0aGJsQ0dNbFlRcVl6eGwrWmY1Qm9vaWFHUktiVGZ6QXVNekZtaTVycGlESHVuem16R0pjWWs4MWt1T2tmOGdlUXNiV2kyN0FybEFHamt5RXJCUXJsOXQ3bmVmemphUy9RM3Q1N3FhMmZQOC81UHVlOHovbCt6L2M1M3hOMHZ2eHIxNkJPck1jNmRHRU41azJ5dVlDRDJJODkySXRqalU0UU5BaTBCdC9DZmJpNTBjSEgxWWMvNHhjNFdzODRyTk8vR0QrWHJmUnJNNENCMi9Bd2V2RW9Gc3dVcUJ1dllEdGFad0F5V1l2d1Evd0pxNjRWNkNHOGlEdG5BV1N5TnVFdjJOd28wRVA0cmN4ZGM2VU9QSStOOVlBMjRtbms1eEJtUW0xNERxdW5BMnFYbllUWmlKZXFTdEowY3RPTmVCS0Zha0NQNGhOekFWSk1ZaVBsTVZFUUNLWjJiNWFkd3F1QTF1RHJjd0V6R3BkdFdYS0xaN3MrN2JtMUQycUo4dFYyYWp1V1RRQUYrRGFhWmh1bW1KVGQzdHJ1eDdmZmEvUDF5M1V0K3FnYlc2NlRtQUswRkYrZEFGcUIrMmNicHBRbTV1Y0t2bjlidDdaQ3R0WlNrb2pUbEtrN0JKOURlNGg3Y2NOc3dxU3l1Tm02YkxVTjdaZUhmdWJZUHgwOGQxb1VSdFUrVzRPdUVCdG1Fd1l1eFdVYkZuZDQ1TmExbGJhOUh3emFPZEFEMVFKN29yazd4QjJ6Q1ZOS1l1MkZaanRXM2lNL3ZoTm5TMFUvTy9TcTRWSlJJYXo1KzF5WHc4cDZreFNUV0RsSkJBSE5VWDY2RlVxa3ltbHEyOGZ1OHZHRlN5cnR2enpTNjdVei85WVM1YWVHODlXNkkrZUtwRFJaYVpyS2g1SE82OXAwTkxlNkVJL1pjM3BRR0FTaVlDcFdNUzY3Ny9xYmJWMTJPZm4rN2ZSeHp4NTdvN0piZGRTU3E5a2RCTTZYaXg2K3Rjdkc5bVdLU2RuVDd4eXdjNkJIa2dieVYyei9XSkpZMnRUcXNWWHJLMjRaSEIzeG83NjlMc1d4cHFnaG9MU21Rd09NSmJHRitYbnlZV2hCcnVBN0s5WjVZdlVtcmJtQ1Mwa000alFWQm55M2M1MmJXaFptSTJQbndHdjZ6cDF1RkFiMUwyaWFvcnpmSEgvVDJWS3gwdmFsRzFiNTFaMWJMRzlaYURRdUc0MUxQdCt4MG1lWGRsWnMvampZNy9rVGZlYm5wbzJJYWdwQ0ZHdFp6QXNqTDd6WDd4dTl1N3g5ZnFqUzN0MjIxRE4zUGFEclF4L1J1YUROOTFiY0xSZGs2enQ4NFl3bkQrK3ZGOERWTkJJdDN2cmdaMlQzazJtVkN5TkhMZ3piTTNUQ0xmTVhXVDd1bGtXRkp2Y3ZXVzdUaDIrcXVLcVV4SGE4dFZ2UDhFbk5VZTBRcmFMZElmNWV6eXJBZ2x6ZXNZdm5iRHZ3c3QrOWU3RFMxMVpvdHFyMThsM3U5eWYrNVpWVFI3VkVNN3BTN1EreHJ4SExWT2EraStXeUhXL3Q5dmpiKzF5S3kxZlpIQmcrNWFlSDlsZE5DUTBveHQ0UXUxMUQzWlFQUTRVdzh0UkFqKzMvK0t2QjBmUGdnN0ZSai9mdk16UTJLaC9VUFN2VmRBQTlPYnlEbC9ETlJyL01YRmp3MHZ0SDlJOE02Vjdjb1hmNGZZZEhoalRQekZYd0I1eVpLQlJYeU9xbW1qVlROWTBsc1hRY01oOUcwLzVXNnVnbzdzSEppYjA5aEowekdha1FSdWFGa2NMTVllQW5PTW5WaWZFSkRRYjRMT3NGVk9yNUs0SE9ZaHRPL1I5aCt2R0k3SVJOQVNMTFNWK1J2V0RNdGQ3RGx6RndaV08xODdrTFg4Uzdjd2pUSjd0RDkwN3VtQzVoN01LblpEbHF0dlVpdHVEVmFwMjFNdGdiZUFDUEdUOEIvNk9PeStxdkw2aVJpT3VsMUl1eUo1VDFzbFA0NWd4QVhzY1BzQlpQb1ZUTHVORVh0QWwxeUo3eVBvbTdaYVYzdFNlOTEyVlBldnRrY2ZLZlJpZjRMNnN1WHl3a1ZseUVBQUFBQUVsRlRrU3VRbUNDIi8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saasTwo/process-3.svg":
/*!*********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saasTwo/process-3.svg ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODciIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA4NyA4NiI+DQogIDxnIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjE2IC0xMzgwKSI+DQogICAgPGltYWdlIGlkPSJfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiB3aWR0aD0iNzkiIGhlaWdodD0iNTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMjAgMTQwNykiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRThBQUFBN0NBWUFBQUE2aDlkUkFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFMOUpSRUZVZUp6dDNMRk5BZ0FBUk5FRGNXQVhzWElVVmlJaG9iV1hnZ1hVWHhDUzl5YTQvQUh1c1BQWDU3YWY4UmZIYmJmVHRvOW5MM2xSMStPekY3eXdiL0VDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkVDOFFMeEF2RUM4UUx4QXZFQzhRTHhBdkgrNy8yMDdickhvNDlYbjk5NzIzYTVBMjMrQ2x5SmEzZG1BQUFBQUVsRlRrU3VRbUNDIi8+DQogICAgPGltYWdlIGlkPSJfR3JvdXBfIiBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiIHdpZHRoPSI3OSIgaGVpZ2h0PSI1OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIyMCAxNDA3KSIgb3BhY2l0eT0iMC4xMDIiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRThBQUFBN0NBWUFBQUE2aDlkUkFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFQQkpSRUZVZUp6dDNMRUp3bEFVUnVFL0pxNGp1SUc2a1lWck9JVzlpN2lHa001R3NMRFFRaXNUOHlBSEFvSHp3YXR1Y3puYytsWGJ6ZTZZNUpXdU9za2x5YWxucGlSTmt2M0EvQnpqL2JVb3pCK1RiREZUcFhnYVlEekFlSUR4QU9NQnhnT01CeGdQTUI1Z1BNQjRnUEVBNHdIR0E0d0hHQTh3SG1BOHdIaUE4UURqQWNZRGpBY1lEekFlWUR6QWVJRHhBT01CeGdPTUJ4Z1BNQjVnUE1CNGdQRUE0d0hHQTR3SEdBOHdIbUE4d0hpQThRRGpBY1lEakFlVTRqMG4yV0ttbXNKOGxlUVFML1JYbGVSV2lyZitQblcxWHRSNGQrTUJ4Z09NQnhodnZHV1RwTTNuUjUrK1gzM1VyMDV5ZlFQUit3K2RaQmo5N0FBQUFBQkpSVTVFcmtKZ2dnPT0iLz4NCiAgICA8aW1hZ2UgaWQ9Il9Hcm91cF8yIiBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiIHdpZHRoPSI3MSIgaGVpZ2h0PSI0NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIyNCAxNDE2KSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFY0FBQUF1Q0FZQUFBQjZTd1NOQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQmVsSlJFRlVhSUh0MjF1TW5WVWRCZkRmbkRQVGxsNFo3UVduV0Nxa1ZCRXJqYWdsbU5ZTFhtdTlZazI4UlRDaU1TRStnTkVZUW9LR3hFdmlMVm9VWXJ4VnZCWGJVZ1dqWWxRa29ROXFncGdnTVNBMldDcllpaWhTMmxvZjFuZkNwSm56N2YxcHFENmNsVXd5RCt2OHovOWJaNS9aYTYvL25qRmZ1QXhlaFgzWXJRNmI4ZHZtcHhidnhSWWNxdUF1d0FYNFRHWHRLWG1HejNmbzV6dzhpcDhQSS9Ud1dud2QxK0tjaXFKdncxWjhBMnNyK0l2d1dYd0tYOFRpQXYva3B2Nm5jUVZPS1BCUGxmNjM0QkpNVlBUMENubmViNHBJTTJLOGVmTUp6TWFjaXNKenByMXVkZ1cvaC9uTjcvUFFML0Q3bU52OFBoZGpCZjdFTk42OENqN3BlM2JUMjlCbkhtdStWcHV4RnpkWEZDYXI1M2I4cXBJUDc1ZlY4RWdGZHhJWDRhT1Z0VmZnOWZoa2gzNDJ5dGZxUjhNSUEzRkdtQUc5LzNVRC84OFlpZE9Da1RndEtJbnpuNGhYczF2OE56aHU5VXNQL3ptczcxQjRKYjdxc2EyN2hEUHhaWFhlQkY0cGZxa0xyc1NiTy9BL0lUN0krQkRDWEhHbjc4RHI4QVl0VHJMQmFtekgwN0FjYjhKOUxmeXpHdjVLbkNpTytFQUwvNlZpRGhmaGlGaUROcmM5SmlieWd6Z28yL1ozV3ZnVCtMZzQrUXV3ZWRqS09ZaHY0Yy9ZZ1R0YWlnNndGMS9EUTdKNi9scmczeU1POWNIbWRmOG84Ry9ERC9BblhJZkRCZjVSN01KZHVFbjVhSFFZMjNBdnZvL2JTajduWFB3R2Z5c1VubzROK0ZrbGQwS09MS1ZWT2NCaW5LYitEQWhyOElDSVdvT3pSZEQ5SXhQWWd0Rlczb0tST0MwNG51S1VUdVBIbTEvRVFKd3JjR0dIMTMxTVRzRzFXQ1E3MlBKSy9sUHhGY3lxNUsvRE5SMzZnVXR4Y1J0aEhCL0E1ZUlaSHBFUWFCaDZZcXJlSjF2dklWeGZhR0s1MklKejhYU2NqOSszOE5mZ3U3SXJ6VmYyUCtjMC9KTms5YnhIMlJaY0xKNkcySmFyWnlMMWNDUHVsTzMzbGtMUmY0a1llL0JEL0xMQWgvMzRrdGlCcmRxTklmeFJVc1lIRy83ZkMvdzd4ZmM4SUIvc3dZcWVic0t2Y1N0K09vdzAyTXJQYkpyWlUxR1l4S1AzaWttc3hZdTFCRXZIb0k4WDRNZVYvSGw0dHBZSG5RR3J4UGpkUFl3dzhqa3RHRzNsTFJpSjA0S1JPQzBvaWZNazNjM1YxT1BJbjRWbEhldFBxaHM1RGJCRWt5OE5FMmRNaG1zNzhHN0RjNS9wNk9IbHNzV3ZWVTdzK25panhCQ25WL0FueExodHc5S0tmdUFKWWdzK3BFNmdwV0lMTHNWRTM2WVpnNzQ1dUFvdndRdnhDL3loVVBoME1XT255ckYvaDNZenRoYmZ4aWw0aGdSZmJSNWxvNWkxVTJRMTNDQ1pUUnMrakxlS0FiMUQ0cGRoNkV2SytCcXhFYnVIaVhOWU1wWjFNbGpiVWRISUFSbnlyV2thdXFmQTM0ZmZpUk4raTdJNXZFdkU3dU9kZUxqQUp5YnZERWtBcnhJVE93eEhaYWo1TEJrdFgxdnlPVXZ3bDBMUlk3RlVOM080QlBkWGNpZXdzT21wRmd2bFdQUm9KWDlTMHN6RHBiOGx0VTFQUnhkaHVyN0hJZDJFb1Z1S3liUnozR2dyYjhGSW5CWU14RG5SWTljK2FqQ3BQbXNaWU1YanlPK0o5ZWlDK1FyUDNCTmh0dUlqeWhlRnlBUmdHeTVUZnovbk9lSm56bE4zUCtkODJhcFhxL05MRjJLbmJQTTFFOUVGRW81dDBUS0E3TnUwL3ZLbStIUEZ5N1RkdWVsTFNMUlpSakMzSzE5OWU3TDRtVE9hMTl3bzJjc3duQzNHYmFYNG4xMzRad3QvZzh5OVZvakgycVc4TTEwaXc3dXptbDV1blluVXQybjliakZ3Tjhnb3RPUUZic0V6SmNhOHBzQW51OFhOSXY1RkVqSzE0VDRSZkxWTVRmY1crSHVhbjJYaXIvWVgrR1FCVElrb1Z4b3lJQno0bkFXaWRrMktSakxoaDlWZGZoeGdTdjFnclN0L1RNUXBHY25wT0VFKzdLRTN6UVkrNTZFT1JVbHEyQlZkaE9uS1A2cWJNTFIvVlRIYXlsc3hFcWNGSTNGYVVCSm5nL3p4N1lLaGw1NW53Q3k4cUFOL0taN1hyUjFyMVE4VFNSS3htT0hpak1zdHF1dms3bkJOK3JaUVFxWHI4UzVsUXprcHhuT25iTmtseDcxQ1lvZHRrakdWUHRneEdmaHRsMm5yYVFWK3I2bTdYZjVONE9SaGI5RER5L0JFV1FsUEtSUW1hbThVVVY2dGZCeVprdXRsOHhwK3lXMnZraEJxbWN6QWFwenc4OFUxcnhNVDJvYXhwdTVKOG8xWk5TenNPaUttY0ZKR3hUTTZ5R053QU4rVEZmUjJaWHR3dnd6NXh1VjZYZWxtKzkxaUlQZkpsYmRTK0VZU3pDT1NJTzRzY0kvS0pIU08zQVg0eWI4Qm9vb3oxakxhL1hZQUFBQUFTVVZPUks1Q1lJST0iLz4NCiAgICA8aW1hZ2UgaWQ9Il9QYXRoX1BhdGhfIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0O8KgK8KgJmx0O1BhdGgmZ3Q7IiB3aWR0aD0iODciIGhlaWdodD0iNzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMTYgMTM5NikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmNBQUFCR0NBWUFBQUM1UWdoU0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUF5NUpSRUZVZUp6dG5MRnVFMEVRaHI4ZEgwcEVRNGRFUVFGZGhDaEJpaE1xSkdTSUtCQlZDcWg0QkNRUUQ0SkV4d3NnZWlnaHZFWWtKRVNCb0VBUUFvbnZLT3h6TmhjbnZuaDNkbTFudnRLeTl1WStqZWIrUGEzdHZqOTY4QVI0Q1p6RGlNVU84RmlBNTVqWTJKd0huZ2x3SVhjbEM0b0lVT2F1WWtFcEpYY0ZpNHpKVmNUa0ttSnlGVEc1aXBoY1JVeXVJaVpYRVpPcmlNbFZSRERCV25RRStKcTdpZ1hsVndFOEJWNERsN0tWVVFGN2tkWnl6TUlMMU0vQWl3SjRCOXdBYmpJb3EwcGFSZ24wS2VXMlBPU2kyNlFmc0ZZQmJGZXZ5cTN5UFVzSUxsS043WEhBUDJBTCtGWU1QL3dDdkUxZVNnbnNnOXdUM0xwY3BjOW04Sm9yN3BOenZLaytsTEFNR1FTUEtDWi9SWW1SMkE2dTYyQ0hwU2pyT3BhbEo1UkE5YkdFSmJJSnpwTVUvSTd0T3ZnYmNlM2gvSmFlSU9zeVdEdnRvQnVSWHU0aHNVbzNQeFRzZW9KYnl5YzRyVnhmN0pyQUxubzNYUTJ2ZFZkd21UbzRuZHloV09lTFRYSE52WHlDMDhqMU9sYldCUDZRN2lhOUdUd1NuQWo5dEZDTDNSRGNhcUtPUGE2R25sQUJaYUlVb2R1NTQ4Um1lbktQeGxMZHdRbHEwWk03MkhraEc1MThIZHVrbnNFOXdkM1NuOEU2Y3V1T3ZTdTQxY2c1TnBTRU9UaSszQlE1TmhRL0J5c0tqaXZYbjdIYU9UYVVPZ2NyQ280bnQzNWdiQXc3ZGhabTdDVDhHYXl3azRzajE4K3gzY1E1TnBSeE83bEloTXR0enRoNTZOZ21YZzZXaURFdFRPNDRzZlBTc1UwVWN2RDBjdXNjTzg4ZDJ5UnlEcDVPcnA5anUybjM2K3BFek1Hbmx6c1BPVGFVU0RuNGRISlR2by9OVFlRYzNGN3VQT2JZVUx3VU1ZM2dkbkw5SEp2NzdWWnF4Z2x1eVdTNTQyYnNXV1BLSEh5eTNFWEtzYUUwYzNDTEVYRzgzRVhNc2FINE9iaUY0UEZ5bXpuV3hCNXdpaHg4Vks3TjJNbTB6TUdINVo2bEhCdEtpeHg4SU5jL1YyQ2pvQjBUY3JBYytsSjlyc0E2dGowbkNDN1lCVHFXQ29JWWR5NENLTnlxNEZZYzdvb3pzU0hVWS9XT0lKY2QxWFpGSWZjRitzUTdObitXS1lFSzNEV0h1KzZHWThHSVI4WGc0RDcyTXlsVlRLNGlKbGNSazZ1SXlWWEU1Q3BpY2hVeHVZcVlYRVZNcmlJbVZ4R1RxNGpKVmNUa0ttSnlGWmtsdVoxSTY4ek1QZVg3cDVDai9BUitBUHNCYTNTQTMzSEtDZWMveTJBK0VyV1NCZGNBQUFBQVNVVk9SSzVDWUlJPSIvPg0KICAgIDxpbWFnZSBpZD0iX0dyb3VwXzMiIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyIgd2lkdGg9IjExIiBoZWlnaHQ9IjE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjE2IDEzOTYpIiBvcGFjaXR5PSIwLjEwMiIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBc0FBQUFSQ0FZQUFBQUw0VmJiQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUdkSlJFRlVLSkh0MHJFTmdsQVloZEhEZTZFekRHSHJFdUFnTml4QVl1Y1VkcTdETGlTRWh0Wk9ZMEVvOWJlazRLdlA3VzdSMU9jV0Q1UysxK09TY0F2Z0N4MkdoT29IaENkbVNIZ0hHUEtLLzI3SEc4VTVNSVhsVEJMR0FCOXdYUEVWVXpDNDQvUUJXRGtNN3RRUkM2d0FBQUFBU1VWT1JLNUNZSUk9Ii8+DQogICAgPGltYWdlIGlkPSJfQ29tcG91bmRfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O0NvbXBvdW5kIFBhdGgmZ3Q7IiB3aWR0aD0iNjciIGhlaWdodD0iMzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMjYgMTM4MCkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRU1BQUFBaENBWUFBQUNDOWhZaUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUE1aEpSRUZVYUlIdDJHbUkxVlVZeC9IUHZVNVM2VmhUMWtSb1ZFUkNZRUVoVmtTMm1VczZKU1pGQzlVTHlTaElhQ0VvN0ZVUVJxRlFCTkZtK0NLRGlJS3dvT0lXbFVRTGdaazBsTVlNaFMyME1MVG5UQytlYzczSDJ6amVGUkgrWC9qRFBmdHpmdWM4NXpubmxnWXJBOGJoTEN6RGhUZ1pVekdLWDdBRFcxREJPL2h6dkE0T0VFZmlJcHlIdVRnUnZhbnNWd3ppVGJ5SUwrb2JsK3JFT0FrUFlBVjZHaGg4T3piZ0dYemZrdm1kNFJTc3hOVTRvWUg2ditGcHJCRUxqTDNGbUllTm1KRTFHc0pYK0ZHSWMyd2FiR1pkNTkvZ1lUeUd2NXViUjFzY2hidXdTdXlLbkIwWUZyWVR0cCtLL3F6T3A3aEs3Smc5WXB5R3R6RTlWZnBFVE81VnNiMXlqc0RadUJ4WDRwaXM3RjJzeHNldHpLeEpGbUE5Wm1WNVE5aUVWOFFjZnE5cjB5OXN2a040QWJHNzUrR0gwbUJsb0VmNDBmbXBjQU51RlZ0cGY4ekFiZW1ia3ZKR2NDZWVhSFJXTGJBRzk2T2MwdC9pRWJIMWYyNmcvWEZpbnBlbTlGTzR1VFJZR1ZpSXpTbnpyVlJoZDVQR3pjWmFMTXp5MW9rVkdHMnlyNG5vRllhdnlQS2V4WDNDVlp1aFR3U0NXY0sxRjVWeFdTb2NFNGRuczBMQVZpeE9SbFhicnhicUg5SkNmK054dE5qK1ZTRkdjRlA2bWhXQzJFRVBwZCtUc2JTTTQxUEdkOExQV3FVcTVncTFFL282UEpjR2E0ZnBRb2dMVW5vbjVvdGQwUTViMUJadlpobWxsQmpUbVMzOUVwWUljWWx3OXlRbXRkaGZyN2dYbkp2UzI0UTdmdENHalZYRzh0OWw3RXFKZnB6ZWdRSGdQU3hWRStSNkVaMmFwVWVFKytyaC9qa1dTYUd3QTV5cHRraTd5bmc5SmNxNHUwT0R3SWRZcnVZeXQrT1dySHdTcmhVUjREVThMZ1RNV1l2cVJlanI5SHU0US9ZZHJqYmZVV3d1RFZZR0pvdjd3WnhVc0U1Y1pQN3QwS0JMaE92MDRDOXh4ZjlNYlAzNTQ5VGZpQnR4alRodjRLZFV0NTB6TFdlYU9HK1dwZlFtM0ZDOWRNMFJZWFZxS3F6Z1FYRVI2OFRiWXlVZUZRZnBOdUdhRjA5US8yV2NJMjZOSTdnaTJkY3UwOFJsN1Y2Y2tmS0d4RnRtT0wrT0x4YXIwcGMxM282UHhNcU1xUjIyalZJOW9FWkZDT3lib082KzJJbm5jVmhLdDJKRFdRZzdWKzNtU2JqZWNtbkgxVC9VWm92WXU2QnBrdzh1ZGd2WHVFZDJCdFcvVExlS3NIVkorc3IyRGorTjhvOTR2MHprQ3EzeUFyN1UyS3U2bmpMK0VHK3UvNFhtZlhYNFJ2cmFZWlh1aUxFZTczZWgzejBQblc1d2FKZjZuYkwvS3EzUlRURU9PZ294TWdveE1nb3hNZ294TWdveE1nb3hNZ294TWdveE1nb3hNZ294TWdveE1nb3hNcm9wUnJQL1NCMXd1aWxHdC9ydW1zMy9BVWk3eEJRWnBDTEVBQUFBQUVsRlRrU3VRbUNDIi8+DQogIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/common/src/components/FeatureBlock/featureBlock.style.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/FeatureBlock/featureBlock.style.js ***!
  \********************************************************************************************************************************/
/*! exports provided: IconWrapper, ContentWrapper, ButtonWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  &.icon_left {\n    display: flex;\n    .icon__wrapper{\n      flex-shrink: 0;\n    }\n  }\n  &.icon_right {\n    display: flex;\n    flex-direction: row-reverse;\n    .content__wrapper {\n      text-align: right;\n    }\n    .icon__wrapper{\n      flex-shrink: 0;\n    }\n  }\n\n  /* styled system prop support */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // FeatureBlock wrapper style

var FeatureBlockWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["overflow"]); // Icon wrapper style

var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["overflow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"]); // Content wrapper style

var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"]); // Button wrapper style

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"]);

/* harmony default export */ __webpack_exports__["default"] = (FeatureBlockWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/FeatureBlock/index.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/FeatureBlock/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _featureBlock_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./featureBlock.style */ "../../node_modules/common/src/components/FeatureBlock/featureBlock.style.js");


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/FeatureBlock/index.js";




var FeatureBlock = function FeatureBlock(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      title = _ref.title,
      button = _ref.button,
      description = _ref.description,
      iconPosition = _ref.iconPosition,
      additionalContent = _ref.additionalContent,
      wrapperStyle = _ref.wrapperStyle,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      btnWrapperStyle = _ref.btnWrapperStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "icon", "title", "button", "description", "iconPosition", "additionalContent", "wrapperStyle", "iconStyle", "contentStyle", "btnWrapperStyle"]);

  // Add all classs to an array
  var addAllClasses = ['feature__block']; // Add icon position class

  if (iconPosition) {
    addAllClasses.push("icon_".concat(iconPosition));
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // check icon value and add


  var Icon = icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "icon__wrapper"
  }, iconStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), icon);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), Icon, title || description || button ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["ContentWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "content__wrapper"
  }, contentStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), title, description, button && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "button__wrapper"
  }, btnWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), button)), additionalContent) : '');
};

FeatureBlock.propTypes = {
  /** ClassName of the FeatureBlock */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** title prop contain a react component. You can use our Heading component from reusecore */
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** description prop contain a react component. You can use our Text component from reusecore */
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** button prop contain a react component. You can use our Button component from reusecore */
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set icon position of the FeatureBlock */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['top', 'left', 'right']),

  /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
   * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** iconStyle prop contain these style system props: display, width, height, alignItems, justifyContent,
   * position, space, fontSize, color, borders, overflow, borderColor, boxShadow and borderRadius. */
  iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** contentStyle prop contain these style system props: width, textAlign and space. */
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
   * flexDirection and justifyContent. */
  btnWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
FeatureBlock.defaultProps = {
  iconPosition: 'top'
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureBlock);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glide.style.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/GlideCarousel/glide.style.js ***!
  \**************************************************************************************************************************/
/*! exports provided: GlideSlideWrapper, ButtonControlWrapper, ButtonWrapper, BulletControlWrapper, BulletButton, DefaultBtn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlideWrapper", function() { return GlideSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonControlWrapper", function() { return ButtonControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletControlWrapper", function() { return BulletControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletButton", function() { return BulletButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBtn", function() { return DefaultBtn; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n  margin: 10px 3px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border: 0;\n  padding: 0;\n  outline: none;\n  border-radius: 50%;\n  background-color: #D6D6D6;\n\n  &:hover,\n  &.glide__bullet--active {\n    background-color: #869791;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // Glide wrapper style

var GlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]); // Glide slide wrapper style

var GlideSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject2(), styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"]); // Button wrapper style

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"]); // ButtonControlWrapper style

var ButtonControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"]); // BulletControlWrapper style

var BulletControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"]); // BulletButton style

var BulletButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject6(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"]); // default button style

var DefaultBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject7());

/* harmony default export */ __webpack_exports__["default"] = (GlideWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/GlideCarousel/glideSlide.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");
var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/GlideCarousel/glideSlide.js";


 // Glide Slide wrapper component

var GlideSlide = function GlideSlide(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_2__["GlideSlideWrapper"], {
    className: "glide__slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children);
};

GlideSlide.propTypes = {
  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (GlideSlide);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/GlideCarousel/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "@glidejs/glide");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/GlideCarousel/index.js";






var GlideCarousel = function GlideCarousel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      options = _ref.options,
      controls = _ref.controls,
      prevButton = _ref.prevButton,
      nextButton = _ref.nextButton,
      prevWrapper = _ref.prevWrapper,
      nextWrapper = _ref.nextWrapper,
      bullets = _ref.bullets,
      numberOfBullets = _ref.numberOfBullets,
      buttonWrapperStyle = _ref.buttonWrapperStyle,
      bulletWrapperStyle = _ref.bulletWrapperStyle,
      bulletButtonStyle = _ref.bulletButtonStyle,
      carouselSelector = _ref.carouselSelector;
  // Add all classs to an array
  var addAllClasses = ['glide']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop


  var totalBullets = [];

  for (var i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default.a(carouselSelector ? "#".concat(carouselSelector) : '#glide', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options));
    glide.mount();
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "glide__track",
    "data-glide-el": "track",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "glide__slides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, children)), controls && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__controls",
    "data-glide-el": "controls"
  }, buttonWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevWrapper, {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), prevButton ? prevButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Prev")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, nextWrapper, {
    className: "glide__next--area",
    "data-glide-dir": ">",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), nextButton ? nextButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Next"))), bullets && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__bullets",
    "data-glide-el": "controls[nav]"
  }, bulletWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, totalBullets.map(function (index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index,
      className: "glide__bullet",
      "data-glide-dir": "=".concat(index)
    }, bulletButtonStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }));
  }))));
};

GlideCarousel.propTypes = {
  /** className of the GlideCarousel. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** You can add your custom glid options using this prop. */
  options: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Hide || show controls nav. */
  controls: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Hide || show bullets nav. */
  bullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** This prop only take your slider / carousel / testimonials data length. */
  numberOfBullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** bulletWrapperStyle is a bullet control wrapper style object prop.
   * It's contain display, space, alignItems,
   * justifyContent and flexWrap style-system prop.
   */
  bulletWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** buttonWrapperStyle is a button control wrapper style object prop.
   * It's contain same as buttonWrapperStyle style-system prop and
   * position, left, right, top and bottom.
   */
  buttonWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** prevWrapper is a previous button wrapper style object prop.
   * It's contain display, space, bg, borders, boxShadow, borderRadius,
   * position, top, left, right and bottom style-system prop.
   */
  prevWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** nextWrapper is a next button wrapper style object prop.
   * It's contain same as prevWrapper style-system prop.
   */
  nextWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Set previous button for glide carousel. */
  prevButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** Set next button for glide carousel. */
  nextButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** bulletButtonStyle is a bullet button style object prop.
   * It's contain  display, width, height, space,
   * bg, borders, boxShadow and borderRadius style-system prop.
   */
  bulletButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
}; // GlideCarousel default props

GlideCarousel.defaultProps = {
  controls: true,
  bullets: false
};
/* harmony default export */ __webpack_exports__["default"] = (GlideCarousel);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 0;\n  background: transparent;\n  width: 44px;\n  height: 30px;\n  cursor: pointer;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  > span {\n    display: block;\n    width: 100%;\n    height: 2px;\n    margin: 4px 0;\n    float: right;\n    background-color: ", ";\n    transition: all 0.3s ease;\n    &:first-child {\n      margin-top: 0;\n    }\n    &:last-child {\n      width: calc(100% - 10px);\n      margin-bottom: 0;\n    }\n  }\n  &:focus,\n  &:hover {\n    outline: none;\n    > span {\n      &:last-child {\n        width: 100%;\n      }\n    }\n  }\n\n  &:focus {\n    > span {\n      &:first-child {\n        transform: rotate(45deg);\n        transform-origin: 8px 50%;\n      }\n      &:nth-child(2) {\n        display: none;\n      }\n      &:last-child {\n        width: 100%;\n        transform: rotate(-45deg);\n        transform-origin: 9px 50%;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var HamburgMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], function (props) {
  return props.barColor ? props.barColor : '#10ac84';
});
HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenuWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/index.js":
/*!******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/HamburgMenu/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburgMenu.style */ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js");


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/HamburgMenu/index.js";




var HamburgMenu = function HamburgMenu(_ref) {
  var className = _ref.className,
      wrapperStyle = _ref.wrapperStyle,
      barColor = _ref.barColor,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "wrapperStyle", "barColor"]);

  // Add all classs to an array
  var addAllClasses = ['hamburgMenu__bar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, {
    barColor: barColor,
    "aria-label": "hamburgMenu"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

HamburgMenu.propTypes = {
  /** ClassName of the Hamburg menu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** barColor allow to change hambrug menu's bar color. */
  barColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** wrapperStyle prop allow to change Hamburg menu bg color, width, height, space, boxShadow, border and borderRadius.*/
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/ScrollSpyMenu/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/ScrollSpyMenu/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/ScrollSpyMenu/index.js";






var ScrollSpyMenu = function ScrollSpyMenu(_ref) {
  var className = _ref.className,
      menuItems = _ref.menuItems,
      drawerClose = _ref.drawerClose,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "menuItems", "drawerClose"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_6__["DrawerContext"]),
      dispatch = _useContext.dispatch; // empty array for scrollspy items


  var scrollItems = []; // convert menu path to scrollspy items

  menuItems.forEach(function (item) {
    scrollItems.push(item.path.slice(1));
  }); // Add all classs to an array

  var addAllClasses = ['scrollspy__menu']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Close drawer when click on menu item


  var toggleDrawer = function toggleDrawer() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: scrollItems,
    className: addAllClasses.join(' '),
    drawerClose: drawerClose
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), menuItems.map(function (menu, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: "menu-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, drawerClose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      onClick: toggleDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, menu.label) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, menu.label));
  }));
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current'
};
/* harmony default export */ __webpack_exports__["default"] = (ScrollSpyMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/index.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/UI/Container/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "../../node_modules/common/src/components/UI/Container/style.js");
var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/UI/Container/index.js";



var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fullWidth = _ref.fullWidth,
      noGutter = _ref.noGutter,
      mobileGutter = _ref.mobileGutter,
      width = _ref.width;
  // Add all classs to an array
  var addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/style.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/components/UI/Container/style.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        padding-left: 30px;\n        padding-right: 30px;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      padding-left: 30px;\n      padding-right: 30px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        padding-left: 0;\n        padding-right: 0;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      width: 100%;\n      max-width: none !important;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: auto;\n  margin-right: auto;\n  ", ";\n  ", ";\n  @media (min-width: 768px) {\n    max-width: 750px;\n    width: 100%;\n  }\n  @media (min-width: 992px) {\n    max-width: 970px;\n    width: 100%;\n  }\n  @media (min-width: 1220px) {\n    max-width: ", ";\n    width: 100%;\n  }\n  @media (max-width: 768px) {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (props) {
  return props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2());
}, function (props) {
  return props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3()) || Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4());
}, function (props) {
  return props.width || '1170px';
}, function (props) {
  return props.mobileGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5());
});
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Banner/banner.style.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Banner/banner.style.js ***!
  \******************************************************************************************************************************/
/*! exports provided: BannerWrapper, DiscountWrapper, DiscountLabel, VideoModal, PlayButton, VideoWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerWrapper", function() { return BannerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountWrapper", function() { return DiscountWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountLabel", function() { return DiscountLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModal", function() { return VideoModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayButton", function() { return PlayButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWrapper", function() { return VideoWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: calc(100% - 30px);\n  width: 900px;\n  position: relative;\n  &:before {\n    content: '';\n    display: block;\n    padding-top: 56.25%;\n  }\n  iframe {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #ff4553;\n  cursor: pointer;\n  outline: 0;\n  z-index: 2;\n  @media (max-width: 767px) {\n    width: 60px;\n    height: 60px;\n    svg {\n      width: 30px;\n    }\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: block;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    border-radius: inherit;\n  }\n  &:focus {\n    &:after {\n      animation: ", " 0.5s ease-out forwards;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  &:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: block;\n    background: linear-gradient(\n      -139deg,\n      rgb(255, 65, 108) 0%,\n      rgb(255, 75, 43) 100%\n    );\n    opacity: 0.2;\n    pointer-events: none;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n    display: block;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: 'Open Sans', sans-serif;\n  display: inline-block;\n  border-radius: 4em;\n  padding: 9px 22px;\n  margin-bottom: 22px;\n  background-color: rgba(255, 255, 255, 0.15);\n  @media (max-width: 575px) {\n    padding: 7px 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 150px 0 0 0;\n  background-image: linear-gradient(\n    -139deg,\n    rgb(255, 75, 43) 0%,\n    rgb(255, 65, 108) 100%\n  );\n  background-size: cover;\n  background-position: top center;\n  overflow: hidden;\n  @media (max-width: 575px) {\n    padding: 120px 0 0 0;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n    display: block;\n  }\n\n  .banner-shape {\n    z-index: 2;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n\t\tbox-shadow: 0 0 0 3px rgba(255,65,108,0.3);\n\t\topacity: 1;\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n\t100% {\n\t\tbox-shadow: 0 0 0 100px rgba(255,65,108,0);\n\t\topacity: 0;\n\t\ttransform: scale3d(1, 1, 1);\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Bubble = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject2());
var DiscountWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var DiscountLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var VideoModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var PlayButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6(), Bubble);
var VideoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7());

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Banner/index.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Banner/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _TiltShape__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../TiltShape */ "../../node_modules/common/src/containers/SaasThree/TiltShape/index.js");
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./banner.style */ "../../node_modules/common/src/containers/SaasThree/Banner/banner.style.js");
/* harmony import */ var _assets_image_saasThree_banner_image_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../assets/image/saasThree/banner-image.jpg */ "../../node_modules/common/src/assets/image/saasThree/banner-image.jpg");
/* harmony import */ var _assets_image_saasThree_banner_image_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasThree_banner_image_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_icons_kit_md_ic_play_circle_filled__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons-kit/md/ic_play_circle_filled */ "react-icons-kit/md/ic_play_circle_filled");
/* harmony import */ var react_icons_kit_md_ic_play_circle_filled__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_play_circle_filled__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_icons_kit_entypo_play__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-icons-kit/entypo/play */ "react-icons-kit/entypo/play");
/* harmony import */ var react_icons_kit_entypo_play__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_entypo_play__WEBPACK_IMPORTED_MODULE_18__);



var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Banner/index.js",
    _fillButton;

















 // close button for modal

var CloseModalButton = function CloseModalButton() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "modalCloseBtn",
    variant: "fab",
    onClick: function onClick() {
      return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_7__["closeModal"])();
    },
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "flaticon-plus-symbol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  });
};

var ModalContent = function ModalContent() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["VideoWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("iframe", {
    title: "Video",
    src: "https://www.youtube.com/embed/8ME-QAlW6Ww",
    frameBorder: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

var BannerSection = function BannerSection(_ref) {
  var row = _ref.row,
      contentWrapper = _ref.contentWrapper,
      discountAmount = _ref.discountAmount,
      discountText = _ref.discountText,
      title = _ref.title,
      description = _ref.description,
      imageWrapper = _ref.imageWrapper,
      buttonWrapper = _ref.buttonWrapper,
      button = _ref.button,
      fillButton = _ref.fillButton;

  // modal handler
  var handleVideoModal = function handleVideoModal() {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_7__["openModal"])({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0
        }
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["BannerWrapper"], {
    id: "banner_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TiltShape__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "banner-shape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, contentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, title, {
    content: "Clique Book makes it easy to maintain your club",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, description, {
    content: "Clique Book is an easy-to-use document creator and club manager. Let Clique Book make maintaining your club's hand book quick and painless.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, imageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["VideoModal"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__["default"], {
    src: _assets_image_saasThree_banner_image_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "banner image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_15__["PlayButton"], {
    tabIndex: "1000",
    onClick: handleVideoModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_5___default.a, {
    icon: react_icons_kit_entypo_play__WEBPACK_IMPORTED_MODULE_18__["play"],
    size: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }))))))));
};

BannerSection.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  contentWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  discountAmount: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  discountText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  imageWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  buttonWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  fillButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px'
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center'
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center'
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em'
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '400',
    color: '#fff',
    mb: 0,
    as: 'span'
  },
  fillButton: (_fillButton = {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    height: '46px',
    minWidth: ['auto', '150px']
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_fillButton, "height", ['40px', '46px']), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_fillButton, "minHeight", 'auto'), _fillButton),
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px'
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BannerSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Feature/feature.style.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Feature/feature.style.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 100px 0 80px 0;\n  @media (max-width: 990px) {\n    padding: 80px 0 60px 0;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 0 20px 0;\n  }\n\n  .feature_col {\n    &:nth-child(2) {\n      .icon__wrapper {\n        background-color: #eaf9ff;\n        color: #54b5e2;\n        font-size: 40px;\n      }\n    }\n\n    &:nth-child(3) {\n      .icon__wrapper {\n        background-color: #fff6d3;\n        color: #d6ac02;\n        font-size: 32px;\n      }\n    }\n\n    &:nth-child(4) {\n      .icon__wrapper {\n        background-color: #e4ffee;\n        color: #40975f;\n        font-size: 36px;\n      }\n    }\n\n    &:nth-child(5) {\n      .icon__wrapper {\n        background-color: #f4f4ff;\n        color: #5856d6;\n        font-size: 40px;\n      }\n    }\n\n    &:nth-child(6) {\n      .icon__wrapper {\n        background-color: #fceee4;\n        color: #ea7a2f;\n        font-size: 38px;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Feature/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Feature/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _feature_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature.style */ "../../node_modules/common/src/containers/SaasThree/Feature/feature.style.js");
/* harmony import */ var _data_SaasThree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../.././../data/SaasThree */ "../../node_modules/common/src/data/SaasThree/index.js");

var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Feature/index.js";










var FeatureSection = function FeatureSection(_ref) {
  var secTitleWrapper = _ref.secTitleWrapper,
      secText = _ref.secText,
      secHeading = _ref.secHeading,
      row = _ref.row,
      col = _ref.col,
      FeatureItemStyle = _ref.FeatureItemStyle,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      featureTitle = _ref.featureTitle,
      featureDescription = _ref.featureDescription;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_feature_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "feature_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "Why use Clique Book?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), _data_SaasThree__WEBPACK_IMPORTED_MODULE_9__["FEATURES"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, {
      key: "feature-item-".concat(index),
      className: "feature_col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: item.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }),
      wrapperStyle: FeatureItemStyle,
      iconStyle: iconStyle,
      contentStyle: contentStyle,
      iconPosition: "left",
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: item.title
      }, featureTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: item.description
      }, featureDescription, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  }))));
};

FeatureSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  FeatureItemStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
FeatureSection.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '100px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '540px',
    maxWidth: '100%'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-30px', '-30px', '-30px', '-25px', '-30px'],
    mr: ['-30px', '-30px', '-30px', '-25px', '-45px']
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pl: ['30px', '30px', '30px', '25px', '45px'],
    pr: ['30px', '30px', '30px', '25px', '45px'],
    mb: ['50px', '70px']
  },
  FeatureItemStyle: {},
  iconStyle: {
    width: ['72px', '72px', '72px', '72px', '82px'],
    height: ['72px', '72px', '72px', '72px', '82px'],
    mr: '20px',
    borderRadius: ['20px', '20px', '20px', '20px', '28px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bg: '#ffecef',
    color: '#ff4361',
    fontSize: ['26px', '26px', '26px', '26px', '30px']
  },
  featureTitle: {
    fontSize: ['17px', '19px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.020em',
    lineHeight: '1.5',
    mb: ['10px', '13px']
  },
  featureDescription: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#5d646d',
    letterSpacing: '-0.025em',
    lineHeight: '1.88',
    mb: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Footer/footer.style.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Footer/footer.style.js ***!
  \******************************************************************************************************************************/
/*! exports provided: List, ListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/hosting/footer-bg.png */ "../../node_modules/common/src/assets/image/hosting/footer-bg.png");
/* harmony import */ var _assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  a {\n    color: rgba(52, 61, 72, 0.8);\n    font-size: 14px;\n    line-height: 36px;\n    transition: all 0.2s ease;\n    &:hover,\n    &:focus {\n      outline: 0;\n      text-decoration: none;\n      color: #343d48;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background: #fff;\n  overflow: hidden;\n  padding: 15px 0 40px 0;\n\n  .footer_container {\n    background-repeat: no-repeat;\n    background-position: center 50px;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    position: relative;\n    @media (min-width: 576px) {\n      background-image: url(", ");\n    }\n    @media (max-width: 990px) {\n      padding-bottom: 40px;\n    }\n    @media (max-width: 767px) {\n      padding-bottom: 0px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer(_templateObject(), _assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_2___default.a);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject2());
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject3());

/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Footer/index.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Footer/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.style */ "../../node_modules/common/src/containers/SaasThree/Footer/footer.style.js");
/* harmony import */ var _assets_image_saasTwo_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/image/saasTwo/logo.png */ "../../node_modules/common/src/assets/image/saasTwo/logo.png");
/* harmony import */ var _assets_image_saasTwo_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_SaasTwo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/SaasTwo */ "../../node_modules/common/src/data/SaasTwo/index.js");

var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Footer/index.js";












var Footer = function Footer(_ref) {
  var row = _ref.row,
      col = _ref.col,
      colOne = _ref.colOne,
      colTwo = _ref.colTwo,
      titleStyle = _ref.titleStyle,
      logoStyle = _ref.logoStyle,
      textStyle = _ref.textStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "footer_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "#",
    logoSrc: _assets_image_saasTwo_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    title: "Hosting",
    logoStyle: logoStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })))));
}; // Footer style props


Footer.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colOne: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colTwo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // Footer default style

Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px'
  },
  // Default logo size
  logoStyle: {
    width: '130px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Navbar/index.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Navbar/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Navbar */ "../../node_modules/reusecore/src/elements/Navbar/index.js");
/* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Drawer */ "../../node_modules/reusecore/src/elements/Drawer/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var _components_HamburgMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/HamburgMenu */ "../../node_modules/common/src/components/HamburgMenu/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var _data_SaasThree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/SaasThree */ "../../node_modules/common/src/data/SaasThree/index.js");
/* harmony import */ var _components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/ScrollSpyMenu */ "../../node_modules/common/src/components/ScrollSpyMenu/index.js");
/* harmony import */ var _assets_image_saasThree_logo_white_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/image/saasThree/logo-white.png */ "../../node_modules/common/src/assets/image/saasThree/logo-white.png");
/* harmony import */ var _assets_image_saasThree_logo_white_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasThree_logo_white_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_saasThree_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/image/saasThree/logo.png */ "../../node_modules/common/src/assets/image/saasThree/logo.png");
/* harmony import */ var _assets_image_saasThree_logo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasThree_logo_png__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Navbar/index.js";
















var Navbar = function Navbar(_ref) {
  var navbarStyle = _ref.navbarStyle,
      logoStyle = _ref.logoStyle,
      button = _ref.button,
      row = _ref.row,
      menuWrapper = _ref.menuWrapper;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_11__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // Toggle drawer


  var toggleHandler = function toggleHandler() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, navbarStyle, {
    className: "saas_navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "#",
    logoSrc: _assets_image_saasThree_logo_white_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "main-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "#",
    logoSrc: _assets_image_saasThree_logo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "logo-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, menuWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "main_menu",
    menuItems: _data_SaasThree__WEBPACK_IMPORTED_MODULE_12__["MENU_ITEMS"],
    offset: -70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "navbar_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "GET STARTED",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: "420px",
    placement: "right",
    drawerHandler: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
      barColor: "#fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "mobile_menu",
    menuItems: _data_SaasThree__WEBPACK_IMPORTED_MODULE_12__["MENU_ITEMS"],
    drawerClose: true,
    offset: -100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "navbar_drawer_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "GET STARTED",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))))))));
};

Navbar.propTypes = {
  navbarStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  menuWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block'
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  logoStyle: {
    maxWidth: ['120px', '130px']
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
    height: '40px'
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Newsletter/index.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Newsletter/index.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Input */ "../../node_modules/reusecore/src/elements/Input/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _newsletter_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newsletter.style */ "../../node_modules/common/src/containers/SaasThree/Newsletter/newsletter.style.js");

var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Newsletter/index.js";










var Newsletter = function Newsletter(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      textArea = _ref.textArea,
      buttonArea = _ref.buttonArea,
      buttonStyle = _ref.buttonStyle,
      title = _ref.title,
      description = _ref.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_newsletter_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Subscribe our newsletter"
  }, title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore"
  }, description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_newsletter_style__WEBPACK_IMPORTED_MODULE_9__["ContactFormWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    inputType: "email",
    label: "Email address",
    iconPosition: "right",
    isMaterial: true,
    className: "email_input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonStyle, {
    title: "GET ACCESS    ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })))))));
};

Newsletter.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
Newsletter.defaultProps = {
  sectionWrapper: {},
  textArea: {
    mb: ['40px', '40px', '40px', '0', '0'],
    pr: ['0', '0', '0', '80px', '100px']
  },
  title: {
    fontSize: ['18px', '20px', '22px', '24px', '26px'],
    fontWeight: '500',
    color: '#fff',
    lineHeight: '1.34',
    mb: ['14px', '14px', '14px', '14px', '13px'],
    textAlign: ['center', 'center', 'center', 'left', 'left'],
    letterSpacing: '-0.025em'
  },
  description: {
    fontSize: ['14px', '14px'],
    fontWeight: '400',
    color: '#fefefe',
    lineHeight: '1.7',
    mb: 0,
    textAlign: ['center', 'center', 'center', 'left', 'left']
  },
  buttonArea: {
    zIndex: 1
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    pl: '30px',
    pr: '30px',
    colors: 'secondaryWithBg',
    color: '#03103b'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Newsletter);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Newsletter/newsletter.style.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Newsletter/newsletter.style.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: ContactFormWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormWrapper", function() { return ContactFormWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: flex-end;\n  width: 470px;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  @media (max-width: 1220px) {\n    width: 420px;\n  }\n  @media (max-width: 575px) {\n    width: 100%;\n  }\n  @media (max-width: 575px) {\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 25px;\n    button {\n      width: 100%;\n    }\n  }\n\n  .email_input {\n    flex-grow: 1;\n    margin-right: 20px;\n\n    @media (max-width: 575px) {\n      width: 100%;\n      margin-right: 0;\n      margin-bottom: 20px;\n    }\n    &.is-material {\n      &.is-focus {\n        label {\n          font-size: 14px;\n          color: #fff;\n        }\n        .highlight {\n          background: #fff;\n          height: 1px;\n        }\n      }\n    }\n\n    .highlight {\n      background: rgba(255, 255, 255, 0.4);\n    }\n\n    input {\n      background: transparent;\n      font-size: 16px;\n      font-weight: 400;\n      color: #fff;\n      padding: 10px 15px;\n      border-color: #dadada;\n      @media (max-width: 575px) {\n        height: 48px;\n      }\n    }\n\n    label {\n      font-size: 17px;\n      color: #fff;\n      font-weight: 400;\n      padding-left: 10px;\n      top: 5px;\n      pointer-events: none;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background: linear-gradient(\n    -139deg,\n    rgb(255, 65, 108) 0%,\n    rgb(255, 75, 43) 100%\n  );\n  padding: 44px 80px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -105px;\n  @media (max-width: 1220px) {\n    padding: 35px 40px;\n  }\n  @media (max-width: 575px) {\n    padding: 35px 20px;\n  }\n  @media (max-width: 990px) {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var NewsletterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var ContactFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (NewsletterWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Partner/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Partner/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _partner_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partner.style */ "../../node_modules/common/src/containers/SaasThree/Partner/partner.style.js");
/* harmony import */ var _assets_image_saasThree_partner_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/image/saasThree/partner.png */ "../../node_modules/common/src/assets/image/saasThree/partner.png");
/* harmony import */ var _assets_image_saasThree_partner_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasThree_partner_png__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Partner/index.js";












var PartnerSection = function PartnerSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      description = _ref.description,
      button = _ref.button,
      textArea = _ref.textArea,
      imageArea = _ref.imageArea;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_partner_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, imageArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _assets_image_saasThree_partner_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Domain Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
    content: "Meet our business partner who work behind the scene",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
    content: "You can trust us for any kind of services and some of the world class companies have also trusted us.So have faith and keep in touch with us .",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "LEARN MORE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })))))))));
};

PartnerSection.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  imageAreaRow: {
    flexDirection: 'row-reverse'
  },
  col: {
    pr: '15px',
    pl: '15px'
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%']
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0']
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.25'
  },
  description: {
    fontSize: '16px',
    color: '#ffe2e2',
    lineHeight: '1.75',
    mb: '33px'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
    minWidth: '150px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PartnerSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Partner/partner.style.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Partner/partner.style.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_saasThree_map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/saasThree/map.png */ "../../node_modules/common/src/assets/image/saasThree/map.png");
/* harmony import */ var _assets_image_saasThree_map_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasThree_map_png__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 120px 0;\n  background-color: #f6fbf9;\n  background-image: url(", "),\n    linear-gradient(-139deg, rgb(255, 75, 43) 0%, rgb(255, 65, 108) 100%);\n  background-repeat: no-repeat;\n  background-position: 25% center;\n\n  @media (max-width: 990px) {\n    padding: 100px 0;\n  }\n  @media (max-width: 767px) {\n    padding: 80px 0;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var PartnerSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject(), _assets_image_saasThree_map_png__WEBPACK_IMPORTED_MODULE_2___default.a);
/* harmony default export */ __webpack_exports__["default"] = (PartnerSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Pricing/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Pricing/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _components_GlideCarousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var _components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _data_SaasThree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/SaasThree */ "../../node_modules/common/src/data/SaasThree/index.js");
/* harmony import */ var _pricing_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pricing.style */ "../../node_modules/common/src/containers/SaasThree/Pricing/pricing.style.js");


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Pricing/index.js";













var PricingSection = function PricingSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secHeading = _ref.secHeading,
      secText = _ref.secText,
      nameStyle = _ref.nameStyle,
      descriptionStyle = _ref.descriptionStyle,
      priceStyle = _ref.priceStyle,
      priceLabelStyle = _ref.priceLabelStyle,
      buttonFillStyle = _ref.buttonFillStyle,
      listContentStyle = _ref.listContentStyle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    data: _data_SaasThree__WEBPACK_IMPORTED_MODULE_12__["MONTHLY_PRICING_TABLE"],
    active: true
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      setLoading(true);
    }, 500);
  });
  var data = state.data;
  var activeStatus = state.active;
  var pricingCarouselOptions = {
    type: 'slider',
    perView: 3,
    gap: 30,
    bound: true,
    breakpoints: {
      1199: {
        perView: 2,
        type: 'carousel',
        peek: {
          before: 100,
          after: 100
        }
      },
      990: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 160,
          after: 160
        }
      },
      767: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 80,
          after: 80
        }
      },
      575: {
        type: 'carousel',
        perView: 1,
        gap: 15,
        peek: {
          before: 20,
          after: 20
        }
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    id: "pricing_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "Choose a plan that fits your Clique",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_13__["PricingTableWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    carouselSelector: "pricing-carousel",
    options: pricingCarouselOptions,
    controls: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, data.map(function (pricingTable, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: "pricing-table-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_13__["default"], {
      freePlan: pricingTable.freePlan,
      className: "pricing_table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_13__["PricingHead"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.name
    }, nameStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.description
    }, descriptionStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_13__["PricingPrice"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.price
    }, priceStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.priceLabel
    }, priceLabelStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_13__["PricingList"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, pricingTable.listItems.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_13__["ListItem"], {
        key: "pricing-table-list-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: item.content
      }, listContentStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      })));
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_13__["PricingButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: pricingTable.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: pricingTable.buttonLabel
    }, buttonFillStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    })))))));
  }))))));
};

PricingSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  nameStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  descriptionStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  priceStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  priceLabelStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  listContentStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px', '100px'],
    pb: '20px'
  },
  secTitleWrapper: {
    mb: ['30px', '40px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '500px',
    maxWidth: '100%'
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px'
  },
  nameStyle: {
    fontSize: ['20px', '20px', '22px', '22px', '22px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px'
  },
  descriptionStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#6e7379',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0'
  },
  priceStyle: {
    as: 'span',
    display: 'block',
    fontSize: ['36px', '36px', '40px', '40px', '40px'],
    color: '#0f2137',
    textAlign: 'center',
    mb: '5px',
    letterSpacing: '-0.025em',
    fontWeight: '500'
  },
  priceLabelStyle: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    color: '#6e7379',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0'
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    bg: '#fff',
    color: '#2aa275',
    colors: 'primaryWithBg',
    width: '222px',
    maxWidth: '100%'
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '15px',
    fontWeight: '700',
    color: 'white',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    minWidth: ['160px', '190px'],
    maxWidth: '100%',
    height: '48px'
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#6e7379',
    mb: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PricingSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Pricing/pricing.style.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Pricing/pricing.style.js ***!
  \********************************************************************************************************************************/
/*! exports provided: PricingTableWrapper, PricingHead, PricingPrice, PricingButton, PricingList, ListItem, SwitchWrapper, PricingButtonWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingTableWrapper", function() { return PricingTableWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingHead", function() { return PricingHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingPrice", function() { return PricingPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingButton", function() { return PricingButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingList", function() { return PricingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchWrapper", function() { return SwitchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingButtonWrapper", function() { return PricingButtonWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  margin-top: 80px;\n  position: relative;\n  @media (max-width: 575px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 40px;\n  }\n  &:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    background: #e7e8eb;\n    display: block;\n    bottom: 0;\n    left: 0;\n  }\n  .reusecore__button {\n    font-size: 18px;\n    font-weight: 500;\n    color: #90949b;\n    background: transparent;\n    height: auto;\n    min-width: 200px;\n    border: none;\n    padding-bottom: 30px;\n    position: relative;\n    transition: 0.15s ease-in-out;\n    @media (max-width: 767px) {\n      min-width: 0;\n      padding: 0 15px 10px 15px;\n      font-size: 14px;\n    }\n    &:hover {\n      color: #ff4362;\n    }\n    &:after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 2px;\n      bottom: 0;\n      left: 0;\n      display: block;\n      background: #ff4362;\n      transform: scaleX(0);\n      transform-origin: right center 0;\n      transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n    }\n    &.active-item {\n      color: #ff4362;\n      &:after {\n        transform: scaleX(1);\n        transform-origin: left center 0;\n        transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n      }\n    }\n    @media (max-width: 575px) {\n      font-size: 14px;\n      height: 44px;\n      width: 120px;\n      padding: 0 5px;\n    }\n  }\n  > a {\n    font-size: 18px;\n    font-weight: 500;\n    color: #3b93ff;\n    padding: 0 40px;\n    @media (max-width: 767px) {\n      padding: 0 15px 10px 15px;\n      font-size: 14px;\n      height: 46px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  margin-top: 20px;\n  .reusecore__switch {\n    .reusecore__field-label {\n      font-size: 16px;\n      font-weight: 400;\n      color: #5c636c;\n      cursor: pointer;\n    }\n    input[type='checkbox'] {\n      &:checked {\n        + div {\n          width: 40px !important;\n          background-color: ", ";\n          > div {\n            left: 17px !important;\n          }\n        }\n      }\n      + div {\n        background-color: #f0f0f0;\n        background-color: #f0f0f0;\n        border: 0;\n        width: 40px;\n        height: 25px;\n        > div {\n          background-color: #fff;\n          box-shadow: 0px 2px 3px 0.24px rgba(31, 64, 104, 0.25);\n          width: 21px;\n          height: 21px;\n          top: 2px;\n          left: 2px;\n        }\n      }\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  margin-bottom: 23px;\n  justify-content: center;\n  &:last-child {\n    margin-bottom: 0;\n  }\n  .price_list_icon {\n    color: #18d379;\n    margin-right: 10px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 50px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  .reusecore__button {\n    border-radius: 4px;\n  }\n  .trial_button {\n    font-size: 15px;\n    font-weight: 500;\n    color: #3b93ff;\n    display: block;\n    margin-top: 25px;\n    transition: 0.15s ease-in-out;\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 50px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 35px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid #f9fafb;\n  border-radius: 5px;\n  padding: 45px 45px 50px 45px;\n  border-radius: 15px;\n  background-color: #f9fafb;\n  height: 100%;\n  transition: 0.25s ease-in-out;\n  @media (max-width: 767px) {\n    padding: 45px 35px;\n  }\n  &:hover {\n    background-color: #fff;\n    border-color: #f2f4f7;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .glide__slides {\n    align-items: stretch;\n    .glide__slide {\n      height: auto;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var PricingTableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var PricingTable = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var PricingHead = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var PricingPrice = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var PricingButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var PricingList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7());
var SwitchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject8(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary'));
var PricingButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject9());

/* harmony default export */ __webpack_exports__["default"] = (PricingTable);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Service/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Service/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _service_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service.style */ "../../node_modules/common/src/containers/SaasThree/Service/service.style.js");
/* harmony import */ var _data_SaasThree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/SaasThree */ "../../node_modules/common/src/data/SaasThree/index.js");

var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Service/index.js";









var ServiceSection = function ServiceSection(_ref) {
  var secTitleWrapper = _ref.secTitleWrapper,
      secText = _ref.secText,
      secHeading = _ref.secHeading,
      Row = _ref.Row,
      Col = _ref.Col,
      serviceTitleStyle = _ref.serviceTitleStyle,
      secDes = _ref.secDes;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_service_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "What is Clique Book?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDes, {
    content: "Clique Book makes it easy for a club administrator to create and maintain their club's handbook, and maintain their list of club members, all in one location.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDes, {
    content: "Your club members don't even need to go through a registration process. Members verify themselves by simply clicking a link that's sent to their email.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))));
};

ServiceSection.propTypes = {
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  Row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  Col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  serviceTitleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
ServiceSection.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '540px',
    maxWidth: '100%'
  },
  Row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    ml: ['0', '-15px', '-20px', '-35px', '-35px'],
    mr: ['0', '-15px', '-20px', '-35px', '-35px']
  },
  Col: {
    pl: ['15px', '15px', '25x', '35px', '35px'],
    pr: ['15px', '15px', '25px', '35px', '35px'],
    mb: '40px'
  },
  serviceTitleStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '17px'],
    fontWeight: '500',
    color: '#ff4361',
    mb: 0
  },
  secDes: {
    fontSize: ['14px', '15px', '16px'],
    color: '#5d646d',
    lineHeight: '1.875',
    mt: '30px',
    ml: 'auto',
    mr: 'auto',
    width: '470px',
    maxWidth: '100%',
    textAlign: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ServiceSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Service/service.style.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Service/service.style.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 75px 0 0 0;\n\n  .service_item {\n    position: relative;\n    text-align: center;\n    .service_icon {\n      width: 110px;\n      height: 110px;\n      border-radius: 35px;\n      background-color: #ffecef;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 40px;\n      margin: 0 auto 28px auto;\n      color: #ff4361;\n      @media (max-width: 990px) {\n        width: 90px;\n        height: 90px;\n        border-radius: 25px;\n        font-size: 36px;\n        margin-bottom: 20px;\n      }\n    }\n  }\n\n  .service_item_col {\n    &:nth-child(1) {\n      .service_item {\n        .service_icon {\n          font-size: 56px;\n          @media (max-width: 990px) {\n            font-size: 48px;\n          }\n        }\n      }\n    }\n\n    &:nth-child(2) {\n      .service_item {\n        .service_icon {\n          background-color: #eaf9ff;\n          color: #45b1e1;\n          font-size: 46px;\n          @media (max-width: 990px) {\n            font-size: 40px;\n          }\n        }\n        h3 {\n          color: #45b1e1;\n        }\n      }\n    }\n\n    &:nth-child(3) {\n      .service_item {\n        .service_icon {\n          background-color: #fff6d3;\n          color: #d6ab00;\n          font-size: 46px;\n          @media (max-width: 990px) {\n            font-size: 40px;\n          }\n        }\n        h3 {\n          color: #d6ab00;\n        }\n      }\n    }\n\n    &:nth-child(4) {\n      .service_item {\n        .service_icon {\n          background-color: #e4ffee;\n          color: #40975f;\n          font-size: 46px;\n          @media (max-width: 990px) {\n            font-size: 40px;\n          }\n          i {\n            height: 36px;\n          }\n        }\n        h3 {\n          color: #40975f;\n        }\n      }\n    }\n\n    &:nth-child(5) {\n      .service_item {\n        .service_icon {\n          background-color: #f4f4ff;\n          color: #5856d6;\n          font-size: 32px;\n          @media (max-width: 990px) {\n            font-size: 28px;\n          }\n        }\n        h3 {\n          color: #5856d6;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Testimonial/index.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Testimonial/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _components_GlideCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var _components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _data_SaasThree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/SaasThree */ "../../node_modules/common/src/data/SaasThree/index.js");
/* harmony import */ var _testimonial_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./testimonial.style */ "../../node_modules/common/src/containers/SaasThree/Testimonial/testimonial.style.js");

var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Testimonial/index.js";












var TestimonialSection = function TestimonialSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secText = _ref.secText,
      secHeading = _ref.secHeading,
      reviewTitle = _ref.reviewTitle,
      review = _ref.review,
      name = _ref.name,
      designation = _ref.designation;
  var carouselOptions = {
    type: 'carousel',
    autoplay: 6000,
    perView: 2,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 1
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    id: "testimonial_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secText, {
    content: "TESTIMONIAL",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "Meet Client Satisfaction by using product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_11__["TestimonialSlideWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    options: carouselOptions,
    carouselSelector: "testimonial__slider",
    controls: false,
    bullets: true,
    numberOfBullets: _data_SaasThree__WEBPACK_IMPORTED_MODULE_10__["TESTIMONIALS"].length,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, _data_SaasThree__WEBPACK_IMPORTED_MODULE_10__["TESTIMONIALS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: "testimonial-slide-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_11__["TestimonialItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "h3",
      content: item.title
    }, reviewTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.review
    }, review, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_11__["TestimonialMeta"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_11__["AuthorInfo"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_11__["AuthorImage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: item.avatar,
      alt: "reviewer-image-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "h3",
      content: item.name
    }, name, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.designation
    }, designation, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })))))));
  }))))));
};

TestimonialSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
TestimonialSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '100px'],
    pb: ['60px', '80px', '90px', '100px', '100px']
  },
  secTitleWrapper: {
    mb: ['40px', '60px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '500px',
    maxWidth: '100%'
  },
  reviewTitle: {
    fontSize: ['15px', '16px'],
    fontWeight: '500',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '13px'
  },
  review: {
    fontSize: ['16px', '19px'],
    fontWeight: '300',
    color: '#343d48',
    lineHeight: '1.7',
    mb: 0
  },
  name: {
    fontSize: ['14px', '16px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '8px'
  },
  designation: {
    fontSize: ['12px', '14px'],
    color: '#6f7a87',
    mb: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TestimonialSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Testimonial/testimonial.style.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Testimonial/testimonial.style.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: TestimonialSlideWrapper, TestimonialItem, TestimonialMeta, AuthorInfo, AuthorImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialSlideWrapper", function() { return TestimonialSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialItem", function() { return TestimonialItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialMeta", function() { return TestimonialMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorInfo", function() { return AuthorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorImage", function() { return AuthorImage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 50px;\n  height: 50px;\n  flex-basis: 50px;\n  display: block;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0px 6px 30px 0px rgba(39, 79, 117, 0.2);\n  margin-right: 15px;\n  @media (max-width: 575px) {\n    width: 40px;\n    height: 40px;\n    flex-basis: 40px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  margin-top: 30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: block;\n  background: #fff;\n  border: 1px solid #f2f4f7;\n  border-radius: 5px;\n  padding: 40px;\n\n  @media (max-width: 575px) {\n    padding: 30px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .glide__bullets {\n    margin-top: 45px;\n    text-align: center;\n    @media (max-width: 575px) {\n      margin-top: 30px;\n    }\n    .glide__bullet {\n      width: 12px;\n      height: 12px;\n      background: #e7f1ed;\n      margin: 5px;\n      transition: 0.15s ease-in-out;\n      &:hover {\n        background: #d8e2de;\n      }\n      &.glide__bullet--active {\n        background: #c9cecc;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var TestimonialSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var TestimonialItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var TestimonialMeta = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var AuthorInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var AuthorImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/TiltShape/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/TiltShape/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tiltShape_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiltShape.style */ "../../node_modules/common/src/containers/SaasThree/TiltShape/tiltShape.style.js");
var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/TiltShape/index.js";



var TiltShape = function TiltShape(_ref) {
  var className = _ref.className,
      color = _ref.color;
  // Add all classs to an array
  var addAllClasses = ['tilt_shape']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tiltShape_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    "data-name": "Layer 1",
    viewBox: "0 0 1920 184.16",
    fill: color || '#fff',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0,2.16s260.5-32,880,150c.16.05,54,14.62,80,15.08,31.06.55,80.88-15,81.06-15.08,603.5-176.84,879-150,879-150v182H0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TiltShape);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/TiltShape/tiltShape.style.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/TiltShape/tiltShape.style.js ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  pointer-events: none;\n\n  svg {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n  & ~ div {\n    z-index: 1;\n    position: relative;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ShapeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (ShapeWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Trial/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Trial/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _trial_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trial.style */ "../../node_modules/common/src/containers/SaasThree/Trial/trial.style.js");
/* harmony import */ var _assets_image_saasThree_vendor_logos_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/image/saasThree/vendor-logos.png */ "../../node_modules/common/src/assets/image/saasThree/vendor-logos.png");
/* harmony import */ var _assets_image_saasThree_vendor_logos_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasThree_vendor_logos_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Trial/index.js";











var TrialSection = function TrialSection(_ref) {
  var row = _ref.row,
      title = _ref.title,
      description = _ref.description,
      textArea = _ref.textArea,
      imageArea = _ref.imageArea,
      ImageOne = _ref.ImageOne,
      btnStyle = _ref.btnStyle,
      outlineBtnStyle = _ref.outlineBtnStyle,
      buttonWrapper = _ref.buttonWrapper;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_trial_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "trial-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ImageOne, {
    src: _assets_image_saasThree_vendor_logos_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "VendorLogos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
    content: "Start your 30 days free trials today!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "JOIN WITH SLACK"
  }, btnStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "Login with Email",
    variant: "textButton"
  }, outlineBtnStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })))))));
};

TrialSection.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  ImageOne: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
TrialSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textArea: {
    width: ['100%', '100%', '80%', '43%']
  },
  imageArea: {
    width: ['100%', '100%', '43%'],
    mb: ['35px', '35px', '40px', '40px']
  },
  title: {
    fontSize: ['28px', '32px', '36px', '42px', '48px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25'
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: '#5c636c',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px']
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto'
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center'
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'secondaryWithBg',
    pl: ['15px', '30px'],
    pr: ['15px', '30px']
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    colors: 'secondary'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TrialSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/Trial/trial.style.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/Trial/trial.style.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: linear-gradient(to bottom, #ffffff 0%, #f3f6f8 50%, #f3f6f8 100%);\n  padding: 50px 0 200px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/UpdateScreen/index.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/UpdateScreen/index.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-tabs */ "rc-tabs");
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-tabs/lib/TabContent */ "rc-tabs/lib/TabContent");
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-tabs/lib/ScrollableInkTabBar */ "rc-tabs/lib/ScrollableInkTabBar");
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-tabs/assets/index.css */ "../../node_modules/rc-tabs/assets/index.css");
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _updateScreen_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./updateScreen.style */ "../../node_modules/common/src/containers/SaasThree/UpdateScreen/updateScreen.style.js");
/* harmony import */ var _data_SaasThree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/SaasThree */ "../../node_modules/common/src/data/SaasThree/index.js");

var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/UpdateScreen/index.js";















var UpdateScreen = function UpdateScreen(_ref) {
  var secTitleWrapper = _ref.secTitleWrapper,
      secText = _ref.secText,
      secHeading = _ref.secHeading;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_updateScreen_style__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "screenshot_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    content: "The Process is Simple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_4___default.a, {
    renderTabBar: function renderTabBar() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      });
    },
    renderTabContent: function renderTabContent() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
        animated: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      });
    },
    className: "update-screen-tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, _data_SaasThree__WEBPACK_IMPORTED_MODULE_14__["SCREENSHOTS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
      tab: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default.a, {
        icon: item.icon,
        size: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), item.title),
      key: index + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_11__["default"], {
      src: item.image,
      alt: "screenshot-".concat(index + 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }));
  }))));
};

UpdateScreen.propTypes = {
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px']
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px'
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '540px',
    maxWidth: '100%'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (UpdateScreen);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/UpdateScreen/updateScreen.style.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/UpdateScreen/updateScreen.style.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 100px 0 40px 0;\n  @media (max-width: 990px) {\n    padding: 80px 0 40px 0;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 0 20px 0;\n  }\n\n  @keyframes ScaleInUp {\n    from {\n      opacity: 0;\n      transform: translateY(30px) scale(0.97);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n\n  .update-screen-tab {\n    border: 0;\n    overflow: initial;\n    .rc-tabs-ink-bar {\n      display: none !important;\n    }\n    .rc-tabs-bar {\n      border: 0;\n    }\n    .rc-tabs-nav-container {\n      margin-bottom: 45px;\n      @media (max-width: 767px) {\n        margin-bottom: 30px;\n      }\n      &:after {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 1px;\n        background: #e7e8eb;\n        display: block;\n        left: 0;\n        bottom: 0;\n        z-index: -1;\n      }\n      &:not(.rc-tabs-nav-container-scrolling) {\n        .rc-tabs-nav-scroll {\n          width: 100%;\n          text-align: center;\n          .rc-tabs-nav {\n            float: none;\n            display: block;\n            .rc-tabs-tab {\n              display: inline-block;\n              float: none;\n            }\n          }\n        }\n      }\n      .rc-tabs-tab {\n        font-size: 18px;\n        color: #6f7a87;\n        font-weight: 400;\n        min-width: 230px;\n        padding: 0 0 25px 0;\n        text-align: center;\n        margin-right: 0;\n        transition: 0.25s ease-in-out;\n        &:hover {\n          color: #ff4362;\n        }\n        &:after {\n          content: '';\n          position: absolute;\n          width: 100%;\n          height: 2px;\n          bottom: 0;\n          left: 0;\n          display: block;\n          @media (max-width: 767px) {\n            display: none;\n          }\n        }\n        &:after {\n          background: #ff4362;\n          transform: scaleX(0);\n          transform-origin: right center 0;\n          transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n        }\n        &.rc-tabs-tab-active {\n          color: #ff4362;\n          &:after {\n            transform: scaleX(1);\n            transform-origin: left center 0;\n            transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n          }\n        }\n        > div {\n          margin-right: 8px;\n        }\n        @media (max-width: 1199px) {\n          font-size: 16px;\n          padding: 0 0 20px 0;\n          min-width: 170px;\n        }\n        @media (max-width: 990px) {\n          min-width: auto;\n          padding: 0 20px 15px 20px;\n        }\n        @media (max-width: 767px) {\n          font-size: 14px;\n          svg {\n            width: 20px;\n          }\n        }\n      }\n    }\n    .rc-tabs-content {\n      .rc-tabs-tabpane {\n        border-radius: 10px;\n        overflow: hidden;\n        box-shadow: 0px 5px 60px 0px rgba(27, 67, 111, 0.15);\n        &.rc-tabs-tabpane-active {\n          animation: 0.7s ScaleInUp;\n        }\n        > img {\n          max-width: 100%;\n          height: auto;\n          display: block;\n        }\n      }\n    }\n  }\n\n  .rc-tabs-tab-prev-icon,\n  .rc-tabs-tab-next-icon {\n    font-size: 20px;\n    color: #ff4362;\n    line-height: 1;\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (SectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/SaasThree/saasThree.style.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/SaasThree/saasThree.style.js ***!
  \**************************************************************************************************************************/
/*! exports provided: GlobalStyle, ContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  overflow: hidden;\n  .sticky-nav-active {\n    .saas_navbar {\n      background: #fff;\n      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);\n      padding: 15px 0;\n      .main-logo {\n        display: none;\n      }\n      .logo-alt {\n        display: block;\n      }\n      .main_menu {\n        li {\n          a {\n            color: #000;\n            &:hover {\n              color: #ff4361;\n            }\n          }\n          &.is-current {\n            a {\n              color: #ff4361;\n            }\n          }\n        }\n      }\n    }\n    .hamburgMenu__bar {\n      > span {\n        background: #ff4361;\n      }\n    }\n  }\n\n  .saas_navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    transition: 0.35s ease-in-out;\n    padding: 30px 0;\n    .logo-alt {\n      display: none;\n    }\n    .main_menu {\n      margin-right: 40px;\n      li {\n        display: inline-block;\n        padding-left: 13px;\n        padding-right: 13px;\n        &:first-child {\n          padding-left: 0;\n        }\n        &:last-child {\n          padding-right: 0;\n        }\n        &.is-current {\n          a {\n            color: #edcd37;\n          }\n        }\n        a {\n          padding: 5px;\n          font-size: 16px;\n          font-weight: 400;\n          color: #fff;\n          transition: 0.15s ease-in-out;\n          &:hover {\n            color: #edcd37;\n          }\n        }\n      }\n      @media (max-width: 990px) {\n        display: none;\n      }\n    }\n    .navbar_button {\n      @media (max-width: 990px) {\n        display: none;\n      }\n    }\n    .reusecore-drawer__handler {\n      @media (min-width: 991px) {\n        display: none !important;\n      }\n      .hamburgMenu__bar {\n        > span {\n        }\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #ff4361;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #ff4361;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #ff4361;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #ff4361;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n  .video-modal{\n    background: rgba(0,0,0,0.6) !important;\n    border: 0 !important;\n    animation: ", " .5s ease-out forwards !important;\n\n    .innerRndComponent{\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      opacity: 0 !important;\n      animation: ", " .7s ease-out forwards !important;\n    }\n  }\n  .reuseModalOverlay,\n  .modalCloseBtn{\n    opacity: 0 !important;\n    animation: ", " .5s ease-out forwards !important;\n  }\n"], ["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #ff4361;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #ff4361;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #ff4361;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #ff4361;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n  .video-modal{\n    background: rgba(0,0,0,0.6) !important;\n    border: 0 !important;\n    animation: ", " .5s ease-out forwards !important;\n\n    .innerRndComponent{\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      opacity: 0 !important;\n      animation: ", " .7s ease-out forwards !important;\n    }\n  }\n  .reuseModalOverlay,\n  .modalCloseBtn{\n    opacity: 0 !important;\n    animation: ", " .5s ease-out forwards !important;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n\t\topacity: 0;\n    transform: scale(.5)\n\t}\n\t100% {\n\t\topacity: 1;\n    transform: scale(1)\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n\t\topacity: 0;\n\t}\n\t100% {\n\t\topacity: 1;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Fade = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var FadeUp = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject2());
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject3(), Fade, FadeUp, Fade);
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());

/***/ }),

/***/ "../../node_modules/common/src/contexts/DrawerContext.js":
/*!************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/contexts/DrawerContext.js ***!
  \************************************************************************************************************/
/*! exports provided: DrawerContext, DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/contexts/DrawerContext.js";

var initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

var DrawerContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var DrawerProvider = function DrawerProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DrawerContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "../../node_modules/common/src/data/SaasThree/index.js":
/*!**********************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/data/SaasThree/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: MENU_ITEMS, SERVICE_ITEMS, MONTHLY_PRICING_TABLE, YEARLY_PRICING_TABLE, FAQ_DATA, FOOTER_WIDGET, FEATURES, SCREENSHOTS, TESTIMONIALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_ITEMS", function() { return SERVICE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHLY_PRICING_TABLE", function() { return MONTHLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARLY_PRICING_TABLE", function() { return YEARLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQ_DATA", function() { return FAQ_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_WIDGET", function() { return FOOTER_WIDGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURES", function() { return FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREENSHOTS", function() { return SCREENSHOTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTIMONIALS", function() { return TESTIMONIALS; });
/* harmony import */ var _assets_image_saasThree_screen_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/saasThree/screen-1.png */ "../../node_modules/common/src/assets/image/saasThree/screen-1.png");
/* harmony import */ var _assets_image_saasThree_screen_1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasThree_screen_1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_saasThree_author_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/saasThree/author-1.jpg */ "../../node_modules/common/src/assets/image/saasThree/author-1.jpg");
/* harmony import */ var _assets_image_saasThree_author_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasThree_author_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_saasThree_author_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/saasThree/author-2.jpg */ "../../node_modules/common/src/assets/image/saasThree/author-2.jpg");
/* harmony import */ var _assets_image_saasThree_author_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasThree_author_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_saasThree_author_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/saasThree/author-3.jpg */ "../../node_modules/common/src/assets/image/saasThree/author-3.jpg");
/* harmony import */ var _assets_image_saasThree_author_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasThree_author_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/md/ic_monetization_on */ "react-icons-kit/md/ic_monetization_on");
/* harmony import */ var react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/md/ic_settings */ "react-icons-kit/md/ic_settings");
/* harmony import */ var react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit/icomoon/pieChart */ "react-icons-kit/icomoon/pieChart");
/* harmony import */ var react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit/fa/briefcase */ "react-icons-kit/fa/briefcase");
/* harmony import */ var react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_kit_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons-kit/md */ "react-icons-kit/md");
/* harmony import */ var react_icons_kit_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_kit_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons-kit/fa */ "react-icons-kit/fa");
/* harmony import */ var react_icons_kit_fa__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa__WEBPACK_IMPORTED_MODULE_9__);










var MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '0'
}, {
  label: 'Process',
  path: '#screenshot_section',
  offset: '0'
}, {
  label: 'Features',
  path: '#feature_section',
  offset: '0'
}, {
  label: 'Pricing',
  path: '#pricing_section',
  offset: '0'
}, {
  label: 'Testimonials',
  path: '#testimonial_section',
  offset: '0'
}];
var SERVICE_ITEMS = [{
  icon: 'flaticon-stopwatch-1',
  title: 'Fast Performance'
}, {
  icon: 'flaticon-prototype',
  title: 'Prototyping'
}, {
  icon: 'flaticon-code',
  title: 'Coade Export'
}, {
  icon: 'flaticon-vectors',
  title: 'Vector Editing'
}, {
  icon: 'flaticon-export',
  title: 'Export Presets'
}];
var MONTHLY_PRICING_TABLE = [{
  name: 'Basic Account',
  // description: 'For Small teams or group who need to build website ',
  price: '$0',
  priceLabel: 'Per month',
  buttonLabel: 'Sign Up',
  url: '#',
  listItems: [{
    content: 'Hand book text editor'
  }, {
    content: 'Members management'
  }, {
    content: 'Member nudging'
  }, {
    content: 'Up to 5 members'
  }]
}, {
  name: 'Small Club',
  // description: 'For Mediums teams or group who need to build website ',
  price: '$5',
  priceLabel: 'Per month',
  buttonLabel: 'Sign Up',
  url: '#',
  // trialButtonLabel: 'Or Start 14 Days trail',
  trialURL: '#',
  listItems: [{
    content: 'Hand book text editor'
  }, {
    content: 'Members management'
  }, {
    content: 'Member nudging'
  }, {
    content: 'Up to 20 members'
  }]
}, {
  name: 'Premium Club',
  // description: 'For Large teams or group who need to build website ',
  price: '$20',
  priceLabel: 'Per month',
  buttonLabel: 'Sign Up',
  url: '#',
  // trialButtonLabel: 'Or Start 14 Days trail',
  trialURL: '#',
  listItems: [{
    content: 'Hand book text editor'
  }, {
    content: 'Members management'
  }, {
    content: 'Member nudging'
  }, {
    content: 'Up to 500 members'
  }]
}];
var YEARLY_PRICING_TABLE = [{
  name: 'Basic Account',
  description: 'For a single client or team who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'Start for free',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Small teams or group who need to build website ',
  price: '$6.00',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'Register Now',
  url: '#',
  trialButtonLabel: 'Or Start 14 Days trail',
  trialURL: '#',
  listItems: [{
    content: 'Unlimited secure storage'
  }, {
    content: '2,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: '24/7 phone support'
  }, {
    content: '50+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$9.99',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'Register Now',
  url: '#',
  trialButtonLabel: 'Or Start 14 Days trail',
  trialURL: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '3,000s of Templates Ready'
  }, {
    content: 'Advanced branding'
  }, {
    content: 'Knowledge base support'
  }, {
    content: '80+ Webmaster Tools'
  }]
}];
var FAQ_DATA = [{
  expend: true,
  title: 'How to contact with Customer Service?',
  description: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. '
}, {
  title: 'App installation failed, how to update system information?',
  description: 'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . '
}, {
  title: 'Website reponse taking time, how to improve?',
  description: 'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .'
}, {
  title: 'New update fixed all bug and issues?',
  description: 'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .'
}];
var FOOTER_WIDGET = [{
  title: 'About Us',
  menuItems: [{
    url: '#',
    text: 'Support Center'
  }, {
    url: '#',
    text: 'Customer Support'
  }, {
    url: '#',
    text: 'About Us'
  }, {
    url: '#',
    text: 'Copyright'
  }, {
    url: '#',
    text: 'Popular Campaign'
  }]
}, {
  title: 'Our Information',
  menuItems: [{
    url: '#',
    text: 'Return Policy'
  }, {
    url: '#',
    text: 'Privacy Policy'
  }, {
    url: '#',
    text: 'Terms & Conditions'
  }, {
    url: '#',
    text: 'Site Map'
  }, {
    url: '#',
    text: 'Store Hours'
  }]
}, {
  title: 'My Account',
  menuItems: [{
    url: '#',
    text: 'Press inquiries'
  }, {
    url: '#',
    text: 'Social media directories'
  }, {
    url: '#',
    text: 'Images & B-roll'
  }, {
    url: '#',
    text: 'Permissions'
  }, {
    url: '#',
    text: 'Speaker requests'
  }]
}, {
  title: 'Policy',
  menuItems: [{
    url: '#',
    text: 'Application security'
  }, {
    url: '#',
    text: 'Software principles'
  }, {
    url: '#',
    text: 'Unwanted software policy'
  }, {
    url: '#',
    text: 'Responsible supply chain'
  }]
}];
var FEATURES = [{
  icon: 'flaticon-security',
  title: 'Security',
  description: 'Your information is protected using modern security measures.'
}, {
  icon: 'flaticon-sign-in',
  title: 'Ease of Use',
  description: 'Our built-in text editor makes it wasy to personalize your handbook.'
}, {
  icon: 'flaticon-upload',
  title: 'No Registration',
  description: 'Your members do not need to register. They are quickly authenticated via a link sent directly to their inbox'
}, {
  icon: 'flaticon-settings',
  title: 'Auditing',
  description: 'We track we has viewed your handbook and agreed to your terms.'
}, {
  icon: 'flaticon-document-1',
  title: 'Document Editing',
  description: 'Making changes to your handbook is simple.'
}, {
  icon: 'flaticon-conversation',
  title: 'Member Outreach',
  description: 'Easily contact your members if they have not viewed your handbook yet'
}];
var SCREENSHOTS = [{
  icon: react_icons_kit_md__WEBPACK_IMPORTED_MODULE_8__["ic_create_new_folder"],
  title: 'Create a Handbook',
  image: _assets_image_saasThree_screen_1_png__WEBPACK_IMPORTED_MODULE_0___default.a
}, {
  icon: react_icons_kit_fa__WEBPACK_IMPORTED_MODULE_9__["users"],
  title: 'Add Members',
  image: _assets_image_saasThree_screen_1_png__WEBPACK_IMPORTED_MODULE_0___default.a
}, {
  icon: react_icons_kit_md__WEBPACK_IMPORTED_MODULE_8__["ic_verified_user"],
  title: 'Sign the Handbook',
  image: _assets_image_saasThree_screen_1_png__WEBPACK_IMPORTED_MODULE_0___default.a
}, {
  icon: react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_7__["briefcase"],
  title: 'Manage Your Clique',
  image: _assets_image_saasThree_screen_1_png__WEBPACK_IMPORTED_MODULE_0___default.a
}];
var TESTIMONIALS = [{
  title: 'Modern look & trending design',
  review: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  name: 'Denny Hilguston',
  designation: 'CEO of Dell Co.',
  avatar: "".concat(_assets_image_saasThree_author_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a)
}, {
  title: 'Modern look & trending design',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.',
  name: 'Justin Albuz',
  designation: 'Co Founder of IBM',
  avatar: "".concat(_assets_image_saasThree_author_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a)
}, {
  title: 'Modern look & trending design',
  review: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  name: 'Milly Cristiana',
  designation: 'Manager of Hp co.',
  avatar: "".concat(_assets_image_saasThree_author_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a)
}];

/***/ }),

/***/ "../../node_modules/common/src/data/SaasTwo/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/data/SaasTwo/index.js ***!
  \********************************************************************************************************/
/*! exports provided: MENU_ITEMS, PROCESS_ITEMS, MONTHLY_PRICING_TABLE, YEARLY_PRICING_TABLE, FAQ_DATA, FOOTER_WIDGET, FEATURES, SCREENSHOTS, TESTIMONIALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESS_ITEMS", function() { return PROCESS_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHLY_PRICING_TABLE", function() { return MONTHLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARLY_PRICING_TABLE", function() { return YEARLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQ_DATA", function() { return FAQ_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_WIDGET", function() { return FOOTER_WIDGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURES", function() { return FEATURES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREENSHOTS", function() { return SCREENSHOTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTIMONIALS", function() { return TESTIMONIALS; });
/* harmony import */ var _assets_image_saasTwo_process_1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/saasTwo/process-1.svg */ "../../node_modules/common/src/assets/image/saasTwo/process-1.svg");
/* harmony import */ var _assets_image_saasTwo_process_1_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_process_1_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_saasTwo_process_2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/saasTwo/process-2.svg */ "../../node_modules/common/src/assets/image/saasTwo/process-2.svg");
/* harmony import */ var _assets_image_saasTwo_process_2_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_process_2_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_saasTwo_process_3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/saasTwo/process-3.svg */ "../../node_modules/common/src/assets/image/saasTwo/process-3.svg");
/* harmony import */ var _assets_image_saasTwo_process_3_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_process_3_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_saasTwo_icon_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/saasTwo/icon-1.png */ "../../node_modules/common/src/assets/image/saasTwo/icon-1.png");
/* harmony import */ var _assets_image_saasTwo_icon_1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_icon_1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_saasTwo_icon_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/saasTwo/icon-2.png */ "../../node_modules/common/src/assets/image/saasTwo/icon-2.png");
/* harmony import */ var _assets_image_saasTwo_icon_2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_icon_2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_saasTwo_icon_3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/saasTwo/icon-3.png */ "../../node_modules/common/src/assets/image/saasTwo/icon-3.png");
/* harmony import */ var _assets_image_saasTwo_icon_3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_icon_3_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_saasTwo_icon_4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/saasTwo/icon-4.png */ "../../node_modules/common/src/assets/image/saasTwo/icon-4.png");
/* harmony import */ var _assets_image_saasTwo_icon_4_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_icon_4_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_saasTwo_icon_5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/saasTwo/icon-5.png */ "../../node_modules/common/src/assets/image/saasTwo/icon-5.png");
/* harmony import */ var _assets_image_saasTwo_icon_5_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_icon_5_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_saasTwo_icon_6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/saasTwo/icon-6.png */ "../../node_modules/common/src/assets/image/saasTwo/icon-6.png");
/* harmony import */ var _assets_image_saasTwo_icon_6_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_icon_6_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_saasTwo_dash_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/image/saasTwo/dash-3.png */ "../../node_modules/common/src/assets/image/saasTwo/dash-3.png");
/* harmony import */ var _assets_image_saasTwo_dash_3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_dash_3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_saasTwo_dash_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/image/saasTwo/dash-4.png */ "../../node_modules/common/src/assets/image/saasTwo/dash-4.png");
/* harmony import */ var _assets_image_saasTwo_dash_4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_dash_4_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_image_saasTwo_author_1_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/image/saasTwo/author-1.jpg */ "../../node_modules/common/src/assets/image/saasTwo/author-1.jpg");
/* harmony import */ var _assets_image_saasTwo_author_1_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_author_1_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_image_saasTwo_author_2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/image/saasTwo/author-2.jpg */ "../../node_modules/common/src/assets/image/saasTwo/author-2.jpg");
/* harmony import */ var _assets_image_saasTwo_author_2_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_author_2_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_saasTwo_author_3_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/image/saasTwo/author-3.jpg */ "../../node_modules/common/src/assets/image/saasTwo/author-3.jpg");
/* harmony import */ var _assets_image_saasTwo_author_3_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saasTwo_author_3_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons-kit/md/ic_monetization_on */ "react-icons-kit/md/ic_monetization_on");
/* harmony import */ var react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/md/ic_settings */ "react-icons-kit/md/ic_settings");
/* harmony import */ var react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons-kit/icomoon/pieChart */ "react-icons-kit/icomoon/pieChart");
/* harmony import */ var react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons-kit/fa/briefcase */ "react-icons-kit/fa/briefcase");
/* harmony import */ var react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17__);


















var MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '0'
}, {
  label: 'Feature',
  path: '#feature_section',
  offset: '0'
}, {
  label: 'Pricing',
  path: '#pricing_section',
  offset: '0'
}, {
  label: 'Testimonial',
  path: '#testimonial_section',
  offset: '0'
}, {
  label: 'FAQ',
  path: '#faq_section',
  offset: '0'
}];
var PROCESS_ITEMS = [{
  image: _assets_image_saasTwo_process_1_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
  title: 'Download our app',
  description: 'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.'
}, {
  image: _assets_image_saasTwo_process_2_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  title: 'Create a free account',
  description: 'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.'
}, {
  image: _assets_image_saasTwo_process_3_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  title: 'Now Start your journey',
  description: 'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.'
}];
var MONTHLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For Small teams or group who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Mediums teams or group who need to build website ',
  price: '$9.87',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$12.98',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}];
var YEARLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For a single client or team who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Small teams or group who need to build website ',
  price: '$6.00',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Unlimited secure storage'
  }, {
    content: '2,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: '24/7 phone support'
  }, {
    content: '50+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$9.99',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '3,000s of Templates Ready'
  }, {
    content: 'Advanced branding'
  }, {
    content: 'Knowledge base support'
  }, {
    content: '80+ Webmaster Tools'
  }]
}];
var FAQ_DATA = [{
  expend: true,
  title: 'How to contact with Customer Service?',
  description: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. '
}, {
  title: 'App installation failed, how to update system information?',
  description: 'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . '
}, {
  title: 'Website reponse taking time, how to improve?',
  description: 'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .'
}, {
  title: 'New update fixed all bug and issues?',
  description: 'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .'
}];
var FOOTER_WIDGET = [{
  title: 'About Us',
  menuItems: [{
    url: '#',
    text: 'Support Center'
  }, {
    url: '#',
    text: 'Customer Support'
  }, {
    url: '#',
    text: 'About Us'
  }, {
    url: '#',
    text: 'Copyright'
  }, {
    url: '#',
    text: 'Popular Campaign'
  }]
}, {
  title: 'Our Information',
  menuItems: [{
    url: '#',
    text: 'Return Policy'
  }, {
    url: '#',
    text: 'Privacy Policy'
  }, {
    url: '#',
    text: 'Terms & Conditions'
  }, {
    url: '#',
    text: 'Site Map'
  }, {
    url: '#',
    text: 'Store Hours'
  }]
}, {
  title: 'My Account',
  menuItems: [{
    url: '#',
    text: 'Press inquiries'
  }, {
    url: '#',
    text: 'Social media directories'
  }, {
    url: '#',
    text: 'Images & B-roll'
  }, {
    url: '#',
    text: 'Permissions'
  }, {
    url: '#',
    text: 'Speaker requests'
  }]
}, {
  title: 'Policy',
  menuItems: [{
    url: '#',
    text: 'Application security'
  }, {
    url: '#',
    text: 'Software principles'
  }, {
    url: '#',
    text: 'Unwanted software policy'
  }, {
    url: '#',
    text: 'Responsible supply chain'
  }]
}];
var FEATURES = [{
  icon: _assets_image_saasTwo_icon_1_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  title: 'App Development',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasTwo_icon_2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  title: '10 Times Award',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasTwo_icon_3_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Cloud Storage',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasTwo_icon_4_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Customization',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasTwo_icon_5_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'UX Planning',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}, {
  icon: _assets_image_saasTwo_icon_6_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  title: 'Customer Support',
  description: 'Get your proof tests delivered home collect a sample from the news get design.'
}];
var SCREENSHOTS = [{
  icon: react_icons_kit_md_ic_monetization_on__WEBPACK_IMPORTED_MODULE_14__["ic_monetization_on"],
  title: 'Budget Overview',
  image: _assets_image_saasTwo_dash_4_png__WEBPACK_IMPORTED_MODULE_10___default.a
}, {
  icon: react_icons_kit_md_ic_settings__WEBPACK_IMPORTED_MODULE_15__["ic_settings"],
  title: 'Create & Adjust',
  image: _assets_image_saasTwo_dash_3_png__WEBPACK_IMPORTED_MODULE_9___default.a
}, {
  icon: react_icons_kit_icomoon_pieChart__WEBPACK_IMPORTED_MODULE_16__["pieChart"],
  title: 'View Reports',
  image: _assets_image_saasTwo_dash_4_png__WEBPACK_IMPORTED_MODULE_10___default.a
}, {
  icon: react_icons_kit_fa_briefcase__WEBPACK_IMPORTED_MODULE_17__["briefcase"],
  title: 'Integrations',
  image: _assets_image_saasTwo_dash_3_png__WEBPACK_IMPORTED_MODULE_9___default.a
}];
var TESTIMONIALS = [{
  title: 'Modern look & trending design',
  review: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  name: 'Denny Hilguston',
  designation: 'CEO of Dell Co.',
  avatar: "".concat(_assets_image_saasTwo_author_1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a)
}, {
  title: 'Modern look & trending design',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.',
  name: 'Justin Albuz',
  designation: 'Co Founder of IBM',
  avatar: "".concat(_assets_image_saasTwo_author_2_jpg__WEBPACK_IMPORTED_MODULE_12___default.a)
}, {
  title: 'Modern look & trending design',
  review: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  name: 'Milly Cristiana',
  designation: 'Manager of Hp co.',
  avatar: "".concat(_assets_image_saasTwo_author_3_jpg__WEBPACK_IMPORTED_MODULE_13___default.a)
}];

/***/ }),

/***/ "../../node_modules/common/src/theme/saasThree/colors.js":
/*!************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/theme/saasThree/colors.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  transparent: 'transparent',
  // 0
  black: '#000000',
  // 1
  white: '#ffffff',
  // 2
  headingColor: '#302b4e',
  textColor: '#43414e',
  // 3
  labelColor: '#767676',
  // 4
  inactiveField: '#f2f2f2',
  // 5
  inactiveButton: '#b7dbdd',
  // 6
  inactiveIcon: '#EBEBEB',
  // 7
  primary: '#ff4265',
  // 8
  primaryHover: '#ff4265',
  // 9
  secondary: '#edcd37',
  // 10
  secondaryHover: '#edcd37',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  borderColor: '#1b1e25',
  //14
  primaryBoxShadow: '0px 8px 20px -6px rgba(255, 66, 101, 0.57)',
  secondaryBoxShadow: '0px 8px 20px -6px rgba(237, 205, 55, 0.5)'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "../../node_modules/common/src/theme/saasThree/index.js":
/*!***********************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/common/src/theme/saasThree/index.js ***!
  \***********************************************************************************************************/
/*! exports provided: saasThreeTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saasThreeTheme", function() { return saasThreeTheme; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "../../node_modules/common/src/theme/saasThree/colors.js");

var saasThreeTheme = {
  breakpoints: [576, 768, 991, 1220],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"],
  colorStyles: {
    primary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
      }
    },
    secondary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
      }
    },
    warning: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    error: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    primaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      border: '1px solid',
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        boxShadow: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryBoxShadow
      }
    },
    secondaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].black,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].black,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        boxShadow: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryBoxShadow
      }
    },
    warningWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    errorWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    transparentBg: {
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      padding: 0,
      height: 'auto',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  } // FlexBox: {
  //   backgroundColor: 'green'
  // }

};

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/next/dist/client/link.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "../../node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!**************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/next/dist/client/router.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!*******************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/next/dist/client/with-router.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/next/link.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../../node_modules/next/router.js":
/*!**************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/next/router.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "../../node_modules/next/dist/client/router.js")


/***/ }),

/***/ "../../node_modules/rc-drawer/assets/index.css":
/*!**************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/rc-drawer/assets/index.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/rc-tabs/assets/index.css":
/*!************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/rc-tabs/assets/index.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Animation/index.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Animation/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: AnimSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimSpinner", function() { return AnimSpinner; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: ", " 1s linear infinite;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n    opacity: 0.5;\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var AnimSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), spinner);


/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Box/index.js":
/*!***********************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Box/index.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Box/index.js";





var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('div')(_base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Box'), function (props) {
  return props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])({
    display: 'flex'
  }, styled_system__WEBPACK_IMPORTED_MODULE_5__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_5__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_5__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('FlexBox'));
});

var Box = function Box(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BoxWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);
Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,

  /** Using this props we can convert our Box Component to a Flex Container or Component */
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main']),
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  flex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderTop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRight: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))])
};
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/button.style.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Button/button.style.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  /* button default style */\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  background-color: ", ";\n  min-height: ", "px;\n  min-width: ", "px;\n  border-radius: ", "px;\n  font-family: inherit;\n  font-size: ", "px;\n  font-weight: ", ";\n  text-decoration: none;\n  text-transform: capitalize;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  border: 0;\n  transition: all 0.3s ease;\n  span.btn-text {\n    padding-left: ", "px;\n    padding-right: ", "px;\n  }\n  span.btn-icon {\n    display: flex;\n    > div {\n      display: flex !important;\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  /* Material style goes here */\n  &.is-material {\n    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  }\n\n  /* When button on loading stage */\n  &.is-loading {\n    .btn-text {\n      padding-left: ", "px;\n      padding-right: ", "px;\n    }\n  }\n\n  /* Style system support */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('heights.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('widths.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('radius.0', '3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["boxShadow"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["buttonStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["colorStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["sizeStyle"], _base__WEBPACK_IMPORTED_MODULE_5__["base"]); // prop types can also be added from the style functions

ButtonStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Button/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.style */ "../../node_modules/reusecore/src/elements/Button/button.style.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "../../node_modules/reusecore/src/elements/Loader/index.js");


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Button/index.js";





var Button = function Button(_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon,
      disabled = _ref.disabled,
      iconPosition = _ref.iconPosition,
      onClick = _ref.onClick,
      loader = _ref.loader,
      loaderColor = _ref.loaderColor,
      isMaterial = _ref.isMaterial,
      isLoading = _ref.isLoading,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  var buttonIcon = isLoading !== false ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, loader ? loader : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loaderColor: loaderColor || '#30C56D',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })) : icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, icon); // set icon position

  var position = iconPosition || 'right';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), position === 'left' && buttonIcon, title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, title), position === 'right' && buttonIcon);
};

Button.propTypes = {
  /** ClassName of the button */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Add icon */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add loader */
  loader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add Material effect */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** If true button will be disabled */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'warning', 'error', 'primaryWithBg', 'secondaryWithBg', 'warningWithBg', 'errorWithBg']),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Drawer/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Drawer/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "../../node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Drawer/index.js";





var Drawer = function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_drawer__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onMaskClick: toggleHandler,
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, closeButton), children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, drawerHandler));
};

Drawer.propTypes = {
  /** ClassName of the Drawer */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set drawer width. Default value is 300px. */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set drawer position left || right || top || bottom. */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right', 'top', 'bottom']),

  /** drawerHandler could be button, icon, string or any component */
  drawerHandler: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element.isRequired
};
Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Heading/index.js":
/*!***************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Heading/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Heading/index.js";





var HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p')(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Heading'));

var Heading = function Heading(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HeadingWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);
Heading.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Image/index.js":
/*!*************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Image/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Image/index.js";




var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('img')({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_5__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])('Image'));

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["src", "alt"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: src,
    alt: alt
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);
Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/index.js":
/*!*************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Input/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.style */ "../../node_modules/reusecore/src/elements/Input/input.style.js");




var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Input/index.js";




var Input = function Input(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      inputType = _ref.inputType,
      isMaterial = _ref.isMaterial,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      passwordShowHide = _ref.passwordShowHide,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["label", "value", "onBlur", "onFocus", "onChange", "inputType", "isMaterial", "icon", "iconPosition", "passwordShowHide", "className"]);

  // use toggle hooks
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    toggle: false,
    focus: false,
    value: ''
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // toggle function


  var handleToggle = function handleToggle() {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      toggle: !state.toggle
    }));
  }; // add focus class


  var handleOnFocus = function handleOnFocus(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: true
    }));
    onFocus(event);
  }; // remove focus class


  var handleOnBlur = function handleOnBlur(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: false
    }));
    onBlur(event);
  }; // handle input value


  var handleOnChange = function handleOnChange(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      value: event.target.value
    }));
    onChange(event.target.value);
  }; // get input focus class


  var getInputFocusClass = function getInputFocusClass() {
    if (state.focus === true || state.value !== '') {
      return 'is-focus';
    } else {
      return '';
    }
  }; // init variable


  var inputElement, htmlFor; // Add all classs to an array

  var addAllClasses = ['reusecore__input']; // Add is-material class

  if (isMaterial) {
    addAllClasses.push('is-material');
  } // Add icon position class if input element has icon


  if (icon && iconPosition) {
    addAllClasses.push("icon-".concat(iconPosition));
  } // Add new class


  if (className) {
    addAllClasses.push(className);
  } // if lable is not empty


  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  } // Label position


  var LabelPosition = isMaterial === true ? 'bottom' : 'top'; // Label field

  var LabelField = label && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: htmlFor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, label); // Input type check

  switch (inputType) {
    case 'textarea':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }));
      break;

    case 'password':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: state.toggle ? 'password' : 'text',
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), passwordShowHide && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["EyeButton"], {
        onClick: handleToggle,
        className: state.toggle ? 'eye' : 'eye-closed',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      })));
      break;

    default:
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: inputType,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })), icon && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "input-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, icon));
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "".concat(addAllClasses.join(' '), " ").concat(getInputFocusClass()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, LabelPosition === 'top' && LabelField, inputElement, isMaterial && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), LabelPosition === 'bottom' && LabelField);
};
/** Inout prop type checking. */


Input.propTypes = {
  /** className of the Input component. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** Set input label value. */
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** The input value, required for a controlled component. */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['string', 'number']),

  /** Make default input into material style input. */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Password show hide icon button prop [*only for password field]. */
  passwordShowHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Set input type of the input element. Default type is text. */
  inputType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['text', 'email', 'password', 'number', 'textarea']),

  /** Add icon in input field. This prop will not work with password
   * and textarea field.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /** Set input field icon position. Default position is 'left'. */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['left', 'right']),

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/** Inout default type. */

Input.defaultProps = {
  inputType: 'text',
  isMaterial: false,
  iconPosition: 'left',
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/input.style.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Input/input.style.js ***!
  \*******************************************************************************************************************/
/*! exports provided: EyeButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeButton", function() { return EyeButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 43px;\n  height: 40px;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  right: 0;\n  position: absolute;\n  outline: none;\n  cursor: pointer;\n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n\n  > span {\n    width: 12px;\n    height: 12px;\n    display: block;\n    border: solid 1px ", ";\n    border-radius: 75% 15%;\n    transform: rotate(45deg);\n    position: relative;\n\n    &:before {\n      content: '';\n      display: block;\n      width: 4px;\n      height: 4px;\n      border-radius: 50%;\n      left: 3px;\n      top: 3px;\n      position: absolute;\n      border: solid 1px ", ";\n    }\n  }\n\n  &.eye-closed {\n    > span {\n      &:after {\n        content: '';\n        display: block;\n        width: 1px;\n        height: 20px;\n        left: calc(50% - 1px / 2);\n        top: -4px;\n        position: absolute;\n        background-color: ", ";\n        transform: rotate(-12deg);\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n\n  /* Input field wrapper */\n  .field-wrapper {\n    position: relative;\n  }\n\n  /* If input has icon then these styel */\n  &.icon-left,\n  &.icon-right {\n    .field-wrapper {\n      display: flex;\n      align-items: center;\n      > .input-icon {\n        position: absolute;\n        top: 0;\n        bottom: auto;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 34px;\n        height: 40px;\n      }\n    }\n  }\n\n  /* When icon position in left */\n  &.icon-left {\n    .field-wrapper {\n      > .input-icon {\n        left: 0;\n        right: auto;\n      }\n      > input {\n        padding-left: 34px;\n      }\n    }\n  }\n\n  /* When icon position in right */\n  &.icon-right {\n    .field-wrapper {\n      > .input-icon {\n        left: auto;\n        right: 0;\n      }\n      > input {\n        padding-right: 34px;\n      }\n    }\n  }\n\n  /* Label default style */\n  label {\n    display: block;\n    color: ", ";\n    font-size: ", "px;\n    font-weight: ", ";\n    margin-bottom: ", "px;\n    transition: 0.2s ease all;\n  }\n\n  /* Input and textarea default style */\n  textarea,\n  input {\n    font-size: 16px;\n    padding: 11px;\n    display: block;\n    width: 100%;\n    color: ", ";\n    box-shadow: none;\n    border-radius: 4px;\n    box-sizing: border-box;\n    border: 1px solid ", ";\n    transition: border-color 0.2s ease;\n    &:focus {\n      outline: none;\n      border-color: ", ";\n    }\n  }\n\n  textarea {\n    min-height: 150px;\n  }\n\n  /* Input material style */\n  &.is-material {\n    label {\n      position: absolute;\n      left: 0;\n      top: 10px;\n    }\n\n    input,\n    textarea {\n      border-radius: 0;\n      border-top: 0;\n      border-left: 0;\n      border-right: 0;\n      padding-left: 0;\n      padding-right: 0;\n    }\n\n    textarea {\n      min-height: 40px;\n      padding-bottom: 0;\n    }\n\n    .highlight {\n      position: absolute;\n      height: 1px;\n      top: auto;\n      left: 50%;\n      bottom: 0;\n      width: 0;\n      pointer-events: none;\n      transition: all 0.2s ease;\n    }\n\n    /* If input has icon then these styel */\n    &.icon-left,\n    &.icon-right {\n      .field-wrapper {\n        flex-direction: row-reverse;\n        > .input-icon {\n          width: auto;\n        }\n        > input {\n          flex: 1;\n        }\n      }\n    }\n\n    /* When icon position in left */\n    &.icon-left {\n      .field-wrapper {\n        > input {\n          padding-left: 20px;\n        }\n      }\n      label {\n        top: -15px;\n        font-size: 12px;\n      }\n    }\n\n    /* When icon position in right */\n    &.icon-right {\n      .field-wrapper {\n        > input {\n          padding-right: 20px;\n        }\n      }\n    }\n\n    /* Material input focus style */\n    &.is-focus {\n      input {\n        border-color: ", ";\n      }\n\n      label {\n        top: -16px;\n        font-size: 12px;\n        color: ", ";\n      }\n\n      .highlight {\n        width: 100%;\n        height: 2px;\n        background-color: ", ";\n        left: 0;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var InputField = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.labelColor', '#767676'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'));
var EyeButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject2(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'));

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Link/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Link/index.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Link/index.js";




var LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('a')({
  textDecoration: 'none'
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Link'));

var Link = function Link(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LinkWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Link);
Link.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"].propTypes);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Loader/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.style */ "../../node_modules/reusecore/src/elements/Loader/loader.style.js");


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Loader/index.js";




var Loader = function Loader(_ref) {
  var loaderColor = _ref.loaderColor,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loader_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

Loader.propTypes = {
  /** ClassName of the Loader */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set loader width in number || string */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set loader height in number || string */
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set color for loader */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Loader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/loader.style.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Loader/loader.style.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Animation */ "../../node_modules/reusecore/src/elements/Animation/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  /* loader default style */\n  display: inline-flex;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  overflow: hidden;\n  border-width: 2px;\n  border-style: solid;\n  border-color: ", ";\n  border-top-color: transparent !important;\n\n  /* animation goes here */\n  ", "\n  /* Style system custome color variant */\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject(), function (props) {
  return props.loaderColor ? props.loaderColor : '#000000';
}, _Animation__WEBPACK_IMPORTED_MODULE_5__["AnimSpinner"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["colorStyle"], _base__WEBPACK_IMPORTED_MODULE_6__["base"]); // prop types can also be added from the style functions

LoaderStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_3__["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Navbar/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.style */ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js");


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Navbar/index.js";




var Navbar = function Navbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      navbarStyle = _ref.navbarStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "navbarStyle"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__navbar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), children);
};

Navbar.propTypes = {
  /** ClassName of the Navbar. Default class is reusecore__navbar*/
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render menu, logo, button or any component that
   * you want to show in navbar. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  space: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRadius: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  boxShadow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/** Navbar default proptype */

Navbar.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Navbar/navbar.style.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* Navbar default style goes here */\n  display: flex;\n  align-items: center;\n  min-height: 56px;\n  padding: 10px 16px;\n  \n  /* Style system supported prop */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var NavbarStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"]);
NavbarStyle.displayName = 'NavbarStyle';
/* harmony default export */ __webpack_exports__["default"] = (NavbarStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Text/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Text/index.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Text/index.js";





var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p')(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Text'));

var Text = function Text(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TextWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);
Text.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/UI/Logo/index.js":
/*!***************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/UI/Logo/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Link */ "../../node_modules/reusecore/src/elements/Link/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Image */ "../../node_modules/reusecore/src/elements/Image/index.js");


var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/UI/Logo/index.js";






var Logo = function Logo(_ref) {
  var logoWrapperStyle = _ref.logoWrapperStyle,
      logoStyle = _ref.logoStyle,
      titleStyle = _ref.titleStyle,
      withAchor = _ref.withAchor,
      anchorProps = _ref.anchorProps,
      logoSrc = _ref.logoSrc,
      title = _ref.title,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, logoWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), withAchor ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, anchorProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

Logo.propTypes = {
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  logoWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  withAchor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  anchorProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/base.js":
/*!******************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/base.js ***!
  \******************************************************************************************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/** this is our Base Component every components must be Extend it */

var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};
var base = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(function () {
  return {
    boxSizing: 'border-box'
  };
}, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["order"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
base.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes);

/***/ }),

/***/ "../../node_modules/reusecore/src/theme/customVariant.js":
/*!************************************************************************************************************!*\
  !*** /Users/darenlarson/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/theme/customVariant.js ***!
  \************************************************************************************************************/
/*! exports provided: cards, buttonStyle, colorStyle, sizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeStyle", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

var buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
var colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
var sizeStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
var cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'cards'
});


/***/ }),

/***/ "./pages/saasclassic.js":
/*!******************************!*\
  !*** ./pages/saasclassic.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var common_src_theme_saasThree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/theme/saasThree */ "../../node_modules/common/src/theme/saasThree/index.js");
/* harmony import */ var common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/assets/css/style */ "../../node_modules/common/src/assets/css/style.js");
/* harmony import */ var common_src_containers_SaasThree_saasThree_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/containers/SaasThree/saasThree.style */ "../../node_modules/common/src/containers/SaasThree/saasThree.style.js");
/* harmony import */ var common_src_containers_SaasThree_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/containers/SaasThree/Banner */ "../../node_modules/common/src/containers/SaasThree/Banner/index.js");
/* harmony import */ var common_src_containers_SaasThree_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/containers/SaasThree/Navbar */ "../../node_modules/common/src/containers/SaasThree/Navbar/index.js");
/* harmony import */ var common_src_containers_SaasThree_Service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/containers/SaasThree/Service */ "../../node_modules/common/src/containers/SaasThree/Service/index.js");
/* harmony import */ var common_src_containers_SaasThree_Pricing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/containers/SaasThree/Pricing */ "../../node_modules/common/src/containers/SaasThree/Pricing/index.js");
/* harmony import */ var common_src_containers_SaasThree_Partner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/containers/SaasThree/Partner */ "../../node_modules/common/src/containers/SaasThree/Partner/index.js");
/* harmony import */ var common_src_containers_SaasThree_Trial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/containers/SaasThree/Trial */ "../../node_modules/common/src/containers/SaasThree/Trial/index.js");
/* harmony import */ var common_src_containers_SaasThree_Feature__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/src/containers/SaasThree/Feature */ "../../node_modules/common/src/containers/SaasThree/Feature/index.js");
/* harmony import */ var common_src_containers_SaasThree_UpdateScreen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/src/containers/SaasThree/UpdateScreen */ "../../node_modules/common/src/containers/SaasThree/UpdateScreen/index.js");
/* harmony import */ var common_src_containers_SaasThree_Testimonial__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/containers/SaasThree/Testimonial */ "../../node_modules/common/src/containers/SaasThree/Testimonial/index.js");
/* harmony import */ var common_src_containers_SaasThree_Newsletter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! common/src/containers/SaasThree/Newsletter */ "../../node_modules/common/src/containers/SaasThree/Newsletter/index.js");
/* harmony import */ var common_src_containers_SaasThree_Footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! common/src/containers/SaasThree/Footer */ "../../node_modules/common/src/containers/SaasThree/Footer/index.js");
var _jsxFileName = "/Users/darenlarson/Downloads/SuperProps/SuperProps/packages/landing/pages/saasclassic.js";



















/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: common_src_theme_saasThree__WEBPACK_IMPORTED_MODULE_5__["saasThreeTheme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Clique Book"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "React next landing page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ec5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_6__["ResetCSS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_SaasThree_saasThree_style__WEBPACK_IMPORTED_MODULE_7__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_SaasThree_saasThree_style__WEBPACK_IMPORTED_MODULE_7__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_4__["DrawerProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_SaasThree_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_SaasThree_Banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_SaasThree_Service__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_SaasThree_UpdateScreen__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_SaasThree_Feature__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_SaasThree_Pricing__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_SaasThree_Testimonial__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_SaasThree_Footer__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))));
});

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/saasclassic.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/darenlarson/Downloads/SuperProps/SuperProps/packages/landing/pages/saasclassic.js */"./pages/saasclassic.js");


/***/ }),

/***/ "@glidejs/glide":
/*!*********************************!*\
  !*** external "@glidejs/glide" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "@redq/reuse-modal":
/*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "rc-tabs":
/*!**************************!*\
  !*** external "rc-tabs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs");

/***/ }),

/***/ "rc-tabs/lib/ScrollableInkTabBar":
/*!**************************************************!*\
  !*** external "rc-tabs/lib/ScrollableInkTabBar" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/ScrollableInkTabBar");

/***/ }),

/***/ "rc-tabs/lib/TabContent":
/*!*****************************************!*\
  !*** external "rc-tabs/lib/TabContent" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/TabContent");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/entypo/play":
/*!**********************************************!*\
  !*** external "react-icons-kit/entypo/play" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/play");

/***/ }),

/***/ "react-icons-kit/fa":
/*!*************************************!*\
  !*** external "react-icons-kit/fa" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa");

/***/ }),

/***/ "react-icons-kit/fa/briefcase":
/*!***********************************************!*\
  !*** external "react-icons-kit/fa/briefcase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/briefcase");

/***/ }),

/***/ "react-icons-kit/icomoon/pieChart":
/*!***************************************************!*\
  !*** external "react-icons-kit/icomoon/pieChart" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/pieChart");

/***/ }),

/***/ "react-icons-kit/md":
/*!*************************************!*\
  !*** external "react-icons-kit/md" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md");

/***/ }),

/***/ "react-icons-kit/md/ic_monetization_on":
/*!********************************************************!*\
  !*** external "react-icons-kit/md/ic_monetization_on" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_monetization_on");

/***/ }),

/***/ "react-icons-kit/md/ic_play_circle_filled":
/*!***********************************************************!*\
  !*** external "react-icons-kit/md/ic_play_circle_filled" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_play_circle_filled");

/***/ }),

/***/ "react-icons-kit/md/ic_settings":
/*!*************************************************!*\
  !*** external "react-icons-kit/md/ic_settings" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_settings");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=saasclassic.js.map