import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import pic from "../pics/l1.jpg";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const useStyle = makeStyles({
  gridback: {
    backgroundColor: "white",
    margin: "0.5em",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 5px 20px #777",
  },
  itemimg: {
    width: "200px",
    height: "200px",
    padding: "10px",
  },
  outer: {
    padding: "10px",
    maxWidth: "100%",
  },
  btn: {
    margin: "5px",
    backgroundColor: "#03a9f4",
  },
});

function Menu({ items }) {
  const classes = useStyle();
  return (
    <Grid
      container
      className={classes.outer}
      direction="row"
      justifyContent="space-evenly"
    >
      {items.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <div key={id}>
            <Grid item className={classes.gridback}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <img className={classes.itemimg} src={pic} alt={title} />
                </Grid>
                <Grid container direction="row" justifyContent="space-around">
                  <Grid item>
                    <h4>{title}</h4>
                  </Grid>
                  <Grid item>
                    <p>${price}</p>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.btn}
                    component={Link}
                    to="/home/view"
                    variant="contained"
                  >
                    View
                  </Button>
                  <Button
                    className={classes.btn}
                    component={Link}
                    to=""
                    variant="contained"
                  >
                    <AddShoppingCartIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </Grid>
  );
}

export default Menu;
