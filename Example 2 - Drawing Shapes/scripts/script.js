window.addEventListener ("load", eventWindowLoaded, false);

function eventWindowLoaded(){

	initCanvas();

}

function initCanvas(){


	//Initialization
	var parentElement = document.getElementById("gameEnvironment");
	var canvas = document.createElement ("canvas");
	var ctx = canvas.getContext('2d');
	canvas.id = "gameCanvas";
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	parentElement.appendChild(canvas);


	drawScreen();
	function drawScreen(){
		var width = 500;
		var height= 500;
		ctx.strokeStyle = "#095278";
		ctx.lineJoin = "round";
		ctx.lineWidth = 15;
		ctx.strokeRect(canvas.width/2 - width/2, canvas.height/2 - height/2, width, height);
		
		ctx.fillStyle = "#069135";
		ctx.fillRect(canvas.width/2 - (width/2)/2, canvas.height/2 - (height/2)/2, width/2, height/2);
		ctx.clearRect(canvas.width/2 - (width/4)/2, canvas.height/2 - (height/4)/2, width/4, height/4)

		//Paths
		var xInc = canvas.width/30;
		var yInc = canvas.height/30;

		ctx.strokeStyle = "#09568B";
		ctx.lineWidth   = 15;		
		ctx.lineJoin = 'round';
		ctx.beginPath();
		ctx.moveTo(canvas.width/2,canvas.height/2);
		ctx.lineTo(canvas.width/2 - xInc, canvas.height/2 - yInc);
		ctx.lineTo(canvas.width/2 + xInc, canvas.height/2 - yInc);
		ctx.lineTo(canvas.width/2 - xInc, canvas.height/2 + yInc);
		ctx.lineTo(canvas.width/2 + xInc, canvas.height/2 + yInc);
		ctx.closePath();
		ctx.stroke();

		//Arcs context.arc(x, y, radius, startAngle, endAngle, anticlockwise)
		ctx.beginPath();
		ctx.lineWidth = 22;
		ctx.globalAlpha = 1;
		ctx.strokeStyle = "red";
		ctx.globalCompositeOperation = "darker";
		ctx.arc(canvas.width/2, canvas.height/2, Math.sqrt( (width/2)*(width/2) + (height/2)*(height/2) ) , (Math.PI/180)*70, (Math.PI/180)*360, false);
		ctx.stroke();
		ctx.closePath();

		//Shadow
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.strokeStyle = "black";
		ctx.arc(canvas.width/2, canvas.height/2, Math.sqrt( (width/2)*(width/2) + (height/2)*(height/2) )-10 , (Math.PI/180)*70, (Math.PI/180)*360, false);
		ctx.stroke();

		ctx.beginPath();
		ctx.lineWidth = 7;
		ctx.strokeStyle = "blue";
		ctx.arc(canvas.width/2, canvas.height/2, Math.sqrt( (width/2)*(width/2) + (height/2)*(height/2) )+10 , (Math.PI/180)*70, (Math.PI/180)*360, false);
		ctx.stroke();

		



		

	}


}	