import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  requestListOfUpcomingMatches,
  requestListOfUpcomingMatchesSuccess,
  requestListOfUpcomingMatchesError,
} from "../actions/listOfUpcomingMatchesAction";

const upcomingMatchesListUrl = "https://api.pedmax.com/api/v1/matches?scope=upcoming";

function* watchListOfUpcomingMatches() {
  yield takeEvery("FETCH_LIST_OF_UPCOMING_MATCHES", fetchListOfUpcomingMatchesAsync);
}

function* fetchListOfUpcomingMatchesAsync() {
  try {
    yield put(requestListOfUpcomingMatches());
    const data = yield call(() => {
      return axios.get(upcomingMatchesListUrl).then((res) => res.data);
    });
    yield put(requestListOfUpcomingMatchesSuccess(data));
  } catch (error) {
    yield put(requestListOfUpcomingMatchesError());
  }
}

export default watchListOfUpcomingMatches;
