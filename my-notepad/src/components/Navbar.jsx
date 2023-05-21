import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const context = useContext(NoteContext);
  const { user, getUser } = context;
  // let use='';

  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, [user]);
  // useEffect(() => {
  //   use=user.name;
  // }, [user]);

  React.useEffect(() => {
    // console.log(location);
  }, [location]);

  return (
    <nav className="container navbar navbar-expand-lg  mt-3 shadow bg-light rounded">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          My Notepad
        </Link> */}

        {!localStorage.getItem("token") ? (
          <>
            <Link className="navbar-brand" to="/">
              My Notepad
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
              <Link className="btn btn-primary mx-2" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-2" to="/signup" role="button">
                Sign Up
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link className="navbar-brand" to="/">
              Hello! {user.name}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"></li>
              </ul>
              <Link
                className="btn btn-primary mx-2"
                to="/login"
                role="button"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
