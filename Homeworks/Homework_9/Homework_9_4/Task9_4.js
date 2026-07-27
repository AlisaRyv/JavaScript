let coursesAndDurationArray = [

    {title: `JavaScript Complex`, monthDuration: 5},

{title: `Java Complex`, monthDuration: 6},

{title: `Python Complex`, monthDuration: 6},

{title: `QA Complex`, monthDuration: 4},

{title: `FullStack`, monthDuration: 7},

{title: `Frontend`, monthDuration: 4}

];

let mainDiv=document.createElement(`divMain`);
for (let course of coursesAndDurationArray)
{
    let div = document.createElement('div');
    div.innerText = `${course.title} ${course.monthDuration}`;
    mainDiv.appendChild(div);
}
document.body.appendChild(mainDiv);