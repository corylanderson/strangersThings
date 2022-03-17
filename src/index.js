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
  EditSinglePost,
  Search,
} from "./components";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [postings, setPostings] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const currentToken = localStorage.getItem("token");

    try {
      if (currentToken) {
        const profileResult = async () => {
          const results = await fetchUserProfile(currentToken);
          console.log(JSON.stringify(results));
          setIsLoggedIn(true);
          console.log(results.data);
          setProfile(results.data);
        };
        profileResult();
      }
    } catch (error) {}
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Search
        search={search}
        setSearch={setSearch}
        postings={postings}
        setPostings={setPostings}
      />
      <h1>Stranger's Things!!!</h1>

      {isLoggedIn ? (
        <Logout
          token={token}
          setToken={setToken}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : null}

      <Switch>
        <Route path="/posts">
          <Posts
            postings={postings}
            setPostings={setPostings}
            profile={profile}
            setProfile={setProfile}
          />
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
        <Route path="/editPost">
          <EditSinglePost />
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
