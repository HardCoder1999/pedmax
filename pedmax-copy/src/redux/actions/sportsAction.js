const requestListOfSports = () => {
  return {
    type: "LIST_OF_SPORTS",
  };
};

const requestListOfSportsSuccess = (data) => {
  return {
    type: "LIST_OF_SPORTS_SUCCEEDED",
    data: data,
  };
};

const requestListOfSportsError = () => {
  return {
    type: "LIST_OF_SPORTS_FAILED",
  };
};

const fetchListOfSports = () => {
  return { type: "FETCH_LIST_OF_SPORTS" };
};

export {
  requestListOfSports,
  requestListOfSportsSuccess,
  requestListOfSportsError,
  fetchListOfSports,
};
