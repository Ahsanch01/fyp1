import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import FlashMessage from "../../../Pages/FlashMessage";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";
import Editform from "./Editform";
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

function AddCategory() {
  let history = useHistory();
  let { id } = useParams();
  const classes = useStyles();
  const [getData, setData] = useState([]);

  const { register, handleSubmit, reset, control } = useForm();

  const [success, setSuccess] = useState(false);

  useEffect(async () => {
    console.log(id);

    await axios
      .get(`http://localhost:3007/API/categories/${id}`)
      .then((res) => {
        console.log(res?.data);

        setData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(getData);
  console.log(getData.name);
  console.log(getData.id);

  let Name = getData.name;
  console.log(Name);
  const [dataName, setDataname] = useState(getData?.name);
  console.log(dataName);

  const functionName = async (data) => {
    await axios
      .put(`http://localhost:3007/API/categories/${id}`, data)
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
    reset();
  };
  const handlechange = (e) => {};
  return (
    <div>
      <h1>Add Category</h1>
      {/* {getdata ? (
        <Editform _id={id} name={getdata?.name} id={getdata?.id} />
      ) : (
        "loading"
      )} */}

      <Grid container className={classes.maingrid} justifyContent="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid spacing={2} container justifyContent="center">
            <Grid item md={12}>
              <Typography variant="h5"> Edit Details</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                value={dataName}
                onChange={(e) => {
                  setDataname(e.target.value);
                }}
                variant="outlined"
                fullWidth
                type="text"
                name="name"
                {...register("name")}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                value={getData.id}
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
                    Edit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          ;
        </form>
        {success ? <FlashMessage message={"Category Edit"} /> : ""}
      </Grid>
    </div>
  );
}

export default AddCategory;
