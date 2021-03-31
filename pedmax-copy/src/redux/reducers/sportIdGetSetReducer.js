const initialState = {
  live_sport_id: 4,
  upcoming_sport_id: 4,
};

const sportIdGetSetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIVE_SPORT_ID":
      return {
        live_sport_id: action.sport_id,
        upcoming_sport_id: state.upcoming_sport_id,
      };

    case "SET_UPCOMING_SPORT_ID":
      return {
        live_sport_id: state.live_sport_id,
        upcoming_sport_id: action.sport_id,
      };

    default:
      return state;
  }
};

export default sportIdGetSetReducer;
