document.addEventListener('DOMContentLoaded', () => {

    let level = document.getElementById('level');
    let exp = document.getElementById('exp');

    let nickname = document.getElementById('nickname');

    let coursesCompleted = document.getElementById('coursesCompleted');
    let tasksSolved = document.getElementById('tasksSolved');
    let lessonsWatched = document.getElementById('lessonsWatched');
    let solutionsProposed = document.getElementById('solutionsProposed');
    let daysOfStudying = document.getElementById('daysOfStudying');

    let login = document.getElementById('login');
    let description = document.getElementById('description');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let pass = document.getElementById('pass');

    if (sessionStorage.getItem('id') == undefined) {
        window.location.href = './main.html';
    } else {
        level.innerText = sessionStorage.getItem('level');
        exp.innerText = sessionStorage.getItem('exp')+checkLevel(sessionStorage.getItem('level'));
        coursesCompleted.innerText = sessionStorage.getItem('coursesCompleted');
        tasksSolved.innerText = sessionStorage.getItem('tasksSolved');
        lessonsWatched.innerText = sessionStorage.getItem('lessonsWatched');
        solutionsProposed.innerText = sessionStorage.getItem('solutionsProposed');
        daysOfStudying.innerText = sessionStorage.getItem('daysOfStudying');

        if (sessionStorage.getItem('role') >= 3) {
            nickname.innerHTML = `<img src='./media/icons/content/star.svg' class='star' alt='star'>${sessionStorage.getItem('login')}`;
        } else {
            nickname.innerText = sessionStorage.getItem('login');
        }

        login.value = sessionStorage.getItem('login');
        description.value = sessionStorage.getItem('description');
        email.value = sessionStorage.getItem('email');
        phone.value = sessionStorage.getItem('phone');
        pass.value = sessionStorage.getItem('pass');

    }


    function checkLevel(currentLevel) {
        if (currentLevel == 1) { return '/100 EXP';}
        else if (currentLevel == 2) { return '/500 EXP'; }
        else { return undefined; } 

        // закончить!

        // написать функцию проверки на уровень!!!
    }


});

