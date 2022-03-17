import React, { useEffect } from "react";
import { fetchPostings } from "../api";

const Search = ({ search, setSearch, postings, setPostings }) => {
  useEffect(() => {
    const getPosts = async () => {
      const results = await fetchPostings();
      setPostings(results.data.posts);
    };
    getPosts();
  }, []);

  const searchResults = postings.filter((posting) =>
    posting.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchResults);
  return (
    <div>
      <form method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Postings</span>
        </label>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          id="header-search"
          placeholder="search"
          name="search"
        />
        {/* <button type="submit">Search</button> */}
      </form>

      <div>
        {searchResults.map((searchResult) => {
          return (
            <div key={searchResult._id}>
              <h2>{searchResult.title}</h2>
              <h4>Description: {searchResult.description}</h4>
              <h4>Price :{searchResult.price}</h4>
              <h4>Location: {searchResult.location}</h4>
              {/* {searchResult.author._id !== profile._id ? null : (
                <Link
                  to={{ pathname: "/editPost", state: { post: searchResult } }}
                >
                  <button value={searchResult._id} type="submit">
                    Edit Post
                  </button>
                </Link>
              )}
              {searchResult.author._id !== profile._id ? null : (
                <button type="submit">Delete Post</button> */}
              {/* )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
