import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { FcUpload } from "react-icons/fc";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import DateFnsUtils from "@date-io/date-fns";
import FlashMessage from "../../../Pages/FlashMessage";
import AsyncSelect from "react-select/async";
import axios from "axios";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import { Link } from "react-router-dom";
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

function AddNewProduct() {
  let history = useHistory();
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, control } = useForm();
  const [stateimage, Setsatateimage] = useState();
  const [selectedDate, setSelectedDate] = useState("");
  const [productdata, setProductData] = useState({
    name: "",
    price: "",
    stock: "",
    color: "",
    picture: "",
    category: "",
    date: "",
    time: "",
    description: "",
  });
  const {
    name,
    price,
    stock,
    color,
    picture,
    category,
    date,
    time,
    description,
  } = productdata;
  let formData = new FormData();
  // formData.append("data", productdata);
  // console.log("formDATA", formData);
  // formData.append("name", name);
  // formData.append("price", price);
  // formData.append("stock", stock);
  // formData.append("color", color);
  // formData.append("picture", picture);
  // formData.append("category", category);
  // formData.append("date", date);
  // formData.append("time", time);
  // formData.append("description", description);

  // const staticData = () => {
  //   formData.append("name", "ahsan");
  //   formData.append("id", "124");
  //   console.log(Array.from(formData));
  //   for (let obj of formData) {
  //     console.log(obj);
  //   }
  // };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const f1 = async (info) => {
    let formData = new FormData();
    formData.append("name", info.name);
    formData.append("price", info.price);
    formData.append("id", info.id);
    formData.append("stock", info.stock);
    formData.append("color", info.color);
    formData.append("image", info.image[0]);
    formData.append("category", info.category);
    formData.append("date", info.date);
    formData.append("time", info.time);
    formData.append("Tenant_id", info.Tenant_id);
    formData.append("description", info.description);

    console.log("clicked");
    axios({
      method: "post",
      url: "http://localhost:3007/API/products",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        setSuccess(true);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

    // info.image = stateimage;

    // await axios
    //   .post("http://localhost:3007/API/products", info, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const handleimage = (e) => {
    Setsatateimage(e.target.files[0]);
    const selected = e.target.files[0];
    const Allowed_Tpes = ["picture/*"];
    if (selected && Allowed_Tpes) {
      formData.append("picture", e.target.files[0]);
      console.log("select");
    } else {
      console.log("file not supported");
    }
  };

  console.log(productdata);
  let tenantID = localStorage.getItem("tenantId");
  const onSubmit = (data) => {
    console.log(data);
    // staticData();
    setProductData(data);
    f1(data);
  };
  return (
    <div>
      <h1>Add Product</h1>
      <Grid container className={classes.maingrid}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item md={8}>
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
                    label="price"
                    variant="outlined"
                    fullWidth
                    name="price"
                    {...register("price")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="id"
                    variant="outlined"
                    fullWidth
                    name="id"
                    {...register("id")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Category"
                    variant="outlined"
                    fullWidth
                    name="category"
                    {...register("category")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Stock"
                    variant="outlined"
                    fullWidth
                    name="stock"
                    type="number"
                    {...register("stock")}
                  />
                </Grid>
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
            <Grid item md={4}>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={1}
                style={{ marginBottom: "5em" }}
              >
                <Grid item>
                  <img
                    src="https://image.shutterstock.com/image-photo/gamer-workspace-concept-top-view-260nw-1043175670.jpg"
                    alt="photo"
                    className={classes.img}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="image"
                    type="file"
                    onChange={handleimage}
                    {...register("image")}
                  />

                  {/* <FcUpload size="3em" type="file" /> */}
                  {/* </input> */}
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    label="Tenant_Id"
                    defaultValue={tenantID}
                    name="Tenant_id"
                    {...register("Tenant_id")}
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Grid container justifyContent="center" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    // component={Link}
                    // to="/products"
                    onClick={() => {
                      history.push("/products");
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
                      // history.push("/products");
                    }}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
        {success ? <FlashMessage message={"product Added"} /> : ""}
      </Grid>
    </div>
  );
}

export default AddNewProduct;
