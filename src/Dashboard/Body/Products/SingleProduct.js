import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { FcUpload } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { Form } from "react-bootstrap";
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
let tenantID = localStorage.getItem("tenantId");
function SingleProduct() {
  let history = useHistory();
  let { id } = useParams();
  const classes = useStyles();
  const [rowdata, setRowdata] = useState({});

  const { register, handleSubmit } = useForm();
  const [available, setAvailable] = useState("");
  const [Category, setCategory] = useState("");
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

  useEffect(() => {
    axios
      .get(`http://localhost:3007/API/categories/${tenantID}`)
      .then((res) => {
        debugger;
        console.log(res.data);
        setCategory(res.data);
        //   history.push("/store");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(async () => {
    await axios
      .get(`http://localhost:3007/API/products/${id}`)
      .then((res) => {
        debugger;
        // history.push("http://localhost:3000/store");
        console.log(res.data);

        setRowdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(Category, "Category");

  const handleChange2 = (event) => {
    setAvailable(event.target.value);
  };

  const handleChange1 = (event) => {
    debugger;
    event.preventDefault();
    const { value, name } = event.target;
    setProductData({
      ...productdata,
      [name]: value,
    });
    // setCategory(event.target.value);
  };
  const onSubmit = (data) => {
    debugger;
    console.log(data);
  };
  return (
    <div>
      <h1>Edit Product</h1>

      <Grid container className={classes.maingrid}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item md={8}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Form.Group style={{ marginRight: ".25em" }} className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      {...register("name")}
                      defaultValue={rowdata.name && rowdata.name}
                      placeholder="Enter Name"
                    />
                  </Form.Group>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Form.Group style={{ marginRight: ".25em" }} className="mb-3">
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                      type="text"
                      name="color"
                      {...register("color")}
                      defaultValue={rowdata.color && rowdata.color}
                      placeholder="Enter Color"
                    />
                  </Form.Group>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Form.Group style={{ marginRight: ".25em" }} className="mb-3">
                    <Form.Label>price</Form.Label>
                    <Form.Control
                      type="text"
                      name="price"
                      {...register("price")}
                      defaultValue={rowdata.price && rowdata.price}
                      placeholder="Enter Price"
                    />
                  </Form.Group>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Form.Group style={{ marginRight: ".25em" }} className="mb-3">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                      type="text"
                      name="id"
                      {...register("id")}
                      defaultValue={rowdata.id && rowdata.id}
                      placeholder="Enter Id"
                    />
                  </Form.Group>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    onChange={handleChange1}
                    name="category"
                    value={
                      rowdata.category ? rowdata.category : productdata.category
                    }
                    as="select"
                  >
                    <option hidden>Open this select menu</option>
                    {Category.length > 0 &&
                      Category.map((cat, i) => (
                        <option key={i} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                  </Form.Control>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Form.Group style={{ marginRight: ".25em" }} className="mb-3">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                      type="text"
                      name="stock"
                      {...register("stock")}
                      defaultValue={rowdata.stock && rowdata.stock}
                      placeholder="Enter Stock"
                    />
                  </Form.Group>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Form.Group style={{ marginRight: ".25em" }} className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      name="description"
                      {...register("description")}
                      defaultValue={rowdata.description && rowdata.description}
                      placeholder="Enter Description"
                    />
                  </Form.Group>
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
                    src={`http://localhost:3007/uploads/${
                      rowdata.picture && rowdata.picture
                    }`}
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
                    // onClick={() => {
                    //   history.push("/products");
                    // }}
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
