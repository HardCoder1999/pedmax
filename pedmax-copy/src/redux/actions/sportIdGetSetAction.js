const setLiveSportId = (sport_id) => {
  return {
    type: "SET_LIVE_SPORT_ID",
    sport_id: sport_id,
  };
};

const setUpcomingSportId = (sport_id) => {
  return {
    type: "SET_UPCOMING_SPORT_ID",
    sport_id: sport_id,
  };
};

export { setLiveSportId, setUpcomingSportId };