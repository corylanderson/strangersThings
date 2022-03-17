const BaseURL = "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT";

const fetchPostings = async () => {
  const result = await fetch(`${BaseURL}/posts`);
  const data = await result.json();

  return data;
};

const fetchRegisterUser = async (username, password) => {
  const result = await fetch(`${BaseURL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await result.json();
  console.log(data);

  return data;
};

const fetchLogin = async (username, password) => {
  const result = await fetch(`${BaseURL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await result.json();

  return data;
};

const fetchUserProfile = async (token) => {
  console.log(token, "this is a token");
  const result = await fetch(`${BaseURL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await result.json();
  console.log(data, "this is from your API");

  return data;
};

const createPost = async (postDetails, token) => {
  const result = await fetch(`${BaseURL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: postDetails.title,
        description: postDetails.description,
        price: postDetails.price,
        location: postDetails.location,
        willDeliver: postDetails.willDeliver,
      },
    }),
  });
  const data = await result.json();
  console.log(data);

  return data;
};

const updatePost = async (updateObj, token, postId) => {
  const result = await fetch(`${BaseURL}/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: updateObj.title,
        description: updateObj.description,
        price: updateObj.price,
        location: updateObj.location,
        willDeliver: updateObj.willDeliver,
      },
    }),
  });
  const data = await result.json();
  console.log(data);

  return data;
};

const deletePost = async (postId, token) => {
  const result = await fetch(`${BaseURL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await result.json();
  console.log(data);

  return data;
};

module.exports = {
  fetchPostings,
  fetchLogin,
  fetchRegisterUser,
  createPost,
  updatePost,
  fetchUserProfile,
  deletePost,
};
