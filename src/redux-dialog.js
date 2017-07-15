import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { closeDialog } from './actions';

const reduxDialog = (dialogProps) => {

  const {
    name,
    onAfterOpen = () => {},
    onRequestClose = (event) => {}
  } = dialogProps;

  return((WrappedComponent) => {
    class ReduxDialog extends Component {
      render () {
        return (
          <Modal contentLabel={name} {...dialogProps} {...this.props}>
            <WrappedComponent {...this.props} />
          </Modal>
        );
      }
    }

    const mapStateToProps = (state) => {
      if(state.dialogs.dialogs && state.dialogs.dialogs[name]) {
        const { isOpen, payload } = state.dialogs.dialogs[name];
        return { isOpen, payload };
      }
      return { isOpen: false };
    };

    const mapDispatchToProps = (dispatch) => ({
      onAfterOpen: () => {
        onAfterOpen();
      },

      onRequestClose: (event) => {
        onRequestClose(event);
        dispatch(closeDialog(name))
      }
    })

    return connect(mapStateToProps, mapDispatchToProps)(ReduxDialog);

  });
}

export default reduxDialog;
