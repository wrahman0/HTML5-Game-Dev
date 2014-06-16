window.addEventListener ("load", eventWindowLoaded, false);

function eventWindowLoaded(){

	initCanvas();

}

function initCanvas(){


	//Initialization
	var parentElement = document.getElementById("gameEnvironment");
	var canvas = document.createElement ("canvas");
	
	canvas.id = "gameCanvas";
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	parentElement.appendChild(canvas);
	drawScreen();

}	

function drawScreen(){

	var canvas = document.getElementById("gameCanvas");
	var ctx = canvas.getContext('2d');

	var gr = ctx.createLinearGradient(0,0,100,0);

	//Add Color Stops
	gr.addColorStop(0,'rgb(255,0,0)'); 
	gr.addColorStop(.5,'rgb(0,255,0)'); 
	gr.addColorStop(1,'rgb(255,0,0)');

	// Use the gradient for the fillStyle. 
	ctx.fillStyle = gr; 
	ctx.fillRect(0, 0,100,100);

	ctx.fillStyle = gr;
	ctx.fillRect(canvas.width/2, canvas.height/2, 100,100);



}