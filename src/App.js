import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import UserRegister from "../src/Form/UserRegister";
import Login from "../src/Form/Login";

import Admin from "./Dashboard/Admin";
import Store from "../src/Store/Store";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/store" exact component={Store} />
          <Route path="/register" exact component={UserRegister} />
        </Switch>
      </BrowserRouter>
      {/* <Login /> 
      <UserRegister />
      <Admin />
     <Store /> */}
    </ThemeProvider>
  );
}

export default App;
