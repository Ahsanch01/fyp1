import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Box, Hidden, makeStyles, Typography } from "@material-ui/core";
import NavNotfi from "./NavNotfi";
import Profile from "./profile";
import Message from "./Messages";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#000000",
  },
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
}));
function Navbar({ handleDrawerToggle }) {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography>Dashboard</Typography>
        <Hidden smDown>
          <Box style={{ display: "flex" }}>
            <NavNotfi />
            <Message />
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <MenuIcon onClick={handleDrawerToggle} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
