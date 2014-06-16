'use strict';

window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded() {
	canvasApp();
}

function canvasApp () {

	//Global Variable
	var isMoving = false;
	var facing = "N";
	var curr_orientation = 90;
	var curr_x = DEFAULT_X;
	var curr_y = DEFAULT_Y;

	var canvas = document.getElementById ("gameCanvas");
	canvas.width = STAGE_HEIGHT;
	canvas.height = STAGE_WIDTH;

	canvas.setAttribute("tabindex", 1);
	document.addEventListener ("keydown", keyDownHandler, false);
	document.addEventListener ("keyup", keyUpHandler, false);

	var ctx = canvas.getContext("2d");
	var animationVars = { counter : 0 };	
	var tilesheet = new Image();

	ctx.strokeStyle = "black";
	ctx.strokeRect (0,0,canvas.width, canvas.height);

	tilesheet.src = "assets/futureTiles.png";
	tilesheet.addEventListener ("load",tilesheetLoaded, false);

	var playersheet = new Image();
	playersheet.src = "assets/tilesheet_transparent.png";
	playersheet.addEventListener ("load", playersheetLoaded, false);
	
	setInterval (update, TIME_PER_FRAME);

	function update(){

		if (isMoving){

			//redraw the canvas
			generateMap();

			if (facing == "N"){
				drawPlayer (animationVars,0,-CHAR_SPEED);
			}else if (facing == "S"){
				drawPlayer (animationVars,0,CHAR_SPEED);
			}else if (facing == "W"){
				drawPlayer (animationVars,-CHAR_SPEED,0);
			}else if (facing == "E"){
				drawPlayer (animationVars,CHAR_SPEED,0);
			}
		}
	}


	function drawPlayer (animationVars,displace_x,displace_y){

		//rotate to the correct orientation 
		curr_x += displace_x;
		curr_y += displace_y;
		ctx.save();
		ctx.setTransform(1,0,0,1,0,0);
		ctx.translate(curr_x+42, curr_y+42);
		
		var rotation = 0;

		if (facing == "S"){
			rotation = (180);
		}else if (facing == "W"){
			rotation = (-90);
		}else if (facing == "E"){
			rotation = (90);	
		}

		var angleInRadians = rotation * Math.PI / 180;
		ctx.rotate (angleInRadians);
		ctx.drawImage (playersheet,((animationVars.counter%7)+1)*84, 0, 84, 84, -42, -42, 84, 84);
		animationVars.counter++;
		ctx.restore();
		

	}

	function keyDownHandler(event){
		
		var keyPressed = String.fromCharCode(event.keyCode);
		
		if (keyPressed == "W"){ // 'w'
			facing = "N";
			isMoving = true;
		}else if (keyPressed == "S"){ // 's'
			facing = "S";
			isMoving = true;
		}else if (keyPressed == "A"){ // 'a'
			facing = "W";
			isMoving = true;
		}else if (keyPressed == "D"){ // 'd'
			facing = "E";
			isMoving = true;
		}

	}

	function keyUpHandler(event){

		var keyPressed = String.fromCharCode(event.keyCode);
		if ((keyPressed == "W") || (keyPressed == "A") || 
			(keyPressed == "S") || (keyPressed == "D"))	{
			isMoving = false;
		}

	}

	function tilesheetLoaded(){
		generateMap();
	}

	function playersheetLoaded(){
		initPlayer();
	}

	function generateMap (){

		var srcX = 0;
		var srcY = 32;
		var srcW = 64;
		var srcH = 64;

		for (var i = 0 ; i < 15; i++){
			for (var j = 0; j < 15; j++){
				ctx.drawImage (tilesheet, srcX,srcY, srcW, srcH, srcW*i, srcH*j, srcW, srcH);
			}
		}	
	}

	function initPlayer(){
		drawPlayer (animationVars,0,0);
	}

	

}




