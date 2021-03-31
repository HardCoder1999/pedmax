import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  upcomingMatches,
  upcomingMatchesSuccess,
  upcomingMatchesError,
} from "../actions/upcomingMatchesAction";

const tournamentUrl = "https://api.pedmax.com/api/v1/matches";
const restUrl = "&markets=false&statistics=false"

function* watchUpcomingMatches(action) {
  yield takeEvery("FETCH_LIST_OF_COUNTRIES", fetchUpcomingMatchesAsync);
}

function* fetchUpcomingMatchesAsync(action) {
  try {
    yield put(upcomingMatches());
    const data = yield call(() => {
      return axios
        .get(`${tournamentUrl}?tournament_id=${action.tournament_id}${restUrl}`)
        .then((res) => res.data.matches);
    });
    yield put(upcomingMatchesSuccess(data));
  } catch (error) {
    yield put(upcomingMatchesError());
  }
}

export default watchUpcomingMatches;
