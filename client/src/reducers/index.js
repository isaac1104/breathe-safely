import { combineReducers } from 'redux';
import airDataReducer from './air_data_reducer';

const rootReducer = combineReducers({
  air_data: airDataReducer
});

export default rootReducer;
