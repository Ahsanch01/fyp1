import { Button } from "@material-ui/core";
import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  outer: {
    backgroundColor: "#221266",
    padding: "0px",
  },
  btn: {
    backgroundColor: "#03a9f4",
    marginLeft: "2em",
    borderRadius: "50px",
  },
});
function Categories({ filterItem, categories }) {
  const classes = useStyle();
  return (
    <Grid container className={classes.outer} spacing={2}>
      <Grid item>
        {categories.map((category, index) => {
          return (
            <Button
              key={index}
              className={classes.btn}
              onClick={() => filterItem(category)}
              variant="contained"
            >
              {category}
            </Button>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Categories;
