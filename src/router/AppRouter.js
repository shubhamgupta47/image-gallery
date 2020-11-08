import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Gallery from "../components/Gallery";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <HashRouter basename="/">
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={HomePage} path="/" exact={true} />
          <Route component={Gallery} path="/gallery" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </HashRouter>
);

export default AppRouter;
