import { all } from "redux-saga/effects";
import watchListOfSports from "./listOfSportsSaga";
import watchListOfCountries from "./listOfCountriesSaga";

function* rootSaga() {
  yield all([watchListOfSports(), watchListOfCountries()]);
}

export { rootSaga };
