// alert("check console for email and password for beta test")

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (email === "wira" && password === "123456") {
        result.innerHTML = "";
        document.getElementById("login-success").style.display = "flex";
    } 
    else if (email === "" && password === "") {
        result.innerHTML = "Username and password cannot be blank";
        result.style.color = "red";
    }
    else {
        result.innerHTML = "Login failed: incorrect email or password";
        result.style.color = "red";
    }
}

function closeModal() {
    document.getElementById("login-success").style.display = "none";
}

function ganti() {
    document.getElementById("kanan").style.display="none";
    document.getElementById("kanan2").style.display="flex";
    document.getElementById("kiri").style.display="none";
    document.getElementById("kiri2").style.display="flex";
}
function gantiL() {
    document.getElementById("kanan").style.display="flex";
    document.getElementById("kanan2").style.display="none";
    document.getElementById("kiri").style.display="flex";
    document.getElementById("kiri2").style.display="none";
}
