import React from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import pic from "../pics/l1.jpg";

const useStyle = makeStyles({
  itemimg: {
    width: "350px",
    height: "350px",
  },
  item1: {
    margin: "3em",
    padding: "2em",
  },
  inner: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 5px 20px #777",
    margin: "1em",
    padding: "10px",
  },
  inneritem: {
    marginLeft: "4em",
    marginRight: "2em",
    borderBottom: "2px solid black",
  },
});
function ViewItem() {
  const classes = useStyle();
  return (
    <div
      style={{
        margin: "auto",
        backgroundColor: "white",
        padding: "5px",
        boxShadow: "0 5px 20px #777",
      }}
    >
      <h1
        style={{
          backgroundColor: "#03a9f4",
          borderRadius: "10px",
          padding: "10px",
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
              <p></p>
            </Grid>
          </Grid>
          <Grid container className={classes.inner} spacing={4}>
            <Grid className={classes.inneritem} item>
              <b>Name</b>
            </Grid>
            <Grid className={classes.inneritem} item>
              <p></p>
            </Grid>
          </Grid>
          <Grid container className={classes.inner} spacing={4}>
            <Grid className={classes.inneritem} item>
              <b>Name</b>
            </Grid>
            <Grid className={classes.inneritem} item>
              <p></p>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
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
