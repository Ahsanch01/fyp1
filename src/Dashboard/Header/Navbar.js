import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Box, makeStyles, Typography } from "@material-ui/core";
import NavNotfi from "./NavNotfi";
const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#F76C6C",
  },
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
}));
function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography>Dashboard</Typography>
        <Box>
          <NavNotfi />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
