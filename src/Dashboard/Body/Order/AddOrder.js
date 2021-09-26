import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { FcUpload } from "react-icons/fc";
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
function AddNewOrder() {
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
    <div>
      <h1>Add Order</h1>
      <Grid container className={classes.maingrid}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item md={6}>
              <Typography variant="h4"> Item Details</Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    {...register("name")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Color"
                    variant="outlined"
                    fullWidth
                    name="color"
                    {...register("color")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Quantity"
                    variant="outlined"
                    fullWidth
                    name="quantity"
                    type="number"
                    {...register("quantity")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="price"
                    variant="outlined"
                    fullWidth
                    name="price"
                    {...register("price")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    id="category"
                    select
                    fullWidth
                    label="Category"
                    value={category}
                    defaultValue=""
                    name="category"
                    {...register("category")}
                    onChange={handleChange1}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="Please select category"
                    variant="outlined"
                  >
                    {Category.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    fullWidth
                    name="status"
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
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                    name="desc"
                    {...register("desc")}
                    variant="outlined"
                  />
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
                          label="Select Date"
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

                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="time"
                      control={control}
                      defaultValue={null}
                      render={({ field }) => (
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-picker"
                          label="Select Time"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change time",
                          }}
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
            <Grid item md={6} style={{ borderLeft: "1px dashed grey" }}>
              <Typography variant="h4"> Cutomer Details</Typography>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={1}
                style={{ marginBottom: "5em" }}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Customer Name"
                    variant="outlined"
                    fullWidth
                    name="cutomername"
                    {...register("cutomername")}
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
                    label="Customer Number"
                    variant="outlined"
                    fullWidth
                    name="customernumber"
                    {...register("customernumber")}
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
              </Grid>

              <Grid container justifyContent="center" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      history.push("/orders");
                    }}
                  >
                    Cencel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    onClick={() => {
                      history.push("/orders");
                    }}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}

export default AddNewOrder;
