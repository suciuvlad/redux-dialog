import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import FlexDialog from 'flex.dialog';
import $ from 'jquery';

class Dialog extends Component {
  render() {
    return null;
  }

  componentDidMount() {
    var self = this;

    this.portal = document.createElement('div');
    document.body.appendChild(this.portal);

    $(this.portal).addClass(classNames('dlg', this.props.className));

    this.dialog = $(this.portal).dialog({
      autoOpen: this.props.isOpen,
      onShow: this.props.onOpen,
      onClose: this.props.onClose
    });

    this.renderContents(this.props);
  }

  renderContents(props) {
    ReactDOM.unstable_renderSubtreeIntoContainer(this, <div>{props.children}</div>, this.portal);

    if (props.isOpen) {
      this.dialog.dialog('show');
    } else {
      this.dialog.dialog('close');
    }
  }

  componentWillReceiveProps(props) {
    this.renderContents(props);
  }

  componentWillUnmount() {
    this.dialog.dialog('destroy');
    ReactDOM.unmountComponentAtNode(this.portal);
    document.body.removeChild(this.portal);
  }
}

Dialog.getDefaultProps = {
  isOpen: false
};

export default Dialog;
