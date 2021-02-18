import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  userrr: usersReducer,
});

export default rootReducer;
