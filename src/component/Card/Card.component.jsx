import React, { useContext, useEffect } from "react";
import { Card, Grid, CardContent, Typography } from "@material-ui/core";
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
        md={3}
        sm={3}
        component={Card}
        style={{
          backgroundColor: "#cceeff",
          borderBottom: "4px solid #4dc3ff",
        }}
        className="card"
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Confirmed
          </Typography>
          <Typography color="primary" variant="h4" gutterBottom>
            <Countup
              start={0}
              end={Number(state.confirmed)}
              separator=","
              duration={1.5}
            />
          </Typography>
          <Typography color="primary" gutterBottom>
            {moment(modifiedDate).format("MMM Do YY")}
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        sm={3}
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
            Active
          </Typography>
          <Typography color="primary" variant="h4" gutterBottom>
            <Countup
              start={0}
              end={Number(state.active)}
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
        md={3}
        sm={3}
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
            Deaths
          </Typography>
          <Typography color="primary" variant="h4" gutterBottom>
            <Countup
              start={0}
              end={Number(state.deaths)}
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
    </Grid>
  );
};

export default Cards;
