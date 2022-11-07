// import React from "react";

// function About() {
//   return (
//     <div>
//       <h2>GeeksforGeeks is a computer science portal for geeks!</h2>
//       Read more about us at :
//       <a href="https://www.geeksforgeeks.org/about/">
//         https://www.geeksforgeeks.org/about/
//       </a>
//     </div>
//   );
// }
// export default About;

import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: "green" }}>A Computer Science portal for geeks.</h1>
      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </>
  );
};

export default About;
