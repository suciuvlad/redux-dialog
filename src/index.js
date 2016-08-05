import reduxDialog from './redux-dialog';
import Dialog from './dialog';
import dialogReducer from './reducer';
import { openDialog, closeDialog } from './actions';

export default reduxDialog;
export { Dialog, dialogReducer, openDialog, closeDialog };
