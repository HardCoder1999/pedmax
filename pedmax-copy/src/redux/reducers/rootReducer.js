import { combineReducers } from "redux";
import listOfSportsReducer from "./listOfSportsReducer";
import listOfCountriesReducer from "./listOfCountriesReducer";
import listOfTournamentsReducer from "./listOfTournamentsReducer";
import listOfUpcomingMatchesReducer from "./listOfUpcomingMatchesReducer";
import listOfLiveMatchesReducer from "./listOfLiveMatchesReducer";
import sportIdGetSetReducer from "./sportIdGetSetReducer";
import upcomingMatchesReducer from "./upcomingMatchesReducer";

const rootReducer = combineReducers({
  list_of_sports: listOfSportsReducer,
  list_of_countries: listOfCountriesReducer,
  list_of_tournaments: listOfTournamentsReducer,
  list_of_upcoming_matches: listOfUpcomingMatchesReducer,
  list_of_live_matches: listOfLiveMatchesReducer,
  sport_id_get_set: sportIdGetSetReducer,
  upcoming_matches: upcomingMatchesReducer,
});

export default rootReducer;
