$(function(){

	$("#searchbtn").click(function(){

		$("#searchtxt").css({"background":"#000"});
		$("#searchtxt").stop().animate({"width":"866px"},1000);

		return false;
	});
	$("#searchtxt").click(function(){
		return false;
	});
	$(document).click(function(){
		$("#searchtxt").stop().animate({"width":"0"},1000);
	});


	$(".home-featured-menu a").click(function(){
	
	  var index = $(this).html()-1;
	  $(".home-featured-item").removeClass("active");
	  $(".home-featured-item").eq(index).addClass("active");
	  
	});


});