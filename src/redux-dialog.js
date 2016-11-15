import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { closeDialog, openDialog } from './actions';

const reduxDialog = (defaults) => {

  const {
    name
  } = defaults;

  return((WrappedComponent) => {
    class ReduxDialog extends Component {
      render () {
        return (
          <Modal {...defaults} {...this.props}>
            <WrappedComponent {...this.props} />
          </Modal>
        );
      }
    }

    const mapStateToProps = (state, props) => {
      const {
        dialogReducer: { dialogs }
      } = state;

      if (dialogs && dialogs.hasOwnProperty(name)) {
        const { isOpen } = dialogs[name];
        if (isOpen !== undefined) return { isOpen };
      }

      return {};
    };

    const mapDispatchToProps = (dispatch, props) => ({
      onAfterOpen: () => {
        props.onAfterOpen && props.onAfterOpen();
        dispatch(openDialog(name))
      },

      onRequestClose: () => {
        props.onRequestClose && props.onRequestClose();
        dispatch(closeDialog(name))
      }
    })

    return connect(mapStateToProps, mapDispatchToProps)(ReduxDialog);

  });
}

export default reduxDialog;
