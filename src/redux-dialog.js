import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { closeDialog } from './actions';

const reduxDialog = (dialogProps) => {

  const {
    name,
    onAfterOpen = () => {},
    onRequestClose = () => {}
  } = dialogProps;

  return((WrappedComponent) => {
    class ReduxDialog extends Component {
      render () {
        return (
          <Modal {...dialogProps} {...this.props}>
            <WrappedComponent {...this.props} />
          </Modal>
        );
      }
    }

    const mapStateToProps = (state) => ({
      isOpen: (state.dialogs.dialogs
        && state.dialogs.dialogs[name]
        && state.dialogs.dialogs[name].isOpen) || false
    })

    const mapDispatchToProps = (dispatch) => ({
      onAfterOpen: () => {
        onAfterOpen();
      },

      onRequestClose: () => {
        onRequestClose();
        dispatch(closeDialog(name))
      }
    })

    return connect(mapStateToProps, mapDispatchToProps)(ReduxDialog);

  });
}

export default reduxDialog;
