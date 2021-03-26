import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  requestListOfSports,
  requestListOfSportsSuccess,
  requestListOfSportsError,
} from "../actions/listOfSportsAction";

const sportsListUrl = "http://3.12.44.37/api/v1/sports";

function* watchListOfSports() {
  yield takeEvery("FETCH_LIST_OF_SPORTS", fetchListOfSportsAsync);
}

function* fetchListOfSportsAsync() {
  try {
    yield put(requestListOfSports());
    const data = yield call(() => {
      return axios.get(sportsListUrl).then((res) => res.data.sports);
    });
    yield put(requestListOfSportsSuccess(data));
  } catch (error) {
    yield put(requestListOfSportsError());
  }
}

export default watchListOfSports;
