import { combineReducers } from "redux";
import listOfSportsReducer from "./listOfSportsReducer";
import listOfCountriesReducer from "./listOfCountriesReducer";
import listOfTournamentsReducer from "./listOfTournamentsReducer";
import listOfUpcomingMatchesReducer from "./listOfUpcomingMatchesReducer";
import listOfLiveMatchesReducer from "./listOfLiveMatchesReducer";

const rootReducer = combineReducers({
  list_of_sports: listOfSportsReducer,
  list_of_countries: listOfCountriesReducer,
  list_of_tournaments: listOfTournamentsReducer,
  list_of_upcoming_matches: listOfUpcomingMatchesReducer,
  list_of_live_matches: listOfLiveMatchesReducer,
});

export default rootReducer;
