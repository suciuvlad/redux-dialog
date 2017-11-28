import * as c from './constants';

export default (state = {dialogs: {}}, action) => {
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
      return Object.assign({}, state, {dialogs: {}});
    break;

    default:
      return state;
  }
}
