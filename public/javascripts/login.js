 function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" || password == "") {
        alert("Please fill in all fields");
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "success") {
                window.location.href = "account.html";
            }
            else {
                alert("Error occured while logging in");
                window.location.href = "login.html";
            }
        }
    }
    let logindata = {
        username: username,
        password: password
    };
    xhttp.open("POST", "/login", true);
    xhttp.send(JSON.stringify(logindata));
 }