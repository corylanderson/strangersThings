import react from "react";

const Logout = ({ setIsLoggedIn, isLoggedIn, token, setToken }) => {
  const logoutUser = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken(localstorage.removeitem("token"));
  };

  return (
    <form
      onSubmit={() => {
        logoutUser();
      }}
    >
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
