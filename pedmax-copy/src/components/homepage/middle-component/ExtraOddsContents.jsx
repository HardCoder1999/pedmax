import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "135%",
    marginLeft: "-100px",
    paddingTop: "20px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  details: {
    flexDirection: "column",  }
}));

const ExtraOddsContents = (props) => {
  const classes = useStyles();
  const dataObj = props.odds[props.currentOdds];
  return (
    <div className={classes.root}>
      {Object.keys(dataObj).map((t)=>{
        const key = Object.keys(dataObj[t])[0];
        const oddsData = dataObj[t][key];
        return (
          <>

          <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{ oddsData.name }</Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails className={classes.details}>
        {
          Object.keys(oddsData.outcomes).map((x)=>{

            return (<><Typography>{`${oddsData.outcomes[x].name} ----> ${oddsData.outcomes[x].odds}`}</Typography> <br/></>)

          })}
          
        </AccordionDetails>
      </Accordion>

</>
        )
      })}

      
    </div>
  );
};

export default ExtraOddsContents;
