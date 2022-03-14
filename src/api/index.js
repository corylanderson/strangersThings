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

const fetchUserProfile = async (username, password) => {
  const result = await fetch(`${BaseURL}/users/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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

const createPost = async (postDetails, token) => {
  const result = await fetch(`${BaseURL}/Posts`, {
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
        willDeliver: true,
      },
    }),
  });
  const data = await result.json();
  console.log(data);

  return data;
};

// const updatePost = async (updateObj, token, postId) => {
//   const result = await fetch(`${BaseURL}/users/me`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`
//     },
//     body: JSON.stringify({
//       user: {
//         username,
//         password,
//       },
//     }),
//   });
//   const data = await result.json();
//   console.log(data)

//   return data;
// };

module.exports = { fetchPostings, fetchLogin, fetchRegisterUser, createPost };
