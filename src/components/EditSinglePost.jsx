import React, { useState } from "react";
import { updatePost } from "../api";

const EditSinglePost = () => {
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
    console.log(postDetails);
    const updatePost = async () => {
      await updatePost(postDetails, localStorage.getItem("token"));
    };
    updatePost();
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
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

        <button type="submit">Update Posting</button>
      </form>
    </div>
  );
};

export default EditSinglePost;
