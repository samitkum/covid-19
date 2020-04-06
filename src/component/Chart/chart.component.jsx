import React, { useContext } from "react";
import { Line, Bar } from "react-chartjs-2";
import CovidContext from "../../context/covid/covid.context";
import "./chart.style.scss";
const Chart = () => {
  const covidContext = useContext(CovidContext);
  const { state, dates } = covidContext;
  const lineData = {
    labels: dates.map(({ date }) => date),
    datasets: [
      {
        data: dates.map(({ totalconfirmed }) => totalconfirmed),
        borderColor: "#3333ff",
        label: "Confirmed",
        fill: true,
      },
      {
        data: dates.map(({ totaldeceased }) => totaldeceased),
        borderColor: "red",
        backgroundColor: "#ff9999",
        label: "Deaths",
        fill: true,
      },
    ],
  };
  const BarData = {
    labels: ["confirmed", "active", "deaths"],
    datasets: [
      {
        data: [state.confirmed, state.active, state.deaths],
        color: ["#cceeff", "#008000", "#e60000"],
        fill: true,
        backgroundColor: ["#cceeff", "#008000", "#e60000"],
        label: "People",
      },
    ],
  };
  return (
    <div>
      {state.state === "Total" ? (
        <Line data={lineData} heigth="10vw" />
      ) : (
        <Bar data={BarData} redraw />
      )}
    </div>
  );
};

export default Chart;
