import react from "react";

const Logout = () => {
  const logoutUser = () => {
    localStorage.removeItem("token");
  };

  return (
    <form onSubmit={logoutUser}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
