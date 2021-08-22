import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import Header from "./Pages/Header";
import ProjectName from "./Pages/ProjectName";
import Home from "./Pages/Home";
import ViewItem from "./Pages/ViewItem";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <ProjectName />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={() => <div>About Page</div>} />
          <Route path="/contact" component={() => <div>Contact Page</div>} />
          <Route path="/home/view" component={ViewItem} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
