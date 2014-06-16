window.addEventListener ("load", eventWindowLoaded, false);

function eventWindowLoaded(){

	initCanvas();

}

function initCanvas(){


	//Initialization
	var parentElement = document.getElementById("gameEnvironment");
	var canvas = document.createElement ("canvas");
	var formField = document.createElement ("input");
	var button = document.createElement("button");

	button.id = 'getMessage';
	button.type = "button";
	button.innerHTML = "Display Message";

	formField.id = 'user_message';
	formField.type = 'text';

	canvas.id = "gameCanvas";
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	parentElement.appendChild(canvas);
	parentElement.appendChild(formField);
	parentElement.appendChild(button);

	button.addEventListener("click", displayText, false);
	drawScreen();

}	


function displayText(){
	
	var canvas  = document.getElementById("gameCanvas");
	var ctx = canvas.getContext('2d');
	var message = document.getElementById('user_message').value;

	ctx.font = "50px serif";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText(message, canvas.width/2, canvas.height/2 + 200);


}

function drawScreen(){

	var canvas = document.getElementById("gameCanvas");
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = "#33CCFF";
	ctx.fillRect (0,0,canvas.width, canvas.height);

	ctx.font = "50px serif";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("Canvas Text API", canvas.width/2, canvas.height/2);


}