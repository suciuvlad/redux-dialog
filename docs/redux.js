import React from 'react';
import { dialogReducer } from '../src';
import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';

const reducers = {
  dialogReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default ({ children }) => <Provider store={store}>{children}</Provider>;
