document.addEventListener('DOMContentLoaded', () => {

    let popupForm = document.getElementById("popupForm");

    let loginInputModal = document.getElementById("loginModal");
    let descriptionInputModal = document.getElementById("descriptionModal");
    let emailInputModal = document.getElementById("emailModal");
    let phoneInputModal = document.getElementById("phoneModal");
    let passInputModal = document.getElementById("passModal");
    
    let loginErrorModal = document.getElementById('loginErrorModal');
    let descriptionErrorModal = document.getElementById('descriptionErrorModal');
    let emailErrorModal = document.getElementById('emailErrorModal');
    let phoneErrorModal = document.getElementById('phoneErrorModal');
    let passErrorModal = document.getElementById('passErrorModal');


    let oldLogin = sessionStorage.getItem('login');
    loginInputModal.value = loginInputModal.value.trim();
    descriptionInputModal.value = descriptionInputModal.value.trim();
    emailInputModal.value = emailInputModal.value.trim();
    phoneInputModal.value = phoneInputModal.value.trim();
    passInputModal.value = passInputModal.value.trim();

    function showError(element, message) {
        element.textContent = message;
    }

    function hideError(element) {
        element.textContent = '';
    }

    function hideErrorMessages() {
        hideError(loginErrorModal);
        hideError(descriptionErrorModal);
        hideError(emailErrorModal);
        hideError(phoneErrorModal);
        hideError(passErrorModal);
    }

    
    applyPhoneMask(phoneInputModal);

    function validateForm() {
        let isValid = true;

        // const loginPattern = /^[a-zA-Z0-9][a-zA-Z0-9_.-]{8,29}[a-zA-Z0-9]$/;

        const loginPattern = /^^/;

        if (!loginInputModal.value == '') {
            if (loginPattern.test(loginInputModal.value)) {
                if (loginInputModal != sessionStorage.getItem('login')) {
                    isValid = true;
                    sessionStorage.setItem('login', loginInputModal.value);
                } else {
                    showError(loginErrorModal, 'Пожалуйста, укажите логин, отличный от текущего')
                    isValid = false;
                }
            } else {
                showError(loginErrorModal, 'Пожалуйста, укажите корректный логин (не менее 8 символов и обязательно на латинице)')
                isValid = false;
            }
        }

        const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\$$\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|$$(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\$$\x01-\x09\x0b\x0c\x0e-\x7f])+)$$)$/i;

        if (!emailInputModal.value == '') {
            if (emailPattern.test(emailInputModal.value)) {
                if (emailInputModal != sessionStorage.getItem('email')) {
                    sessionStorage.setItem('email', emailInputModal.value);
                    isValid = true;
                } else {
                    showError(emailErrorModal, 'Пожалуйста, укажите электронную почту, отличную от текущего')
                    isValid = false;
                }
            } else {
                showError(emailErrorModal, 'Пожалуйста, укажите корректную электронную почту')
                isValid = false;
            }
        }

        if (!descriptionInputModal.value == '') {
            if (descriptionInputModal != sessionStorage.getItem('description')) {
                sessionStorage.setItem('description', descriptionInputModal.value);
                isValid = true;
            } else {
                showError(descriptionErrorModal, 'Пожалуйста, укажите электронную почту, отличную от текущего')
                isValid = false;
            }
        }

        const passPattern = /^[a-zA-Z0-9][a-zA-Z0-9_.-]{8,50}[a-zA-Z0-9]$/;


        if (!passInputModal.value == '') {
            if (passPattern.test(passInputModal.value)) {
                if (passInputModal != sessionStorage.getItem('pass')) {
                    sessionStorage.setItem('pass', passInputModal.value);
                    isValid = true;
                } else {
                    showError(loginErrorModal, 'Пожалуйста, укажите пароль, отличный от текущего')
                    isValid = false;
                }
            } else {
                showError(loginErrorModal, 'Пожалуйста, укажите корректный пароль (не менее 8 символов и на латинице)')
                isValid = false;
            }
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


    popupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (validateForm()) {
            const formChangeAccountData = {
                id: parseInt(sessionStorage.getItem('id')),
                login: String(sessionStorage.getItem('login')),
                email: String(sessionStorage.getItem('email')),
                phone: String(sessionStorage.getItem('phone')),
                pass: String(sessionStorage.getItem('pass')),
                role: parseInt(sessionStorage.getItem('role')),
                description: String(sessionStorage.getItem('description')),
                medals: parseInt(sessionStorage.getItem('medals')),
                coursesCompleted: parseInt(sessionStorage.getItem('coursesCompleted')),
                tasksSolved: parseInt(sessionStorage.getItem('tasksSolved')),
                lessonsWatched: parseInt(sessionStorage.getItem('lessonsWatched')),
                solutionsProposed: parseInt(sessionStorage.getItem('solutionsProposed')),
                daysOfStudying: parseInt(sessionStorage.getItem('daysOfStudying')),
                level: parseInt(sessionStorage.getItem('level')),
                exp: parseInt(sessionStorage.getItem('exp')),
                oldLogin: String(oldLogin)
            };

            console.log(formChangeAccountData);
            // alert('Данные формы для отправки: ');

            try {
                let response = await fetch('http://localhost/jsiseasy/php/changeAccountInfo.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formChangeAccountData)
                });

                if (response.ok && response.status === 200) {
                    const result = await response.JSON;
                    console.log('Данные успешно отправлены! ', result);
                    alert('Вы успешно изменили данные! Для того, чтобы изменения вступили в силу, пожалуйста, перезайдите в свой аккаунт.');
                    window.location.href = './authorization.html';
                    sessionStorage.clear();
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