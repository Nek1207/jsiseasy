let showPasswordIcon = document.getElementById('show-password-icon');


function passIconChange() {
    
    let showPassword2 = document.getElementById('eye-show2');
    let hidePassword2 = document.getElementById('eye-hide2');
    let passwordInput = document.getElementById('pass');

    let passwordRepeatInput = document.getElementById('passrepeat');
    let showPassword = document.getElementById('eye-show');
    let hidePassword = document.getElementById('eye-hide');

            
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPassword2.style = "display: none;"
        hidePassword2.style = "display: block; width: 25px; height: 25px;"
    } else {
        passwordInput.type = "password";
        showPassword2.style = "display: block; width: 25px; height: 25px;"
        hidePassword2.style = "display: none;"
    }

    if (passwordRepeatInput.type === "password") {
        passwordRepeatInput.type = "text";
        showPassword.style = "display: none;"
        hidePassword.style = "display: block; width: 25px; height: 25px;"
    } else {
        passwordRepeatInput.type = "password";
        showPassword.style = "display: block; width: 25px; height: 25px;"
        hidePassword.style = "display: none;"
    }


};