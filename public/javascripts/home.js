const vueinst = new Vue({
    el: '#content',
    data: {
        rooms: [[{type: 'single'}, {description: 'nice room'}, {price: 100}, {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvttt3kj4ULLoJk1l3ZklSMW1RiGcXFfjYg&usqp=CAU'}]],
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