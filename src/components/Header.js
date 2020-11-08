import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { getCookie, logout } from "../helpers/auth";

const Header = ({ history }) => (
  <header>
    <h1>PhotoGalleryApp</h1>
    <div className="links">
      {getCookie("token") ? (
        <>
          {" "}
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/gallery" className="link">
            Gallery
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={() => logout(history)}
            className="link"
          >
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login" className="link">
            Login
          </NavLink>
          <NavLink to="/register" className="link">
            Register
          </NavLink>
        </>
      )}
    </div>
  </header>
);

export default withRouter(Header);
