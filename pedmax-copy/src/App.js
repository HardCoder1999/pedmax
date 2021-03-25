import './App.css';
import Header from './components/homepage/header/Header';
import LeftComponent from './components/homepage/left-component/LeftComponent';
import RightComponent from './components/homepage/right-component/RightComponent';
import CreatingRoutes from "./routes";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container direction="row">
      <LeftComponent />
      <CreatingRoutes />
      <RightComponent />
      </Grid>
    </div>
  );
}

export default App;
