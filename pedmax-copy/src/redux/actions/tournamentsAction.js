const requestListOfTournaments = () => {
  return {
    type: "LIST_OF_TOURNAMENTS",
  };
};

const requestListOfTournamentsSuccess = (data) => {
  return {
    type: "LIST_OF_TOURNAMENTS_SUCCEEDED",
    data: data,
  };
};

const requestListOfTournamentsError = () => {
  return {
    type: "LIST_OF_TOURNAMENTS_FAILED",
  };
};

const fetchListOfTournaments = (sport_id, country_id) => {
  return {
    type: "FETCH_LIST_OF_TOURNAMENTS",
    sport_id: sport_id,
    country_id: country_id,
  };
};

export {
  requestListOfTournaments,
  requestListOfTournamentsSuccess,
  requestListOfTournamentsError,
  fetchListOfTournaments,
};
