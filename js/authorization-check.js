document.addEventListener("DOMContentLoaded", () => {

    fetch('http://localhost/jsiseasy/php/authorization-check.php')    
    .then(response => {
        if (!response.ok && !response.status === 200) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.text();
    })
    .then(text => {
        console.log('Полный ответ:', text); // Посмотрите, что вернул сервер
        const data = JSON.parse(text); // Затем попробуйте распарсить
        console.log(data);
    })
    .catch(error => {
        console.error("Ошибка: ",error);
    });
    


});