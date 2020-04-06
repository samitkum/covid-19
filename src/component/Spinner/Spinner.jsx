import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "104px", margin: "10vw auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;
