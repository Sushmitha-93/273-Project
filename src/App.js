import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core"; // 'npm i @popper/core' and import jquery dependency otherwise features such as dropdown or toggle doesnt work
import "bootstrap/dist/js/bootstrap.bundle.min";

import NavBar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
