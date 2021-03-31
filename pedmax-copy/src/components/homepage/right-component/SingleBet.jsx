import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    width: "90%",
    height: "250px",
    marginLeft: "-10px",
    backgroundColor: theme.palette.background.paper,
    marginTop: "15px",
    color: "black",
  },
}));

const SingleBet = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Box
          display="flex"
          flexDirection="row"
          p={-1}
          m={1}
          bgcolor="background.paper"
        >
          <p>league</p> &nbsp; &nbsp;
          <p>status</p> &nbsp; &nbsp;
          <p>delete</p> &nbsp; &nbsp;
        </Box>
        <Box display="inline" p={0} bgcolor="background.paper">
          <p>participant name</p>
          <p>1X2</p>
        </Box>
        <Divider />
        <p>
          {1} {"value"}
        </p>
        <input size="4" /> <p>output</p>
      </div>
  );
};

export default SingleBet;
