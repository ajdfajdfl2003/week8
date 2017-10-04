import {combineReducers} from 'redux';
import currentUser from './currentUser';

const index = combineReducers({
  currentUser,
});

export default index;