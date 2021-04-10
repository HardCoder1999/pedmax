import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { removeBets, editBets } from "../../../redux/actions/betsAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    width: "90%",
    height: "250px",
    marginLeft: "-10px",
    backgroundColor: theme.palette.background.paper,
    marginTop: "15px",
    color: "black",
  },
}));

const SingleBet = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const color = (props.status === "open")? "green" : props.status === "closed"? "red" : "skyblue"
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        // flexDirection="row"
        p={-1}
        m={1}
        bgcolor="background.paper"
        textOverflow="ellipsis"
      >
        <p style={{ fontSize: "10px", textAlign: "left" }}>{props.title}</p> &nbsp; &nbsp;
        <p style={{ color: {color} }}>{props.status}</p> &nbsp; &nbsp;
        <IconButton aria-label="delete" onClick={()=>{
          dispatch(removeBets(props.id));
        }}>
          <DeleteIcon />
        </IconButton>
        &nbsp; &nbsp;
      </Box>
      <Box display="inline" p={0} bgcolor="background.paper">
        <p style={{ fontSize: "12px", textAlign: "left"}}>{props.participant}</p>
        <p>{props.marketName}</p>
      </Box>
      <Divider />
      <div>
        <p style={{textAlign: "left"}}>{props.market}</p> <p style={{textAlign: "right"}}>{props.value}</p>
      </div>
      <input size="4" value={props.inputVal} onChange={()=>{
        dispatch(editBets(props.id, props.inputVal));
      }}/>{" "}
      <p>{Number(props.inputVal) * Number(props.value)}</p>
    </div>
  );
};

export default SingleBet;
