import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  requestListOfTournaments,
  requestListOfTournamentsSuccess,
  requestListOfTournamentsError,
} from "../actions/tournamentsAction";

import { tournamentListUrl } from '../../utils/urls';


function* watchListOfTournaments(action) {
  yield takeEvery("FETCH_LIST_OF_TOURNAMENTS", fetchListOfTournamentsAsync);
}

function* fetchListOfTournamentsAsync(action) {
  try {
    yield put(requestListOfTournaments());
    const data = yield call(() => {
      return axios
        .get(
          `${tournamentListUrl}?country_id=${action.country_id}&sport_id=${action.sport_id}`
        )
        .then((res) => res.data.tournaments);
    });
    yield put(requestListOfTournamentsSuccess(data));
  } catch (error) {
    yield put(requestListOfTournamentsError());
  }
}

export default watchListOfTournaments;
