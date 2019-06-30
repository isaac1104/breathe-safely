import axios from 'axios';
import { FETCH_AIR_QUALITY_DATA_REQUEST, FETCH_AIR_QUALITY_DATA_SUCCESS, FETCH_AIR_QUALITY_DATA_FAIL } from './types';

const fetchDataRequest = ({ type, payload }) => ({
  type, payload
});

const fetchDataSuccess = ({ type, payload }) => ({
  type, payload
});

const fetchDataFail = ({ type, payload }) => ({
  type, payload
});

export const fetchAirQualityData = () => async dispatch => {
  dispatch(fetchDataRequest({ type: FETCH_AIR_QUALITY_DATA_REQUEST, payload: true }));
  try {
    const request = await axios.get('/api/data');
    const { data } = request;
    dispatch(fetchDataSuccess({ type: FETCH_AIR_QUALITY_DATA_SUCCESS, payload: data }));
  } catch (error) {
    dispatch(fetchDataFail({ type: FETCH_AIR_QUALITY_DATA_FAIL, payload: error }));
  }
};