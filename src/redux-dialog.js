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
          <Modal contentLabel={ name } { ...dialogProps } { ...this.props }>
            <WrappedComponent { ...this.props } />
          </Modal>
        );
      }
    }

    const mapStateToProps = (state) => {
      const reducer = typeof state.get === 'function'
        ? state.get('dialogReducer')
        : state.dialogReducer;

      if (reducer.dialogs && reducer.dialogs.hasOwnProperty(name)) {
        const { isOpen, payload } = reducer.dialogs[name];
        return { isOpen, payload };
      }

      return {
        payload: {}
      };
    };

    const mapDispatchToProps = (dispatch, props) => ({
      onRequestClose: () => {
        props.onRequestClose && props.onRequestClose();
        dispatch(closeDialog(name))
      }
    });

    return connect(mapStateToProps, mapDispatchToProps)(ReduxDialog);

  });
};

export default reduxDialog;
