import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import axios from "axios";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import FlashMessage from "../Pages/FlashMessage";

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
    padding: "20px",
    borderRadius: "5%",
    boxShadow: "0 5px 10px #777",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginTop: "2em",
    },
    width: "60%",
    marginTop: "3em",
  },
}));

function UserRegister() {
  let history = useHistory();
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, control } = useForm();

  const functionName = async (info) => {
    axios
      .post("http://localhost:3007/API/users/register", info)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("registertoken", token);
        console.log(res.data);
        setSuccess(true);

        // history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    setSuccess(false);
  };

  // const f2 = async () => {
  //   axios
  //     .post("http://localhost:3007/API/users/ActivateAccount", {
  //       Headers: {
  //         token: localStorage.getItem("token"),
  //       },
  //     })
  //     .then(() => {
  //       history.push("http://localhost:3000/store");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const onSubmit = (data) => {
    // console.log(data);
    functionName(data);
    // f2();
  };

  return (
    <div className={classes.div}>
      <Grid container className={classes.maingrid}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid spacing={2} container justifyContent="center">
            <Grid item>
              <Typography variant="h4">
                Register <IoIosPersonAdd color="blue" />
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First_Name"
                    variant="outlined"
                    fullWidth
                    name="firstname"
                    {...register("firstname")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last_Name"
                    variant="outlined"
                    fullWidth
                    name="lastname"
                    {...register("lastname")}
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
                    label="Contact_Number"
                    variant="outlined"
                    fullWidth
                    name="contact"
                    {...register("contact")}
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
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    {...register("email")}
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

                <Grid
                  container
                  justifyContent="center"
                  style={{ marginTop: 10 }}
                >
                  <Grid item>
                    {/* <Link to="/" style={{ textDecoration: "none" }}> */}
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      // onClick={history.goBack}
                    >
                      Register
                    </Button>
                    {/* </Link> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
        {success ? <FlashMessage message={"Check Email"} /> : " "}
      </Grid>
    </div>
  );
}

export default UserRegister;
