[![NPM](https://img.shields.io/npm/v/redux-dialog-extended.svg)](https://www.npmjs.com/package/redux-dialog-extended)
# redux-dialog-extended

A Higher Order Component using react-redux to keep dialog state in a Redux store.

This package was forked from [redux-dialog](https://github.com/suciuvlad/redux-dialog).

## Using in your project

The easiest way to use redux-dialog-extended is to install it from NPM and include it in your own React build process

```
npm install --save redux-dialog-extended
```

or use yarn

```
yarn add --save redux-dialog-extended
```

## Usage

The first step is to combine the redux-dialog-extended reducer with your own application reducers

### Step 1
```js
import { createStore, combineReducers } from 'redux';
import { dialogReducer } from 'redux-dialog-extended';
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
import reduxDialog from 'redux-dialog-extended';

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

Use redux-dialog-extended's actions to show and hide the dialog
```js
import { openDialog, closeDialog } from 'redux-dialog-extended';
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
