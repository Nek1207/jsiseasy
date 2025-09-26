document.addEventListener('DOMContentLoaded', () => {

    const orderForm = document.getElementById('form-order');



    orderForm.addEventListener('submit', async (event) => {

        
        let date = new Date();

        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = date.getFullYear();

        let currentDate = year+'-'+month+'-'+day;

        const courses = document.getElementById('service-status');

        let cost = 0;

        if (courses.selectedIndex == 0) { cost = 1990; }
        if (courses.selectedIndex == 1) { cost = 3490; }
        if (courses.selectedIndex == 2) { cost = 4990; }
        if (courses.selectedIndex == 3) { cost = 6990; }
        if (courses.selectedIndex == 4) { cost = 9990; }

        const selectedCourse = courses.options[courses.selectedIndex].text;
        
        event.preventDefault();

        const FormDataOrders = {
            name: String(selectedCourse),
            login: String(sessionStorage.getItem('login')),
            email: String(sessionStorage.getItem('email')),
            phone: String(sessionStorage.getItem('phone')),
            date: String(currentDate),
            cost: cost,
            status: 'В процессе'
        }

        try {
            let response = await fetch('http://localhost/jsiseasy/php/addOrder.php', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(FormDataOrders)
            });

            if (response.ok && response.status === 200) {
                const result = await response.text();
                console.log('Ваша заявка успешно отправлена! ',result);
                alert('Ваша заявка успешно отправлена!');
                window.location.reload();
                
            } else {
                alert('Что-то пошло не так. Попробуйте ещё раз через некоторе время.');
                console.error('Ошибка при отправке данных: ',result,' | ',response.statusText);
            }

        }
        catch {
            console.error('Произошла сетевая ошибка: ',error);
            alert('Произошла сетевая ошибка. Пожалуйста, проверьте Ваше подключение к сети Интернет. Код ошибки: ',error);
        }


    })


});