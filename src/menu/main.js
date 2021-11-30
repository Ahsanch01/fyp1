import React, { useState, useEffect } from "react";
import Menu from "./menu";
import Category from "./categories";
import items from "../data/data";
import axios from "axios";
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

function Main({ items }) {
  // const [items, setItem] = useState([]);
  // useEffect(async () => {
  //   await axios
  //     .get("http://localhost:3007/API/products")
  //     .then((res) => {
  //       let getitems = res.data;
  //       setItem(getitems);
  //       // console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // console.log(items);
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
  const allCategories = [
    "all",
    ...new Set(items.map((item) => item.category.name)),
  ];
  // console.log(allCategories);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);
  const [menuItems, setmenuItem] = useState(items);

  const filterItem = (category) => {
    if (category === "all") {
      setmenuItem(items);
      return;
    }
    const newItems = items.filter((item) => item.category.name === category);
    setmenuItem(newItems);
  };
  console.log(menuItems);

  return (
    <div>
      <Category categories={allCategories} filterItem={filterItem} />
      <Menu items={menuItems} />
    </div>
  );
}

export default Main;
