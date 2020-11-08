import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Gallery from "../components/Gallery";
import NotFoundPage from "../components/NotFoundPage";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../components/Register";

const AppRouter = () => (
  <HashRouter basename="/">
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <PrivateRoute component={HomePage} path="/" exact={true} />
          <PrivateRoute component={Gallery} path="/gallery" />
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </HashRouter>
);

export default AppRouter;
