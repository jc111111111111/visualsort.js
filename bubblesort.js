"use strict";
var context = document.getElementById("a").getContext("2d");
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
setInterval(draw, 1);

var num = 1000;
var values = [];
for(var x = 0; x < num; x++)
	values.push(Math.random());

var place = 0;

function draw()
{
	context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	for(var x = 0; x < values.length; x++)
		context.fillRect((x/num)*window.innerWidth, window.innerHeight, window.innerWidth/num, -values[x]*window.innerHeight);
	for(var a = 0; a < 1000; a++)
		step();
}
function step()
{
	if(values[place] > values[place+1])
		swap(values, place, place+1);
	place++;
	if(place >= num-1)
		place = 0;
}
function swap(vals, p1, p2)
{
	var temp = vals[p1];
	vals[p1] = vals[p2];
	vals[p2] = temp;
}
