import React from 'react';
import { render } from 'react-dom';
import reduxDialog, {
  dialogReducer,
  openDialog,
  closeDialog,
  closeAllDialogs
} from '../src';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducers = {
  dialogReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const BasicDialog = props => (
  <div>
    <div className="dlg--body">
      My awesome modalbox for "{props.payload.contentId} "!{' '}
      <a href="#" onClick={props.onRequestClose}>
        Close it
      </a>
    </div>
  </div>
);

const Dialog = reduxDialog({
  name: 'Sign up dialog'
})(BasicDialog);

const App = () => (
  <Provider store={store}>
    <div>
      <Dialog
        onAfterOpen={() => console.log('On After Open')}
        onRequestClose={() => console.log('On Request Close')}
      />
      <a
        onClick={() =>
          store.dispatch(
            openDialog('Sign up dialog', { contentId: 'How to pass payload' })
          )
        }
        href="#"
      >
        Open Dialog
      </a>
    </div>
  </Provider>
);

render(<App />, document.getElementById('react-js'));
