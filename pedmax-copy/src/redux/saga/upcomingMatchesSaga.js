import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  upcomingMatches,
  upcomingMatchesSuccess,
  upcomingMatchesError,
} from "../actions/upcomingMatchesAction";

import { tournamentUrl, restTournamentUrl } from "../../utils/urls";


function* watchUpcomingMatches(action) {
  yield takeEvery("FETCH_UPCOMING_MATCHES", fetchUpcomingMatchesAsync);
}

function* fetchUpcomingMatchesAsync(action) {
  try {
    yield put(upcomingMatches());
    const data = yield call(() => {
      return axios
        .get(`${tournamentUrl}?tournament_id=${action.tournament_id}${restTournamentUrl}`)
        .then((res) => res.data.matches);
    });
    yield put(upcomingMatchesSuccess(data));
  } catch (error) {
    yield put(upcomingMatchesError());
  }
}

export default watchUpcomingMatches;
