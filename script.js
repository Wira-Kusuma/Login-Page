let toLogin = document.getElementById("toLogin");
let toRegister = document.getElementById("toRegister");


let loginForm = document.getElementById("loginForm");
let registerForm = document.getElementById("registerForm");


let registerBtn = document.getElementById("registerBtn");
let loginBtn = document.getElementById("loginBtn");


toLogin.addEventListener("click", function() {
    registerForm.style.display="none";
    loginForm.style.display="flex";

    loginBtn.style.display="none";
    registerBtn.style.display="flex";
});

toRegister.addEventListener("click", function() {
    loginForm.style.display="none";
    registerForm.style.display="flex";

    registerBtn.style.display="none";
    loginBtn.style.display="flex";
});