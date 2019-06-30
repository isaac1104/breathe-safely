import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import airDataReducer from './air_data_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  air_data: airDataReducer
});

export default rootReducer;
