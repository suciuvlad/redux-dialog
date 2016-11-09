import React, { Component } from 'react';
import { render } from 'react-dom';
import reduxDialog, { dialogReducer, openDialog, closeDialog } from '../src';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducers = {
  dialogReducer: dialogReducer
}

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const BasicDialog = () => (
  <div>
    <div className="dlg--body">
      My awesome modalbox!
    </div>
  </div>
)

const Dialog = reduxDialog({
  name: 'signupDialog',
  isOpen: true,

  onRequestClose: function () {
    console.log('Dialog was closed');
  },

  onAfterOpen: function () {
    console.log('Dialog was opened');
  }
})(BasicDialog);

const App = () => (
  <Provider store={store}>
    <div>
      <Dialog />
      <a onClick={() => store.dispatch(openDialog('signupDialog'))} href="#">Open Dialog</a>
    </div>
  </Provider>
)

render(<App />,
  document.getElementById('react-js'));
