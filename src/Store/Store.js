import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Pages/Header";
import ProjectName from "../Pages/ProjectName";
import Home from "../Pages/Home";
import ViewItem from "../Pages/ViewItem";
import Cart from "../Pages/Cart";
import axios from "axios";
import { useEffect } from "react";

const gettoken = localStorage.getItem("registertoken");

const f2 = async () => {
  console.log(gettoken, "get token");
  const data = {
    token: gettoken,
  };
  console.log("from Activation api");

  axios
    .post("http://localhost:3007/API/users/ActivateAccount", data)
    .then((res) => {
      // history.push("http://localhost:3000/store");
      console.log(res, "user activated");
    })
    .catch((err) => {
      console.log(err);
    });
};

function Store() {
  useEffect(() => {
    if (localStorage.getItem("registertoken")) {
      f2();
    } else if (localStorage.getItem("token")) {
      console.log("u r logedin");
    } else {
      console.log("Kindly register or use correct ");
    }
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <ProjectName />
      <Switch>
        <Route path="/store" exact component={Home} />
        <Route path="/about" component={() => <div>About Page</div>} />
        <Route path="/contact" component={() => <div>Contact Page</div>} />
        <Route path="/home/view" component={ViewItem} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Store;
