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

let validationEmail = document.getElementById("validationEmail");
let validationPassword = document.getElementById("validationPassword");


document.getElementById("loginNow").addEventListener("click",validation)

function validation() {
    if (userEmail.value === "") {
    validationEmail.innerText="Email cannot blank";
    }
    if (userPassword.value === "") {
    validationPassword.innerText="Password cannot blank";
    }
    else {
        // display notification if login succeed
        document.getElementById("notif").style.display="flex";
        // detele wrong validation after login
        validationEmail.innerText="";
        validationPassword.innerText="";
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


let validationRegisterEmail = document.getElementById("validationRegisterEmail");
let validationRegisterPassword = document.getElementById("validationRegisterPassword");
let validationRegisterConfirmPassword = document.getElementById("validationRegisterConfirmPassword");

document.getElementById("register").addEventListener("click",validationRegister);

function validationRegister() {
    if (registerEmail.value === "") {
    validationRegisterEmail.innerText="Email cannot blank";
    }
    if (registerPassword.value === "") {
    validationRegisterPassword.innerText="Password cannot blank";
    }
    if (registerPasswordConfirm.value === "") {
    validationRegisterConfirmPassword.innerText="Password confirm cannot blank";
    }
    else {
        // display notification if login succeed
        document.getElementById("notifRegister").style.display="flex";
        // detele wrong validation after login
        registerEmail.innerText="";
        registerPassword.innerText="";
        registerPasswordConfirm.innerText="";
        // to delete after logging
        validationRegisterEmail.value="";
        validationRegisterPassword.value="";
        validationRegisterConfirmPassword.value="";
    }
}