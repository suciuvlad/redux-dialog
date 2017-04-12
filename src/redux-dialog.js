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
      const reducer = typeof state.get === 'function' ? state.get('dialogReducer') : state.dialogReducer;

      if (reducer.dialogs && reducer.dialogs.hasOwnProperty(name)) return { isOpen: true };

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
