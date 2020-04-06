import React from "react";
import Card from "./component/Card/Card.component";
import Search from "./component/SearchBar/Search.component";
import CovidState from "./context/covid/covid.state";
import Header from "./component/Header/header.component";
import Chart from "./component/Chart/chart.component";
import "./App.scss";
const App = () => {
  return (
    <CovidState>
      <div
        style={{
          display: "flex",
          justify: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <Card />
        <Search />
        <Chart />
      </div>
    </CovidState>
  );
};

export default App;
