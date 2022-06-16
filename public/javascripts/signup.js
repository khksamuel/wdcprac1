function signup() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var email = document.getElementById("email").value;
    if (username == "" || password == "" || confirmPassword == "" || email == "") {
        alert("Please fill in all fields");
        return;
    }
    if (password != confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "success") {
                window.location.href = "login.html";
            }
            else {
                alert("Error occured while signing up");
                window.location.href = "signup.html";
            }
        }
    };
    let signupdata = {
        username: username,
        password: password,
        email: email
    };
    xhttp.open("POST", "/signup", true);
    xhttp.send(JSON.stringify(signupdata));
}