import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
