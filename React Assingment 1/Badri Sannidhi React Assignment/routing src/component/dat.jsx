import React, { Fragment, useEffect, useState, useContext } from "react";
import SelectedCity from "../Appl";

//console.log(loc);

export function GetDropDown() {
  const [cities, setCities] = useState([]);
  console.log(this);

  const getCities = async () => {
    try {
      const response = await fetch("http://localhost:5000/a/city", {
        method: "POST",
      });

      const jsonData = await response.json();

      setCities(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCities();
  });

  console.log(cities);

  //console.log("Entered showdata")

  return (
    <select onChange={sendCity} id="cityselection">
      <option>Please choose one option</option>
      {cities.map((city, index) => {
        return <option key={index}>{city.cityname}</option>;
      })}
    </select>
  );
}
function RenderDropdown() {
  let user = {
    name: "ji",
    sel_city: "",
  };
  return (
    <div>
      <GetDropDown />
    </div>
  );
}
var sel_city = "";
function sendCity() {

  sel_city = document.getElementById("cityselection").value;
    localStorage.setItem("selectedcity", sel_city);
 
}

export default RenderDropdown;
