import {person} from "./person.js";
export class employee extends person{
       jobrole
       organisation
       constructor(job,org){
           super();
           this.jobrole=job
           this.organisation=org
       }
       
       display1(){
        super.display();
        console.log(`jobrole:${this.jobrole}, organisation:${this.organisation}`);
       }
}