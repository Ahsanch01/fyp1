import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Pages/Header";
import ProjectName from "../Pages/ProjectName";
import Home from "../Pages/Home";
import ViewItem from "../Pages/ViewItem";
import Cart from "../Pages/Cart";

function Store() {
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
