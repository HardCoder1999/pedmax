import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  requestListOfTournaments,
  requestListOfTournamentsSuccess,
  requestListOfTournamentsError,
} from "../actions/listOfTournamentsAction";

const TournamentsListUrl =
  "http://3.12.44.37/api/v1/tournaments?country_id=4&sport_id=10";

function* watchListOfTournaments(action) {
  yield takeEvery("FETCH_LIST_OF_TOURNAMENTS", fetchListOfTournamentsAsync);
}

function* fetchListOfTournamentsAsync(action) {
  try {
    yield put(requestListOfTournaments());
    const data = yield call(() => {
      return axios
        .get(
          `${TournamentsListUrl}?country_id=${action.coutry_id}&sport_id=${action.sport_id}`
        )
        .then((res) => res.data.tournaments);
    });
    yield put(requestListOfTournamentsSuccess(data));
  } catch (error) {
    yield put(requestListOfTournamentsError());
  }
}

export default watchListOfTournaments;
