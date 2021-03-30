const requestListOfLiveMatches = () => {
  return {
    type: "LIST_OF_LIVE_MATCHES",
  };
};

const requestListOfLiveMatchesSuccess = (data) => {
  return {
    type: "LIST_OF_LIVE_MATCHES_SUCCEEDED",
    data: data,
  };
};

const requestListOfLiveMatchesError = () => {
  return {
    type: "LIST_OF_LIVE_MATCHES_FAILED",
  };
};

const fetchListOfLiveMatches = () => {
  return { type: "FETCH_LIST_OF_LIVE_MATCHES" };
};

export {
  requestListOfLiveMatches,
  requestListOfLiveMatchesSuccess,
  requestListOfLiveMatchesError,
  fetchListOfLiveMatches,
};
