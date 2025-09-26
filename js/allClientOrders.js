document.addEventListener('DOMContentLoaded', async (event) => {

    event.preventDefault();


    const myOrdersInner = document.getElementById('myOrdersInner');


    const UserData = {
        login: String(sessionStorage.getItem('login'))
    }


    try {
        const response = await fetch('http://localhost/jsiseasy/php/allClientOrders.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UserData)
        });

        if (response.ok && response.status === 200) {
            const result = await response.text();

            
            result = JSON.parse(result);

            console.log(result);
            

            if (result[0] == undefined || result == null) {
                myOrdersInner.innerHTML = '<h2>У вас пока нет заявок.</h2>';
            } else {
                let table = "<table class='myorders__inner-table'>";
                table += "<thead>";
                table += "<tr>";
                table += "<th>№</th>";
                table += "<th>Наименование заявки</th>";
                table += "<th>Дата подачи</th>";
                table += "<th>Стоимость</th>";
                table += "<th>Статус</th>";
                table += "</tr>";
                table += "</thead>";

                table += "<tbody>"

                result.forEach(element => {
                    table += "<tr>";

                    table += `<td>${element.id}</td>`;

                    table += "</tr>";

                });

                table += "</tbody>";
                table += "</table>";
                
            }

        }

    }
    catch {
        console.error('Произошла сетевая ошибка');
        alert('Произошла сетевая ошибка. Пожалуйста, проверьте Ваше подключение к сети Интернет.');
    }

});