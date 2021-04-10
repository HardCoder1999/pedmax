import React, { useState, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { fetchOddsData } from "../../../redux/actions/oddsDataAction";
import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ExtraOddsContents from "./ExtraOddsContents";

const useStyles = makeStyles((theme) => ({
  chips: {
    width: "135%",
    paddingTop: "20px",
    
  },

  chip: {
    paddingRight: "50px",
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));

const ExtraOdds = () => {
  const classes = useStyles();
  const { match_id } = useParams();
  const dispatch = useDispatch();
  const [currentOdds, setCurrentOdds] = useState("main");

  useEffect(() => {
    dispatch(fetchOddsData(match_id));
  }, [dispatch, match_id]);

  const matchData = useSelector((state) => state.odds_data.data.match);
  const dataLoading = useSelector((state) => state.odds_data.loading);

  // console.log(matchData);

  return (
    <>
      <h1>This is Extra Odds page.</h1>
      <p>Please Check it out.</p>

      {dataLoading ? (
        <p>Loading... Please Wait</p>
      ) : (
        <Grid className={classes.chips} item xs={8} direction="row">
          <Box display="flex" flexDirection="row">
          {Object.keys(matchData.markets).map((t) => {
            return (
              <div key={t}>
                <Chip label={t} component="a" href="#chip" clickable onClick={()=>{
                  setCurrentOdds(t);
                }}/>
              </div>
            );
          })}
          </Box>

          <ExtraOddsContents 
            odds = {matchData.markets}
            currentOdds = {currentOdds}
          />
        </Grid>
      )}
    </>
  );
};

export default ExtraOdds;
