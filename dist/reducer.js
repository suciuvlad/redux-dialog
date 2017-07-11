'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

var c = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case c.OPEN_DIALOG:
      var dialogs = _extends({}, state.dialogs, _defineProperty({}, action.name, {
        isOpen: true,
        payload: action.payload
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