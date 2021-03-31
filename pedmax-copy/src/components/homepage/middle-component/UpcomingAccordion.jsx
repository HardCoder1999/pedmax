import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import TableHead from "@material-ui/core/TableHead";
import { groupBy, assign1x2 } from "../../../utils/utilityFunctions";
import { fetchListOfUpcomingMatches } from "../../../redux/actions/listOfUpcomingMatchesAction";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  root: {
    borderBottom: "none",
  },

  head: {
    backgroundColor: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(15),
    textAlign: "left",
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "135%",
    paddingTop: "20px",
    marginLeft: "-100px",
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
          <Table>
            {Object.keys(modifiedData).map((t) => {
              return (
                <>
                  <Accordion defaultExpanded={true}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <TableHead key={t}>
                        <StyledTableRow>
                          <StyledTableCell></StyledTableCell>

                          <StyledTableCell style={{ color: "black" }}>
                            <NavLink
                              to={`/sports/${props.sport_id}/${modifiedData[t].id}`}
                            >
                              {modifiedData[t].title}
                            </NavLink>
                          </StyledTableCell>

                          <StyledTableCell
                            align="right"
                            style={{ color: "black" }}
                          >
                            1
                          </StyledTableCell>

                          <StyledTableCell
                            align="right"
                            style={{ color: "black" }}
                          >
                            X
                          </StyledTableCell>

                          <StyledTableCell
                            align="right"
                            style={{ color: "black" }}
                          >
                            2
                          </StyledTableCell>
                        </StyledTableRow>
                      </TableHead>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails>
                      <TableBody>
                        {modifiedData[t].data.map((x, index) => {
                          let value = assign1x2(x.market);
                          return (
                            <>
                              <StyledTableRow
                                style={{ backgroundColor: "white" }}
                              >
                                <StyledTableCell
                                  style={{ color: "black" }}
                                  component="th"
                                  scope="row"
                                >
                                  {x.name}
                                </StyledTableCell>

                                <StyledTableCell
                                  style={{ color: "black" }}
                                  align="right"
                                >
                                  <Button variant="contained" color="default">
                                    {value["1"]}
                                  </Button>
                                </StyledTableCell>

                                <StyledTableCell
                                  style={{ color: "black" }}
                                  align="right"
                                >
                                  <Button variant="contained" color="default">
                                    {value["X"]}
                                  </Button>
                                </StyledTableCell>

                                <StyledTableCell
                                  style={{ color: "black" }}
                                  align="right"
                                >
                                  <Button variant="contained" color="default">
                                    {value["2"]}
                                  </Button>
                                </StyledTableCell>

                                <StyledTableCell
                                  style={{ color: "black" }}
                                  align="right"
                                >
                                  {x.market_counts}+
                                </StyledTableCell>
                              </StyledTableRow>
                            </>
                          );
                        })}
                      </TableBody>
                    </AccordionDetails>
                  </Accordion>
                </>
              );
            })}
          </Table>
        )}
      </div>
    </>
  );
};

export default UpcomingAccordion;
