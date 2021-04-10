import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

const SearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <Grid item>
      <input
        type="search"
        placeholder="Search"
        autoComplete="off"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </Grid>
  );
};

export default SearchBar;
