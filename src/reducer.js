import * as c from './constants';

export default (state = [], action) => {
  switch (action.type) {
    case c.OPEN_DIALOG:
      return Object.assign({}, state, {
        dialogs: {
          [action.name]: true
        }
      })
    break;

    case c.CLOSE_DIALOG:
      delete state.dialogs[action.name];
      return Object.assign({}, state);
    break;

    default:
      return state;
  }
}
