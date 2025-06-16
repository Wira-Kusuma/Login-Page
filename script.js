// swiching login and register

let toLogin = document.getElementById("toLogin");
let toRegister = document.getElementById("toRegister");

let loginForm = document.getElementById("loginForm");
let registerForm = document.getElementById("registerForm");

let registerBtn = document.getElementById("registerBtn");
let loginBtn = document.getElementById("loginBtn");


toLogin.addEventListener("click", loginSwich);
toRegister.addEventListener("click", registerSwich);

loginBtn.addEventListener("click", loginSwich);
registerBtn.addEventListener("click", registerSwich);

function loginSwich() {
    registerForm.style.display="none";
    loginForm.style.display="flex";

    loginBtn.style.display="none";
    registerBtn.style.display="flex";
}

function registerSwich() {
    loginForm.style.display="none";
    registerForm.style.display="flex";

    registerBtn.style.display="none";
    loginBtn.style.display="flex";
}


// form validation below

// login validation
/** @type {HTMLInputElement} */
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");

let loginFormValidation = document.getElementById("loginFormValidation");


document.getElementById("loginNow").addEventListener("click",validation)

function validation() {
    if (userPassword.value === "" || userEmail.value === "") {
    loginFormValidation.innerText="Email or Password cannot blank"
    }
    
    else {
        // display notification if login succeed
        document.getElementById("notif").style.display="flex";
        // detele wrong validation after login
        loginFormValidation.innerText="";
        // to delete after logging
        userEmail.value="";
        userPassword.value="";
    }
}

function closeNotif() {
    document.getElementById("notif").style.display="none";
    document.getElementById("notifRegister").style.display="none";
}



// register validation

/** @type {HTMLInputElement} */
let registerEmail = document.getElementById("registerEmail");
let registerPassword = document.getElementById("registerPassword");
let registerPasswordConfirm = document.getElementById("registerPasswordConfirm");


let registerFormValidation = document.getElementById("registerFormValidation");


document.getElementById("register").addEventListener("click",validationRegister);

function validationRegister() {
    if (registerEmail.value === "" || registerPassword.value === "" || registerPasswordConfirm.value === "") {
    registerFormValidation.innerText="Email or password cannot blank";
    }
    
    else {
        // display notification if login succeed
        document.getElementById("notifRegister").style.display="flex";
        // detele wrong validation after login
        registerFormValidation.innerText="";
        // to delete after logging
        registerEmail.value="";
        registerPassword.value="";
        registerPasswordConfirm.value="";
    }
}