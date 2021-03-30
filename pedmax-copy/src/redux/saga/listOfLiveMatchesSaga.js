import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  requestListOfLiveMatches,
  requestListOfLiveMatchesSuccess,
  requestListOfLiveMatchesError,
} from "../actions/listOfLiveMatchesAction";

const liveMatchesListUrl = "https://api.pedmax.com/api/v1/matches?scope=live";

function* watchListOfLiveMatches() {
  yield takeEvery("FETCH_LIST_OF_LIVE_MATCHES", fetchListOfLiveMatchesAsync);
}

function* fetchListOfLiveMatchesAsync() {
  try {
    yield put(requestListOfLiveMatches());
    const data = yield call(() => {
      return axios.get(liveMatchesListUrl).then((res) => res.data);
    });
    yield put(requestListOfLiveMatchesSuccess(data));
  } catch (error) {
    yield put(requestListOfLiveMatchesError());
  }
}

export default watchListOfLiveMatches;
