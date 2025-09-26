let showPasswordIcon = document.getElementById('show-password-icon');


function passIconChange() {
    
    let showPassword2 = document.getElementById('eye-show2');
    let hidePassword2 = document.getElementById('eye-hide2');
    let passwordInput = document.getElementById('pass');
            
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPassword2.style = "display: none;"
        hidePassword2.style = "display: block; width: 25px; height: 25px;"
    } else {
        passwordInput.type = "password";
        showPassword2.style = "display: block; width: 25px; height: 25px;"
        hidePassword2.style = "display: none;"
    }


};