import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginLeft: "-15px",
    marginTop: "15px",
  },
}));

const PersonalBets = () => {
  const classes = useStyles();
  return <p className={classes.root}>Please login to view</p>;
};

export default PersonalBets;
