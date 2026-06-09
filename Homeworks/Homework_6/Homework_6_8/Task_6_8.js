let coursesAndDurationArray = [

    {title: `JavaScript Complex`, monthDuration: 5},

    {title: `Java Complex`, monthDuration: 6},

    {title: `Python Complex`, monthDuration: 6},

    {title: `QA Complex`, monthDuration: 4},

    {title: `FullStack`, monthDuration: 7},

    {title: `Frontend`, monthDuration: 4}

];

const finisharray=coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map(value => value={id:(coursesAndDurationArray.indexOf(value)+1),title:value.title,monthDuration: value.monthDuration});
console.log(finisharray);