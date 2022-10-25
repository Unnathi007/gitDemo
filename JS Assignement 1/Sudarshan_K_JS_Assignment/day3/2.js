class person{
    constructor(id,name){
        this.id=id
        this.name=name
    }
    fun(num){
        console.log(`1 ${num}`)
    }
    fun(num,num2){
        console.log(`2 ${num} ${num2}`)
    }
    fun(...param){
        for(let i =0; i<param.length;i++){
            console.log(param[i]);
        }
    }
}

p=new person(1,"suda")
p.fun()
p.fun(1)
console.log('---')
p.fun(1,2)
p.fun(1,2,3)