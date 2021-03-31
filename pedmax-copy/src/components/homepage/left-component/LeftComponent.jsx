import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./SearchBar";
import Favourites from "./Favourites";
import SportsList from "./SportsList";
import { fetchListOfSports } from "../../../redux/actions/listOfSportsAction";
import { useDispatch, useSelector } from "react-redux";

// Variables

const LeftComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListOfSports());
  }, [dispatch]);

  const sportsLoading = useSelector((state) => state.list_of_sports.loading);
  const sportsData = useSelector((state) => state.list_of_sports.data);

  return (
      <Grid container xs={2} direction="column">
        <SearchBar />
        <Favourites />
        <h3 className={"titles"}>Sports</h3>
        {sportsLoading ? (
          <p>Loading... Please Wait</p>
        ) : (
          <>
            {sportsData.map((t) => {
              return (
                <div key={t.id}>
                  <SportsList
                    sport_id={t.id}
                    imageUrl={t.image_url}
                    sportName={t.name}
                  />
                </div>
              )
            })}
          </>
        )}
      </Grid>
  );
};

export default LeftComponent;
