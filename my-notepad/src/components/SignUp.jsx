import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const Json = await response.json();
    console.log(Json);
    if (Json.success) {
      //redirect
      localStorage.setItem("token", Json.authToken);
      props.showAlert("Signed Up Successfully!", "success");
      navigate("/");
    } else {
      // alert("invalid");
      props.showAlert("Invalid Details", "danger");
    }
  };

  return (
    <div id="signupBody" className="container my-5">
      <div className="signupBox rounded-5 shadow">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h3>Sign Up</h3>
          </div>
          <div className="inputBox form-outline my-4">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              minLength={5}
              required
            />
            <label className="form-label" htmlFor="cpassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              className="form-control"
              onChange={handleChange}
              minLength={5}
              required
            />
          </div>

          {/* <div className="form-outline my-4">
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="cpassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              className="form-control"
              onChange={handleChange}
              minLength={5}
              required
            />
          </div> */}
          
          <div className="signup-btn">
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4"
            disabled={
              credentials.password !== credentials.cpassword ||
              credentials.password === ""
            }
          >
            Sign Up
          </button>
          </div>

          <div className="text-center">
            <p>
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
