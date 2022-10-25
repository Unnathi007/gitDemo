import { Hosteller } from "./Hosteller.js";
let obj = new Hosteller(1,"Pedha Akka", "A" , 10000,2000,15000);
let fees = obj.claculateFees();
console.log(fees);