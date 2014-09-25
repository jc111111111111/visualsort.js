"use strict";
var context = document.getElementById("a").getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
setInterval(draw, 25);

var num = 100;
var values = [];
for(var x = 0; x < num; x++)
	values.push(Math.random());

function draw()
{
	context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	for(var x = 0; x < values.length; x++)
		context.fillRect((x/num)*window.innerWidth, window.innerHeight, window.innerWidth/num, -values[x]*window.innerHeight);
	context.fillRect(player.x-5, player.y-5, 10, 10);
}

/*document.addEventListener('keyup', function (event) {
	if(event.keyCode === 69) { asteroids.add(newAsteroid()); }
	if(event.keyCode === 87) { forward = false; }
	if(event.keyCode === 65 || event.keyCode === 37) { left = false;  }
	if(event.keyCode === 68 || event.keyCode === 39) { right = false; }
});

document.addEventListener('keydown', function (event) {
	if(event.keyCode === 87) { forward = true; player.velocity = .5; }
	if(event.keyCode === 65 || event.keyCode === 37) { left = true;  }
	if(event.keyCode === 68 || event.keyCode === 39) { right = true; }
	if(event.keyCode === 32) projectiles.push({posX: player.x, posY: player.y, dx: Math.cos(player.theta)*12, dy: Math.sin(player.theta)*12});
});*/
