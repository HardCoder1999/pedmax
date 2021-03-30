import { all } from "redux-saga/effects";
import watchListOfSports from "./listOfSportsSaga";
import watchListOfCountries from "./listOfCountriesSaga";
import watchListOfTournaments from "./listOfTournamentsSaga";
import watchListOfUpcomingMatches from "./listOfUpcomingMatchesSaga";
import watchListOfLiveMatches from "./listOfLiveMatchesSaga";

function* rootSaga() {
  yield all([
    watchListOfSports(),
    watchListOfCountries(),
    watchListOfTournaments(),
    watchListOfLiveMatches(),
    watchListOfUpcomingMatches(),
  ]);
}

export { rootSaga };
