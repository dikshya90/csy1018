function changeOpacity(){
	var circle =document.getElementById('circle');
	var cOpacity = parseFloat(circle.style.opacity);
	circle.style.opacity = cOpacity+ 0.1;
}
function clickFunction(){
	setInterval(changeOpacity,1000);
}
function myLoad(){
	var circle =document.getElementById('circle');
	circle.addEventListener('click',clickFunction);
	circle.style.opacity = '0.2';
}
document.addEventListener('DOMContentLoaded',myLoad);