import { FETCH_AIR_QUALITY_DATA_REQUEST, FETCH_AIR_QUALITY_DATA_SUCCESS, FETCH_AIR_QUALITY_DATA_FAIL } from '../actions/types';

const INITIAL_STATE = {
  is_fetching: false,
  data: [],
  error_msg: null
};

const airDataReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_AIR_QUALITY_DATA_REQUEST:
      return {
        ...state,
        is_fetching: payload,
        data: [],
        error_msg: null
      };
    case FETCH_AIR_QUALITY_DATA_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        data: payload,
        error_msg: null
      };
    case FETCH_AIR_QUALITY_DATA_FAIL:
      return {
        ...state,
        is_fetching: false,
        data: [],
        error_msg: payload
      };
    default:
      return state;
  }
};

export default airDataReducer;