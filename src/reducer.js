import * as c from './constants';

export default (state = [], action) => {
  switch (action.type) {
    case c.OPEN_DIALOG:
      let dialogs = Object.assign({}, state.dialogs, {
        [action.name]: {
          isOpen: true,
          payload: action.payload
        }
      });

      return Object.assign({}, state, {
        dialogs: dialogs
      });
    break;

    case c.CLOSE_DIALOG:
      let dialogss = Object.assign({}, state.dialogs, {
        [action.name]: {
          isOpen: false
        }
      });

      return Object.assign({}, state, {
        dialogs: dialogss
      });
    break;

    default:
      return state;
  }
}
