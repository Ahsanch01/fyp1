import React from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import pic from "../pics/l1.jpg";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  itemimg: {
    width: "350px",
    height: "350px",
  },
  item1: {
    margin: "3em",
    padding: "2em",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
  inner: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 5px 20px #777",
    margin: "1em",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      padding: "5px",
      marginLeft: "8px",
    },
  },
  inneritem: {
    marginLeft: "4em",
    marginRight: "2em",
  },
  outerdiv: {
    margin: "auto",
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      padding: "2px",
    },
    padding: "5px",
    boxShadow: "0 5px 20px #777",
  },
  cartbtn: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "25px",
    },
  },
}));
function ViewItem() {
  const classes = useStyle();
  return (
    <div className={classes.outerdiv}>
      <h1
        style={{
          backgroundColor: "#141A46",
          borderRadius: "10px",
          padding: "10px",
          color: "white",
          boxShadow: "0 5px 20px #777",
        }}
      >
        Details
      </h1>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item className={classes.item1}>
          <Grid container className={classes.inner} spacing={4}>
            <Grid className={classes.inneritem} item>
              <b>Name</b>
            </Grid>
            <Grid className={classes.inneritem} item>
              Laptop
            </Grid>
          </Grid>

          <Grid container className={classes.inner} spacing={4}>
            <Grid className={classes.inneritem} item>
              <b>Name</b>
            </Grid>
            <Grid className={classes.inneritem} item>
              Laptop
            </Grid>
          </Grid>

          <Grid container className={classes.inner} spacing={4}>
            <Grid className={classes.inneritem} item>
              <b>Name</b>
            </Grid>
            <Grid className={classes.inneritem} item>
              Laptop
            </Grid>
          </Grid>

          <Grid container className={classes.inner} spacing={4}>
            <Grid className={classes.inneritem} item>
              <b>Name</b>
            </Grid>
            <Grid className={classes.inneritem} item>
              <p>description</p>
            </Grid>
          </Grid>
          <Grid container className={classes.inner} spacing={4}>
            <Grid className={classes.inneritem} item>
              <b>Name</b>
            </Grid>
            <Grid className={classes.inneritem} item>
              <p>Color</p>
            </Grid>
          </Grid>
          <Grid container className={classes.inner} spacing={4}>
            <Grid className={classes.inneritem} item>
              <b>Name</b>
            </Grid>
            <Grid className={classes.inneritem} item>
              <p>category</p>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item>
              <Button
                className={classes.cartbtn}
                variant="contained"
                color="primary"
                component={Link}
                to="/cart"
              >
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <img src={pic} className={classes.itemimg} alt="lp" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ViewItem;
