import React from "react";
import { Switch, Route } from "react-router-dom";
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
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/account-settings" component={AccountSettings} />
      <Route path="/create-playlist" component={CreatePlaylist} />
      <Route path="/help" component={Help} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
};

export default Routes;
