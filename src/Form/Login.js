import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import DateFnsUtils from "@date-io/date-fns";
import { BiLogInCircle } from "react-icons/bi";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import AccountCircle from "@material-ui/icons/AccountCircle";
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange2 = (event) => {
    setAvailable(event.target.value);
  };

  const handleChange1 = (event) => {
    setCategory(event.target.value);
  };
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
            <Grid item sm={12}>
              <TextField
                label="User_Name"
                variant="outlined"
                fullWidth
                name="username"
                {...register("username")}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                name="password"
                type="Password"
                {...register("password")}
              />
            </Grid>

            <Grid item>
              <Link to="/store">
                <Button variant="contained" color="secondary" type="submit">
                  SignIN
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}

export default Login;
