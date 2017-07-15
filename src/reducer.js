import * as c from './constants';

export default (state = {dialogs: {}}, action) => {
  switch (action.type) {
    case c.OPEN_DIALOG:
      return Object.assign({}, state, {
        dialogs: Object.assign({}, state.dialogs, {
          [action.name]: true
        })
      })
    break;

    case c.CLOSE_DIALOG:
      const stateCopy = Object.assign({}, state)
      delete stateCopy.dialogs[action.name];
      return Object.assign({}, stateCopy);
    break;

    case c.CLOSE_ALL_DIALOGS:
      return Object.assign({}, state, {dialogs: {}})
    break;

    default:
      return state;
  }
}
