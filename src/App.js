import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./Assets/Fonts.css";
import Router from "./Navigation/Router";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
};

export default App;
