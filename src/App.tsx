import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (

    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/listing" element={<Listing />}></Route>
        </Routes>
      </Router>
    </React.StrictMode>

  );
}

export default App;
