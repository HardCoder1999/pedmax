const initialState = {
  loading: true,
  error: false,
  data: [],
};

const oddsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ODDS_DATA":
      return {
        loading: true,
        data: [],
        error: false,
      };

    case "ODDS_DATA_SUCCEEDED":
      return {
        loading: false,
        data: action.data,
        error: false,
      };

    case "ODDS_DATA_FAILED":
      return {
        loading: false,
        data: [],
        error: true,
      };

    default:
      return state;
  }
};

export default oddsDataReducer;
