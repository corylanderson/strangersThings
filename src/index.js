import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Login, RegisterUser } from "./components";

const App = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
 
  return (
    <div className="app">
      <h1>Stranger's Things</h1>
      {/* if user does not exist, render register user page. if user exists, render login page*/}
      <RegisterUser />
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
