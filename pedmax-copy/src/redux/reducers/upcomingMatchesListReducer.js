const initialState = {
  loading: true,
  error: false,
  data: [],
};

const listOfUpcomingMatchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_OF_UPCOMING_MATCHES":
      return {
        loading: true,
        data: [],
        error: false,
      };

    case "LIST_OF_UPCOMING_MATCHES_SUCCEEDED":
      return {
        loading: false,
        data: action.data,
        error: false,
      };

    case "LIST_OF_UPCOMING_MATCHES_FAILED":
      return {
        loading: false,
        data: [],
        error: true,
      };

    default:
      return state;
  }
};

export default listOfUpcomingMatchesReducer;
