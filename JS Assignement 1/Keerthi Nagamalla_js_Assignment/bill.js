class billing{

    bill(name,price, ...parameters)

    {

        let total=0

        let amount

        for(let i=0;i<parameters.length;i++)

            total=total+parameters[i];

        amount=price*total

        console.log(`NAME: ${name} PRICE: ${price} UNITS: ${total} AMOUNT: ${amount}`)

    }

}

let b=new billing()

b.bill("Book", 10, 5,6,6,3)