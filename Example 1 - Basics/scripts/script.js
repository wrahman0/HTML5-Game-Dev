window.addEventListener("load", eventWindowLoaded, false);

var guesses = 0;
var message = "Guess The Letter From a (lower) to z (higher)";
var letters = [
	"a","b","c","d","e","f","g","h",
	"i","j","k","l","m","n","o", "p"
	,"q","r","s","t","u","v","w","x"
	,"y","z"
];
var today = new Date();
var letterToGuess = ""; 
var higherOrLower = ""; 
var lettersGuessed = [];
var gameOver = false;

function eventWindowLoaded(){
		
	canvasApp();
	initGame();

}

function canvasApp(){


	//Make the canvas
	var body = document.getElementById('gameEnvironment');
	var canvas = document.createElement('canvas');
	canvas.id = 'mainCanvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	body.appendChild (canvas);

	//Make the form
	var form = document.createElement('form');
	var input = document.createElement('input');
	
	input.type = "button";
	input.id   = "createImageData";
	input.value = "Export Canvas Image";

	form.appendChild(input);
	body.appendChild(form);


}

function drawScreen(){

	var canvas = document.getElementById('mainCanvas');
	var ctx = document.getElementById('mainCanvas').getContext('2d');

	//Background
	ctx.fillStyle = "#00CCFF";
	ctx.fillRect(0, 0, canvas.width, canvas.height); 
	
	//Box
	ctx.strokeStyle = "#000000"; 
	ctx.strokeRect(5, 5, canvas.width - 20, canvas.height - 20);
	ctx.textBaseline = "top"; 
	
	//Date
	ctx.fillStyle = "#000000"; 
	ctx.font = "20px _sans"; 
	ctx.textAlign = "center";
	ctx.fillText (today, canvas.width/2 ,canvas.height/10); 

	//Message
	ctx.fillStyle = "#003366";
	ctx.textAlign = "center"; 
	ctx.font = "24px _sans"; 
	ctx.fillText (message, canvas.width/2, 1.5 * canvas.height/10);


	//Guesses
	ctx.fillStyle = "#003366";
	ctx.textAlign = "center";
	ctx.font = "48px _sans";
	ctx.fillText ('Guesses: ' + guesses, canvas.width/2, 3 * canvas.height/10);


	ctx.fillStyle = "#003366";
	ctx.textAlign = "center";
	ctx.font = "24px _sans"; 
	ctx.fillText ("Letters Guessed: " + lettersGuessed.toString(), canvas.width/2, 5 * canvas.height/10);



	if (gameOver) {
		ctx.fillStyle = "#FF0000";
		ctx.font = "40px _sans"; 
		ctx.textAlign = "center";
		ctx.fillText ("You Got It!", canvas.width/2, 6.5 * canvas.height/10);
	}
}

function initGame(){
	
	letterToGuess = letters [Math.floor ( (Math.random() * (letters.length)) )];
	console.log ("ANSWER: " + letterToGuess);
	document.getElementById('createImageData').addEventListener("click", createImageDataPressed, false);
	window.addEventListener("keyup",eventKeyPressed,true);
	drawScreen();	
}

function createImageDataPressed(e){

	var canvas = document.getElementById('canvas');
	window.open (canvas.toDataURL(), "canvasImage", "left=0,top=0,width="+canvas.width+",height="+canvas.height+",toolbar=0,resizable=0");

}

function eventKeyPressed(e){
	if (!gameOver){
		console.log ("KEY: " + e.keyCode);
		var letterPressed = String.fromCharCode(e.keyCode);
		letterPressed = letterPressed.toLowerCase();
		guesses++;
		lettersGuessed.push(letterPressed);
		if (letterPressed == letterToGuess) gameOver = true;
		else{
			
			var correctIndx = letters.indexOf(letterToGuess);
			var guessIndx = letters.indexOf(letterPressed);

			if (guessIndx < 0) 
				higherOrLower = "That is not a letter";
			else if (guessIndx < correctIndx) 
				higherOrLower = "Higher";
			else (guessIndx > correctIndx) 
				higherOrLower = "Lower";

		}
	}

	drawScreen();

}

