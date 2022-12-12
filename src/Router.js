import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";

// main , sub 페이지로 나누어 렌더링
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
