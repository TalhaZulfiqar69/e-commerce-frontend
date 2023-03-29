import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./commons/Navbar.jsx";
import Login from "./components/auth/Login.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
};

export default App;
