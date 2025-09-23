document.addEventListener("DOMContentLoaded", () => {

    let regForm = document.getElementById("regForm");

    let loginInput = document.getElementById("login");
    let emailInput = document.getElementById("email");
    let phoneInput = document.getElementById("phone");
    let passInput = document.getElementById("pass");
    let passrepeatInput = document.getElementById("passrepeat");
    let agreeInput = document.getElementById("agree");
    
    let loginError = document.getElementById('loginError');
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');
    let passError = document.getElementById('passError');
    let passrepeatError = document.getElementById('passrepeatError');
    let agreeError = document.getElementById('agreeError');

    loginInput.value = loginInput.value.trim();
    emailInput.value = emailInput.value.trim();
    phoneInput.value = phoneInput.value.trim();
    passInput.value = passInput.value.trim();
    passrepeatInput.value = passrepeatInput.value.trim();

    function showError(element, message) {
        element.textContent = message;
    }

    function hideError(element) {
        element.textContent = '';
    }

    function hideErrorMessages() {
        hideError(loginError);
        hideError(emailError);
        hideError(phoneError);
        hideError(passError);
        hideError(passrepeatError);
        hideError(agreeError);
    }

    function validateForm() {
        let isValid = true;

        if (loginInput.value === '') {
            showError(loginError, 'Пожалуйста, укажите Ваш логин.');
            isValid = false;
        } else {
            hideError(loginError);
        }

        // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // if (emailInput.value === '') {
        //     showError(emailError, 'Пожалуйста, укажите Вашу электронную почту.');
        //     isValid = false;
        // } else if (!emailPattern.test(emailInput.value)) {
        //     showError(emailError, 'Пожалуйста, укажите корректную электронную почту.');
        //     isValid = false;
        // } else {
        //     hideError(emailError);
        // }

        // const phonePattern = new RegExp(/^(\+7|8)?[\s\-]?$?\d{3}$?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/, 'm');

        // if (phoneInput.value === '') {
        //     showError(phoneError, 'Пожалуйста, укажите Ваш номер телефона.');
        //     isValid = false;
        // } else if (!phonePattern.test(phoneInput.value)) {
        //     showError(phoneError, 'Пожалуйста, укажите корректный номер телефона.');
        //     isValid = false;
        // } else {
        //     hideError(phoneError);
        // }

        if (passInput.value === '' && passInput.value.length < 8) {
            showError(passError, 'Пожалуйста, укажите Ваш пароль (не менее 8 символов).');
            isValid = false;
        } else {
            hideError(passError);
        }

        if (passrepeatInput.value === '' && passrepeatInput.value.length < 8) {
            showError(passError, 'Пожалуйста, укажите заданный Вами пароль.');
            isValid = false;
        } else {
            hideError(passError);
        }

        if (passInput.value !== passrepeatInput.value) {
            showError(passrepeatError, 'Пароли не совпадают.');
            isValid = false;
        } else {
            hideError(passrepeatError);
        }

        if (agreeInput.checked === false) {
            showError(agreeError, 'Необходимо поставить галочку.');
            isValid = false;
        } else {
            hideError(agreeError);
        }

        return isValid;
    }

    regForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // if (validateForm()) {
            
        // } else {
        //     alert('Пожалуйста, исправьте ошибки в форме.');
        // }

        // console.log(loginInput.value);

        const formData = {
                login: String(loginInput.value),
                email: String(emailInput.value),
                phone: String(phoneInput.value),
                pass: String(passInput.value)
            };

        console.log('Данные формы для отправки: ',formData);

        try {
            let response = await fetch('http://localhost/jsiseasy/php/registration.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok && response.status === 200) {
                const result = await response.JSON;
                console.log('Данные успешно отправлены! ', result);
                alert('Вы успешно зарегистрировались!');
                window.location.href = './main.html';
            } else {
                console.error('Ошибка при отправке данных: ',response.statusText);
                alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте ещё раз.');
            }
        } catch (error) {
            console.error('Произошла сетевая ошибка: ',error);
            alert('Произошла сетевая ошибка. Пожалуйста, проверьте Ваше подключение к сети Интернет. Код ошибки: ',error);
        }
    })

});