import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from './SearchBar';
import Favourites from './Favourites';
import SportsList from './SportsList';

const LeftComponent = () => {
  return (
    <>
      <Grid container xs={2} direction="column">
        {/* <h1>This is Left Component Page.</h1> */}
        <SearchBar />
        <Favourites />
        <SportsList />
      </Grid>
    </>
  );
};

export default LeftComponent;
