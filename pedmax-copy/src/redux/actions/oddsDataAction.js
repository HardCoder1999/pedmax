const requestOddsData = () => {
  return {
    type: "ODDS_DATA",
  };
};

const requestOddsDataSuccess = (data) => {
  return {
    type: "ODDS_DATA_SUCCEEDED",
    data: data,
  };
};

const requestOddsDataError = () => {
  return {
    type: "ODDS_DATA_FAILED",
  };
};

const fetchOddsData = (match_id) => {
  return {
    type: "FETCH_ODDS_DATA",
    match_id: match_id,
  };
};

export {
  requestOddsData,
  requestOddsDataSuccess,
  requestOddsDataError,
  fetchOddsData,
};
