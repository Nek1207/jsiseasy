document.addEventListener('DOMContentLoaded', async (event) => {
    
    event.preventDefault();

    let ordersInner = document.getElementById('ordersInner');
    let usersInner = document.getElementById('usersInner');


    let deleteDataLine = document.getElementById('deleteDataLine');
    let deletedDataSection = document.getElementById('deletedDataSection');


    const data = {};


    if (sessionStorage.getItem('role') <= 2) {
        deleteDataLine.style = 'display: none;';
        deletedDataSection.style = 'display: none;';
    } else {
        deleteDataLine.style = 'display: flex;';
        deletedDataSection.style = 'display: flex;';
    }

    try {
        let response = await fetch('http://localhost/jsiseasy/php/allOrdersInfo.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok && response.status === 200) {
            let result = await response.text();

            result = JSON.parse(result);

            console.log(result);

            if (result[0] == undefined || result == null) {
                ordersInner.innerHTML = '<h2>Оставленных заявок не найдено</h2>';
            } else {
                let table = "<table class='orders__inner-table'>";
                table += "<thead>";
                table += "<tr>";
                table += "<th>ID</th>";
                table += "<th>Наименование</th>";
                table += "<th>Логин</th>";
                table += "<th>E-mail</th>";
                table += "<th>Номер телефона</th>";
                table += "<th>Дата подачи</th>";
                table += "<th>Стоимость</th>";
                table += "<th>Статус</th>";
                table += "</tr>";
                table += "</thead>";

                table += "<tbody>"

                result.forEach(element => {
                    table += "<tr>";

                    table += `<td>${element.id}</td>`;
                    table += `<td>${element.name}</td>`;
                    table += `<td>${element.login}</td>`;
                    table += `<td>${element.email}</td>`;
                    table += `<td>${element.phone}</td>`;
                    table += `<td>${element.date}</td>`;
                    table += `<td>${element.cost}</td>`;

                    if (element.status === "В процессе") { table += `<td class='in-process'>${element.status}</td>`; }
                    if (element.status === "Отклонено") { table += `<td class='rejected'>${element.status}</td>`; }
                    if (element.status === "Выполнено") { table += `<td class='success'>${element.status}</td>`; }

                    table += "</tr>";

                });

                table += "</tbody>";
                table += "</table>";

                ordersInner.innerHTML = table;
                
            }

        } else {

        }



    }
    catch {
        console.error('Произошла сетевая ошибка');
        alert('Произошла сетевая ошибка. Пожалуйста, проверьте Ваше подключение к сети Интернет.');
    }

    try {
        let response = await fetch('http://localhost/jsiseasy/php/allUsersInfo.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok && response.status === 200) {
            let result = await response.text();

            result = JSON.parse(result);

            console.log(result);

            if (result[0] == undefined || result == null) {
                usersInner.innerHTML = '<h2>Зарегистрированных пользователей не найдено</h2>';
            } else {
                let table = "<table class='users__inner-table'>";
                table += "<thead>";
                table += "<tr>";
                table += "<th>ID</th>";
                table += "<th>Логин</th>";
                table += "<th>E-mail</th>";
                table += "<th>Номер телефона</th>";
                table += "<th>Пароль</th>";
                table += "<th>Роль</th>";
                table += "</tr>";
                table += "</thead>";

                table += "<tbody>"

                result.forEach(element => {
                    table += "<tr>";

                    table += `<td>${element.id}</td>`;
                    table += `<td>${element.login}</td>`;
                    table += `<td>${element.email}</td>`;
                    table += `<td>${element.phone}</td>`;
                    table += `<td>${element.pass}</td>`;

                    if (element.role == '1') { table += `<td>Стандарт</td>`; }
                    if (element.role == '2') { table += `<td class='gold'>VIP</td>`; }
                    if (element.role == '3') { table += `<td class='blue'>Администратор</td>`; }
                    if (element.role == '4') { table += `<td class='purple'>Владелец</td>`; }

                    table += "</tr>";

                });

                table += "</tbody>";
                table += "</table>";

                usersInner.innerHTML = table;
                
            }

        } else {

        }



    }
    catch {
        console.error('Произошла сетевая ошибка');
        alert('Произошла сетевая ошибка. Пожалуйста, проверьте Ваше подключение к сети Интернет.');
    }

});