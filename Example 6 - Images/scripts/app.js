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
	document.getElementById('play-again').addEventListener('click', function () {
		reset();
	});

	reset();
	lastTime = Date.now();
	main();

}

resources.load([
    'assets/tilesheet.png',
    'assets/futureTiles.png'
]);

//Game state
var player = {
	pos: [0,0],
	sprite: new Sprite(resources.get('assets/tilesheet.png'), [0,0], [84, 84], 16, [1, 2, 3, 4, 5, 6, 7])
};

//Entities
var bullets = [];
var enemies = [];
var explosions = [];

var lastFire = Date.now();
var gameTime = 0;
var isGameOver;
var terrainPattern;

var score = 0;
var scoreEl = document.getElementById('score');

//Speeds
var playerSpeed = 200;
var bulletSpeed = 500;
var enemySpeed = 100;

//Update game objects 
function update(dt){
	gameTime += dt;
	handleInput(dt);
	updateEntities(dt);

	//Calculate difficulty
	if (Math.random() < 1 - Math.pow(.993, gameTime)){
		enemies.push({
			pos: [canvas.width, Math.random() * canvas.height - 84],
			sprite: new Sprite (resources.get('assets/tilesheet.png'), [84,84], 6, [1, 2, 3, 4, 5, 6, 7])
		});
	}

	checkCollisions();

	scoreEl.innerHTML = score;

}

function handleInput (dt){
	
	if (input.isDown('DOWN') || input.isDown('s')){
		player.pos[1] += playerSpeed * dt;
	}

	if (input.isDown('UP') || input.isDown('w')){
		player.pos[1] -= playerSpeed * dt;
	}

	if(input.isDown('LEFT') || input.isDown('a')) {
        player.pos[0] -= playerSpeed * dt;
    }

    if(input.isDown('RIGHT') || input.isDown('d')) {
        player.pos[0] += playerSpeed * dt;
    }

    //Bullet
    if (input.isDown('SPACE') && !isGameOver && Date.now() - lastFire > 100){
    	
    	var x = player.pos[0] + player.sprite.size[0] / 2;
    	var x = player.pos[1] + player.sprite.size[1] / 2;
    	
    	bullets.push ({
    		pos: [x,y],
    		sprite: new Sprite (resources.get('assets/tilesheet.png'), [0,168], [84,84])	
    	}); //pos, size

    	lastFire = Date.now();

    }

}


function updateEntities (dt){

	//Update player sprite animation

}