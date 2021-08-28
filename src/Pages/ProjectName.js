import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import pic from "../pics/h1.png";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { FaShoppingCart } from "react-icons/fa";
const useStyle = makeStyles((theme) => ({
  maingrid: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 5px 20px #777",
    marginTop: "1em",
    marginBottom: "1em",
  },
  h1: {
    backgroundColor: "#03a9f4",
    borderRadius: "10px",
    padding: "8px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
    boxShadow: "0 5px 20px #777",
  },
  cartbtn: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.5em",
    },
  },
  shopimg: {
    width: "12em",
    height: "5em",
  },
  fa: {
    fontSize: "2em",
    padding: "3px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
}));

function ProjectName() {
  const classes = useStyle();
  return (
    <Grid
      className={classes.maingrid}
      container
      alignItems="center"
      justifyContent="space-around"
      spacing={0}
    >
      <Grid item component={Link} to="/admin">
        <h2 className={classes.h1}>Stock Shop</h2>
      </Grid>

      <Grid item>
        <Button
          className={classes.cartbtn}
          variant="contained"
          color="secondary"
          component={Link}
          to="/cart"
        >
          Cart <FaShoppingCart className={classes.fa} />
        </Button>
      </Grid>
    </Grid>
  );
}

export default ProjectName;
