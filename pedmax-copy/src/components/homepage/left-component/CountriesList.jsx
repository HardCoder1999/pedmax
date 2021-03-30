import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { fetchListOfTournaments } from "../../../redux/actions/listOfTournamentsAction";
//We can remove this line in Futur

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    paddingLeft: "20px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  expanded: {
    "&$expanded": {
      margin: "4px 4px",
    },
  },

  details: {
    flexDirection: "column",
  },
}));

const CountriesList = (props) => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(true);
  const tournamentsLoading = useSelector(
    (state) => state.list_of_tournaments.loading
  );
  const tournamentsData = useSelector(
    (state) => state.list_of_tournaments.data
  );

  const classes = useStyles();
  return (
    <>
      <Accordion key={props.sport_id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          onClick={() => {
            setOpen(!isOpen);
            if(isOpen) dispatch(fetchListOfTournaments(props.sport_id, props.country_id));
          }}
        >
          <Typography className={classes.heading}>{props.name}</Typography>
        </AccordionSummary>

        <AccordionDetails className={classes.details}>
          {tournamentsLoading ? (
            <p>Loading... Please Wait</p>
          ) : (
            <>
              {tournamentsData.map((t) => {
                return (
                  <div key={t.id}>
                    <Typography>{t.title}</Typography>
                  </div>
                );
              })}
            </>
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CountriesList;
