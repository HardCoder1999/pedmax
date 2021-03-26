import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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

const SportsList = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <img className={"sport-icons"} alt="" src={props.imageUrl} />
              &nbsp; &nbsp; &nbsp; &nbsp; {props.sportName}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            {/* Something i will write here  */}
          </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
};

export default SportsList;
