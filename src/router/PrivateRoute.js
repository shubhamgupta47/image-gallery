import React from "react";
import { Route, Redirect } from "react-router";
import { getCookie } from "../helpers/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getCookie("token") ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
