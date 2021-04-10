const initialState = {
  loading: true,
  error: false,
  data: [],
};

const listOfCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_OF_COUNTRIES":
      return {
        loading: true,
        data: [],
        error: false,
      };

    case "LIST_OF_COUNTRIES_SUCCEEDED":
      return {
        loading: false,
        data: action.data,
        error: false,
      };

    case "LIST_OF_COUNTRIES_FAILED":
      return {
        loading: false,
        data: [],
        error: true,
      };

    default:
      return state;
  }
};

export default listOfCountriesReducer;
