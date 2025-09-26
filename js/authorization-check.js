document.addEventListener("DOMContentLoaded", () => {


    let divIsAutorizated = document.getElementById('authorizated');
    let divIsNotAutorizated = document.getElementById('notAuthorizated');
    let administratorLink = document.getElementById('administratorLink');
    
    
    administratorLink.style.display = 'none';

    if (sessionStorage.getItem('id') == undefined) {
        divIsAutorizated.style.display = 'none';
        divIsNotAutorizated.style.display = 'flex';
    } else {
        divIsAutorizated.style.display = 'flex';
        divIsNotAutorizated.style.display = 'none';

        if (sessionStorage.getItem('role') >= 3) {
            administratorLink.style.display = 'block';
        } else {
            administratorLink.style.display = 'none';
        }

    }



    // fetch('http://localhost/jsiseasy/php/authorization-check.php')    
    // .then(response => {
    //     if (!response.ok && !response.status === 200) throw new Error(`HTTP error! Status: ${response.status}`);
    //     return response.text();
    // })
    // .then(text => {
    //     console.log('Полный ответ:', text); // Посмотрите, что вернул сервер
    //     const data = JSON.parse(text); // Затем попробуйте распарсить
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.error("Ошибка: ",error);
    // });
    


});