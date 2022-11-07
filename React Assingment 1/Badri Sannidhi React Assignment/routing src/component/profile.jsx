import { useParams } from "react-router-dom";

export default function Profile(props) {
  // useParams() returns an object of the parameters
  // defined in the url of the page
  // For example, the path given in the Route component
  // consists of an "userName" parameter
  // in this form ---> "/profile/:userName"
  const { userName,empid,team } = useParams();

  return (
    <div>
      <h1> Profile of {userName}</h1>

      <p> This is the profile page of {userName}</p>
          <p> Emp id: {empid}</p>
          <p> Team : { team}</p>
    </div>
  );
}
