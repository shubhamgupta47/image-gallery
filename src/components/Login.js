import { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
// Relative imports
import { showErrorMessage, showSuccessMessage } from "../helpers/alerts";
import { BASE_API_URL } from "../utils/constants";
import { authenticate, getCookie } from "../helpers/auth";

const Login = ({ history }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Login",
  });

  useEffect(() => {
    if (getCookie("token")) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, []);

  const { email, password, error, success, buttonText } = state;

  const handleChange = () => (e) => {
    const { target } = e;
    setState({
      ...state,
      [target.name]: target.value,
      error: "",
      success: "",
      buttonText: "Login",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, buttonText: "Logging in..." });
    axios
      .post(`${BASE_API_URL}/login`, {
        email,
        password,
      })
      .then((res) => {
        authenticate(res, () => {
          history.push("/");
        });
      })
      .catch((err) => {
        setState({
          ...state,
          error: err.response.data.error,
          buttonText: "Login",
        });
      });
    //
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          value={email}
          onChange={handleChange()}
          type="email"
          name="email"
          className="form-control"
          placeholder="Type Email"
        />
      </div>
      <div className="form-group">
        <input
          value={password}
          onChange={handleChange()}
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password here"
        />
      </div>
      <hr />
      <div className="form-group">
        <button className="btn btn-light">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <div className="col-md-6 offset-md-3">
      <h1 className="mb-4">Login</h1>
      <br />
      {success && showSuccessMessage(success)}
      {error && showErrorMessage(error)}
      {loginForm()}
    </div>
  );
};

export default withRouter(Login);
