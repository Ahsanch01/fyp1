import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { FaProductHunt } from "react-icons/fa";
import HomeIcon from "@material-ui/icons/Home";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import { GiExpense } from "react-icons/gi";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    color: "grey",
    "&:hover,&:hover div": {
      color: "blue",
    },
    "& div": {
      color: "grey",
    },
  },

  activeNav: {
    color: "#141A46",
    "& div": {
      color: "#141A46",
    },
  },
  navbtn: {
    width: "100%",
    borderBottom: "1px solid grey",
    textTransform: "capitalize",
    fontSize: "small",
  },
}));

function SideList({ handleDrawerClose }) {
  const classes = useStyles();
  const listitemdata = [
    { label: "Home", Link: "/", icon: <HomeIcon /> },
    { label: "Products", Link: "/products", icon: <FaProductHunt /> },
    { label: "Sales", Link: "/sales", icon: <LoyaltyIcon /> },
    { label: "Expanse", Link: "/expense", icon: <GiExpense /> },
    { label: "People", Link: "/people", icon: <PeopleAltIcon /> },
    { label: "Message", Link: "/message", icon: <EmailIcon /> },
    {
      label: "Notification",
      Link: "/notification",
      icon: <NotificationsIcon />,
    },
  ];
  return (
    <List>
      {listitemdata.map((item) => (
        <Button onClick={handleDrawerClose} className={classes.navbtn}>
          <ListItem
            exact
            to={item.Link}
            component={NavLink}
            className={classes.navlinks}
            activeClassName={classes.activeNav}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}

export default SideList;
