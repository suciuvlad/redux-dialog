'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reduxDialog = function reduxDialog(dialogProps) {
  var name = dialogProps.name,
      _dialogProps$onAfterO = dialogProps.onAfterOpen,
      _onAfterOpen = _dialogProps$onAfterO === undefined ? function () {} : _dialogProps$onAfterO,
      _dialogProps$onReques = dialogProps.onRequestClose,
      _onRequestClose = _dialogProps$onReques === undefined ? function () {} : _dialogProps$onReques;

  return function (WrappedComponent) {
    var ReduxDialog = function (_Component) {
      _inherits(ReduxDialog, _Component);

      function ReduxDialog() {
        _classCallCheck(this, ReduxDialog);

        return _possibleConstructorReturn(this, (ReduxDialog.__proto__ || Object.getPrototypeOf(ReduxDialog)).apply(this, arguments));
      }

      _createClass(ReduxDialog, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            _reactModal2.default,
            _extends({}, dialogProps, this.props),
            _react2.default.createElement(WrappedComponent, this.props)
          );
        }
      }]);

      return ReduxDialog;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
      if (state.dialogs.dialogs && state.dialogs.dialogs[name]) {
        var _state$dialogs$dialog = state.dialogs.dialogs[name],
            isOpen = _state$dialogs$dialog.isOpen,
            payload = _state$dialogs$dialog.payload;

        return { isOpen: isOpen, payload: payload };
      }
      return { isOpen: false };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
      return {
        onAfterOpen: function onAfterOpen() {
          _onAfterOpen();
        },

        onRequestClose: function onRequestClose() {
          _onRequestClose();
          dispatch((0, _actions.closeDialog)(name));
        }
      };
    };

    return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ReduxDialog);
  };
};

exports.default = reduxDialog;