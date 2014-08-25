$(function(){


	//var scrollTop = document.documentElement.scrollTop() || window.pageYOffset || document.body.scrollTop();
	
	$(document).scroll(function(){
	 	if($(document).scrollTop()>=150){
	 		$(".header").css("padding","0");
	 		$(".header").addClass("fixed");
	 	}
	 	else{
	 		$(".header").css("padding","");
	 		$(".header").removeClass("fixed");
	 	}


	 	//$(".side-fixed").offset({"top":});
	});

	/*******搜索条**********/
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

	/*******搜索条**********/


	/*****最下面的焦点图******/
	$(".home-featured-menu a").click(function(){
	  $(".home-featured-menu a").removeClass("selected");
	  $(this).addClass("selected");
	  var index = $(this).html()-1;
	  $(".home-featured-item").removeClass("active");
	  $(".home-featured-item").eq(index).addClass("active");
	  
	});
	/*****最下面的焦点图******/

	/**********手风琴***********/

	$(".accordionItem").click(function(){
		if($(this).find(".accordionItemContent").css("display")=="block"){
			$(".accordionItemContent").removeClass("accordionItemContentshow");
		}
		else{
			$(".accordionItemContent").removeClass("accordionItemContentshow");
			$(this).find(".accordionItemContent").addClass("accordionItemContentshow");
		}
	});
	/**********手风琴***********/

	/*******最上面的焦点图*******/
	var marginleft=0;
	$(".nextPic").click(function(){

		
		if(marginleft<=-2*1190){
			marginleft=-2*1190;
		}else{
			marginleft=marginleft-1190;
			$(".slideContainer").stop().animate({"margin-left":marginleft+"px"},1000);	
		}
		

		

	});

	$(".prevPic").click(function(){
		if(marginleft>=0){
			marginleft=0;
		}else{
			marginleft=marginleft+1190;
			$(".slideContainer").stop().animate({"margin-left":marginleft+"px"},1000);
		}
		
	});
	/*******最上面的焦点图*******/


	$(".next").click(function(){
		
		if(marginleft<=-2*300){
			marginleft=-2*300;
		}else{
			marginleft=marginleft-300;
			$(this).next().stop().animate({"margin-left":marginleft+"px"},1000);	
		}

	});
	$(".prev").click(function(){
		if(marginleft>=0){
			marginleft=0;
		}else{
			marginleft=marginleft+300;
			$(this).next().next().stop().animate({"margin-left":marginleft+"px"},1000);
		}

	});


});