import React, { useState, useEffect } from "react";
import Menu from "./menu";
import Category from "./categories";
import items from "../data/data";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// let items = [];
// axios
//   .get("http://localhost:3007/API/products")
//   .then((res) => {
//     items = res.data;
//     console.log(items);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getitems = async () => {
//   await axios
//     .get("http://localhost:3007/API/products")
//     .then((res) => {
//       items = res.data;
//       console.log(items);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const allCategories = ["all", ...new Set(items.map((item) => item.category))];
let tenantID = localStorage.getItem("tenantId");
function Main() {
  let id = useParams();

  useEffect(() => {}, []);
  const [items, setItem] = useState([]);
  useEffect(async () => {
    await axios
      .get(`http://localhost:3007/API/products/tenant/${tenantID}`)
      .then((res) => {
        let getitems = res.data;
        setCategories(res.data);
        setItem(getitems);
        console.log("ssssssssssssss:::", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(items);
  // let items = [];
  // items = axios
  //   .get("http://localhost:3007/API/products")
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // const [menuItems, setmenuItem] = useState(items);
  // console.log(menuItems);
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  // console.log(allCategories);
  const [categories, setCategories] = useState([]);
  console.log("awaaaaa", allCategories);
  const [menuItems, setmenuItem] = useState(categories);

  const filterItem = (category) => {
    if (category === "all") {
      setmenuItem(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setmenuItem(newItems);
  };
  console.log("sssss::", menuItems);

  return (
    <div>
      <Category categories={allCategories} filterItem={filterItem} />
      <Menu items={menuItems} categories={categories} />
    </div>
  );
}

export default Main;
