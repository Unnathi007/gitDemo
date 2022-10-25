car={
    modelNo: "1020s45",
    Company: "Audi",
    price: "4000",
    getSpeed:()=>{
        return 60;
    },
    getDetails:()=>{
     console.log(`company : ${car.Company} ; speed: ${car.getSpeed()}`);
    }
}