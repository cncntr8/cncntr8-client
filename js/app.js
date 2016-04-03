//var exampleSocket = new WebSocket("ws://localhost:8000");
var spanNumber = document.getElementsByTagName("span");
var userNumber = document.getElementsByTagName("h5");
var rando = 0;
var color = "";
var metric = "concentration";
var metricIndex = 0;
var name = [];
updateProgress();
updateUsers();

/*
exampleSocket.onmessage = function(event) {
    var text = "";
    var msg = JSON.parse(event.data);

    switch (msg.type) {
        case "users":
            name = msg.fullname;
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
*/
function generateRandom(){
	rando = parseInt(Math.random() * 100);
}

function updateProgress(){
	for (var i=0; i<spanNumber;i++) {
		generateRandom();

		if (rando<=30){
			color = "progress alert"	
		}
		if (rando>30 && rando<=70){
			color = "progress warning"	
		}
		if (rando>70 && rando<=100){
			color = "progress success"	
		}

		//25% placeholder for integer from 
		document.getElementsByTagName("span")[i].setAttribute("style", ("width:" +rando +"%"));
		document.getElementsByClassName("text")[i].innerHTML=metric; 
		document.getElementsByClassName("progress-meter-text").querySelectorAll("p")[(metricIndex)].innerHTML=(rando+"%"); 
		document.getElementsByClassName("progress")[i].querySelectorAll("span")[metricIndex].className = color;

	}
}

function updateUsers(){
	for (var i=0; i<userNumber; i++)
		document.getElementsByTagName("h5")[i].value = name[i];
}

//exampleSocket.close();

