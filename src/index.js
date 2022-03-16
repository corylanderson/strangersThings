import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { fetchUserProfile } from "./api";
import {
  Login,
  RegisterUser,
  Posts,
  Logout,
  CreatePosts,
  Profile,
  Navbar,
} from "./components";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [postings, setPostings] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const profileResult = async () => {
      const results = await fetchUserProfile(localStorage.getItem("token"));
      console.log(JSON.stringify(results));

      console.log(results.data);
      setProfile(results.data);
    };
    profileResult();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <h1>Stranger's Things!!!</h1>

      {/* {isLoggedIn ? <Redirect to="/profile" /> : <Redirect to="/login" />} */}

      <Switch>
        <Route path="/posts">
          <Posts postings={postings} setPostings={setPostings} />
        </Route>
        <Route path="/createPost">
          <CreatePosts />
        </Route>
        <Route path="/profile">
          <Profile
            token={token}
            setToken={setToken}
            profile={profile}
            setProfile={setProfile}
          />
        </Route>
        <Route path="/createUser">
          <RegisterUser
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            token={token}
            setToken={setToken}
          />
        </Route>
        <Route path="/login">
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            token={token}
            setToken={setToken}
            setIsLoggedIn={setIsLoggedIn}
          />
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
