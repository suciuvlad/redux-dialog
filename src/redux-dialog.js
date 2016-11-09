import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { closeDialog } from './actions';

const reduxDialog = (defaults) => {

  const {
    name,
    onAfterOpen = () => {},
    onRequestClose = () => {}
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
