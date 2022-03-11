import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Login } from "./components";

const App = () => {
  return (
    <div className="app">
      <h1>testing app component</h1>
      <Login />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
