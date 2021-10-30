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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Typography variant="h4">
                SingIn <BiLogInCircle color="blue" />
              </Typography>
            </Grid>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  {...register("email")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  name="password"
                  type="password"
                  {...register("password")}
                />
              </Grid>

              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    // onClick={history.goBack}
                  >
                    SingIn
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    // onClick={history.goBack}
                  >
                    SingUp
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Link>
                <Typography>Forgot Password?</Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}

export default Login;
