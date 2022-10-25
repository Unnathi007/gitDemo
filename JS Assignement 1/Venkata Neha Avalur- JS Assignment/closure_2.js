let Arithmetic= function(number){
   var math=number;
    return {
        add :function(num){
            console.log(math+num);
        },
        sub : function(num){
            console.log(math-num);
        },
        mul : function(num){
            console.log(math*num);
        }
    }
}