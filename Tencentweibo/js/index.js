$(function(){
	$(document).scroll(function(){
		if($(this).scrollTop()>=325){
			//alert(123);
			$(".AL ").addClass("ui_tab_fixed");
		}
		else{
			$(".AL ").removeClass("ui_tab_fixed");
		}
	});
});