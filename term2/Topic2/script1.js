
function  clickFunction(event){
	if(event.keyCode ==37) moveLeft();
	if(event.keyCode ==38) moveTop();
	if(event.keyCode ==39) moveRight();
	if(event.keyCode ==40) moveDown();
}
function moveLeft (){
	var circle = document.getElementById('circle');
	currentLeft = circle.offsetLeft;
	circle.style.left = currentLeft -10 +'px';
	circle.style.backgroundColor = 'green';
	circle.style.opacity='0.5';
}
function moveTop(){
	var circle = document.getElementById('circle');
	 currentTop = circle.offsetTop;
	circle.style.top = currentTop -10 + 'px';
	circle.style.backgroundColor = 'blue';
}
function moveRight(){
	var circle = document.getElementById('circle');
	currentRight = circle.offsetLeft;
	circle.style.left = currentRight +10 + 'px';
	circle.style.backgroundColor = 'pink';
}
function moveDown(){
	var circle = document.getElementById('circle');
	currentDown = circle.offsetTop;
	circle.style.top = currentDown +10 + 'px';
	circle.style.backgroundColor = 'yellow';
}
function myLoad(){
	var circle =document.getElementById('circle');
	/*circle.addEventListener('click',clickFunction);
	circle.style.opacity = '0.2';*/
	document.addEventListener('keydown',clickFunction);
}
document.addEventListener('DOMContentLoaded',myLoad);
