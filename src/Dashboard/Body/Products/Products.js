import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import pic from "../../../pics/m1.jpg";
import { Link, useRouteMatch } from "react-router-dom";
import sales from "../DisplayItem";

const useStyles = makeStyles((theme) => ({
  miandiv: {
    // width: "100%",
    height: 450,
    backgroundColor: "white",
    border: "1px dashed grey",
    [theme.breakpoints.down("md")]: {
      height: 600,
      marginTop: "2em",
    },
    title: {
      marginTop: "10px",
    },
  },
  uppergrid: {
    marginTop: "2em",
    marginBottom: "1em",
  },
  avatar: {
    width: "25px",
    height: "20px",
  },
  delete: {
    color: "red",
    marginRight: "5px",
  },
  edit: {},
}));

function Products() {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  const [data, setDate] = useState(sales);
  const handleDelete = (id) => {
    setDate(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "Name",
      headerName: "Name",
      width: 190,
      editable: true,
      renderCell: (params) => {
        return (
          <>
            <img
              src={params.row.avatar}
              style={{ width: "50px", height: "50px", marginRight: "5px" }}
              alt=""
            />
            {params.row.Name}
          </>
        );
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 140,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 130,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <>
            <Button
              variant="contained"
              style={{
                marginRight: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteOutlineIcon style={{ color: "red", marginRight: "5px" }} />
            </Button>

            <Link to={`${url}/:productId` + params.row.id}>
              <Button variant="contained">
                <EditIcon style={{ color: "blue", cursor: "pointer" }} />
              </Button>
            </Link>
          </>
        );
      },
      width: 160,
    },
  ];

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.uppergrid}
      >
        <Grid item>
          <Typography variant="h3" className={classes.title}>
            Products
          </Typography>
        </Grid>
        <Grid item>
          <Link
            to="/products/add"
            to={`${url}/add`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add New
            </Button>
          </Link>
        </Grid>
      </Grid>
      <div className={classes.miandiv}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={7}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}

export default Products;
