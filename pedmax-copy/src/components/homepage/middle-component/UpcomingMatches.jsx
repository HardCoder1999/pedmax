import React from "react";
import UpcomingCarousel from "./UpcomingCarousel";
import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";
import UpcomingAccordion from "./UpcomingAccordion";
import { useSelector } from 'react-redux';


// const useStyles = makeStyles((theme) => ({
//   carousel: {
//     flexGrow: 0,
//     width: "200%",
//     marginLeft: "-100px",
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

const UpcomingMatches = () => {
  const sport_id = useSelector(state=>state.sport_id_get_set.upcoming_sport_id);
  // const classes = useStyles();
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
