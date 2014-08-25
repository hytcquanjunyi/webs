$(function(){
	/******背景图移动*******/
	setInterval("gundong()",0);
});
var y=0;
function gundong(){
	
	y=y+1;
	$(".fullscreen-image").css("background-position","0 -"+y+"px");
}