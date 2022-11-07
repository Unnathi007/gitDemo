import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';



function dropDownDisplay(loc) {
  console.log("DD manip")
  var citylist = document.getElementById("city");
  for (var i = 0; i < loc.length; i++)
  {
    var option = document.createElement("option");
    option.text = loc[i].cityname;
    citylist.add(option);

    }
}

function options_list()
{
 const loc = [
  { 'cityname': "hyderabad", },
  { 'cityname': "vijayawada" },
  { 'cityname': "banglore" },
  ];
  

}

function Rdrop1{
    const [drop1_sel, setDrop1] = useState(null);

    
    
    return (
    <div>
        <select id="city" onChange={showDD2}>{ options_list()}</select>
      <button onClick={dropDownDisplay}>ShowData</button>
      <div id="dd2" className="dd2">
        <select id="hosp"></select>
      </div>
    </div>
  );
}