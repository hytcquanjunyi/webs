$(function(){
	$(document).scroll(function(){
		if($(this).scrollTop()>=325){
			//alert(123);
			$(".ui_tab ").css({"position":"fixed","top":"36px"});
		}
		else{
			$(".ui_tab ").css({"position":""});
		}
	});
});