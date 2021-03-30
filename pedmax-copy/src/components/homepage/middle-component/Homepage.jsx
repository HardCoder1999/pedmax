import React from "react";
import Grid from "@material-ui/core/Grid";
import UpcomingMatches from "./UpcomingMatches";
import LiveMatches from "./LiveMatches";

const Homepage = () => {
  return (
    <>
      <Grid container xs={8} direction="column">
        <h2 className={"status-titles"}>Live</h2>
        <LiveMatches />
        <h2 className={"status-titles"}>Upcoming</h2>
        <UpcomingMatches />
      </Grid>
    </>
  );
};

export default Homepage;
