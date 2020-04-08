import React, { useReducer } from "react";
import Reducer from "./covid.reducer";
import CovidContext from "./covid.context";
import axios from "axios";
import { SEARCH_TEXT, FETCH_STATES } from "../types";

const CovidState = (props) => {
  const intialState = {
    searchText: "",
    states: [],
    state: {},
    dates: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(Reducer, intialState);

  const fetchData = async () => {
    try {
      const resp = await axios.get("https://api.covid19india.org/data.json");
      dispatch({
        type: FETCH_STATES,
        payload: resp.data,
      });
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const SearchState = (stateName) => {
    const ResState = state.states.find(
      (state) => state.state.toLowerCase() === stateName.toLowerCase()
    );
    dispatch({
      type: SEARCH_TEXT,
      payload: ResState,
    });
  };
  return (
    <CovidContext.Provider
      value={{
        searchText: state.SearchText,
        fetchData,
        states: state.states,
        SearchState,
        state: state.state,
        dates: state.dates,
        loading: state.loading,
      }}
    >
      {props.children}
    </CovidContext.Provider>
  );
};

export default CovidState;
