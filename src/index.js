import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { fetchUserProfile, fetchPostings } from "./api";
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
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const currentToken = localStorage.getItem("token");

    try {
      if (currentToken) {
        const profileResult = async () => {
          const results = await fetchUserProfile(currentToken);
          setIsLoggedIn(true);
          setProfile(results.data);
        };
        profileResult();
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const results = await fetchPostings();
      setPostings(results.data.posts);
    };
    getPosts();
  }, []);

  useEffect(() => {
    setFilteredPosts(postings);
  }, [postings]);

  return (
    <div id="app">
      <div id="app-control">
        <Navbar />
        <Search postings={postings} setFilteredPosts={setFilteredPosts} />
        <h1>Stranger's Things!!!</h1>

        {isLoggedIn ? (
          <Logout
            token={token}
            setToken={setToken}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : null}
      </div>
      <Switch>
        <Route path="/posts">
          <Posts
            postings={postings}
            setPostings={setPostings}
            profile={profile}
            setProfile={setProfile}
            filteredPosts={filteredPosts}
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
