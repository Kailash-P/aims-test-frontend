import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./app/components/LandingPage/views/LandingPage";
import SignUp from "./app/components/SignUp/views/SingUp";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signIn" component={LandingPage} />
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
