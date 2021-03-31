import React from "react";
import UpcomingCarousel from "./UpcomingCarousel";
import Grid from "@material-ui/core/Grid";
import UpcomingAccordion from "./UpcomingAccordion";
import { useSelector } from "react-redux";

const UpcomingMatches = () => {
  const sport_id = useSelector(
    (state) => state.sport_id_get_set.upcoming_sport_id
  );
  return (
    <>
      <Grid container direction="column">
        <UpcomingCarousel />
        <UpcomingAccordion sport_id={sport_id} />
      </Grid>
    </>
  );
};

export default UpcomingMatches;
