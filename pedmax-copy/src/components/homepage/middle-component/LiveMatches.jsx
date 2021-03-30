import React from "react";
import ScrollableTabsButtonAuto from "./ScrollableTabs";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 0,
    width: "135%",
    marginLeft: "-100px",
    backgroundColor: theme.palette.background.paper,
    marginTop: "15px",
    color: "black",
  },
}));

const LiveMatches = () => {
  const classes = useStyles();
  return (
    <>
      <ScrollableTabsButtonAuto />
      <div className={classes.root}>
        <Box display="flex" p={1} bgcolor="background.paper">
          {"I'm a flexbox container!"}
        </Box>
      </div>
    </>
  );
};

export default LiveMatches;
