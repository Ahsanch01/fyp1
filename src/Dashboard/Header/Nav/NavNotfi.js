import React, { useState } from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
const useStyles = makeStyles((theme) => ({
  micon: {
    color: "white",
  },
  Avatar: {
    backgroundColor: "blue",
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
    { label: "Settings", desc: "Like your feed" },
    { label: "Logout", desc: "comments on products" },
  ];
  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge badgeContent={4} color="primary">
          <NotificationsIcon fontSize="medium" className={classes.micon} />
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
          <MenuItem key={i} component={ListItem} onClick={handleClose}>
            <ListItemIcon>
              <Avatar className={classes.Avatar}>
                {item.label[0].toUpperCase()}
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              secondary={item.desc}
            ></ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default NavNotfi;
