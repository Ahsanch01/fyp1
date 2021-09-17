import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { FcPrint } from "react-icons/fc";
import { Link, useRouteMatch } from "react-router-dom";
import orders from "../OrderList";

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

function Order() {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  const [data, setDate] = useState(orders);
  const handleDelete = (id) => {
    setDate(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 95 },
    {
      field: "CustomerName",
      headerName: "Customer_Name",
      width: 200,
      editable: true,
    },
    {
      field: "number",
      headerName: "Customer_Number",
      width: 200,
      editable: true,
    },
    {
      field: "totalprice",
      headerName: "Total_Price",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "totalproducts",
      headerName: "Total_Product",
      type: "number",
      width: 150,
      editable: true,
    },

    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
    },
    {
      field: "print",
      headerName: "Print",
      renderCell: (params) => {
        return (
          <Button variant="contained" fullWidth styele={{ cursor: "pointer" }}>
            <FcPrint size="2.3em" />
          </Button>
        );
      },
      width: 150,
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

  const rows = [
    {
      id: 1,
      CustomerName: "Ahsan123",
      number: "03134162172",
      totalprice: 1290,
      totalproducts: 3,
      status: "paid",
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
            Order
          </Typography>
        </Grid>
        <Grid item>
          <Link to={`${url}/add`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add Order
            </Button>
          </Link>
        </Grid>
      </Grid>
      <div className={classes.miandiv}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}

export default Order;
