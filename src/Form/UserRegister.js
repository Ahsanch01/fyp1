import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: "250px",
    height: "200px",
    [theme.breakpoints.down("md")]: {
      width: "180px",
      height: "150px",
    },
  },
  maingrid: {
    backgroundColor: "white",
    padding: "10px",
    boxShadow: "0 5px 10px #777",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginTop: "2em",
    },
    width: "60%",
    marginTop: "3em",
  },
}));
const Status = [
  { value: "Single", label: "Single" },
  { value: "Married", label: "Married" },
];

function UserRegister() {
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
      <Grid container className={classes.maingrid}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid spacing={2} container justifyContent="center">
            <Grid item>
              <Typography variant="h4">Register</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First_Name"
                    variant="outlined"
                    fullWidth
                    name="fname"
                    {...register("fname")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last_Name"
                    variant="outlined"
                    fullWidth
                    name="lname"
                    {...register("lname")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    name="address"
                    {...register("address")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="CNIC"
                    variant="outlined"
                    fullWidth
                    name="cnic"
                    {...register("cnic")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Number"
                    variant="outlined"
                    fullWidth
                    name="number"
                    {...register("number")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="User_Name"
                    variant="outlined"
                    fullWidth
                    name="username"
                    {...register("username")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    name="password"
                    {...register("password")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Confirm_Password"
                    variant="outlined"
                    fullWidth
                    name="confirmpassword"
                    {...register("confirmpassword")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    {...register("email")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    fullWidth
                    name="Matrial Status"
                    {...register("status")}
                    label="Status"
                    value={available}
                    defaultValue=""
                    onChange={handleChange2}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="Please select status"
                    variant="outlined"
                  >
                    {Status.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="date"
                      control={control}
                      defaultValue={null}
                      render={({ field }) => (
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-dialog"
                          label="Birthday"
                          format="MM/dd/yyyy"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      // onClick={history.goBack}
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}

export default UserRegister;
