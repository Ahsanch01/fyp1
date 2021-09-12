import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { FcUpload } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  img: {
    width: "250px",
    height: "200px",
    [theme.breakpoints.down("md")]: {
      width: "180px",
      height: "150px",
    },
    title: {
      marginTop: "5em",
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

function SingleProduct() {
  let history = useHistory();
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [available, setAvailable] = useState("");
  const [category, setCategory] = useState("");

  const handleChange2 = (event) => {
    setAvailable(event.target.value);
  };

  const handleChange1 = (event) => {
    setCategory(event.target.value);
  };
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>Edit Product</h1>

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
                  <FcUpload size="3em" />
                </Grid>
              </Grid>

              <Grid container justifyContent="center" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={history.goBack}
                  >
                    Cencel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    onClick={history.goBack}
                  >
                    Update
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

export default SingleProduct;
