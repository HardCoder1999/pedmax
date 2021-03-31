import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { groupBy } from "../../../utils/utilityFunctions";
import LiveMatches from "./LiveMatches";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMatches } from "../../../redux/actions/upcomingMatchesAction";

const SelectedLeague = () => {
  const { tournament_id } = useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUpcomingMatches(tournament_id));
  }, [dispatch, tournament_id]);

  const upcomingData = useSelector(
    (state) => state.upcoming_matches.data
  );

  console.log(upcomingData);
  return (
    <>
      <Grid container xs={8} direction="column">
        <LiveMatches />
        <h3 className={"status-titles"} >Upcoming</h3>
        
      </Grid>
    </>
  );
};

export default SelectedLeague;
