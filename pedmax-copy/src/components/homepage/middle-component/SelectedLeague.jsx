import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LiveMatches from "./LiveMatches";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMatches } from "../../../redux/actions/upcomingMatchesAction";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { assign1x2 } from "../../../utils/utilityFunctions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    width: "135%",
    marginLeft: "-100px",
    backgroundColor: theme.palette.background.paper,
  },
  // table: {
  //   minWidth: 500,
  // },
}));

const SelectedLeague = () => {
  const { tournament_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMatches(tournament_id));
  }, [dispatch, tournament_id]);

  const upcomingData = useSelector((state) => state.upcoming_matches.data);

  const dataLoading = useSelector((state) => state.upcoming_matches.loading);

  const classes = useStyles();

  return (
    <Grid item xs={8} direction="column">
      <h3 className={"status-titles"}>Live</h3>
      <LiveMatches />
      <h3 className={"status-titles"}>Upcoming</h3>

      <TableContainer component={Paper} className={classes.root}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Upcoming</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">X&nbsp;</TableCell>
              <TableCell align="right">2&nbsp;</TableCell>
              <TableCell align="right">^&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataLoading ? (
              <p>Loading... Please Wait</p>
            ) : (
              <>
                {upcomingData.map((t) => {
                  let value = assign1x2(t.market);
                  return (
                    <TableRow key={t.id}>
                      <TableCell component="th" scope="row">
                        {t.name}
                      </TableCell>
                      <TableCell align="right">{value["1"]}</TableCell>
                      <TableCell align="right">{value["X"]}</TableCell>
                      <TableCell align="right">{value["2"]}</TableCell>
                      <TableCell align="right">{t.market_counts}+</TableCell>
                    </TableRow>
                  );
                })}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default SelectedLeague;
