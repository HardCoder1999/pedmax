import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useSelector } from "react-redux";

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

export default function ScrollableTabsButtonAuto() {
  const sportsLoading = useSelector((state) => state.list_of_sports.loading);
  const sportsData = useSelector((state) => state.list_of_sports.data);
  const [activeSport, setActiveSport] = useState(null);
  let count = -1;

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
          {sportsLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {sportsData.map((t) => {
                count++;
                return (
                  <div key={t.id}>
                    <Tab label={t.name} {...a11yProps(count)} onClick={() => setActiveSport(t.id)} />
                    {console.log(activeSport)}
                  </div>
                );
              })}
            </>
          )}
        </Tabs>
      </AppBar>
    </div>
  );
}
