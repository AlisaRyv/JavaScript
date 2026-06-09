function sortNums(array,direction)
{
    if(direction ===`ascending`)
    {
       return array.sort((a,b) => a-b);
    }
    if(direction ===`descending`)
    {
        return array.sort((a,b) => b-a);
    }
    return `Invalid direction: ${direction}`;
}
let nums = [11,21,3];
let dir=prompt('Enter direction sort:');
console.log(sortNums(nums,dir));