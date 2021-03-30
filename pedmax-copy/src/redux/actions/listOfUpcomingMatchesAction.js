const requestListOfUpcomingMatches = () => {
  return {
    type: "LIST_OF_UPCOMING_MATCHES",
  };
};

const requestListOfUpcomingMatchesSuccess = (data) => {
  return {
    type: "LIST_OF_UPCOMING_MATCHES_SUCCEEDED",
    data: data,
  };
};

const requestListOfUpcomingMatchesError = () => {
  return {
    type: "LIST_OF_UPCOMING_MATCHES_FAILED",
  };
};

const fetchListOfUpcomingMatches = () => {
  return { type: "FETCH_LIST_OF_UPCOMING_MATCHES" };
};

export {
  requestListOfUpcomingMatches,
  requestListOfUpcomingMatchesSuccess,
  requestListOfUpcomingMatchesError,
  fetchListOfUpcomingMatches,
};
