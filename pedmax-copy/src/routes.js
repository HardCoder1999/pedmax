import { Switch, Route } from "react-router-dom";
import Sports from "./components/homepage/middle-component/Sports";
import LiveBets from "./components/homepage/middle-component/LiveBets";
import Homepage from "./components/homepage/middle-component/Homepage";
import SelectedSport from "./components/homepage/middle-component/SelectedSport";

const CreatingRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/live-bets" component={LiveBets} />
        <Route exact path="/sports/:sport_id" component={Sports} />
        <Route exact path="/sports/:sport_id/:tournament_id" component={SelectedSport} />
      </Switch>
    </>
  );
};

export default CreatingRoutes;
