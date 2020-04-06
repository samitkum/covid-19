import React, { useContext } from "react";
import CovidContext from "../../context/covid/covid.context";
import { MyAppBar, MyTypography } from "./header.styles.js";
const Header = () => {
  const covidContext = useContext(CovidContext);
  const { state } = covidContext;
  return (
    <MyAppBar position="sticky">
      <MyTypography variant="h5">
        Covid-19 {"("}
        {state.state === "Total" ? "India" : state.state}
        {")"}
      </MyTypography>
    </MyAppBar>
  );
};
export default Header;
