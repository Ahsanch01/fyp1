import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import Sidebar from "./Sidenav/Sidenav";
import Dashboard from "../Body/Dashboard";
import Notification from "../Body/Notification";
import Sales from "../Body/Sales/Sales";
import Products from "../Body/Products/Products";
import SingleProduct from "../Body/Products/SingleProduct";
import AddNewProduct from "../Body/Products/AddNewProduct";
import SingleSale from "../Body/Sales/SingalSale";
import AddNewSale from "../Body/Sales/AddNewSale";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    // backgroundColor: "#27ABEB",
    padding: theme.spacing(6, 2, 0, 32),

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 2),
      marginTop: "2em",
    },
  },
}));

function HeaderComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <Navbar handleDrawerToggle={handleDrawerToggle} />

      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        handleDrawerClose={handleDrawerClose}
      />

      <Box className={classes.wrapper}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/notification" exact component={Notification} />
          <Route path="/sales" exact component={Sales} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/add" exact component={AddNewProduct} />
          <Route path="/products/:productId" exact component={SingleProduct} />
          <Route path="/sales/add" exact component={AddNewSale} />
          <Route path="/sales/:saleId" exact component={SingleSale} />
        </Switch>
      </Box>
    </div>
  );
}

export default HeaderComponent;
