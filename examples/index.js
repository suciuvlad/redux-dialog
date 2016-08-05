import React, { Component } from 'react';
import { render } from 'react-dom';
import reduxDialog, { dialogReducer, openDialog, closeDialog } from '../src';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './application.scss';

const reducers = {
  dialogs: dialogReducer
}

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class BasicDialog extends Component {
  render() {
    return(
      <div>
        <div className="dlg--body">
          My awesome modalbox!
        </div>
      </div>
    );
  }
}

const Dialog = reduxDialog({
  name: 'signupDialog',

  onClose: function () {
    console.log('Dialog was closed');
  },

  onOpen: function () {
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
