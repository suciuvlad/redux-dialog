import reduxDialog from './redux-dialog';
import dialogReducer from './reducer';
import { openDialog, closeDialog, closeAllDialogs } from './actions';

export default reduxDialog;
export { dialogReducer, openDialog, closeDialog, closeAllDialogs };
