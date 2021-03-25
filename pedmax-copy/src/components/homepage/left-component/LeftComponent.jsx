import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./SearchBar";
import Favourites from "./Favourites";
import SportsList from "./SportsList";
import useFetch from "../../../hooks/useFetch";

// Variables
const sportsListUrl = "http://3.12.44.37/api/v1/sports";

const LeftComponent = () => {
  const response = useFetch(sportsListUrl);
  // console.log(response.data);

  return (
    <>
      <Grid container xs={2} direction="column">
        {/* <h1>This is Left Component Page.</h1> */}
        <SearchBar />
        <Favourites />
        <h3 className={"titles"}>Sports</h3>
        {
          response.loading ? (<p>Loading</p>):
          (
          <>
        {response.data.sports.map((t) => {
          return (
            <div key={t.id}>
              <SportsList imageUrl={t.image_url} sportName={t.name} />
            </div>
          );
        })}
        </>
        )}
      </Grid>
    </>
  );
};

export default LeftComponent;
