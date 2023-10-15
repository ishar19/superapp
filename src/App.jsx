import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

import React from "react";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
