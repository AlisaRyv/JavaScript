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
    div.classList.add(`item`);

    let h1 = document.createElement('h1');
    h1.classList.add(`heading`);
    h1.innerText = course.title;

    let p = document.createElement('p');
    p.classList.add(`description`);
    p.innerText = course.monthDuration;

    div.append(h1,p);
    mainDiv.appendChild(div);
}
document.body.appendChild(mainDiv);
