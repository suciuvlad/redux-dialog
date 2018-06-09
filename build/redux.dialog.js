(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(
      require('react'),
      require('react-redux'),
      require('react-dom')
    );
  else if (typeof define === 'function' && define.amd)
    define(['react', 'react-redux', 'react-dom'], factory);
  else {
    var a =
      typeof exports === 'object'
        ? factory(
            require('react'),
            require('react-redux'),
            require('react-dom')
          )
        : factory(root['react'], root['react-redux'], root['react-dom']);
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(typeof self !== 'undefined' ? self : this, function(
  __WEBPACK_EXTERNAL_MODULE_0__,
  __WEBPACK_EXTERNAL_MODULE_9__,
  __WEBPACK_EXTERNAL_MODULE_12__
) {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter
          /******/
        });
        /******/
      }
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 7));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

        /***/
      },
      /* 1 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.canUseDOM = undefined;

        var _exenv = __webpack_require__(21);

        var _exenv2 = _interopRequireDefault(_exenv);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var EE = _exenv2.default;

        var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

        var canUseDOM = (exports.canUseDOM = EE.canUseDOM);

        exports.default = SafeHTMLElement;

        /***/
      },
      /* 2 */
      /***/ function(module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (false) {
          var REACT_ELEMENT_TYPE =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            0xeac7;

          var isValidElement = function(object) {
            return (
              typeof object === 'object' &&
              object !== null &&
              object.$$typeof === REACT_ELEMENT_TYPE
            );
          };

          // By explicitly using `prop-types` you are opting into new development behavior.
          // http://fb.me/prop-types-in-prod
          var throwOnDirectAccess = true;
          module.exports = require('./factoryWithTypeCheckers')(
            isValidElement,
            throwOnDirectAccess
          );
        } else {
          // By explicitly using `prop-types` you are opting into new production behavior.
          // http://fb.me/prop-types-in-prod
          module.exports = __webpack_require__(13)();
        }

        /***/
      },
      /* 3 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.default = findTabbableDescendants;
        /*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

        var tabbableNode = /input|select|textarea|button|object/;

        function hidesContents(element) {
          var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

          // If the node is empty, this is good enough
          if (zeroSize && !element.innerHTML) return true;

          // Otherwise we need to check some styles
          var style = window.getComputedStyle(element);
          return zeroSize
            ? style.getPropertyValue('overflow') !== 'visible'
            : style.getPropertyValue('display') == 'none';
        }

        function visible(element) {
          var parentElement = element;
          while (parentElement) {
            if (parentElement === document.body) break;
            if (hidesContents(parentElement)) return false;
            parentElement = parentElement.parentNode;
          }
          return true;
        }

        function focusable(element, isTabIndexNotNaN) {
          var nodeName = element.nodeName.toLowerCase();
          var res =
            (tabbableNode.test(nodeName) && !element.disabled) ||
            (nodeName === 'a'
              ? element.href || isTabIndexNotNaN
              : isTabIndexNotNaN);
          return res && visible(element);
        }

        function tabbable(element) {
          var tabIndex = element.getAttribute('tabindex');
          if (tabIndex === null) tabIndex = undefined;
          var isTabIndexNaN = isNaN(tabIndex);
          return (
            (isTabIndexNaN || tabIndex >= 0) &&
            focusable(element, !isTabIndexNaN)
          );
        }

        function findTabbableDescendants(element) {
          return [].slice
            .call(element.querySelectorAll('*'), 0)
            .filter(tabbable);
        }
        module.exports = exports['default'];

        /***/
      },
      /* 4 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.assertNodeList = assertNodeList;
        exports.setElement = setElement;
        exports.validateElement = validateElement;
        exports.hide = hide;
        exports.show = show;
        exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
        exports.resetForTesting = resetForTesting;

        var _warning = __webpack_require__(20);

        var _warning2 = _interopRequireDefault(_warning);

        var _safeHTMLElement = __webpack_require__(1);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var globalElement = null;

        function assertNodeList(nodeList, selector) {
          if (!nodeList || !nodeList.length) {
            throw new Error(
              'react-modal: No elements were found for selector ' +
                selector +
                '.'
            );
          }
        }

        function setElement(element) {
          var useElement = element;
          if (typeof useElement === 'string' && _safeHTMLElement.canUseDOM) {
            var el = document.querySelectorAll(useElement);
            assertNodeList(el, useElement);
            useElement = 'length' in el ? el[0] : el;
          }
          globalElement = useElement || globalElement;
          return globalElement;
        }

        function validateElement(appElement) {
          if (!appElement && !globalElement) {
            (0, _warning2.default)(
              false,
              [
                'react-modal: App element is not defined.',
                'Please use `Modal.setAppElement(el)` or set `appElement={el}`.',
                "This is needed so screen readers don't see main content",
                'when modal is opened. It is not recommended, but you can opt-out',
                'by setting `ariaHideApp={false}`.'
              ].join(' ')
            );

            return false;
          }

          return true;
        }

        function hide(appElement) {
          if (validateElement(appElement)) {
            (appElement || globalElement).setAttribute('aria-hidden', 'true');
          }
        }

        function show(appElement) {
          if (validateElement(appElement)) {
            (appElement || globalElement).removeAttribute('aria-hidden');
          }
        }

        function documentNotReadyOrSSRTesting() {
          globalElement = null;
        }

        function resetForTesting() {
          globalElement = null;
        }

        /***/
      },
      /* 5 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.openDialog = openDialog;
        exports.closeDialog = closeDialog;
        exports.closeAllDialogs = closeAllDialogs;

        var _constants = __webpack_require__(6);

        var c = _interopRequireWildcard(_constants);

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }
            newObj.default = obj;
            return newObj;
          }
        }

        function openDialog(name, payload) {
          return {
            type: c.OPEN_DIALOG,
            name: name,
            payload: payload
          };
        }

        function closeDialog(name) {
          return {
            type: c.CLOSE_DIALOG,
            name: name
          };
        }

        function closeAllDialogs() {
          return {
            type: c.CLOSE_ALL_DIALOGS
          };
        }

        /***/
      },
      /* 6 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        var OPEN_DIALOG = (exports.OPEN_DIALOG = 'OPEN_DIALOG');
        var CLOSE_DIALOG = (exports.CLOSE_DIALOG = 'CLOSE_DIALOG');
        var CLOSE_ALL_DIALOGS = (exports.CLOSE_ALL_DIALOGS =
          'CLOSE_ALL_DIALOGS');

        /***/
      },
      /* 7 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.closeAllDialogs = exports.closeDialog = exports.openDialog = exports.dialogReducer = undefined;

        var _reduxDialog = __webpack_require__(8);

        var _reduxDialog2 = _interopRequireDefault(_reduxDialog);

        var _reducer = __webpack_require__(24);

        var _reducer2 = _interopRequireDefault(_reducer);

        var _actions = __webpack_require__(5);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = _reduxDialog2.default;
        exports.dialogReducer = _reducer2.default;
        exports.openDialog = _actions.openDialog;
        exports.closeDialog = _actions.closeDialog;
        exports.closeAllDialogs = _actions.closeAllDialogs;

        /***/
      },
      /* 8 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
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

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(0);

        var _react2 = _interopRequireDefault(_react);

        var _reactRedux = __webpack_require__(9);

        var _reactModal = __webpack_require__(10);

        var _reactModal2 = _interopRequireDefault(_reactModal);

        var _actions = __webpack_require__(5);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var reduxDialog = function reduxDialog(dialogProps) {
          var name = dialogProps.name,
            _dialogProps$onAfterO = dialogProps.onAfterOpen,
            onAfterOpen =
              _dialogProps$onAfterO === undefined
                ? function() {}
                : _dialogProps$onAfterO,
            _dialogProps$onReques = dialogProps.onRequestClose,
            onRequestClose =
              _dialogProps$onReques === undefined
                ? function(event) {}
                : _dialogProps$onReques;

          return function(WrappedComponent) {
            var ReduxDialog = (function(_Component) {
              _inherits(ReduxDialog, _Component);

              function ReduxDialog() {
                _classCallCheck(this, ReduxDialog);

                return _possibleConstructorReturn(
                  this,
                  (
                    ReduxDialog.__proto__ || Object.getPrototypeOf(ReduxDialog)
                  ).apply(this, arguments)
                );
              }

              _createClass(ReduxDialog, [
                {
                  key: 'render',
                  value: function render() {
                    return _react2.default.createElement(
                      _reactModal2.default,
                      _extends({ contentLabel: name }, dialogProps, this.props),
                      _react2.default.createElement(
                        WrappedComponent,
                        this.props
                      )
                    );
                  }
                }
              ]);

              return ReduxDialog;
            })(_react.Component);

            var mapStateToProps = function mapStateToProps(state) {
              var reducer =
                typeof state.get === 'function'
                  ? state.get('dialogReducer')
                  : state.dialogReducer;

              if (reducer.dialogs && reducer.dialogs.hasOwnProperty(name)) {
                var _reducer$dialogs$name = reducer.dialogs[name],
                  isOpen = _reducer$dialogs$name.isOpen,
                  payload = _reducer$dialogs$name.payload;

                return { isOpen: isOpen, payload: payload };
              }

              return {
                payload: {}
              };
            };

            var mapDispatchToProps = function mapDispatchToProps(
              dispatch,
              props
            ) {
              return {
                onRequestClose: function onRequestClose() {
                  props.onRequestClose && props.onRequestClose();
                  dispatch((0, _actions.closeDialog)(name));
                }
              };
            };

            return (0, _reactRedux.connect)(
              mapStateToProps,
              mapDispatchToProps
            )(ReduxDialog);
          };
        };

        exports.default = reduxDialog;

        /***/
      },
      /* 9 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

        /***/
      },
      /* 10 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var _Modal = __webpack_require__(11);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = _Modal2.default;
        module.exports = exports['default'];

        /***/
      },
      /* 11 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.bodyOpenClassName = exports.portalClassName = undefined;

        var _extends =
          Object.assign ||
          function(target) {
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

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(0);

        var _react2 = _interopRequireDefault(_react);

        var _reactDom = __webpack_require__(12);

        var _reactDom2 = _interopRequireDefault(_reactDom);

        var _propTypes = __webpack_require__(2);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _ModalPortal = __webpack_require__(17);

        var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

        var _ariaAppHider = __webpack_require__(4);

        var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

        var _safeHTMLElement = __webpack_require__(1);

        var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

        var _reactLifecyclesCompat = __webpack_require__(23);

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }
            newObj.default = obj;
            return newObj;
          }
        }

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var portalClassName = (exports.portalClassName = 'ReactModalPortal');
        var bodyOpenClassName = (exports.bodyOpenClassName =
          'ReactModal__Body--open');

        var isReact16 = _reactDom2.default.createPortal !== undefined;
        var createPortal = isReact16
          ? _reactDom2.default.createPortal
          : _reactDom2.default.unstable_renderSubtreeIntoContainer;

        function getParentElement(parentSelector) {
          return parentSelector();
        }

        var Modal = (function(_Component) {
          _inherits(Modal, _Component);

          function Modal() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, Modal);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (
              (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                this,
                (_ref =
                  Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(
                  _ref,
                  [this].concat(args)
                )
              )),
              _this)),
              (_this.removePortal = function() {
                !isReact16 &&
                  _reactDom2.default.unmountComponentAtNode(_this.node);
                var parent = getParentElement(_this.props.parentSelector);
                parent.removeChild(_this.node);
              }),
              (_this.portalRef = function(ref) {
                _this.portal = ref;
              }),
              (_this.renderPortal = function(props) {
                var portal = createPortal(
                  _this,
                  _react2.default.createElement(
                    _ModalPortal2.default,
                    _extends({ defaultStyles: Modal.defaultStyles }, props)
                  ),
                  _this.node
                );
                _this.portalRef(portal);
              }),
              _temp)),
              _possibleConstructorReturn(_this, _ret)
            );
          }

          _createClass(
            Modal,
            [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  if (!_safeHTMLElement.canUseDOM) return;

                  if (!isReact16) {
                    this.node = document.createElement('div');
                  }
                  this.node.className = this.props.portalClassName;

                  var parent = getParentElement(this.props.parentSelector);
                  parent.appendChild(this.node);

                  !isReact16 && this.renderPortal(this.props);
                }
              },
              {
                key: 'getSnapshotBeforeUpdate',
                value: function getSnapshotBeforeUpdate(prevProps) {
                  var prevParent = getParentElement(prevProps.parentSelector);
                  var nextParent = getParentElement(this.props.parentSelector);
                  return { prevParent: prevParent, nextParent: nextParent };
                }
              },
              {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(prevProps, _, snapshot) {
                  if (!_safeHTMLElement.canUseDOM) return;
                  var _props = this.props,
                    isOpen = _props.isOpen,
                    portalClassName = _props.portalClassName;

                  if (prevProps.portalClassName !== portalClassName) {
                    this.node.className = portalClassName;
                  }

                  // Stop unnecessary renders if modal is remaining closed
                  if (!prevProps.isOpen && !isOpen) return;

                  var prevParent = snapshot.prevParent,
                    nextParent = snapshot.nextParent;

                  if (nextParent !== prevParent) {
                    prevParent.removeChild(this.node);
                    nextParent.appendChild(this.node);
                  }

                  !isReact16 && this.renderPortal(this.props);
                }
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal)
                    return;

                  var state = this.portal.state;
                  var now = Date.now();
                  var closesAt =
                    state.isOpen &&
                    this.props.closeTimeoutMS &&
                    (state.closesAt || now + this.props.closeTimeoutMS);

                  if (closesAt) {
                    if (!state.beforeClose) {
                      this.portal.closeWithTimeout();
                    }

                    setTimeout(this.removePortal, closesAt - now);
                  } else {
                    this.removePortal();
                  }
                }
              },
              {
                key: 'render',
                value: function render() {
                  if (!_safeHTMLElement.canUseDOM || !isReact16) {
                    return null;
                  }

                  if (!this.node && isReact16) {
                    this.node = document.createElement('div');
                  }

                  return createPortal(
                    _react2.default.createElement(
                      _ModalPortal2.default,
                      _extends(
                        {
                          ref: this.portalRef,
                          defaultStyles: Modal.defaultStyles
                        },
                        this.props
                      )
                    ),
                    this.node
                  );
                }
              }
            ],
            [
              {
                key: 'setAppElement',
                value: function setAppElement(element) {
                  ariaAppHider.setElement(element);
                }

                /* eslint-disable react/no-unused-prop-types */

                /* eslint-enable react/no-unused-prop-types */
              }
            ]
          );

          return Modal;
        })(_react.Component);

        Modal.propTypes = {
          isOpen: _propTypes2.default.bool.isRequired,
          style: _propTypes2.default.shape({
            content: _propTypes2.default.object,
            overlay: _propTypes2.default.object
          }),
          portalClassName: _propTypes2.default.string,
          bodyOpenClassName: _propTypes2.default.string,
          htmlOpenClassName: _propTypes2.default.string,
          className: _propTypes2.default.oneOfType([
            _propTypes2.default.string,
            _propTypes2.default.shape({
              base: _propTypes2.default.string.isRequired,
              afterOpen: _propTypes2.default.string.isRequired,
              beforeClose: _propTypes2.default.string.isRequired
            })
          ]),
          overlayClassName: _propTypes2.default.oneOfType([
            _propTypes2.default.string,
            _propTypes2.default.shape({
              base: _propTypes2.default.string.isRequired,
              afterOpen: _propTypes2.default.string.isRequired,
              beforeClose: _propTypes2.default.string.isRequired
            })
          ]),
          appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
          onAfterOpen: _propTypes2.default.func,
          onRequestClose: _propTypes2.default.func,
          closeTimeoutMS: _propTypes2.default.number,
          ariaHideApp: _propTypes2.default.bool,
          shouldFocusAfterRender: _propTypes2.default.bool,
          shouldCloseOnOverlayClick: _propTypes2.default.bool,
          shouldReturnFocusAfterClose: _propTypes2.default.bool,
          parentSelector: _propTypes2.default.func,
          aria: _propTypes2.default.object,
          role: _propTypes2.default.string,
          contentLabel: _propTypes2.default.string,
          shouldCloseOnEsc: _propTypes2.default.bool,
          overlayRef: _propTypes2.default.func,
          contentRef: _propTypes2.default.func
        };
        Modal.defaultProps = {
          isOpen: false,
          portalClassName: portalClassName,
          bodyOpenClassName: bodyOpenClassName,
          ariaHideApp: true,
          closeTimeoutMS: 0,
          shouldFocusAfterRender: true,
          shouldCloseOnEsc: true,
          shouldCloseOnOverlayClick: true,
          shouldReturnFocusAfterClose: true,
          parentSelector: function parentSelector() {
            return document.body;
          }
        };
        Modal.defaultStyles = {
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        };

        (0, _reactLifecyclesCompat.polyfill)(Modal);

        exports.default = Modal;

        /***/
      },
      /* 12 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

        /***/
      },
      /* 13 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var emptyFunction = __webpack_require__(14);
        var invariant = __webpack_require__(15);
        var ReactPropTypesSecret = __webpack_require__(16);

        module.exports = function() {
          function shim(
            props,
            propName,
            componentName,
            location,
            propFullName,
            secret
          ) {
            if (secret === ReactPropTypesSecret) {
              // It is still safe when called from React.
              return;
            }
            invariant(
              false,
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use PropTypes.checkPropTypes() to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
            );
          }
          shim.isRequired = shim;
          function getShim() {
            return shim;
          }
          // Important!
          // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
          var ReactPropTypes = {
            array: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,

            any: shim,
            arrayOf: getShim,
            element: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim
          };

          ReactPropTypes.checkPropTypes = emptyFunction;
          ReactPropTypes.PropTypes = ReactPropTypes;

          return ReactPropTypes;
        };

        /***/
      },
      /* 14 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        function makeEmptyFunction(arg) {
          return function() {
            return arg;
          };
        }

        /**
         * This function accepts and discards inputs; it has no side effects. This is
         * primarily useful idiomatically for overridable function endpoints which
         * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
         */
        var emptyFunction = function emptyFunction() {};

        emptyFunction.thatReturns = makeEmptyFunction;
        emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
        emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
        emptyFunction.thatReturnsNull = makeEmptyFunction(null);
        emptyFunction.thatReturnsThis = function() {
          return this;
        };
        emptyFunction.thatReturnsArgument = function(arg) {
          return arg;
        };

        module.exports = emptyFunction;

        /***/
      },
      /* 15 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         */

        /**
         * Use invariant() to assert state which your program assumes to be true.
         *
         * Provide sprintf-style format (only %s is supported) and arguments
         * to provide information about what broke and what you were
         * expecting.
         *
         * The invariant message will be stripped in production, but the invariant
         * will remain to ensure logic does not differ in production.
         */

        var validateFormat = function validateFormat(format) {};

        if (false) {
          validateFormat = function validateFormat(format) {
            if (format === undefined) {
              throw new Error('invariant requires an error message argument');
            }
          };
        }

        function invariant(condition, format, a, b, c, d, e, f) {
          validateFormat(format);

          if (!condition) {
            var error;
            if (format === undefined) {
              error = new Error(
                'Minified exception occurred; use the non-minified dev environment ' +
                  'for the full error message and additional helpful warnings.'
              );
            } else {
              var args = [a, b, c, d, e, f];
              var argIndex = 0;
              error = new Error(
                format.replace(/%s/g, function() {
                  return args[argIndex++];
                })
              );
              error.name = 'Invariant Violation';
            }

            error.framesToPop = 1; // we don't care about invariant's own frame
            throw error;
          }
        }

        module.exports = invariant;

        /***/
      },
      /* 16 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret =
          'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

        module.exports = ReactPropTypesSecret;

        /***/
      },
      /* 17 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
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

        var _typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(0);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(2);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _focusManager = __webpack_require__(18);

        var focusManager = _interopRequireWildcard(_focusManager);

        var _scopeTab = __webpack_require__(19);

        var _scopeTab2 = _interopRequireDefault(_scopeTab);

        var _ariaAppHider = __webpack_require__(4);

        var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

        var _classList = __webpack_require__(22);

        var classList = _interopRequireWildcard(_classList);

        var _safeHTMLElement = __webpack_require__(1);

        var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }
            newObj.default = obj;
            return newObj;
          }
        }

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        // so that our CSS is statically analyzable
        var CLASS_NAMES = {
          overlay: 'ReactModal__Overlay',
          content: 'ReactModal__Content'
        };

        var TAB_KEY = 9;
        var ESC_KEY = 27;

        var ariaHiddenInstances = 0;

        var ModalPortal = (function(_Component) {
          _inherits(ModalPortal, _Component);

          function ModalPortal(props) {
            _classCallCheck(this, ModalPortal);

            var _this = _possibleConstructorReturn(
              this,
              (
                ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)
              ).call(this, props)
            );

            _this.setOverlayRef = function(overlay) {
              _this.overlay = overlay;
              _this.props.overlayRef && _this.props.overlayRef(overlay);
            };

            _this.setContentRef = function(content) {
              _this.content = content;
              _this.props.contentRef && _this.props.contentRef(content);
            };

            _this.afterClose = function() {
              var _this$props = _this.props,
                appElement = _this$props.appElement,
                ariaHideApp = _this$props.ariaHideApp,
                htmlOpenClassName = _this$props.htmlOpenClassName,
                bodyOpenClassName = _this$props.bodyOpenClassName;

              // Remove classes.

              classList.remove(document.body, bodyOpenClassName);

              htmlOpenClassName &&
                classList.remove(
                  document.getElementsByTagName('html')[0],
                  htmlOpenClassName
                );

              // Reset aria-hidden attribute if all modals have been removed
              if (ariaHideApp && ariaHiddenInstances > 0) {
                ariaHiddenInstances -= 1;

                if (ariaHiddenInstances === 0) {
                  ariaAppHider.show(appElement);
                }
              }

              if (_this.props.shouldFocusAfterRender) {
                if (_this.props.shouldReturnFocusAfterClose) {
                  focusManager.returnFocus();
                  focusManager.teardownScopedFocus();
                } else {
                  focusManager.popWithoutFocus();
                }
              }
            };

            _this.open = function() {
              _this.beforeOpen();
              if (_this.state.afterOpen && _this.state.beforeClose) {
                clearTimeout(_this.closeTimer);
                _this.setState({ beforeClose: false });
              } else {
                if (_this.props.shouldFocusAfterRender) {
                  focusManager.setupScopedFocus(_this.node);
                  focusManager.markForFocusLater();
                }

                _this.setState({ isOpen: true }, function() {
                  _this.setState({ afterOpen: true });

                  if (_this.props.isOpen && _this.props.onAfterOpen) {
                    _this.props.onAfterOpen();
                  }
                });
              }
            };

            _this.close = function() {
              if (_this.props.closeTimeoutMS > 0) {
                _this.closeWithTimeout();
              } else {
                _this.closeWithoutTimeout();
              }
            };

            _this.focusContent = function() {
              return (
                _this.content &&
                !_this.contentHasFocus() &&
                _this.content.focus()
              );
            };

            _this.closeWithTimeout = function() {
              var closesAt = Date.now() + _this.props.closeTimeoutMS;
              _this.setState(
                { beforeClose: true, closesAt: closesAt },
                function() {
                  _this.closeTimer = setTimeout(
                    _this.closeWithoutTimeout,
                    _this.state.closesAt - Date.now()
                  );
                }
              );
            };

            _this.closeWithoutTimeout = function() {
              _this.setState(
                {
                  beforeClose: false,
                  isOpen: false,
                  afterOpen: false,
                  closesAt: null
                },
                _this.afterClose
              );
            };

            _this.handleKeyDown = function(event) {
              if (event.keyCode === TAB_KEY) {
                (0, _scopeTab2.default)(_this.content, event);
              }

              if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
                event.stopPropagation();
                _this.requestClose(event);
              }
            };

            _this.handleOverlayOnClick = function(event) {
              if (_this.shouldClose === null) {
                _this.shouldClose = true;
              }

              if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
                if (_this.ownerHandlesClose()) {
                  _this.requestClose(event);
                } else {
                  _this.focusContent();
                }
              }
              _this.shouldClose = null;
            };

            _this.handleContentOnMouseUp = function() {
              _this.shouldClose = false;
            };

            _this.handleOverlayOnMouseDown = function(event) {
              if (
                !_this.props.shouldCloseOnOverlayClick &&
                event.target == _this.overlay
              ) {
                event.preventDefault();
              }
            };

            _this.handleContentOnClick = function() {
              _this.shouldClose = false;
            };

            _this.handleContentOnMouseDown = function() {
              _this.shouldClose = false;
            };

            _this.requestClose = function(event) {
              return (
                _this.ownerHandlesClose() && _this.props.onRequestClose(event)
              );
            };

            _this.ownerHandlesClose = function() {
              return _this.props.onRequestClose;
            };

            _this.shouldBeClosed = function() {
              return !_this.state.isOpen && !_this.state.beforeClose;
            };

            _this.contentHasFocus = function() {
              return (
                document.activeElement === _this.content ||
                _this.content.contains(document.activeElement)
              );
            };

            _this.buildClassName = function(which, additional) {
              var classNames =
                (typeof additional === 'undefined'
                  ? 'undefined'
                  : _typeof(additional)) === 'object'
                  ? additional
                  : {
                      base: CLASS_NAMES[which],
                      afterOpen: CLASS_NAMES[which] + '--after-open',
                      beforeClose: CLASS_NAMES[which] + '--before-close'
                    };
              var className = classNames.base;
              if (_this.state.afterOpen) {
                className = className + ' ' + classNames.afterOpen;
              }
              if (_this.state.beforeClose) {
                className = className + ' ' + classNames.beforeClose;
              }
              return typeof additional === 'string' && additional
                ? className + ' ' + additional
                : className;
            };

            _this.ariaAttributes = function(items) {
              return Object.keys(items).reduce(function(acc, name) {
                acc['aria-' + name] = items[name];
                return acc;
              }, {});
            };

            _this.state = {
              afterOpen: false,
              beforeClose: false
            };

            _this.shouldClose = null;
            _this.moveFromContentToOverlay = null;
            return _this;
          }

          _createClass(ModalPortal, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                if (this.props.isOpen) {
                  this.open();
                }
              }
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(prevProps, prevState) {
                if (false) {
                  if (
                    prevProps.bodyOpenClassName !== this.props.bodyOpenClassName
                  ) {
                    // eslint-disable-next-line no-console
                    console.warn(
                      'React-Modal: "bodyOpenClassName" prop has been modified. ' +
                        'This may cause unexpected behavior when multiple modals are open.'
                    );
                  }
                  if (
                    prevProps.htmlOpenClassName !== this.props.htmlOpenClassName
                  ) {
                    // eslint-disable-next-line no-console
                    console.warn(
                      'React-Modal: "htmlOpenClassName" prop has been modified. ' +
                        'This may cause unexpected behavior when multiple modals are open.'
                    );
                  }
                }

                if (this.props.isOpen && !prevProps.isOpen) {
                  this.open();
                } else if (!this.props.isOpen && prevProps.isOpen) {
                  this.close();
                }

                // Focus only needs to be set once when the modal is being opened
                if (
                  this.props.shouldFocusAfterRender &&
                  this.state.isOpen &&
                  !prevState.isOpen
                ) {
                  this.focusContent();
                }
              }
            },
            {
              key: 'componentWillUnmount',
              value: function componentWillUnmount() {
                this.afterClose();
                clearTimeout(this.closeTimer);
              }
            },
            {
              key: 'beforeOpen',
              value: function beforeOpen() {
                var _props = this.props,
                  appElement = _props.appElement,
                  ariaHideApp = _props.ariaHideApp,
                  htmlOpenClassName = _props.htmlOpenClassName,
                  bodyOpenClassName = _props.bodyOpenClassName;

                // Add classes.

                classList.add(document.body, bodyOpenClassName);

                htmlOpenClassName &&
                  classList.add(
                    document.getElementsByTagName('html')[0],
                    htmlOpenClassName
                  );

                if (ariaHideApp) {
                  ariaHiddenInstances += 1;
                  ariaAppHider.hide(appElement);
                }
              }

              // Don't steal focus from inner elements
            },
            {
              key: 'render',
              value: function render() {
                var _props2 = this.props,
                  className = _props2.className,
                  overlayClassName = _props2.overlayClassName,
                  defaultStyles = _props2.defaultStyles;

                var contentStyles = className ? {} : defaultStyles.content;
                var overlayStyles = overlayClassName
                  ? {}
                  : defaultStyles.overlay;

                return this.shouldBeClosed()
                  ? null
                  : _react2.default.createElement(
                      'div',
                      {
                        ref: this.setOverlayRef,
                        className: this.buildClassName(
                          'overlay',
                          overlayClassName
                        ),
                        style: _extends(
                          {},
                          overlayStyles,
                          this.props.style.overlay
                        ),
                        onClick: this.handleOverlayOnClick,
                        onMouseDown: this.handleOverlayOnMouseDown,
                        'aria-modal': 'true'
                      },
                      _react2.default.createElement(
                        'div',
                        _extends(
                          {
                            ref: this.setContentRef,
                            style: _extends(
                              {},
                              contentStyles,
                              this.props.style.content
                            ),
                            className: this.buildClassName(
                              'content',
                              className
                            ),
                            tabIndex: '-1',
                            onKeyDown: this.handleKeyDown,
                            onMouseDown: this.handleContentOnMouseDown,
                            onMouseUp: this.handleContentOnMouseUp,
                            onClick: this.handleContentOnClick,
                            role: this.props.role,
                            'aria-label': this.props.contentLabel
                          },
                          this.ariaAttributes(this.props.aria || {}),
                          {
                            'data-testid': this.props.testId
                          }
                        ),
                        this.props.children
                      )
                    );
              }
            }
          ]);

          return ModalPortal;
        })(_react.Component);

        ModalPortal.defaultProps = {
          style: {
            overlay: {},
            content: {}
          },
          defaultStyles: {}
        };
        ModalPortal.propTypes = {
          isOpen: _propTypes2.default.bool.isRequired,
          defaultStyles: _propTypes2.default.shape({
            content: _propTypes2.default.object,
            overlay: _propTypes2.default.object
          }),
          style: _propTypes2.default.shape({
            content: _propTypes2.default.object,
            overlay: _propTypes2.default.object
          }),
          className: _propTypes2.default.oneOfType([
            _propTypes2.default.string,
            _propTypes2.default.object
          ]),
          overlayClassName: _propTypes2.default.oneOfType([
            _propTypes2.default.string,
            _propTypes2.default.object
          ]),
          bodyOpenClassName: _propTypes2.default.string,
          htmlOpenClassName: _propTypes2.default.string,
          ariaHideApp: _propTypes2.default.bool,
          appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
          onAfterOpen: _propTypes2.default.func,
          onRequestClose: _propTypes2.default.func,
          closeTimeoutMS: _propTypes2.default.number,
          shouldFocusAfterRender: _propTypes2.default.bool,
          shouldCloseOnOverlayClick: _propTypes2.default.bool,
          shouldReturnFocusAfterClose: _propTypes2.default.bool,
          role: _propTypes2.default.string,
          contentLabel: _propTypes2.default.string,
          aria: _propTypes2.default.object,
          children: _propTypes2.default.node,
          shouldCloseOnEsc: _propTypes2.default.bool,
          overlayRef: _propTypes2.default.func,
          contentRef: _propTypes2.default.func,
          testId: _propTypes2.default.string
        };
        exports.default = ModalPortal;
        module.exports = exports['default'];

        /***/
      },
      /* 18 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.handleBlur = handleBlur;
        exports.handleFocus = handleFocus;
        exports.markForFocusLater = markForFocusLater;
        exports.returnFocus = returnFocus;
        exports.popWithoutFocus = popWithoutFocus;
        exports.setupScopedFocus = setupScopedFocus;
        exports.teardownScopedFocus = teardownScopedFocus;

        var _tabbable = __webpack_require__(3);

        var _tabbable2 = _interopRequireDefault(_tabbable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var focusLaterElements = [];
        var modalElement = null;
        var needToFocus = false;

        function handleBlur() {
          needToFocus = true;
        }

        function handleFocus() {
          if (needToFocus) {
            needToFocus = false;
            if (!modalElement) {
              return;
            }
            // need to see how jQuery shims document.on('focusin') so we don't need the
            // setTimeout, firefox doesn't support focusin, if it did, we could focus
            // the element outside of a setTimeout. Side-effect of this implementation
            // is that the document.body gets focus, and then we focus our element right
            // after, seems fine.
            setTimeout(function() {
              if (modalElement.contains(document.activeElement)) {
                return;
              }
              var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
              el.focus();
            }, 0);
          }
        }

        function markForFocusLater() {
          focusLaterElements.push(document.activeElement);
        }

        /* eslint-disable no-console */
        function returnFocus() {
          var toFocus = null;
          try {
            if (focusLaterElements.length !== 0) {
              toFocus = focusLaterElements.pop();
              toFocus.focus();
            }
            return;
          } catch (e) {
            console.warn(
              [
                'You tried to return focus to',
                toFocus,
                'but it is not in the DOM anymore'
              ].join(' ')
            );
          }
        }
        /* eslint-enable no-console */

        function popWithoutFocus() {
          focusLaterElements.length > 0 && focusLaterElements.pop();
        }

        function setupScopedFocus(element) {
          modalElement = element;

          if (window.addEventListener) {
            window.addEventListener('blur', handleBlur, false);
            document.addEventListener('focus', handleFocus, true);
          } else {
            window.attachEvent('onBlur', handleBlur);
            document.attachEvent('onFocus', handleFocus);
          }
        }

        function teardownScopedFocus() {
          modalElement = null;

          if (window.addEventListener) {
            window.removeEventListener('blur', handleBlur);
            document.removeEventListener('focus', handleFocus);
          } else {
            window.detachEvent('onBlur', handleBlur);
            document.detachEvent('onFocus', handleFocus);
          }
        }

        /***/
      },
      /* 19 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.default = scopeTab;

        var _tabbable = __webpack_require__(3);

        var _tabbable2 = _interopRequireDefault(_tabbable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function scopeTab(node, event) {
          var tabbable = (0, _tabbable2.default)(node);

          if (!tabbable.length) {
            // Do nothing, since there are no elements that can receive focus.
            event.preventDefault();
            return;
          }

          var shiftKey = event.shiftKey;
          var head = tabbable[0];
          var tail = tabbable[tabbable.length - 1];

          // proceed with default browser behavior on tab.
          // Focus on last element on shift + tab.
          if (node === document.activeElement) {
            if (!shiftKey) return;
            target = tail;
          }

          var target;
          if (tail === document.activeElement && !shiftKey) {
            target = head;
          }

          if (head === document.activeElement && shiftKey) {
            target = tail;
          }

          if (target) {
            event.preventDefault();
            target.focus();
            return;
          }

          // Safari radio issue.
          //
          // Safari does not move the focus to the radio button,
          // so we need to force it to really walk through all elements.
          //
          // This is very error prone, since we are trying to guess
          // if it is a safari browser from the first occurence between
          // chrome or safari.
          //
          // The chrome user agent contains the first ocurrence
          // as the 'chrome/version' and later the 'safari/version'.
          var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(
            navigator.userAgent
          );
          var isSafariDesktop =
            checkSafari != null &&
            checkSafari[1] != 'Chrome' &&
            /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

          // If we are not in safari desktop, let the browser control
          // the focus
          if (!isSafariDesktop) return;

          var x = tabbable.indexOf(document.activeElement);

          if (x > -1) {
            x += shiftKey ? -1 : 1;
          }

          event.preventDefault();

          tabbable[x].focus();
        }
        module.exports = exports['default'];

        /***/
      },
      /* 20 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright 2014-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */

        /**
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var warning = function() {};

        if (false) {
          warning = function(condition, format, args) {
            var len = arguments.length;
            args = new Array(len > 2 ? len - 2 : 0);
            for (var key = 2; key < len; key++) {
              args[key - 2] = arguments[key];
            }
            if (format === undefined) {
              throw new Error(
                '`warning(condition, format, ...args)` requires a warning ' +
                  'message argument'
              );
            }

            if (format.length < 10 || /^[s\W]*$/.test(format)) {
              throw new Error(
                'The warning format should be able to uniquely identify this ' +
                  'warning. Please, use a more descriptive format than: ' +
                  format
              );
            }

            if (!condition) {
              var argIndex = 0;
              var message =
                'Warning: ' +
                format.replace(/%s/g, function() {
                  return args[argIndex++];
                });
              if (typeof console !== 'undefined') {
                console.error(message);
              }
              try {
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
              } catch (x) {}
            }
          };
        }

        module.exports = warning;

        /***/
      },
      /* 21 */
      /***/ function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__; /*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
        /* global define */

        (function() {
          'use strict';

          var canUseDOM = !!(
            typeof window !== 'undefined' &&
            window.document &&
            window.document.createElement
          );

          var ExecutionEnvironment = {
            canUseDOM: canUseDOM,

            canUseWorkers: typeof Worker !== 'undefined',

            canUseEventListeners:
              canUseDOM && !!(window.addEventListener || window.attachEvent),

            canUseViewport: canUseDOM && !!window.screen
          };

          if (true) {
            !((__WEBPACK_AMD_DEFINE_RESULT__ = function() {
              return ExecutionEnvironment;
            }.call(exports, __webpack_require__, exports, module)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else if (typeof module !== 'undefined' && module.exports) {
            module.exports = ExecutionEnvironment;
          } else {
            window.ExecutionEnvironment = ExecutionEnvironment;
          }
        })();

        /***/
      },
      /* 22 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.dumpClassLists = dumpClassLists;
        var htmlClassList = {};
        var docBodyClassList = {};

        function dumpClassLists() {
          if (false) {
            var classes = document.getElementsByTagName('html')[0].className;
            var buffer = 'Show tracked classes:\n\n';

            buffer += '<html /> (' + classes + '):\n';
            for (var x in htmlClassList) {
              buffer += '  ' + x + ' ' + htmlClassList[x] + '\n';
            }

            classes = document.body.className;

            // eslint-disable-next-line max-len
            buffer += '\n\ndoc.body (' + classes + '):\n';
            for (var _x in docBodyClassList) {
              buffer += '  ' + _x + ' ' + docBodyClassList[_x] + '\n';
            }

            buffer += '\n';

            // eslint-disable-next-line no-console
            console.log(buffer);
          }
        }

        /**
         * Track the number of reference of a class.
         * @param {object} poll The poll to receive the reference.
         * @param {string} className The class name.
         * @return {string}
         */
        var incrementReference = function incrementReference(poll, className) {
          if (!poll[className]) {
            poll[className] = 0;
          }
          poll[className] += 1;
          return className;
        };

        /**
         * Drop the reference of a class.
         * @param {object} poll The poll to receive the reference.
         * @param {string} className The class name.
         * @return {string}
         */
        var decrementReference = function decrementReference(poll, className) {
          if (poll[className]) {
            poll[className] -= 1;
          }
          return className;
        };

        /**
         * Track a class and add to the given class list.
         * @param {Object} classListRef A class list of an element.
         * @param {Object} poll         The poll to be used.
         * @param {Array}  classes      The list of classes to be tracked.
         */
        var trackClass = function trackClass(classListRef, poll, classes) {
          classes.forEach(function(className) {
            incrementReference(poll, className);
            classListRef.add(className);
          });
        };

        /**
         * Untrack a class and remove from the given class list if the reference
         * reaches 0.
         * @param {Object} classListRef A class list of an element.
         * @param {Object} poll         The poll to be used.
         * @param {Array}  classes      The list of classes to be untracked.
         */
        var untrackClass = function untrackClass(classListRef, poll, classes) {
          classes.forEach(function(className) {
            decrementReference(poll, className);
            poll[className] === 0 && classListRef.remove(className);
          });
        };

        /**
         * Public inferface to add classes to the document.body.
         * @param {string} bodyClass The class string to be added.
         *                           It may contain more then one class
         *                           with ' ' as separator.
         */
        var add = (exports.add = function add(element, classString) {
          return trackClass(
            element.classList,
            element.nodeName.toLowerCase() == 'html'
              ? htmlClassList
              : docBodyClassList,
            classString.split(' ')
          );
        });

        /**
         * Public inferface to remove classes from the document.body.
         * @param {string} bodyClass The class string to be added.
         *                           It may contain more then one class
         *                           with ' ' as separator.
         */
        var remove = (exports.remove = function remove(element, classString) {
          return untrackClass(
            element.classList,
            element.nodeName.toLowerCase() == 'html'
              ? htmlClassList
              : docBodyClassList,
            classString.split(' ')
          );
        });

        /***/
      },
      /* 23 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        Object.defineProperty(__webpack_exports__, '__esModule', {
          value: true
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'polyfill',
          function() {
            return polyfill;
          }
        );
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        function componentWillMount() {
          // Call this.constructor.gDSFP to support sub-classes.
          var state = this.constructor.getDerivedStateFromProps(
            this.props,
            this.state
          );
          if (state !== null && state !== undefined) {
            this.setState(state);
          }
        }

        function componentWillReceiveProps(nextProps) {
          // Call this.constructor.gDSFP to support sub-classes.
          // Use the setState() updater to ensure state isn't stale in certain edge cases.
          function updater(prevState) {
            var state = this.constructor.getDerivedStateFromProps(
              nextProps,
              prevState
            );
            return state !== null && state !== undefined ? state : null;
          }
          // Binding "this" is important for shallow renderer support.
          this.setState(updater.bind(this));
        }

        function componentWillUpdate(nextProps, nextState) {
          try {
            var prevProps = this.props;
            var prevState = this.state;
            this.props = nextProps;
            this.state = nextState;
            this.__reactInternalSnapshotFlag = true;
            this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
              prevProps,
              prevState
            );
          } finally {
            this.props = prevProps;
            this.state = prevState;
          }
        }

        // React may warn about cWM/cWRP/cWU methods being deprecated.
        // Add a flag to suppress these warnings for this special case.
        componentWillMount.__suppressDeprecationWarning = true;
        componentWillReceiveProps.__suppressDeprecationWarning = true;
        componentWillUpdate.__suppressDeprecationWarning = true;

        function polyfill(Component) {
          var prototype = Component.prototype;

          if (!prototype || !prototype.isReactComponent) {
            throw new Error('Can only polyfill class components');
          }

          if (
            typeof Component.getDerivedStateFromProps !== 'function' &&
            typeof prototype.getSnapshotBeforeUpdate !== 'function'
          ) {
            return Component;
          }

          // If new component APIs are defined, "unsafe" lifecycles won't be called.
          // Error if any of these lifecycles are present,
          // Because they would work differently between older and newer (16.3+) versions of React.
          var foundWillMountName = null;
          var foundWillReceivePropsName = null;
          var foundWillUpdateName = null;
          if (typeof prototype.componentWillMount === 'function') {
            foundWillMountName = 'componentWillMount';
          } else if (
            typeof prototype.UNSAFE_componentWillMount === 'function'
          ) {
            foundWillMountName = 'UNSAFE_componentWillMount';
          }
          if (typeof prototype.componentWillReceiveProps === 'function') {
            foundWillReceivePropsName = 'componentWillReceiveProps';
          } else if (
            typeof prototype.UNSAFE_componentWillReceiveProps === 'function'
          ) {
            foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
          }
          if (typeof prototype.componentWillUpdate === 'function') {
            foundWillUpdateName = 'componentWillUpdate';
          } else if (
            typeof prototype.UNSAFE_componentWillUpdate === 'function'
          ) {
            foundWillUpdateName = 'UNSAFE_componentWillUpdate';
          }
          if (
            foundWillMountName !== null ||
            foundWillReceivePropsName !== null ||
            foundWillUpdateName !== null
          ) {
            var componentName = Component.displayName || Component.name;
            var newApiName =
              typeof Component.getDerivedStateFromProps === 'function'
                ? 'getDerivedStateFromProps()'
                : 'getSnapshotBeforeUpdate()';

            throw Error(
              'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
                componentName +
                ' uses ' +
                newApiName +
                ' but also contains the following legacy lifecycles:' +
                (foundWillMountName !== null
                  ? '\n  ' + foundWillMountName
                  : '') +
                (foundWillReceivePropsName !== null
                  ? '\n  ' + foundWillReceivePropsName
                  : '') +
                (foundWillUpdateName !== null
                  ? '\n  ' + foundWillUpdateName
                  : '') +
                '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
                'https://fb.me/react-async-component-lifecycle-hooks'
            );
          }

          // React <= 16.2 does not support static getDerivedStateFromProps.
          // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
          // Newer versions of React will ignore these lifecycles if gDSFP exists.
          if (typeof Component.getDerivedStateFromProps === 'function') {
            prototype.componentWillMount = componentWillMount;
            prototype.componentWillReceiveProps = componentWillReceiveProps;
          }

          // React <= 16.2 does not support getSnapshotBeforeUpdate.
          // As a workaround, use cWU to invoke the new lifecycle.
          // Newer versions of React will ignore that lifecycle if gSBU exists.
          if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
            if (typeof prototype.componentDidUpdate !== 'function') {
              throw new Error(
                'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
              );
            }

            prototype.componentWillUpdate = componentWillUpdate;

            var componentDidUpdate = prototype.componentDidUpdate;

            prototype.componentDidUpdate = function componentDidUpdatePolyfill(
              prevProps,
              prevState,
              maybeSnapshot
            ) {
              // 16.3+ will not execute our will-update method;
              // It will pass a snapshot value to did-update though.
              // Older versions will require our polyfilled will-update value.
              // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
              // Because for <= 15.x versions this might be a "prevContext" object.
              // We also can't just check "__reactInternalSnapshot",
              // Because get-snapshot might return a falsy value.
              // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
              var snapshot = this.__reactInternalSnapshotFlag
                ? this.__reactInternalSnapshot
                : maybeSnapshot;

              componentDidUpdate.call(this, prevProps, prevState, snapshot);
            };
          }

          return Component;
        }

        /***/
      },
      /* 24 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
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

        var _constants = __webpack_require__(6);

        var c = _interopRequireWildcard(_constants);

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }
            newObj.default = obj;
            return newObj;
          }
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
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

        var initialState = {
          dialogs: {}
        };

        exports.default = function() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialState;
          var action = arguments[1];

          switch (action.type) {
            case c.OPEN_DIALOG:
              var dialogsAfterOpen = _extends(
                {},
                state.dialogs,
                _defineProperty({}, action.name, {
                  isOpen: true,
                  payload: action.payload
                })
              );

              return _extends({}, state, {
                dialogs: dialogsAfterOpen
              });
              break;

            case c.CLOSE_DIALOG:
              var dialogsAfterClose = _extends(
                {},
                state.dialogs,
                _defineProperty({}, action.name, {
                  isOpen: false
                })
              );

              return _extends({}, state, {
                dialogs: dialogsAfterClose
              });
              break;

            default:
              return state;
          }
        };

        /***/
      }
      /******/
    ]
  );
});
