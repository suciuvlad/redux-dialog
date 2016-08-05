import React, { Component } from 'react';
import { connect } from 'react-redux'
import Dialog from './dialog'
import { closeDialog } from './actions';

const reduxDialog = ({ name, onClose, onOpen }) => {

  return((WrappedComponent) => {
    class ReduxDialog extends Component {
      render () {
        return (
          <Dialog {...this.props}>
            <WrappedComponent {...this.props} />
          </Dialog>
        );
      }
    }

    const mapStateToProps = (state) => {
      return { isOpen: (state.dialogs.dialogs &&
        state.dialogs.dialogs[name] &&
        state.dialogs.dialogs[name].isOpen) || false }
    }

    const mapDispatchToProps = (dispatch) => {
      return {
        onClose: () => {
          dispatch(closeDialog(name))
          onClose();
        },

        onOpen: () => {
          onOpen();
        }
      }
    }

    return connect(mapStateToProps, mapDispatchToProps)(ReduxDialog);

  });
}

export default reduxDialog;
