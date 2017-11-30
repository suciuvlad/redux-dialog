/* eslint-env jest */

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import serializer from 'enzyme-to-json/serializer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import reduxDialog from '../redux-dialog';

const middlewares = []
const mockStore = configureStore(middlewares)

const BasicDialog = () => (
  <div>
    My awesome modalbox!
  </div>
)

BasicDialog.displayName = 'DialogComponent';

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(serializer);

describe('reduxDialog', () => {
  it('should have the dialog open', () => {
    const initialState = {
      dialogReducer: {
        dialogs: {
          dialog1: {
            isOpen: true
          }
        }
      }
    }

    const Dialog = reduxDialog({
      name: 'dialog1'
    })(BasicDialog);

    const wrapper = mount(
      <Provider store={ mockStore(initialState) }>
        <Dialog />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should have the dialog closed', () => {
    const initialState = {
      dialogReducer: {
        dialogs: { }
      }
    }

    const Dialog = reduxDialog({
      name: 'dialog1'
    })(BasicDialog);

    const wrapper = mount(
      <Provider store={ mockStore(initialState) }>
        <Dialog />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('it should have the dialog open if isOpen is set to true', () => {
    const initialState = {
      dialogReducer: {
        dialogs: {
        }
      }
    }

    const Dialog = reduxDialog({
      name: 'dialog1',
      isOpen: true
    })(BasicDialog);

    const wrapper = mount(
      <Provider store={ mockStore(initialState) }>
        <Dialog />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('state takes presedence over the default isOpen props', () => {
    const initialState = {
      dialogReducer: {
        dialogs: {
          dialog1: {
            isOpen: false
          }
        }
      }
    }

    const Dialog = reduxDialog({
      name: 'dialog1',
      isOpen: true
    })(BasicDialog);

    const wrapper = mount(
      <Provider store={ mockStore(initialState) }>
        <Dialog />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});