import { combineReducers } from "redux";
import listOfSportsReducer from "./listOfSportsReducer";
import listOfCountriesReducer from "./listOfCountriesReducer";

const rootReducer = combineReducers({
  list_of_sports: listOfSportsReducer,
  list_of_countries: listOfCountriesReducer,
});

export default rootReducer;
