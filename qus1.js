function findeven(int)
{
    let arry=[]
    for(let i=0;i<int.length;i++)
    {
        if(int[i]%2===0)
        {
            arry.push(int[i]);
        }
    }
    for(let i=0;i<arry.length;i++)
    {
        console.log(arry[i])
    }
}
   
   findeven(int=[2,6,4,9,10,44,99,21])