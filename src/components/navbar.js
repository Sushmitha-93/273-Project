import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Form, Card, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import Login from "./login";
import SignUp from "./SignUp";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link className="navbar-brand" to="/" href="#">
        <b style={{ "letter-spacing": "1px", fontSize: "30px" }}>Reddit</b>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse col-sm-8 justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <input
              className="form-control border rounded-pill"
              style={{ width: "550px" }}
              type="text"
              placeholder="Search"
            />
          </li>
        </ul>
      </div>

      <div
        className="collapse navbar-collapse d-flex flex-row-reverse"
        id="navbarText"
      >
        <ul className="navbar-nav">
          <li className="nav-item me-3">
            <SignUp />
          </li>
          <li className="nav-item">
            <Login />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
