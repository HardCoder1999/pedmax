import React from "react";
import Grid from "@material-ui/core/Grid";
import Logo from "./Logo";
import Links from "./Links";
import LoginRegisterButtons from "./LoginRegisterButtons";

const Header = () => {
  return (
    <>
      <header
        style={{ backgroundColor: "#282837", paddingTop: 6, paddingLeft: 50 }}
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Logo />
          <Links />
          <LoginRegisterButtons />
        </Grid>
      </header>
    </>
  );
};

export default Header;
