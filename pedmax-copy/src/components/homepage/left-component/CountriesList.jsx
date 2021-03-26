import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
}));

const CountriesList = (props) => {
  const classes = useStyles();
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{props.name}</Typography>
          {console.log(props.name)}
        </AccordionSummary>

        <AccordionDetails>
          <Typography>Sports</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CountriesList;
