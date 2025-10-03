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

    
    applyPhoneMask(phoneInput);

    function validateForm() {
        let isValid = true;

        const loginPattern = /^[a-zA-Z0-9][a-zA-Z0-9_.-]{7,29}[a-zA-Z0-9]$/;
        if (loginInput.value === '') {
            showError(loginError, 'Пожалуйста, укажите Ваш логин (не менее 8 символов и обязательно на латинице)');
            isValid = false;
        } else if (!loginPattern.test(loginInput.value)) {
            showError(loginError, 'Пожалуйста, укажите корректный логин (не менее 8 символов и обязательно на латинице)');
            isValid = false;
        } else {
            hideError(loginError);
        }

        const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\$$\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|$$(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\$$\x01-\x09\x0b\x0c\x0e-\x7f])+)$$)$/i;

        if (emailInput.value === '') {
            showError(emailError, 'Пожалуйста, укажите Вашу электронную почту');
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            showError(emailError, 'Пожалуйста, укажите корректную электронную почту');
            isValid = false;
        } else {
            hideError(emailError);
        }

        if (passInput.value === '' && passInput.value.length < 8) {
            showError(passError, 'Пожалуйста, укажите Ваш пароль (не менее 8 символов и обязательно на латинице)');
            isValid = false;
        } else {
            hideError(passError);
           
        }
        
        showError(passError, 'Пожалуйста, укажите пароль, отличный от Вашего логина');

        if (passInput.value == loginInput.value) {
            showError(passError, 'Пожалуйста, укажите пароль, отличный от Вашего логина');
            isValid = false;
        } else {
            hideError(passError);
        }

        if (passrepeatInput.value === '' && passrepeatInput.value.length < 8) {
            showError(passError, 'Пожалуйста, укажите заданный Вами пароль');
            isValid = false;
        } else {
            hideError(passError);
        }

        if (passInput.value !== passrepeatInput.value) {
            showError(passrepeatError, 'Пароли не совпадают');
            isValid = false;
        } else {
            hideError(passrepeatError);
        }

        if (agreeInput.checked === false) {
            showError(agreeError, 'Необходимо поставить галочку');
            isValid = false;
        } else {
            hideError(agreeError);
        }

        return isValid;
    }

    function applyPhoneMask(input) {
        input.addEventListener('input', function(event) {
            let phoneNumber = event.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
            let formattedPhoneNumber = '+7';

            if (phoneNumber.length > 1) {
                // Начинаем с +7, так как это формат по умолчанию
                // Если пользователь ввел 8, мы игнорируем ее, так как +7 уже есть
                if (phoneNumber.startsWith('8')) {
                    phoneNumber = phoneNumber.substring(1);
                } else if (phoneNumber.startsWith('7')) {
                    phoneNumber = phoneNumber.substring(1);
                }
            } else {
                // Если осталась только цифра 7 или 8, то возвращаем +7
                event.target.value = '+7';
                return;
            }


            if (phoneNumber.length > 0) {
                if (phoneNumber.length > 0) {
                    formattedPhoneNumber += ' (' + phoneNumber.substring(0, 3);
                }
                if (phoneNumber.length >= 4) {
                    formattedPhoneNumber += ') ' + phoneNumber.substring(3, 6);
                }
                if (phoneNumber.length >= 7) {
                    formattedPhoneNumber += '-' + phoneNumber.substring(6, 8);
                }
                if (phoneNumber.length >= 9) {
                    formattedPhoneNumber += '-' + phoneNumber.substring(8, 10);
                }
            }

            event.target.value = formattedPhoneNumber;
        });

        // Добавляем +7 при фокусе, если поле пустое
        input.addEventListener('focus', function(event) {
            if (event.target.value === '') {
                event.target.value = '+7';
            }
        });

        // Очищаем +7 при потере фокуса, если больше ничего не введено
        input.addEventListener('blur', function(event) {
            if (event.target.value === '+7') {
                event.target.value = '';
            }
        });
    }


    regForm.addEventListener('submit', async (event) => {
        hideErrorMessagesI();

        event.preventDefault();

        if (validateForm()) {
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
        } else {
            // alert('Пожалуйста, исправьте ошибки в форме.');
        }


        
    });

});


