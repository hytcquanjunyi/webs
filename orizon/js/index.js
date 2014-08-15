
$(function(){
	var length=0;
	 $(".next").click(function(){
	 		length=length-292;
	 		if(length<=-876){
	 			length=0;
	 			//alert(length);
	 		}
	 		$("#hot_news_box").stop().animate({"margin-left":length+'px'},2000);
	 		
	 });
	  $(".prev").click(function(){
	 		length=length+292;
	 		if(length>=292){
	 			length=-584;
	 		}
	 		$("#hot_news_box").stop().animate({"margin-left":length+'px'},2000);
	 });
});
