(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"), require("react-dom"), require("classnames"), require("flex.dialog"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux", "react-dom", "classnames", "flex.dialog", "jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-redux"), require("react-dom"), require("classnames"), require("flex.dialog"), require("jquery")) : factory(root["react"], root["react-redux"], root["react-dom"], root["classnames"], root["flex.dialog"], root["jquery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.closeDialog = exports.openDialog = exports.dialogReducer = exports.Dialog = undefined;

	var _reduxDialog = __webpack_require__(1);

	var _reduxDialog2 = _interopRequireDefault(_reduxDialog);

	var _dialog = __webpack_require__(4);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _reducer = __webpack_require__(11);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _actions = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reduxDialog2.default;
	exports.Dialog = _dialog2.default;
	exports.dialogReducer = _reducer2.default;
	exports.openDialog = _actions.openDialog;
	exports.closeDialog = _actions.closeDialog;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(3);

	var _dialog = __webpack_require__(4);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _actions = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var reduxDialog = function reduxDialog(_ref) {
	  var name = _ref.name;
	  var _onClose = _ref.onClose;
	  var _onOpen = _ref.onOpen;


	  return function (WrappedComponent) {
	    var ReduxDialog = function (_Component) {
	      _inherits(ReduxDialog, _Component);

	      function ReduxDialog() {
	        _classCallCheck(this, ReduxDialog);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReduxDialog).apply(this, arguments));
	      }

	      _createClass(ReduxDialog, [{
	        key: 'render',
	        value: function render() {
	          return _react2.default.createElement(
	            _dialog2.default,
	            this.props,
	            _react2.default.createElement(WrappedComponent, this.props)
	          );
	        }
	      }]);

	      return ReduxDialog;
	    }(_react.Component);

	    var mapStateToProps = function mapStateToProps(state) {
	      return { isOpen: state.dialogs.dialogs && state.dialogs.dialogs[name] && state.dialogs.dialogs[name].isOpen || false };
	    };

	    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	      return {
	        onClose: function onClose() {
	          dispatch((0, _actions.closeDialog)(name));
	          _onClose();
	        },

	        onOpen: function onOpen() {
	          _onOpen();
	        }
	      };
	    };

	    return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ReduxDialog);
	  };
	};

	exports.default = reduxDialog;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _flex = __webpack_require__(7);

	var _flex2 = _interopRequireDefault(_flex);

	var _jquery = __webpack_require__(8);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dialog = function (_Component) {
	  _inherits(Dialog, _Component);

	  function Dialog() {
	    _classCallCheck(this, Dialog);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).apply(this, arguments));
	  }

	  _createClass(Dialog, [{
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var self = this;

	      this.portal = document.createElement('div');
	      document.body.appendChild(this.portal);

	      (0, _jquery2.default)(this.portal).addClass((0, _classnames2.default)('dlg', this.props.className));

	      this.dialog = (0, _jquery2.default)(this.portal).dialog({
	        autoOpen: this.props.isOpen,
	        onShow: this.props.onOpen,
	        onClose: this.props.onClose
	      });

	      this.renderContents(this.props);
	    }
	  }, {
	    key: 'renderContents',
	    value: function renderContents(props) {
	      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react2.default.createElement(
	        'div',
	        null,
	        props.children
	      ), this.portal);

	      if (props.isOpen) {
	        this.dialog.dialog('show');
	      } else {
	        this.dialog.dialog('close');
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      this.renderContents(props);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.dialog.dialog('destroy');
	      _reactDom2.default.unmountComponentAtNode(this.portal);
	      document.body.removeChild(this.portal);
	    }
	  }]);

	  return Dialog;
	}(_react.Component);

	Dialog.getDefaultProps = {
	  isOpen: false
	};

	exports.default = Dialog;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.openDialog = openDialog;
	exports.closeDialog = closeDialog;

	var _constants = __webpack_require__(10);

	var c = _interopRequireWildcard(_constants);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function openDialog(name) {
	  return {
	    type: c.OPEN_DIALOG,
	    name: name
	  };
	}

	function closeDialog(name) {
	  return {
	    type: c.CLOSE_DIALOG,
	    name: name
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var OPEN_DIALOG = exports.OPEN_DIALOG = 'OPEN_DIALOG';
	var CLOSE_DIALOG = exports.CLOSE_DIALOG = 'CLOSE_DIALOG';

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _constants = __webpack_require__(10);

	var c = _interopRequireWildcard(_constants);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case c.OPEN_DIALOG:
	      var dialogs = _extends({}, state.dialogs, _defineProperty({}, action.name, {
	        isOpen: true
	      }));

	      return _extends({}, state, {
	        dialogs: dialogs
	      });
	      break;

	    case c.CLOSE_DIALOG:
	      var dialogss = _extends({}, state.dialogs, _defineProperty({}, action.name, {
	        isOpen: false
	      }));

	      return _extends({}, state, {
	        dialogs: dialogss
	      });
	      break;

	    default:
	      return state;
	  }
	};

/***/ }
/******/ ])
});
;