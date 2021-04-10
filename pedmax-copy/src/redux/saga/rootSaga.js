import { all } from "redux-saga/effects";
import watchListOfSports from "./sportsSaga";
import watchListOfCountries from "./countriesSaga";
import watchListOfTournaments from "./tournamentsSaga";
import watchListOfUpcomingMatches from "./upcomingMatchesListSaga";
import watchListOfLiveMatches from "./liveMatchesSaga";
import watchUpcomingMatches from './upcomingMatchesSaga';
import watchOddsData from "./oddsDataSaga";

function* rootSaga() {
  yield all([
    watchListOfSports(),
    watchListOfCountries(),
    watchListOfTournaments(),
    watchListOfLiveMatches(),
    watchListOfUpcomingMatches(),
    watchUpcomingMatches(),
    watchOddsData(),
  ]);
}

export { rootSaga };
