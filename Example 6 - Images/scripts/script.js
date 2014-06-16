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

	// function updateOrientation(faceTo){
		
	// 	if (faceTo == facing) {
	// 		console.log ("RETURNING");
	// 		return;
	// 	}
		
	// 	ctx.save();
	// 	ctx.setTransform(1,0,0,1,0,0);
	// 	ctx.translate(curr_x+42, curr_y+42);

	// 	var curr_orientation, dest_orientation;

	// 	if (facing == "N"){
	// 		curr_orientation = 90;
	// 	}else if (facing == "S"){
	// 		curr_orientation = 270;
	// 	}else if (facing == "W"){
	// 		curr_orientation = 180;
	// 	}else if (facing == "E"){
	// 		curr_orientation = 0;
	// 	}

	// 	if (faceTo == "N"){
	// 		dest_orientation = 90;
	// 	}else if (faceTo == "S"){
	// 		dest_orientation = 270;
	// 	}else if (faceTo == "W"){
	// 		dest_orientation = 180;
	// 	}else if (faceTo == "E"){
	// 		dest_orientation = 0;
	// 	}


	// 	var rotation = Math.abs(curr_orientation - dest_orientation);
	// 	var angleInRadians = rotation * Math.PI / 180;
	// 	ctx.rotate (angleInRadians);

	// 	var counter = animationVars.counter; 
	// 	animationVars.counter++;
	// 	ctx.drawImage (playersheet,((counter%7)+1)*84, 0, 84, 84, -42, -42, 84, 84);
		
	// 	ctx.restore();

	// }

	function drawPlayer (animationVars,displace_x,displace_y){

		//rotate to the correct orientation 
		curr_x += displace_x;
		curr_y += displace_y;
		ctx.save();
		ctx.setTransform(1,0,0,1,0,0);
		ctx.translate(curr_x+42, curr_y+42);
		
		var rotation = 0;

		if (facing == "N" && curr_orientation != 90){
			rotation = Math.abs(curr_orientation-90);
			curr_orientation = 90;
		}else if (facing == "S" && curr_orientation != 270){
			rotation = Math.abs(curr_orientation-270);
			curr_orientation = 270;
		}else if (facing == "W" && curr_orientation != 180){
			rotation = Math.abs(curr_orientation-180);
			curr_orientation = 180;
		}else if (facing == "E" && curr_orientation != 0){
			rotation = Math.abs(curr_orientation-270);
			curr_orientation = 0;
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
			// updateOrientation("N");
			facing = "N";
			isMoving = true;
		}else if (keyPressed == "S"){ // 's'
			// updateOrientation("S");
			facing = "S";
			isMoving = true;
		}else if (keyPressed == "A"){ // 'a'
			// updateOrientation("W");
			facing = "W";
			isMoving = true;
		}else if (keyPressed == "D"){ // 'd'
			// updateOrientation("E");
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




