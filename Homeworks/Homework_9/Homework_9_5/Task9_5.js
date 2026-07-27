let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let main=document.createElement(`main`);

for (let course of coursesArray)
{
    let bigDiv = document.createElement('div');
    bigDiv.classList.add(`item`);
//-----------------TITLE---------------------//
    let h1 = document.createElement('h1');
    h1.innerText = course.title;

//-----------------DURATION---------------------//
    let smallDiv = document.createElement('div');
    smallDiv.classList.add(`duration`);

    let monthDuration=document.createElement('p');
    monthDuration.innerText = `${course.monthDuration}`;

    let hourDuration=document.createElement('p');
    hourDuration.innerText = `${course.hourDuration}`;

    smallDiv.append(monthDuration, hourDuration);

    //-----------------------LIST----------------------//
    let ul=document.createElement('ul');
    ul.classList.add(`list`);
    for (const discipline of course.modules)
    {
        let li=document.createElement('li');
        li.innerText=discipline;
        ul.appendChild(li);
    }

    let hr = document.createElement('hr');

    bigDiv.append(h1,smallDiv,ul,hr);
    main.appendChild(bigDiv);
}
document.body.appendChild(main);
