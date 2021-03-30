import "./App.css";
import Header from "./components/homepage/header/Header";
import LeftComponent from "./components/homepage/left-component/LeftComponent";
import RightComponent from "./components/homepage/right-component/RightComponent";
import CreatingRoutes from "./routes";
import Grid from "@material-ui/core/Grid";

// variables
import banner from "./images/banner.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container direction="row">
        <LeftComponent />
        <Grid container direction="column" alignItems="center" xs={8}>
          <Grid item>
            <img alt="Refresh" src={banner} className={"img-div"}/>
          </Grid>
          <CreatingRoutes />
        </Grid>
        <RightComponent />
      </Grid>
    </div>
  );
}

export default App;
