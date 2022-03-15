import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Login,
  RegisterUser,
  Posts,
  Logout,
  CreatePosts,
  Profile,
} from "./components";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [postings, setPostings] = useState([]);
  const [hasUser, setHasUser] = useState(false);

  return (
    <div className="app">
      <h1>Stranger's Things!!!</h1>
      {/* if user does not exist, render register user page. if user exists, render login page*/}
      {hasUser ? (
        <Login
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          token={token}
          setToken={setToken}
          hasUser={hasUser}
          setHasUser={setHasUser}
        />
      ) : (
        <RegisterUser
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          token={token}
          setToken={setToken}
          hasUser={hasUser}
          setHasUser={setHasUser}
        />
      )}
      {token ? <Logout /> : null}

      <Switch>
        <Route path="/posts">
          <Posts postings={postings} setPostings={setPostings} />
        </Route>
        <Route path="/createPost">
          <CreatePosts />
        </Route>
        <Route exact path="/profile">
          <Profile token={token} setToken={setToken} />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
