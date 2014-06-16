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

	var canvas 		   = document.getElementById("gameCanvas");
	var cW 			   = canvas.width;
	var cH 			   = canvas.height;
	var ctx 		   = canvas.getContext('2d');
	var xInc 		   = 205;
	var x 			   = canvas.width/2;
	var y 			   = canvas.height/2;
	var rad  		   = Math.PI / 180;
	var width 		   = 150;
	var height 		   = 150;
	var angleInRadians = rad;

	//Paint the canvas
	ctx.fillStyle = "grey";
	ctx.fillRect(0,0, cW, cH);

	//now draw a red square 
	ctx.setTransform(1,0,0,
					1,0,0);

	// //First Box
	// angleInRadians+=45;
	// ctx.translate(x - 300, y);
	// ctx.rotate(angleInRadians);
	// ctx.fillStyle = "#094581"; 
	// ctx.fillRect(-.5*width, -.5*height,width,height);

	// // //Second Box
	// angleInRadians+=45;
	// ctx.setTransform(1,0,0,1,0,0);
	
	// ctx.translate(x - 300 + xInc, y);
	// // ctx.scale(1.2 - .5,1.2 - .5);
	// ctx.rotate(angleInRadians);
	// ctx.fillRect(-.5*width, -.5*height, width, height);

	// // //Third Box
	// angleInRadians+=45;
	// xInc+=205;
	// ctx.setTransform(1,0,0,1,0,0);
	
	// ctx.translate(x - 300 + xInc, y);
	// ctx.rotate(angleInRadians);
	// ctx.fillRect(-.5*width, -.5*height, width, height);

	// //Fourth Box
	// angleInRadians+=45;
	// xInc+=205;
	// ctx.setTransform(1,0,0,1,0,0);

	// ctx.translate(x - 300 + xInc, y);
	// ctx.scale(1.2 - .5 - .5 - .5,1.2 - .5 - .5 - .5);
	// ctx.rotate(angleInRadians);
	// ctx.fillRect(-.5*width, -.5*height, width, height);
	

}