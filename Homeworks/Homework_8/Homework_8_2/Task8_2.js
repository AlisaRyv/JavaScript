function deepCopy(object)
{
    let funcs=[];
    let copyObject={};
    if(object)
    {
        for (const objectsKey in object)
        {
            if(typeof (object[objectsKey])==="function")
            {
                funcs.push({func:object[objectsKey],funcName:objectsKey});
            }
        }
        copyObject=JSON.parse(JSON.stringify(object));
        for (const fun of funcs)
        {
            copyObject[fun.funcName]=fun.func;
        }
        return copyObject;
    }
}

let objectStudent={
    name: `Alisa`,
    surname: `Ryvkina`,
    age:20,
    greeting()
    {
        console.log(`Hello! My name is ${this.name} ${this.surname}.`);
    },
    aging()
    {
        console.log(`I'm ${this.age}.`);
    }

};

let copyObjectStudent = deepCopy(objectStudent);
console.log(copyObjectStudent);
copyObjectStudent.greeting();