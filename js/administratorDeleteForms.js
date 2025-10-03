document.addEventListener('DOMContentLoaded', () => {

    let deleteUserForm = document.getElementById('deleteUserForm');
    let deleteOrderForm = document.getElementById('deleteOrderForm');

    deleteUserForm.addEventListener('submit', async (event) => {

        event.preventDefault();

        let deleteuserid = document.getElementById('deleteuserid');

        console.log(deleteuserid.value);

        if (deleteuserid.value == null || deleteuserid.value == undefined || deleteuserid.value == NaN) { deleteuserid.value = 0; }

        let DeleteUserData = {
            id: parseInt(deleteuserid.value)
        };

        
        console.log('ID ПОЛЬЗОВАТЕЛЯ - ',deleteuserid.value);

        try {
            response = await fetch('http://localhost/jsiseasy/php/deleteUser.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(DeleteUserData)
            });

            if (response.ok && response.status === 200) {

                alert('Пользователь с ID '+deleteuserid.value+' успешно удалён!');
                window.location.reload();

            } else {   
                alert('ОШИБКА: пользователь с ID '+userid.value+' не найден!');
            }


        }
        catch {
            console.error('Произошла сетевая ошибка: ',error);
            alert('Произошла сетевая ошибка. Пожалуйста, проверьте Ваше подключение к сети Интернет. Код ошибки: '+error);
        }



    });

    deleteOrderForm.addEventListener('submit', async (event) => {

        event.preventDefault();

        let orderid = document.getElementById('deleteorderid');
        
        orderid.value = orderid.value.trim();

        if (orderid.value == null || orderid.value == undefined || orderid.value == NaN) { orderid.value = 0; }

        let DeleteOrderData = {
            id: parseInt(orderid.value)
        };

        console.log('ID ЗАЯВКИ - ',orderid.value);

        try {
            let response = await fetch('http://localhost/jsiseasy/php/deleteOrder.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(DeleteOrderData)
            });

            if (response.ok && response.status === 200) {
                alert('Заявка с ID '+orderid.value+' успешно удалена!');
                window.location.reload();
            } else {
                alert('ОШИБКА: заявка с ID'+orderid.value+' не найдена!');
            }

        }
        catch {
            console.error('Произошла сетевая ошибка: ',error);
            alert('Произошла сетевая ошибка. Пожалуйста, проверьте Ваше подключение к сети Интернет. Код ошибки: '+error);
        }

    });




});