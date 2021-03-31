import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  requestListOfLiveMatches,
  requestListOfLiveMatchesSuccess,
  requestListOfLiveMatchesError,
} from "../actions/listOfLiveMatchesAction";

import { liveMatchesListUrl } from "../../utils/urls";

function* watchListOfLiveMatches() {
  yield takeEvery("FETCH_LIST_OF_LIVE_MATCHES", fetchListOfLiveMatchesAsync);
}

function* fetchListOfLiveMatchesAsync(action) {
  try {
    yield put(requestListOfLiveMatches());
    const data = yield call(() => {
      return axios.get(`${liveMatchesListUrl}&sport_id=${action.sport_id}`).then((res) => res.data);
    });
    yield put(requestListOfLiveMatchesSuccess(data));
  } catch (error) {
    yield put(requestListOfLiveMatchesError());
  }
}

export default watchListOfLiveMatches;
