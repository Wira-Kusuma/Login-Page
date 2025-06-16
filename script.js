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
}