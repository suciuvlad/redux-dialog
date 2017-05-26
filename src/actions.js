import * as c from './constants';

export function openDialog(name) {
  return {
    type: c.OPEN_DIALOG,
    name: name
  }
}

export function closeDialog(name) {
  return {
    type: c.CLOSE_DIALOG,
    name: name
  }
}

export function closeAllDialogs() {
  return {
    type: c.CLOSE_ALL_DIALOGS
  }
}
