document.addEventListener('DOMContentLoaded', () => {

   let authForm = document.getElementById('authForm');

   let loginInput = document.getElementById('login');
   let passInput = document.getElementById('pass');
   let agree = document.getElementById('agree');

   let loginError = document.getElementById('loginError');
   let passError = document.getElementById('passError');
   let authorizationError = document.getElementById('authorizationError');

   loginInput.value = loginInput.value.trim();
   passInput.value = passInput.value.trim();

   function showError(element, message) {
      element.textContent = message;
   }

   function hideError(element) {
      element.textContent = '';
   }

   function hideErrorMessages() {
      hideError(loginError);
      hideError(emailError);
      hideError(authorizationError);
   }
   
   function validateForm() {
      let isValid = true;

      if (loginInput.value === '') {
         showError(loginError, 'Пожалуйста, укажите Ваш логин.');
         isValid = false;
      } else {
         hideError(loginError);
      }

      if (passInput.value === '') {
            showError(passError, 'Пожалуйста, укажите Ваш пароль.');
            isValid = false;
        } else {
            hideError(passError);
        }

        return isValid;
   }

   authForm.addEventListener('submit', async (event) => {

      event.preventDefault();

      validateForm();

      const FormData = {
         login: String(loginInput.value),
         pass: String(passInput.value)
      }

      // console.log(FormData);

      try {
         let response = await fetch('http://localhost/jsiseasy/php/authorization.php', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(FormData)
         });

         if (response.ok && response.status === 200) {
            const result = await response.text();
            console.log('Данные успешно отправлены! ', result);
            if (JSON.parse(result)[0] != null) {
               sessionStorage.setItem('id', JSON.parse(result)[0].id);
               sessionStorage.setItem('login', JSON.parse(result)[0].login);
               sessionStorage.setItem('email', JSON.parse(result)[0].email);
               sessionStorage.setItem('phone', JSON.parse(result)[0].phone);
               sessionStorage.setItem('description', JSON.parse(result)[0].description);
               sessionStorage.setItem('medals', JSON.parse(result)[0].medals);
               sessionStorage.setItem('role', JSON.parse(result)[0].role);
               alert('Вы успешно авторизовались!');
               window.location.href = './account.html';
            } else {
            showError(authorizationError , 'ОШИБКА: Такого пользователя нет.');
            console.error('Ошибка при отправке данных: ',result,' | ',response.statusText);

            }
            
            
         } else {
            //  alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте ещё раз.');
         }

      } catch (error) {
         console.error('Произошла сетевая ошибка: ',error);
         alert('Произошла сетевая ошибка. Пожалуйста, проверьте Ваше подключение к сети Интернет. Код ошибки: ',error);
      }

        
      // let request = new XMLHttpRequest();


      // let method = 'POST';
      // let url = 'http://localhost/jsiseasy/php/authorization.php';
      // let asynchronous = true;

      // request.open(method, url, asynchronous);

      // request.send();

      // request.onreadystatechange = function () {

      //    if (this.readyState === 4 && this.status === 200) {
      //       hideErrorMessages();
      //       let data = JSON.parse(this.responseText);
      //       alert('Вы успешно авторизовались!');
      //       window.location.href = './account.html';

      //       console.log("Response Body - ",data);

      //    } else {
      //       showError(authorizationError , 'ОШИБКА: Такого пользователя нет.');
      //       console.log("Произошла ошибка. Код ошибки: ",this.response);
      //    }
      // }
      

   });

});