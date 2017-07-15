'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeDialog = exports.openDialog = exports.dialogReducer = undefined;

var _reduxDialog = require('./redux-dialog');

var _reduxDialog2 = _interopRequireDefault(_reduxDialog);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reduxDialog2.default;
exports.dialogReducer = _reducer2.default;
exports.openDialog = _actions.openDialog;
exports.closeDialog = _actions.closeDialog;