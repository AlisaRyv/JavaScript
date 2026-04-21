function find_min(array)
{
    let min=array[0];
    for (let i = 1; i < array.length; i++)
    {
        if(array[i] < min)
            min=array[i];
    }
    return min;
}
let arr=[-23, 13, 45, 0, 345, -2, -256, 87];
console.log(find_min(arr));