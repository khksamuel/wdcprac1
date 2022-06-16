const vueinst = new Vue({
    el: '#app',
    data: {
        
    },
    methods: {
    
    }
});

function account() 
{
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "login") {
                window.location.href = "login.html";
            }
            else {
                window.location.href = "account.html";
            }
        }
    };
    xhttp.open("GET", "/account", true);
    xhttp.send();
}