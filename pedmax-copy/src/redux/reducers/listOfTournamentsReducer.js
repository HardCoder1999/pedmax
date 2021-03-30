const initialState = {
  loading: true,
  error: false,
  data: [],
};

const listOfTournamentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_OF_TOURNAMENTS":
      return {
        loading: true,
        data: [],
        error: false,
      };

    case "LIST_OF_TOURNAMENTS_SUCCEEDED":
      return {
        loading: false,
        data: action.data,
        error: false,
      };

    case "LIST_OF_TOURNAMENTS_FAILED":
      return {
        loading: false,
        data: [],
        error: true,
      };

    default:
      return state;
  }
};

export default listOfTournamentsReducer;
