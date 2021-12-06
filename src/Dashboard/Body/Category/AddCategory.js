import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import FlashMessage from "../../../Pages/FlashMessage";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const useStyles = makeStyles((theme) => ({
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
    border: "1px dashed grey",
  },
}));
const Status = [
  { value: "available", label: "Available" },
  { value: "not-available", label: "Not Available" },
];
const Category = [
  { vale: "computer", label: "Computer" },
  { value: "mobile", label: "Mobile" },
  { value: "tv", label: "TV" },
];
function AddCategory() {
  let history = useHistory();
  const classes = useStyles();
  const { register, handleSubmit, reset, control } = useForm();
  const [available, setAvailable] = useState("");
  const [category, setCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [success, setSuccess] = useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange2 = (event) => {
    setAvailable(event.target.value);
  };
  const functionName = async (data) => {
    axios
      .post("http://localhost:3007/API/categories", data)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });
    setSuccess(false);
  };

  const handleChange1 = (event) => {
    setCategory(event.target.value);
  };
  const onSubmit = (data) => {
    console.log(data);
    functionName(data);
    reset();
  };
  return (
    <div>
      <h1>Add Category</h1>
      <Grid container className={classes.maingrid} justifyContent="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid spacing={2} container justifyContent="center">
            <Grid item md={12}>
              <Typography variant="h5"> Enter Details</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                {...register("name")}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Id"
                variant="outlined"
                fullWidth
                name="id"
                {...register("id")}
              />
            </Grid>

            <Grid item>
              <Grid container justifyContent="center" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      //   history.push("/orders");
                    }}
                  >
                    Cencel
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" type="submit">
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
        {success ? <FlashMessage message={"Category added"} /> : ""}
      </Grid>
    </div>
  );
}

export default AddCategory;
