import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import Countup from "react-countup";
import moment from "moment";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const CardComponent = ({
  value,
  deltaValue,
  updateDate,
  bgColor,
  color,
  ...props
}) => {
  const modifiedDate = moment(updateDate, "DD/MM/YYYY").toDate().toString();
  return (
    <Grid
      item
      xs={12}
      md={2}
      sm={5}
      component={Card}
      style={{
        backgroundColor: bgColor,
        borderBottom: `4px solid ${color}`,
      }}
      {...props}
    >
      <CardContent>
        <Typography color="textSecondary" style={{ color: color }} gutterBottom>
          {props.children}
        </Typography>
        <Typography
          color="primary"
          variant="h4"
          gutterBottom
          className="deltaValTypo"
        >
          <Countup
            start={0}
            end={Number(value)}
            separator=","
            duration={1.5}
            style={{ color: color }}
          />
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{ display: "inline", marginLeft: "5%" }}
        >
          {deltaValue ? (
            <>
              <ArrowUpwardIcon
                style={{ color: color, position: "relative", top: "4px" }}
              />

              <Countup
                start={0}
                end={Number(deltaValue)}
                separator=","
                duration={1.5}
                style={{ color: color }}
              />
            </>
          ) : null}
        </Typography>
        <Typography color="primary" style={{ color: color }} gutterBottom>
          {moment(modifiedDate).format("MMM Do YY")}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default CardComponent;
