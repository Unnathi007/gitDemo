import "./showData.css"
  
const loc = [
  { 'cityname': "hyderabad", },
  { 'cityname': "vijayawada" },
  { 'cityname': "banglore" },
];

const hosp_list = [
  { "cityname" : "hyderabad", "hospname": "yashoda" },
  { "cityname": "vijayawada", "hospname": "sunshine" },
  { "cityname": "banglore", "hospname": "rainbow" },
  { "cityname": "hyderabad", "hospname": "yashoda2" },
  { "cityname": "vijayawada", "hospname": "sunshine2" },
  { "cityname": "banglore", "hospname": "rainbow2" },
];

//console.log(loc);

 function ShowData() {
  console.log("Entered showdata")
  return (
    <div>
      <select id="city" onChange={showDD2}></select>
      <button onClick={dropDownDisplay}>ShowData</button>
      <div id="dd2" className="dd2">
        <select id="hosp"></select>
      </div>
    </div>
  );
}
function dropDownDisplay() {
  console.log("DD manip")
  var citylist = document.getElementById("city");
  for (var i = 0; i < loc.length; i++)
  {
    var option = document.createElement("option");
    option.text = loc[i].cityname;
    citylist.add(option);

    }
}

function showDD2() {
  console.log("DD2");
  var city = document.getElementById("city").value;
  var hosp_dd = document.getElementById("hosp");
  for (var i = 0; i < hosp_list.length; i++) {
    var option = document.createElement("option");
    if (hosp_list[i].cityname === city) {
      option.text = hosp_list[i].hospname;
      hosp_dd.add(option);
    }
  }

  var hospdiv = document.getElementById('dd2');
  hospdiv.style.visibility='visible'
}


export default ShowData