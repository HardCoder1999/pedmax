import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { groupBy, assign1x2 } from "../../../utils/utilityFunctions";
import { fetchListOfUpcomingMatches } from "../../../redux/actions/listOfUpcomingMatchesAction";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "135%",
    paddingTop: "20px",
    marginLeft: "-100px",
    // paddingRight: "px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightBold,
    width: "40%",
    textAlign: "left",
  },

  head: {
    // marginLeft: "10px",
    fontWeight: theme.typography.fontWeightBold,
    // paddingRight:
  },

  head3: {
    marginLeft: "150px",
    fontWeight: theme.typography.fontWeightBold,
    // paddingRight:
  },

  heading1: {
    width: "130%",
    backgroundColor: "grey.300",
  },

  head2: {
    width: "40%",
    textAlign: "left",
    fontSize: theme.typography.pxToRem(12),
  },

  head1: {
    marginLeft: "90px",
  },
}));

const UpcomingAccordion = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListOfUpcomingMatches(props.sport_id));
  }, [dispatch, props.sport_id]);

  const upcomingSportData = useSelector(
    (state) => state.list_of_upcoming_matches.data.matches
  );

  const dataLoading = useSelector(
    (state) => state.list_of_upcoming_matches.loading
  );

  const classes = useStyles();

  let modifiedData = groupBy(upcomingSportData);

  return (
    <>
      <div className={classes.root}>
        {dataLoading ? (
          <p>Loading... Please Wait</p>
        ) : (
          <>
            {Object.keys(modifiedData).map((t) => {
              return (
                <div key={t}>
                  <Accordion defaultExpanded={true}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <NavLink
                        to={{
                          pathname: "/sports/" + props.sport_id + "/" + t,
                          Props: { tournamentName: modifiedData[t].title },
                        }}
                      >
                        <Typography className={classes.heading}>
                          {modifiedData[t].title}
                        </Typography>
                      </NavLink>
                      <Typography className={classes.head}> 1 </Typography>
                      <Typography className={classes.head3}> X </Typography>
                      <Typography className={classes.head3}> 2 </Typography>
                      <Typography className={classes.head3}> </Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails>
                      {modifiedData[t].data.map((x, index) => {
                        let value = assign1x2(x.market);
                        return (
                          <>
                            <Box
                              component="div"
                              display="flex"
                              flexDirection="row"
                              p={1}
                              bgcolor="grey.300"
                              className={classes.heading1}
                              key={index}
                            >
                              <Box p={1} className={classes.head2}>
                                {" "}
                                {x.name}
                              </Box>
                              <Box p={1} flexGrow={1} className={classes.head1}>
                                <Button variant="contained" color="default">
                                  {value["1"]}
                                </Button>
                              </Box>
                              <Box p={1} flexGrow={1} className={classes.head1}>
                                <Button variant="contained" color="default">
                                  {value["X"]}
                                </Button>
                              </Box>
                              <Box p={1} flexGrow={1} className={classes.head1}>
                                <Button variant="contained" color="default">
                                  {value["2"]}
                                </Button>
                              </Box>
                              <Box p={1} flexGrow={1} className={classes.head1}>
                                <Button variant="contained" color="default">
                                  {x.market_counts}+
                                </Button>
                              </Box>
                            </Box>
                          </>
                        );
                      })}
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default UpcomingAccordion;
