import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
// import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import DateFnsUtils from "@date-io/date-fns";
import FlashMessage from "../../../Pages/FlashMessage";
import axios from "axios";
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

function AddNewOrder() {
  let history = useHistory();
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm();
  const [available, setAvailable] = useState("");
  const [success, setSuccess] = useState(false);
  const [category, setCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [dropdownitem, setDropdownitem] = useState();

  // useEffect(async () => {
  //   await axios
  //     .get("http://localhost:3007/API/categories")
  //     .then((res, req) => {
  //       // history.push("http://localhost:3000/store");
  //       console.log(res.data);

  //       setDropdownitem(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange2 = (event) => {
    setAvailable(event.target.value);
  };

  const handleChange1 = (event) => {
    setCategory(event.target.value);
  };
  let tenantID = localStorage.getItem("tenantId");

  const functionName = async (data) => {
    axios
      .post(`http://localhost:3007/API/expense/${tenantID}`, data)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });
    setSuccess(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    functionName(data);
  };
  return (
    <div>
      <h1>Add Expense</h1>
      <Grid container className={classes.maingrid}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item md={6}>
              <Typography variant="h4"> Item Details</Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="product_name"
                    {...register("product_name")}
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
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
                </Grid> */}

                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                    name="description"
                    {...register("description")}
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
              <Typography variant="h4"> Expense Details</Typography>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={1}
                style={{ marginBottom: "5em" }}
              >
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Expense_id"
                    variant="outlined"
                    fullWidth
                    name="id"
                    {...register("id")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Travelling_Expense"
                    variant="outlined"
                    fullWidth
                    name="travellingExpense"
                    {...register("travellingExpense")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Laboura_Expense"
                    variant="outlined"
                    fullWidth
                    name="labourExpense"
                    {...register("labourExpense")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Tenant_Id"
                    variant="outlined"
                    defaultValue={tenantID}
                    fullWidth
                    name="tenant_id"
                    {...register("tenant_id")}
                  />
                </Grid>
              </Grid>

              <Grid container justifyContent="center" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      history.push("/expense");
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
                    // onClick={() => {
                    //   history.push("/orders");
                    // }}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
        {success ? <FlashMessage message={"Expense Added"} /> : ""}
      </Grid>
    </div>
  );
}

export default AddNewOrder;
