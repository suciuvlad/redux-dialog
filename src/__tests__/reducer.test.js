/* eslint-env jest */

import dialogReducer from '../reducer';
import * as constants from '../constants';

const initialState = {
  dialogs: {}
}

describe('Reducer', () => {
  it('should open the dialog', () => {
    const action = {
      type: constants.OPEN_DIALOG,
      name: 'dialog1'
    };

    const reducer = dialogReducer(initialState, action);
    expect(reducer.dialogs.dialog1.isOpen).toEqual(true);
  });

  it('should close the dialog', () => {
    const action = {
      type: constants.CLOSE_DIALOG,
      name: 'dialog1'
    };

    const reducer = dialogReducer(initialState, action);
    expect(reducer.dialogs.dialog1.isOpen).toEqual(false);
  });

  it('should accept a payload', () => {
    const payload = { name: "John" };

    const action = {
      type: constants.OPEN_DIALOG,
      name: 'dialog1',
      payload: payload
    };

    const reducer = dialogReducer(initialState, action);
    expect(reducer.dialogs.dialog1.isOpen).toEqual(true);
    expect(reducer.dialogs.dialog1.payload).toEqual(payload);
  });
});