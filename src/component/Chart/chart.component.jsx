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
      {
        data: dates.map(({ totalrecovered }) => totalrecovered),
        borderColor: "#008000",
        label: "Recovered",
        fill: true,
      },
    ],
  };
  const BarData = {
    labels: ["Confirmed", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        data: [state.confirmed, state.active, state.recovered, state.deaths],
        color: ["#ffb3b3", "#99ddff", "#bbff99", "#d6d6c2"],
        fill: true,
        backgroundColor: ["#ffb3b3", "#99ddff", "#bbff99", "#d6d6c2"],
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
