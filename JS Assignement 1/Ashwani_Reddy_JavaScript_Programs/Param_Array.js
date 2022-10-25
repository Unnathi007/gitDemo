class ParamArray
{
    fun(...param)
    {
        for(let i =0; i<param.length;i++)
        {
            console.log(param[i]);
        }
    }
}
let P=new ParamArray();
P.fun(1,2,3,4,5,6,7,8,9)
