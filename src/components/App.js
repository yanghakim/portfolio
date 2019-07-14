import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../sass/App.sass";

import Home from "./Home";
import IntWeb from "./IntWeb";
import IntApp from "./IntApp";
import FourSL from "./FourSL";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/intweb" component={IntWeb} />
        <Route path="/intapp" component={IntApp} />
        <Route path="/foursl" component={FourSL} />
        <Route path="/portfolio" component={Portfolio} />
      </BrowserRouter>
    </div>
  );
}

export default App;
