import React from 'react';
import { connect } from 'react-redux';

import reduxDialog, { openDialog, closeDialog, closeAllDialogs } from '../src';

const BasicDialog = props => (
  <div>
    <div className="dlg--body">
      My awesome modalbox for `${props.payload && props.payload.contentId}`
      <a href="#" onClick={props.onRequestClose}>
        Close it
      </a>
    </div>
  </div>
);

const Dialog = reduxDialog({
  name: 'Sign up dialog'
})(BasicDialog);

const Basic = props => (
  <div>
    <Dialog
      appElement={document.getElementById('react-js')}
      onAfterOpen={() => console.log('On After Open')}
      onRequestClose={() => console.log('On Request Close')}
    />
    <a onClick={props.handleClick} href="#">
      Open Dialog
    </a>
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleClick: e => {
    e.preventDefault();
    dispatch(
      openDialog('Sign up dialog', { contentId: 'How to pass payload' })
    );
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Basic);
