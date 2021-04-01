import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from "@material-ui/core/Divider";
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';




import SingleBet from "./SingleBet";
import { useSelector } from "react-redux";

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    width: "90%",
    height: "230px",
    marginLeft: "-10px",
    backgroundColor: theme.palette.background.paper,
    marginTop: "15px",
    color: "black",
  },
  margin: {
    margin: theme.spacing(0),
    width: "150px",
  },
}));

const BetArea = () => {
  const data = useSelector((state) => state.bets);
  const classes = useStyles();
  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      {data.map((t) => {
        return (
          <div key={t.id}>
            <SingleBet
              id={t.id}
              participant={t.data.participant}
              title={t.data.title}
              market_name={t.data.market_name}
              status={t.data.status}
              inputVal={t.data.inputVal}
              market={t.data.market}
              value={t.data.value}
            />
          </div>
        );
      })}

      <div className={classes.root}>
        <Box display="flex" p={1} bgcolor="background.paper">
          <p style={{ fontSize: "12px" }}>Please select odds to place bet</p>
        </Box>
        <Divider />
        <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">No of Bets</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Single</option>
          <option value={20}>Multiple</option>
        </NativeSelect>
      </FormControl>
      <Divider />
      <Box dispay="flex" flexDirection="row">
        <p style={{ fontSize: "12px" }}>Total Stake</p>
        <p style={{ fontSize: "12px" }}>Total Return</p>
      </Box>
      <Button variant="contained" color="primary">Place Bet</Button>
      </div>
    </>
  );
};

export default BetArea;
