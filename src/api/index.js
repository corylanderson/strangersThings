const BaseURL = "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT";

const fetchPostings = async () => {
  const result = await fetch(`${BaseURL}/posts`);
  const data = await result.json();

  return data;
};

const fetchRegisterUser = async (username, password) => {
  const result = await fetch(`${BaseURL}/register`, {
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

const fetchLogin = async (username, password) => {
  const result = await fetch(`${BaseURL}/login`, {
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

module.exports = { fetchPostings, fetchLogin, fetchRegisterUser };
