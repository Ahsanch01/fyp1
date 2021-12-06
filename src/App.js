import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import UserRegister from "../src/Form/UserRegister";
import Login from "../src/Form/Login";
import TenantLogin from "../src/Form/TenantLogin";
import Admin from "./Dashboard/Admin";
import Store from "../src/Store/Store";
import adminLogin from "../src/Form/adminLogin";
import AdminRegister from "../src/Form/AdminRegister";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/adminlogin" exact component={adminLogin} />
          <Route path="/tenantlogin" exact component={TenantLogin} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/:token" exact component={Admin} />
          <Route path="/store" exact component={Store} />
          <Route path="/store/:token" exact component={Store} />
          <Route path="/register" exact component={UserRegister} />
          <Route path="/registeradmin" exact component={AdminRegister} />
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
