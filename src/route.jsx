import React from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
//import View from "./components";
import CreateFilm from "./components/CreateFilm";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Registraion";
import SinglePage from "./components/SinglePage";

export default function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {" "}
          <Redirect to="/films" exact />{" "}
        </Route>
        <Route path="/films" exact component={LandingPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/create" component={CreateFilm} />
        <Route path="/films/:filmid">
          <SinglePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
