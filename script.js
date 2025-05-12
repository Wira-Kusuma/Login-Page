alert("check console for email and password for beta test")

function login() {
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let result = document.getElementById("result");

            if (email === "wira" && password === "123456") {
               result.innerHTML = "login successful";
               result.style.color = "#00ff00";
            } 
            else if (email == "" && password === "") {
                result.innerHTML = "username and password cannot blank";
                result.style.color = "red";
            }
            else {
                result.innerHTML = "password or email incorrect";
                result.style.color = "red";
            }
        }
