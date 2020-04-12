import React, { useContext, useEffect } from "react";
import CovidContext from "../../context/covid/covid.context";
import Grid from "@material-ui/core/Grid";
import Spinner from "../Spinner/Spinner";
import CardComponent from "../../styledComponent/CardComponent";
import "./card.style.scss";

const Cards = ({ data }) => {
  const covidContext = useContext(CovidContext);
  const { state, fetchData } = covidContext;
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  if (!state.active) {
    return <Spinner />;
  }

  return (
    <Grid
      container
      justify="center"
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "2% 0px",
      }}
    >
      <CardComponent
        bgColor="#ffb3b3"
        color="#e60000"
        updateDate={state.lastupdatedtime}
        value={state.confirmed}
        deltaValue={state.deltaconfirmed}
        className="card"
      >
        Confirmed
      </CardComponent>
      <CardComponent
        bgColor="#99ddff"
        color="#006699"
        updateDate={state.lastupdatedtime}
        value={state.active}
        className="card"
      >
        Active
      </CardComponent>
      <CardComponent
        bgColor="#bbff99"
        color="#008000"
        updateDate={state.lastupdatedtime}
        value={state.recovered}
        deltaValue={state.deltarecovered}
        className="card"
      >
        Recovered
      </CardComponent>
      <CardComponent
        bgColor="#d6d6c2"
        color="#5c5c3d"
        updateDate={state.lastupdatedtime}
        value={state.deaths}
        deltaValue={state.deltadeaths}
        className="card"
      >
        Deaths
      </CardComponent>
    </Grid>
  );
};

export default Cards;
