import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  requestListOfCountries,
  requestListOfCountriesSuccess,
  requestListOfCountriesError,
} from "../actions/listOfCountriesAction";

import { countryListUrl } from '../../utils/urls';

function* watchListOfCountries(action) {
  yield takeEvery("FETCH_LIST_OF_COUNTRIES", fetchListOfCountriesAsync);
}

function* fetchListOfCountriesAsync(action) {
  try {
    yield put(requestListOfCountries());
    const data = yield call(() => {
      return axios
        .get(`${countryListUrl}?sport_id=${action.sport_id}`)
        .then((res) => res.data.countries);
    });
    yield put(requestListOfCountriesSuccess(data));
  } catch (error) {
    yield put(requestListOfCountriesError());
  }
}

export default watchListOfCountries;
