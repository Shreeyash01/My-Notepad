import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const Json = await response.json();
    console.log(Json);
    if (Json.success) {
      //redirect
      localStorage.setItem("token", Json.authToken);
      props.showAlert("Logged In Successfully!", "success");
      navigate("/");
    } else {
      // alert("invalid");
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  return (
    <div id="loginBody" className="container my-5">
      {/* <div className="w-50 mx-auto p-5 rounded-5 shadow"> */}
      <div className="loginBox rounded-5 shadow">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h3>Login</h3>
          </div>
          <div className="inputBox form-outline my-4">
            <label className="form-label mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              className="form-control"
              onChange={handleChange}
            />
            <label className="form-label mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              value={credentials.password}
            />
          </div>

          <div className="login-btn">
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Login
            </button>
          </div>

          {/* <div className="row mb-4 text-center">
            <div className="col">
              <Link to="/">Forgot password?</Link>
            </div>
          </div> */}

          <div className="text-center">
            <p>
              New here ? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
