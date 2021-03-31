import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { setUpcomingSportId } from "../../../redux/actions/sportIdGetSetAction";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    width: "135%",
    marginLeft: "-100px",
    backgroundColor: theme.palette.background.paper,
  },
}));

const UpcomingCarousel = () => {
  const dispatch = useDispatch();
  const sportsData = useSelector((state) => state.list_of_sports.data);
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {sportsData.map((t, index) => {
              return (
                <Tab
                  key={t.id}
                  label={t.name}
                  {...a11yProps(index)}
                  onClick={() => {
                    dispatch(setUpcomingSportId(t.id));
                  }}
                />
              );
            })}
            ;
          </Tabs>
        </AppBar>
      </div>
    </>
  );
};

export default UpcomingCarousel;
