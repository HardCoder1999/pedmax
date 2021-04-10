import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  requestListOfSports,
  requestListOfSportsSuccess,
  requestListOfSportsError,
} from "../actions/sportsAction";

import { sportListUrl } from '../../utils/urls';

function* watchListOfSports() {
  yield takeEvery("FETCH_LIST_OF_SPORTS", fetchListOfSportsAsync);
}

function* fetchListOfSportsAsync() {
  try {
    yield put(requestListOfSports());
    const data = yield call(() => {
      return axios.get(sportListUrl).then((res) => res.data.sports);
    });
    yield put(requestListOfSportsSuccess(data));
  } catch (error) {
    yield put(requestListOfSportsError());
  }
}

export default watchListOfSports;
