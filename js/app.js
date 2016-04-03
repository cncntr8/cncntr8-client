var exampleSocket = new WebSocket("ws://localhost:8000");
/*
exampleSocket.onmessage = function(event) {
    var f = document.getElementById("chatbox").contentDocument;
    var text = "";
    var msg = JSON.parse(event.data);

    switch (msg.type) {
        case "id":
            clientID = msg.id;
            setUsername();
            break;
    }
    document.getElementById("userlistbox").innerHTML = ul;
}

if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
};
*/
exampleSocket.close();

for (var i=0; i<4;i++) {
	var rando =parseInt(Math.random() * 100);
	var color = "";
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
	document.getElementsByClassName("progress-meter-text")[i].innerHTML=(rando+"%"); 
	document.getElementsByClassName("progress")[i].className =color;

}