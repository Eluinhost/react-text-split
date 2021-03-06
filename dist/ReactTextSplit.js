(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactTextSplit"] = factory(require("react"));
	else
		root["ReactTextSplit"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var TextSplit = _interopRequire(__webpack_require__(1));

	var WordTextSplit = _interopRequire(__webpack_require__(2));

	var LetterTextSplit = _interopRequire(__webpack_require__(3));

	var RotateTextSplit = _interopRequire(__webpack_require__(4));

	module.exports = {
	  TextSplit: TextSplit,
	  WordTextSplit: WordTextSplit,
	  LetterTextSplit: LetterTextSplit,
	  RotateTextSplit: RotateTextSplit
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(5));

	var WHITESPACE_ONLY_REGEX = /^\s*$/;

	var TextSplit = (function (_React$Component) {
	  function TextSplit() {
	    _classCallCheck(this, TextSplit);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(TextSplit, _React$Component);

	  _createClass(TextSplit, {
	    shouldComponentUpdate: {
	      value: function shouldComponentUpdate(newProps) {
	        return this.props.text !== newProps.text || this.props.classBase !== newProps.classBase;
	      }
	    },
	    splitText: {

	      /**
	       * Override this function for different styles
	       *
	       * @return {String[]} array of split text value
	       */

	      value: function splitText() {
	        return [this.props.text];
	      }
	    },
	    renderPart: {
	      value: function renderPart(text, index) {
	        var partNumber = "part-" + index;
	        var classString = "" + partNumber + " " + this.props.classBase + "-part";

	        if (WHITESPACE_ONLY_REGEX.test(text)) {
	          classString += " whitespace " + this.props.classBase + "-whitespace";
	        }

	        // replace spaces
	        text = text.replace(/ /g, " ");

	        return React.createElement(
	          "span",
	          { "aria-hidden": true, className: classString, key: index },
	          text
	        );
	      }
	    },
	    render: {
	      value: function render() {
	        var _this = this;

	        return React.createElement(
	          "span",
	          { "aria-label": this.props.text, className: this.props.classBase + "-base" },
	          this.splitText().map(function (text, i) {
	            return _this.renderPart(text, i);
	          })
	        );
	      }
	    }
	  });

	  return TextSplit;
	})(React.Component);

	TextSplit.propTypes = {
	  text: React.PropTypes.string,
	  classBase: React.PropTypes.string
	};
	TextSplit.defaultProps = {
	  classBase: "text-split",
	  text: ""
	};
	module.exports = TextSplit;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var TextSplit = _interopRequire(__webpack_require__(1));

	var WHITESPACE_SPLIT_REGEX = /(\s+)/;

	var WordTextSplit = (function (_TextSplit) {
	  function WordTextSplit() {
	    _classCallCheck(this, WordTextSplit);

	    if (_TextSplit != null) {
	      _TextSplit.apply(this, arguments);
	    }
	  }

	  _inherits(WordTextSplit, _TextSplit);

	  _createClass(WordTextSplit, {
	    splitText: {
	      value: function splitText() {
	        return this.props.text.split(WHITESPACE_SPLIT_REGEX).filter(function (n) {
	          return n !== "";
	        });
	      }
	    }
	  });

	  return WordTextSplit;
	})(TextSplit);

	module.exports = WordTextSplit;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var TextSplit = _interopRequire(__webpack_require__(1));

	var LetterTextSplit = (function (_TextSplit) {
	  function LetterTextSplit() {
	    _classCallCheck(this, LetterTextSplit);

	    if (_TextSplit != null) {
	      _TextSplit.apply(this, arguments);
	    }
	  }

	  _inherits(LetterTextSplit, _TextSplit);

	  _createClass(LetterTextSplit, {
	    splitText: {
	      value: function splitText() {
	        return this.props.text.split("");
	      }
	    }
	  });

	  return LetterTextSplit;
	})(TextSplit);

	module.exports = LetterTextSplit;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var React = _interopRequire(__webpack_require__(5));

	var TextSplit = _interopRequire(__webpack_require__(1));

	var RotateTextSplit = (function (_React$Component) {
	  function RotateTextSplit(props) {
	    _classCallCheck(this, RotateTextSplit);

	    _get(Object.getPrototypeOf(RotateTextSplit.prototype), "constructor", this).call(this, props);

	    this.state = {
	      index: 0
	    };
	  }

	  _inherits(RotateTextSplit, _React$Component);

	  _createClass(RotateTextSplit, {
	    shouldComponentUpdate: {
	      value: function shouldComponentUpdate(newProps, newState) {
	        // if timer ticked the index up
	        if (newState.index !== this.state.index) {
	          return true;
	        } // if we're switching types
	        if (this.props.type !== newProps.type) {
	          return true;
	        } // if it's the same array
	        if (this.props.values === newProps.values) {
	          return false;
	        } // if they're not the same length
	        if (this.props.values.length != newProps.length) {
	          return true;
	        } // check each individual for changes
	        for (var i = 0; i < this.props.values.length; ++i) {
	          if (this.props.values[i] !== newProps[i]) {
	            return true;
	          }
	        }

	        return false;
	      }
	    },
	    componentDidMount: {
	      value: function componentDidMount() {
	        var _this = this;

	        // TODO allow modification of the timer
	        this._timer = setInterval(function () {
	          _this.setState({
	            index: (_this.state.index + 1) % _this.props.values.length
	          });
	        }, 2000);
	      }
	    },
	    componentWillUnmount: {
	      value: function componentWillUnmount() {
	        clearInterval(this._timer);
	      }
	    },
	    render: {
	      value: function render() {
	        var Type = this.props.type;
	        return React.createElement(Type, { text: this.props.values[this.state.index], classBase: this.props.classBase });
	      }
	    }
	  });

	  return RotateTextSplit;
	})(React.Component);

	RotateTextSplit.propTypes = {
	  values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	  type: React.PropTypes.instanceOf(TextSplit).isRequired,
	  classBase: React.PropTypes.string
	};

	module.exports = RotateTextSplit;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }
/******/ ])
});
;