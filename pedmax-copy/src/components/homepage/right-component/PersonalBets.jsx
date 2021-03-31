import React from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 0,
    width: "90%",
    height: "250px",
    // marginLeft: "-15px",
    backgroundColor: theme.palette.background.paper,
    // marginTop: "15px",
    color: "black",
  },
}));

const PersonalBets = ()=>{
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Box display="flex" p={1} bgcolor="background.paper">
          {"This is the personal bet area."}
        </Box>
      </div>
    </>
  );
}

export default PersonalBets;