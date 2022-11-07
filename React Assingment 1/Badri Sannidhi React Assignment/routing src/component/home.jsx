// import React from "react";

// function Home() {
//   return <h1>Welcome to the world of Geeks!</h1>;
// }

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: "green" }}>GeeksForGeeks</h1>
      <button onClick={() => navigate("/about")}>About</button>
    </>
  );
};

export default Home;
