import React, { useContext, useEffect } from "react";
import { Card, Grid, CardContent, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CovidContext from "../../context/covid/covid.context";
import Spinner from "../Spinner/Spinner";
import Countup from "react-countup";
import moment from "moment";
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
  const modifiedDate = moment(state.lastupdatedtime, "DD/MM/YYYY")
    .toDate()
    .toString();
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
      <Grid
        item
        xs={12}
        sm={2}
        component={Card}
        style={{
          backgroundColor: "#ffb3b3",
          borderBottom: "4px solid #ff3333",
        }}
        className="card"
      >
        <CardContent>
          <Typography
            color="textSecondary"
            style={{ color: "#e60000" }}
            gutterBottom
          >
            Confirmed
          </Typography>
          <Typography
            color="primary"
            variant="h4"
            gutterBottom
            className="deltaValTypo"
          >
            <Countup
              start={0}
              end={Number(state.confirmed)}
              separator=","
              duration={1.5}
              style={{ color: "#e60000" }}
            />
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{ display: "inline", marginLeft: "5%" }}
          >
            <ArrowUpwardIcon
              style={{ color: "e60000", position: "relative", top: "4px" }}
            />
            <Countup
              start={0}
              end={Number(state.deltaconfirmed)}
              separator=","
              duration={1.5}
              style={{ color: "#e60000" }}
            />
          </Typography>
          <Typography color="primary" style={{ color: "#e60000" }} gutterBottom>
            {moment(modifiedDate).format("MMM Do YY")}
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={12}
        sm={2}
        component={Card}
        style={{
          backgroundColor: "#99ddff",
          borderBottom: "4px solid #006699",
        }}
        className="card"
      >
        <CardContent>
          <Typography
            color="textSecondary"
            style={{ color: "#006699" }}
            gutterBottom
          >
            Active
          </Typography>
          <Typography color="primary" variant="h4" gutterBottom>
            <Countup
              start={0}
              end={Number(state.active)}
              separator=","
              duration={1.5}
              style={{ color: "#006699" }}
            />
          </Typography>
          <Typography color="primary" style={{ color: "#006699" }} gutterBottom>
            {moment(modifiedDate).format("MMM Do YY")}
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={12}
        sm={2}
        component={Card}
        style={{
          backgroundColor: "#bbff99",
          borderBottom: "4px solid #77ff33",
        }}
        className="card"
      >
        <CardContent>
          <Typography
            color="textSecondary"
            style={{ color: "#008000" }}
            gutterBottom
          >
            Recovered
          </Typography>
          <Typography variant="h4" gutterBottom className="deltaValTypo">
            <Countup
              start={0}
              end={Number(state.recovered)}
              separator=","
              duration={1.5}
              style={{ color: "#008000" }}
            />
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{ display: "inline", marginLeft: "5%" }}
          >
            <ArrowUpwardIcon
              style={{ color: "008000", position: "relative", top: "4px" }}
            />
            <Countup
              start={0}
              end={Number(state.deltarecovered)}
              separator=","
              duration={1.5}
              style={{ color: "#008000" }}
            />
          </Typography>
          <Typography color="primary" style={{ color: "#008000" }} gutterBottom>
            {moment(modifiedDate).format("MMM Do YY")}
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={12}
        sm={2}
        component={Card}
        style={{
          backgroundColor: "#d6d6c2",
          borderBottom: "4px solid #5c5c3d",
        }}
        className="card"
      >
        <CardContent>
          <Typography
            color="textSecondary"
            style={{ color: "#5c5c3d" }}
            gutterBottom
          >
            Deaths
          </Typography>
          <Typography
            color="primary"
            variant="h4"
            gutterBottom
            className="deltaValTypo"
          >
            <Countup
              start={0}
              end={Number(state.deaths)}
              separator=","
              duration={1.5}
              style={{ color: "#5c5c3d" }}
            />
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{ display: "inline", marginLeft: "5%" }}
          >
            <ArrowUpwardIcon
              style={{ color: "#5c5c3d", position: "relative", top: "4px" }}
            />
            <Countup
              start={0}
              end={Number(state.deltadeaths)}
              separator=","
              duration={1.5}
              style={{ color: "#5c5c3d" }}
            />
          </Typography>
          <Typography color="primary" style={{ color: "#5c5c3d" }} gutterBottom>
            {moment(modifiedDate).format("MMM Do YY")}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Cards;
