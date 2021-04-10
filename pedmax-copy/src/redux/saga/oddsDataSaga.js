import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  requestOddsData,
  requestOddsDataSuccess,
  requestOddsDataError,
} from "../actions/oddsDataAction";

import { oddsUrl } from '../../utils/urls';

function* watchOddsData(action) {
  yield takeEvery("FETCH_ODDS_DATA", fetchOddsDataAsync);
}

function* fetchOddsDataAsync(action) {
  try {
    yield put(requestOddsData());
    const data = yield call(() => {
      return axios
        .get(`${oddsUrl}/${action.match_id}`)
        .then((res) => res.data);
    });
    yield put(requestOddsDataSuccess(data));
  } catch (error) {
    yield put(requestOddsDataError());
  }
}

export default watchOddsData;
