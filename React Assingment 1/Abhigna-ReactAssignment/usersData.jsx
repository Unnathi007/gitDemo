import { useState, useContext } from "react";
import {UseFetchData,MyUserName} from "./useFetchData";

 
export default function UserData() {
    const user = useContext(MyUserName);
  const { data } = UseFetchData("https://api.github.com/users");

  return (
    <div>
       
      {data &&
        data.map((user) => {
          console.log("---",MyUserName);
          return (
            <div key={user.id}>
              <h1> {user.login} </h1>
              <p> {user.type} </p>
            </div>
          );
        })}
    </div>
  );
}
