import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Login, RegisterUser, Posts, CreatePost } from "./components";
import CreatePosts from "./components/CreatePosts";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [postings, setPostings] = useState([]);

  return (
    <div className="app">
      <h1>Stranger's Things!!!</h1>
      {/* if user does not exist, render register user page. if user exists, render login page*/}
      {token ? (
        <Login
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          token={token}
          setToken={setToken}
        />
      ) : (
        <RegisterUser
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          token={token}
          setToken={setToken}
        />
      )}

      <CreatePosts token={token} setToken={setToken} />

      {token ? <Posts postings={postings} setPostings={setPostings} /> : null}
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
