import { AppBar, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const MyAppBar = styled(AppBar)({
  backgroundColor: "#000000",
  color: "white",
  padding: "20px",
});

export const MyTypography = styled(Typography)({
  fontSize: "3.5vw",
  display: "flex",
  justifyContent: "center",
});
