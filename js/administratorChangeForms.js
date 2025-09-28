document.addEventListener('DOMContentLoaded', () => {

    let changeRoleForm = document.getElementById('changeRoleForm');
    let changeStatusForm = document.getElementById('changeStatusForm');

    changeRoleForm.addEventListener('submit', async (event) => {

        event.preventDefault();

        let userid = document.getElementById('userid');

        console.log(userid.value);

        if (userid.value == null || userid.value == undefined || userid.value == NaN) { userid.value = 0; }

        const roles = document.getElementById('role');

        let role = 0;

        if (roles.selectedIndex == 0) { role = 1; }
        if (roles.selectedIndex == 1) { role = 2; }
        if (roles.selectedIndex == 2) { role = 3; }
        if (roles.selectedIndex == 3) { role = 4; }

        const selectedRole = roles.options[roles.selectedIndex].text;


        changeUserData = {
            id: userid.value,
            role: role
        }

        
        console.log(changeUserData);

        try {
            response = await fetch('http://localhost/jsiseasy/php/changeUserRole.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(changeUserData)
            });

            if (response.ok && response.status === 200) {

                alert('Роль пользователя с ID '+userid.value+' успешно изменена на '+selectedRole+'!');
                window.location.reload();

            } else {   
                alert('ОШИБКА: пользователь с ID '+userid.value+' не найден!');
            }


        }
        catch {
            console.error('Произошла сетевая ошибка: ',error);
            alert('Произошла сетевая ошибка. Пожалуйста, проверьте Ваше подключение к сети Интернет. Код ошибки: ',error);
        }



    });


    changeStatusForm.addEventListener('submit', async (event) => {

        event.preventDefault();

        let orderid = document.getElementById('orderid');

        console.log(orderid.value);

        if (orderid.value == null || orderid.value == undefined || orderid.value == NaN) { orderid.value = 0; }

        const statuses = document.getElementById('status');

        let id = parseInt(orderid.value);
        let status = '';

        if (statuses.selectedIndex == 0) { status = 'Отклонено'; }
        if (statuses.selectedIndex == 1) { status = 'В процессе'; }
        if (statuses.selectedIndex == 2) { status = 'Выполнено'; }

        const selectedStatus = statuses.options[statuses.selectedIndex].text;


        changeOrderData = {
            id: id,
            status: selectedStatus
        }

        
        console.log(changeOrderData);

        try {
            response = await fetch('http://localhost/jsiseasy/php/changeOrderStatus.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(changeOrderData)
            });

            if (response.ok && response.status === 200) {

                alert('Роль пользователя с ID '+orderid.value+' успешно изменена на '+selectedStatus+'!');
                window.location.reload();

            } else {   
                alert('ОШИБКА: пользователь с ID '+orderid.value+' не найден!');
            }


        }
        catch {
            console.error('Произошла сетевая ошибка: ',error);
            alert('Произошла сетевая ошибка. Пожалуйста, проверьте Ваше подключение к сети Интернет. Код ошибки: ',error);
        }



    });




});