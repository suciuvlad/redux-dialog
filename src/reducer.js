import * as c from './constants';

const initialState = {
  dialogs: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.OPEN_DIALOG:
      const dialogsAfterOpen = Object.assign({}, state.dialogs, {
        [action.name]: {
          isOpen: true,
          payload: action.payload
        }
      });

      return Object.assign({}, state, {
        dialogs: dialogsAfterOpen
      });
    break;

    case c.CLOSE_DIALOG:
      const dialogsAfterClose = Object.assign({}, state.dialogs, {
        [action.name]: {
          isOpen: false
        }
      });

      return Object.assign({}, state, {
        dialogs: dialogsAfterClose
      });
    break;

    case c.CLOSE_ALL_DIALOGS:
      return Object.assign({}, state, initialState);
    break;

    default:
      return state;
  }
}
