import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import PersonalBets from './PersonalBets';
import BetArea from './BetArea';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const BetButtons = () => {
  const [toggle, setToggle] = useState(true);
  const classes = useStyles();
  return (
    <>
      <Grid item className={"bet-buttons"}>
        <div className={classes.root}>
          <ButtonGroup
            variant="contained"
            aria-label="contained primary button group"
          >
            <Button color="secondary" onClick={()=>{
              setToggle(true);
            }}>Bet Slip</Button>
            <Button color="primary" onClick={()=>{
              setToggle(false);
            }}>My Bets</Button>
          </ButtonGroup>
        </div>
      </Grid>
      <Grid item>
        {
          toggle? (<BetArea />) : (<PersonalBets />)
        }
      </Grid>
    </>
  );
};

export default BetButtons;
