import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SingleBet from "./SingleBet";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    width: "90%",
    height: "200px",
    marginLeft: "-10px",
    backgroundColor: theme.palette.background.paper,
    marginTop: "15px",
    color: "black",
  },
}));

const BetArea = () => {
  const classes = useStyles();
  return (
    <>
      <SingleBet />
      <div className={classes.root}>
        <Box display="flex" p={1} bgcolor="background.paper">
          {"This is the bet area."}
        </Box>
      </div>
    </>
  );
};

export default BetArea;
