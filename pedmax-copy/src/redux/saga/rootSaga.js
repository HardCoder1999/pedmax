import { all } from "redux-saga/effects";
import watchListOfSports from "./listOfSportsSaga";
import watchListOfCountries from "./listOfCountriesSaga";
import watchListOfTournaments from "./listOfTournamentsSaga";
import watchListOfUpcomingMatches from "./listOfUpcomingMatchesSaga";
import watchListOfLiveMatches from "./listOfLiveMatchesSaga";
import watchUpcomingMatches from './upcomingMatchesSaga';

function* rootSaga() {
  yield all([
    watchListOfSports(),
    watchListOfCountries(),
    watchListOfTournaments(),
    watchListOfLiveMatches(),
    watchListOfUpcomingMatches(),
    watchUpcomingMatches(),
  ]);
}

export { rootSaga };
