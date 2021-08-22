import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";

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
    padding: "5px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
    boxShadow: "0 5px 20px #777",
  },
}));

function ProjectName() {
  const classes = useStyle();
  return (
    <Grid
      className={classes.maingrid}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={0}
    >
      <Grid item>
        <h1 className={classes.h1}>Multitenant Stock Manager</h1>
      </Grid>
      <Grid item>COMSATS lahore Students</Grid>
    </Grid>
  );
}

export default ProjectName;
