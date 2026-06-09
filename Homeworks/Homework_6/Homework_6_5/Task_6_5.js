function stringToArray()
{
    if(typeof str===`string`)
    {
        return str.split(` `);
    }
    else
        return `Invalid argument: ${str}`;
}
let str = `Ревуть воли як ясла повні`;
let arr=stringToArray(str);
console.log(arr);