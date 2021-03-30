const requestListOfCountries = () => {
  return {
    type: "LIST_OF_COUNTRIES",
  };
};

const requestListOfCountriesSuccess = (data) => {
  return {
    type: "LIST_OF_COUNTRIES_SUCCEEDED",
    data: data,
  };
};

const requestListOfCountriesError = () => {
  return {
    type: "LIST_OF_COUNTRIES_FAILED",
  };
};

const fetchListOfCountries = (sport_id) => {
  return {
    type: "FETCH_LIST_OF_COUNTRIES",
    sport_id: sport_id,
  };
};

export {
  requestListOfCountries,
  requestListOfCountriesSuccess,
  requestListOfCountriesError,
  fetchListOfCountries,
};
