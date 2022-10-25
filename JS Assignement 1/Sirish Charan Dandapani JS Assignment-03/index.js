import {Employee} from './exportClass.js'
import {Hostelier} from './classHostelier.js'

let emp1 = new Employee()
emp1.printDetails()

let hos = new Hostelier(1, "sdalkfjdslakfj", 40000, 'D', 6000, 3000)
console.log(hos.calTotalfees())