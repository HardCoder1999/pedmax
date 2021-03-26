const initialState = {
  loading: true,
  error: false,
  data: [],
};

const listOfSportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_OF_SPORTS":
      return {
        loading: true,
        data: [],
        error: false,
      };

    case "LIST_OF_SPORTS_SUCCEEDED":
      return {
        loading: false,
        data: action.data,
        error: false,
      };

    case "LIST_OF_SPORTS_FAILED":
      return {
        loading: false,
        data: [],
        error: true,
      };

    default:
      return state;
  }
};

export default listOfSportsReducer;
