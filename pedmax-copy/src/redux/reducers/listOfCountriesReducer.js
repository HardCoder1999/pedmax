const initialState = {
  loading: true,
  error: false,
  data: {
    countries: [],
    id: [],
  },
};

const listOfCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_OF_COUNTRIES":
      return {
        loading: true,
        data: {
          countries: [],
          id: [],
        },
        error: false,
      };

    case "LIST_OF_COUNTRIES_SUCCEEDED":
      return {
        loading: false,
        data: {
          countries: [...state.data.countries, action.data],
          id: [...state.data.id, action.id],
        },
        error: false,
      };

    case "LIST_OF_COUNTRIES_FAILED":
      return {
        loading: false,
        data: {
          countries: [],
          id: [],
        },
        error: true,
      };

    default:
      return state;
  }
};

export default listOfCountriesReducer;
