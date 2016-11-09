[![NPM](https://img.shields.io/npm/v/redux-dialog.svg)](https://www.npmjs.com/package/redux-dialog)
# redux-dialog

A Higher Order Component using react-redux to keep dialog state in a Redux store

## Example

Clone this repo then run:
```javascript
npm install
npm start
```

## Install

The easiest way to use redux-dialog is to install it from NPM and include it in your own React build process

```npm install --save redux-dialog```

## Usage

The first step is to combine the redux-dialog reducer with your own application reducers

### Step 1
```js
import {createStore, combineReducers} from 'redux';
import { dialogReducer } from 'redux-dialog';
const reducers = {
  // Other reducers here
  dialogReducer: dialogReducer
}
const reducer = combineReducers(reducers);
const store = createStore(reducer);
```

### Step 2

Decorate your component with reduxDialog.
```js
import reduxDialog from 'redux-dialog';

const BasicDialog = () => (
  <div>
    My awesome modalbox!
  </div>
)

const Dialog = reduxDialog({
  name: 'signupDialog' // unique name - you can't have two dialogs with the same name
})(BasicDialog);
```

### Step 3

Use redux-dialog's actions to show and hide the dialog
```js
import { openDialog, closeDialog } from 'redux-dialog';
const MyComponent = () => (
  <a href="#" onClick={() => dispatch(openDialog('signupDialog'))}></a>
)
```

## Options

The reduxDialog method only requires the name property to work. The rest of the optional properties can be Any valid [react-modal options](https://reactcommunity.org/react-modal/).
#### `name`: string
A unique id for this dialog


## Tests
Work in progress
