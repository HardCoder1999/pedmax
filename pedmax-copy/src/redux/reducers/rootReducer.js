import { combineReducers } from "redux";
import listOfSportsReducer from "./sportsReducer";
import listOfCountriesReducer from "./countriesReducer";
import listOfTournamentsReducer from "./tournamentsReducer";
import listOfUpcomingMatchesReducer from "./upcomingMatchesListReducer";
import listOfLiveMatchesReducer from "./liveMatchesReducer";
import sportIdGetSetReducer from "./sportIdGetSetReducer";
import upcomingMatchesReducer from "./upcomingMatchesReducer";
import betsReducer from "./betsReducer";
import oddsDataReducer from "./oddsDataReducer";

const rootReducer = combineReducers({
  list_of_sports: listOfSportsReducer,
  list_of_countries: listOfCountriesReducer,
  list_of_tournaments: listOfTournamentsReducer,
  list_of_upcoming_matches: listOfUpcomingMatchesReducer,
  list_of_live_matches: listOfLiveMatchesReducer,
  sport_id_get_set: sportIdGetSetReducer,
  upcoming_matches: upcomingMatchesReducer,
  bets: betsReducer,
  odds_data: oddsDataReducer,
});

export default rootReducer;
