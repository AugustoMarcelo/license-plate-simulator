import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import VWSimulator from "./pages/VWSimulator";
import HondaSimulator from "./pages/HondaSimulator";
import Home from "./pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vw" component={VWSimulator} />
        <Route path="/honda" component={HondaSimulator} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
