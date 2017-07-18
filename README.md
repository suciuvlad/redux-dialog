[![NPM](https://img.shields.io/npm/v/redux-dialog.svg)](https://www.npmjs.com/package/redux-dialog)
# redux-dialog

A Higher Order Component using react-redux to keep dialog state in a Redux store

## Using in your project

The easiest way to use redux-dialog is to install it from NPM and include it in your own React build process

```yarn add --save redux-dialog```

## Usage

The first step is to combine the redux-dialog reducer with your own application reducers

### Step 1
```js
import { createStore, combineReducers } from 'redux';
import { dialogReducer } from 'redux-dialog';
const reducers = {
  // Other reducers here
  dialogs: dialogReducer
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
  name: 'Sign up dialog' // unique name - you can't have two dialogs with the same name (will be used as aria-label as well)
})(BasicDialog);
```

### Step 3

Use redux-dialog's actions to show and hide the dialog
```js
import { openDialog, closeDialog } from 'redux-dialog';
const MyComponent = () => (
  <a href="#" onClick={() => dispatch(openDialog('Sign up dialog'))}></a>
)
```

## Options

The reduxDialog method only requires the name property to work. The rest of the optional properties can be Any valid [react-modal options](https://reactcommunity.org/react-modal/).
#### `name`: string
A unique id for this dialog

### Passing a payload to the modal

When dispatching the action to open the dialog, adding a payload as the second parameter to `openDialog` will be available within the dialog as the `payload` property.
```js
dispatch(openDialog('accountDialog', { accountName: 'My Account' }));

const BasicDialog = ({ payload }) => (
  <div>
    {payload.accountName}
  </div>
  <div>
    My awesome modalbox!
  </div>
)
```


## Working on the source code

Clone this repo then run:
```javascript
yarn install
yarn start
```

Then open http://localhost:8080 to see a working example.

## Building a release

`yarn build` should do the trick.

## Tests
Work in progress
