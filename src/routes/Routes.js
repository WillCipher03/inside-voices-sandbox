import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import {
  AccountSettings,
  CreatePlaylist,
  Help,
  Home,
  SignIn,
  SignUp
} from "../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/account-settings" component={AccountSettings} />
        <Route path="/create-playlist" component={CreatePlaylist} />
        <Route path="/help" component={Help} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default Routes;
