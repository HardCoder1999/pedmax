const upcomingMatches = () => {
  return {
    type: "UPCOMING_MATCHES",
  };
};

const upcomingMatchesSuccess = (data) => {
  return {
    type: "UPCOMING_MATCHES_SUCCEEDED",
    data: data,
  };
};

const upcomingMatchesError = () => {
  return {
    type: "UPCOMING_MATCHES_FAILED",
  };
};

const fetchUpcomingMatches = (tournament_id) => {
  return {
    type: "FETCH_UPCOMING_MATCHES",
    tournament_id: tournament_id,
  };
};

export {
  upcomingMatches,
  upcomingMatchesSuccess,
  upcomingMatchesError,
  fetchUpcomingMatches,
};
