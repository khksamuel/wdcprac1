 function login() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    if (username == "" || password == "") {
        alert("Please fill in all fields");
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.location.href = "home.html";
        }
        if (this.readyState == 4 && this.status == 401) {
            alert("Invalid username or password");
            window.location.href = "login.html";
        }
        if (this.readyState == 4 && this.status == 500) {
            alert("Error occured while logging in");
            window.location.href = "login.html";
        }
    }
    let logindata = {
        username: username,
        password: password
    };
    xhttp.open("POST", "/login", true);
    xhttp.send(JSON.stringify(logindata));
 }