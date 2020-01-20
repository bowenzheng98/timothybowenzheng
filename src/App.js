import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/my-guide" component={About} />
      <Route path="/notes" component={Notes} />
    </BrowserRouter>
  );
}

export default App;
