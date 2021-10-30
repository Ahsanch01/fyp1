import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";

import { BiLogInCircle } from "react-icons/bi";

import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  maingrid: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "20%",
    boxShadow: "0 5px 10px #777",
    width: "30%",
    marginTop: "6em",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginTop: "7em",
    },
  },
}));

function Login() {
  let history = useHistory();
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm();
  const [available, setAvailable] = useState("");
  const [category, setCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const onSubmit = (data) => console.log(data);
  return (
    <div className={classes.div}>
      <Grid
        container
        className={classes.maingrid}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          direction="column"
        >
          <Grid item>
            <Typography variant="h4">
              Tenant Login <BiLogInCircle color="blue" />
            </Typography>
          </Grid>
          <Grid item>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
              // onClick={history.goBack}
            >
              Tenant 1
            </Button>
          </Grid>
          <Grid item>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
              // onClick={history.goBack}
            >
              Tenant 2
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
