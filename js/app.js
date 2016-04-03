var exampleSocket = new WebSocket("ws://10.31.72.32:8080");
var spanNumber = document.getElementsByTagName("span").length; //6, span = progress meter
var userNumber = document.getElementsByTagName("h5").length; // 2, users
var rando = 0;
var color = "";
var metric = "concentration";
var metricIndex = 0;
var users;
var names;

exampleSocket.onmessage = function(event) {
    var text = "";
    var msg = JSON.parse(event.data);

    switch (msg.type) {
        case "users":
            users = msg.users;
            console.log(users);
            console.log(names);
            break;
        case "concentration":
            metric = msg.type;
            metricIndex = 0;
            break;
        case "mellowness":
            metric = msg.type;
            metricIndex = 1;
            break;
    }
};

function generateRandom() {
    rando = Math.round(Math.random() * 100);
}

function colorize() {
        generateRandom();
        console.log("colorize call");

        if (rando <= 30) {
            color = "progress alert"
        } else if (rando > 30 && rando <= 70) {
            color = "progress warning"
        } else if (rando > 70 && rando <= 100) {
            color = "progress success"
        }
}

function updateProgressMellow() { //
    for (var i = 0; i < spanNumber; i++) {
    	colorize();

        document.getElementsByTagName("span")[i].setAttribute("style", ("width:" + rando + "%"));
        document.getElementsByClassName("progress-meter-text")[i].innerHTML = (rando + "%");
        document.getElementsByClassName("progress")[i].className = color;
    }
}


function updateUsers() {
    for (var i = 0; i < userNumber; i++)
        console.log("user call");
    document.getElementsByTagName("h5")[i].value = users[i];
}

updateProgressMellow();
updateUsers();



//exampleSocket.close();