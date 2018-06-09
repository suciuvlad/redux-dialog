import * as c from './constants';

export function openDialog(name, payload) {
  return {
    type: c.OPEN_DIALOG,
    name: name,
    payload: payload
  };
}

export function closeDialog(name) {
  return {
    type: c.CLOSE_DIALOG,
    name: name
  };
}

export function closeAllDialogs() {
  return {
    type: c.CLOSE_ALL_DIALOGS
  };
}
