import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const useStyles = makeStyles((theme) => ({
  micon: {
    color: "white",
  },
}));
function NavNotfi() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const dropdown = [
    { label: "Settings", icon: <SettingsIcon /> },
    { label: "Logout", icon: <ExitToAppIcon /> },
  ];
  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge badgeContent={4} color="primary">
          <AccountCircleIcon fontSize="large" className={classes.micon} />
        </Badge>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dropdown.map((item, i) => (
          <MenuItem component={ListItem} onClick={handleClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default NavNotfi;
