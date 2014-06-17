//Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//Main Game Loop
var lastTime;
function main (){

	var now = Date.now();
	var dt = (now - lastTime) / 1000.0;

	//Update will update the scene using the time difference between last updated and now.
	//ie instead of x+=5, its going to be x += 5 * dt; so its in pixels/second
	update(dt);
	render();

	lastTime = now;
	requestAnimFrame(main);

}

//Terrain Pattern
function init (){
	
	var patternCanvas = document.createElement('canvas');
	patternCanvas.width = 64;
	patternCanvas.height = 64;
	var patternCtx = patternCanvas.getContext("2d");
	patternCtx.drawImage(resources.get('assets/futureTiles.png'), 0, 32, 64, 64, 0, 0, 64, 64);

	terrainPattern = ctx.createPattern (patternCanvas,"repeat");

}

resources.load([
    'assets/tilesheet.png',
    'assets/futureTiles.png'
]);