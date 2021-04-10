import React from "react";
import Grid from "@material-ui/core/Grid";
import BetButtons from "./BetButtons";

const RightComponent = () => {
  return (
      <Grid container xs={2} direction="column">
        <BetButtons />
      </Grid>
  );
};

export default RightComponent;
