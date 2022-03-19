import React, { useEffect, useState } from "react";
import { fetchPostings } from "../api";

const Search = ({ postings, setFilteredPosts }) => {
  const [search, setSearch] = useState("");

  //searchResults will equal a filter of postings that matches the search input. if true, these posts will render. if false, these posts will not render

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchResults = postings.filter((posting) => {
      const lowerTitle = posting.title.toLowerCase();
      const lowerDescription = posting.description.toLowerCase();
      const lowerSearch = search.toLowerCase();
      if (lowerTitle.includes(lowerSearch)) {
        return true;
      } else if (lowerDescription.includes(lowerSearch)) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredPosts(searchResults);
    console.log(searchResults, "this is search results from handle submit");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} method="get">
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
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
