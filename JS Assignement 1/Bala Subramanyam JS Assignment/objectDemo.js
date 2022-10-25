car = {
    model : "suziki",
    yom:2020,
    start : async()=>{
        console.log("starting in");
        for(let i = 0;i < 3;i++)
        {
            console.log(i);
           
        }
    },
    speed: "120kmph",
    stop:() =>{
        console.log("Stopping in.....");
        for(let i = 0;i < 5;i++)
        {
            console.log(i);
        }
    }
}

for(varr in car)
{
    console.log(varr);
    console.log(car[varr])
}