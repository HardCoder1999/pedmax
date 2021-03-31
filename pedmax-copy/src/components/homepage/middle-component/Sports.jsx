import React from "react";
import Grid from "@material-ui/core/Grid";
import UpcomingMatches from "./UpcomingMatches";

import SelectedSport from "./SelectedSport";

const Sports = ({ match }) => {
  return (
    <>
      <Grid container xs={8} direction="column">
        {!match.params.sport_id ? (
          <>
            <h3 className={"status-titles"}>Sports</h3>
            <UpcomingMatches />
          </>
        ) : (
          <>
            <SelectedSport sport_id={match.params.sport_id} />
          </>
        )}
      </Grid>
    </>
  );
};

export default Sports;
