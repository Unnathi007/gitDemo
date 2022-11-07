import { Link, Route, useParams, useMatch } from "react-router-dom";

export default function Umatch(props) {
  // useParams() returns an object of the parameters
  // defined in the url of the page
  // For example, the path given in the Route component
  // consists of an "userName" parameter
  // in this form ---> "/profile/:userName"

  const { userName } = useParams();

  const match = useMatch("/umatch/:userName");

  return (
    <div>
      <h1> Profile of {userName}</h1>
   
    </div>
  );

   
   

}
