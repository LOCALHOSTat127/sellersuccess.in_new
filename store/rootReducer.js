import { combineReducers } from 'redux';
import globalReducer from './globalSettings';

const rootReducer = combineReducers({
  global: globalReducer,
});

export default rootReducer;
