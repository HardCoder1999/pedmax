import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  requestListOfUpcomingMatches,
  requestListOfUpcomingMatchesSuccess,
  requestListOfUpcomingMatchesError,
} from "../actions/upcomingMatchesListAction";

import { upcomingMatchesListUrl } from "../../utils/urls";

function* watchListOfUpcomingMatches() {
  yield takeEvery(
    "FETCH_LIST_OF_UPCOMING_MATCHES",
    fetchListOfUpcomingMatchesAsync
  );
}

function* fetchListOfUpcomingMatchesAsync(action) {
  try {
    yield put(requestListOfUpcomingMatches());
    const data = yield call(() => {
      return axios
        .get(`${upcomingMatchesListUrl}&sport_id=${action.sport_id}`)
        .then((res) => res.data);
    });
    yield put(requestListOfUpcomingMatchesSuccess(data));
  } catch (error) {
    yield put(requestListOfUpcomingMatchesError());
  }
}

export default watchListOfUpcomingMatches;
