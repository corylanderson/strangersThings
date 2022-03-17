import React, { useState } from "react";
import { createPost } from "../api";

const CreatePosts = ({ token, setToken }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postDetails = {
      title,
      description,
      price,
      location,
      willDeliver,
    };

    const creatingPost = async () => {
      await createPost(postDetails, localStorage.getItem("token"));
    };
    creatingPost();
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);

  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleWillDeliver = () => {
    setWillDeliver(!willDeliver);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          placeholder="title"
          onChange={handleTitle}
        ></input>

        <input
          value={description}
          type="text"
          placeholder="description"
          onChange={handleDescription}
        ></input>

        <input
          value={price}
          type="text"
          placeholder="price"
          onChange={handlePrice}
        ></input>

        <input
          value={location}
          type="text"
          placeholder="location"
          onChange={handleLocation}
        ></input>

        <input
          value={willDeliver}
          type="checkbox"
          onChange={handleWillDeliver}
        ></input>

        <button type="submit">Create Posting</button>
      </form>
    </div>
  );
};

export default CreatePosts;
