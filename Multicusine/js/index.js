var index=0;
var timer1;
$(function(){
	timer1=setInterval("nextpic()",5000);  		
});
function nextpic(){	
	index++;
	if(index>$("slider").length-1){				
		index=0;				
	}
	$(".slideImage").removeClass("selected");
	$("slider:eq("+index+")").addClass("selected");
}