import React, { useContext } from "react";
import { TextField, Paper } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CovidContext from "../../context/covid/covid.context";
const Search = () => {
  const covidContext = useContext(CovidContext);
  const { SearchState, states } = covidContext;
  const handleChange = (e, value) => {
    if (value) {
      SearchState(value.state);
    }
  };
  return (
    <div style={{ padding: "2vw 5vw" }}>
      <Paper elevation={6}>
        <Autocomplete
          id="combo-box-demo"
          options={states}
          getOptionLabel={({ state }) => (state === "Total" ? "India" : state)}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} label="Search States" variant="filled" />
          )}
        />
      </Paper>
    </div>
  );
};

export default Search;
