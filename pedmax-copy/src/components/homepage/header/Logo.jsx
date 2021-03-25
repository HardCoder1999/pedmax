import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

// Variables
import logo from "../../../images/logo.svg";

const LiveBets = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        item
        xs={3}
        justify="flex-start"
        className="text-left"
      >
        <NavLink to="/">
          <img id="" alt="" src={logo} class="" width="" height="" />
        </NavLink>
      </Grid>
    </>
  );
};

export default LiveBets;
