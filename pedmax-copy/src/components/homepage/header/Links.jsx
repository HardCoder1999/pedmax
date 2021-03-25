import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

// Variables
import home from "../../../images/home.svg";
import sports from "../../../images/sports.png";
import bets from "../../../images/bets.svg";

const Links = () => {
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
        <Grid item>
          <NavLink
            to="/"
            style={{ paddingLeft: 15, color: "white" }}
          >
            <img id="" alt="" src={home} width="" height="" />
            Home
          </NavLink>
        </Grid>

        <Grid item>
          <NavLink
            to="/sports"
            style={{ paddingLeft: 15, color: "white" }}
          >
            <img id="" alt="" src={sports} width="" height="" />
            Sports
          </NavLink>
        </Grid>

        <Grid item>
          <NavLink
            to="/live-bets"
            style={{ paddingLeft: 15, color: "white" }}
          >
            <img id="" alt="" src={bets} width="" height="" />
            Live Bets
          </NavLink>
        </Grid>
      </Grid>
    </>
  );
};

export default Links;
