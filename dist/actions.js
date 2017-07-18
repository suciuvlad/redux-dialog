'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openDialog = openDialog;
exports.closeDialog = closeDialog;

var _constants = require('./constants');

var c = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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