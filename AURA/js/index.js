$(function(){
	jianxian();
	$(".prev").click(function(){
		
		index--;

		if (index<0) {
			index=$(".sliderItem").length-1;
		}
		
		$(".sliderItem").removeClass("selectedItem");
		$(".sliderItem").eq(index).addClass("selectedItem");
		$(".sliderItem div").hide();
		jianxian();
			
	});
	$(".next").click(function(){
		index++;
		if (index>$(".sliderItem").length-1) {
			index=0;
		}	
	
		$(".sliderItem").removeClass("selectedItem");
		$(".sliderItem").eq(index).addClass("selectedItem");
		$(".sliderItem div").hide();
		jianxian();
	});
	

	$(".pi-texture").css("height",$(".pi-section-parallax").height());




	$(".pi-slider-arrow-left").click(function(){
		parallaxindex--;
		if (parallaxindex<0) {
			parallaxindex=$(".parallax-slide-item").length-1;
		}

		$(".parallax-slide-item").removeClass("parallaxactive");
		$(".parallax-slide-item").eq(parallaxindex).addClass("parallaxactive");
	});

	$(".pi-slider-arrow-right").click(function(){
		parallaxindex++;
		
		if (parallaxindex>$(".parallax-slide-item").length-1) {
			parallaxindex=0;
		}	

		$(".parallax-slide-item").removeClass("parallaxactive");
		$(".parallax-slide-item").eq(parallaxindex).addClass("parallaxactive");
	});
	
	$(".pi-row-picItem-img").hover(function(){
		$(this).find(".pi-img-darker").show();
	},function(){
		$(this).find(".pi-img-darker").hide();
	});


	$(".pright-menuli").hover(function(){
		$(this).find(".dropdownlist").show();
	},function(){
		$(this).find(".dropdownlist").hide();
	});
	$(".dropdownlist li").hover(function(){
		$(this).find(".droplistrightlist").show();		
	},function(){
		$(this).find(".droplistrightlist").hide();	
	});

	$("html,body").scroll(function(){
		if($(document).scrollTop()>=1500){
	 		$(".pi-count-bar1").animate({width:"417px"},3000);
	 		$(".pi-count-bar2").animate({width:"480px"},3000);
	 		$(".pi-count-bar3").animate({width:"343px"},3000);
	 		$(".pi-count-bar4").animate({width:"417px"},3000);

	 	}
	});
	$(document).scroll(function(){
		if($(document).scrollTop()>=1500){
	 		$(".pi-count-bar1").animate({width:"417px"},3000);
	 		$(".pi-count-bar2").animate({width:"480px"},3000);
	 		$(".pi-count-bar3").animate({width:"343px"},3000);
	 		$(".pi-count-bar4").animate({width:"417px"},3000);

	 	}
	 	
	});

	$(".pi-img-darker").click(function(){
		$(".mengban").show();
		var src=$(this).next("img").attr("src");
		
		$(".photo img").attr("src",src);
		//alert($(".photo img").attr("src"));
	});


	$(".closephotoAlbum").click(function(){
		$(".mengban").hide();
	});


});
var index=0;
var parallaxindex=0;
function jianxian(){
	if(index==0){
		
			$(".pad-hands").fadeIn(1000);
			t1=setTimeout(function(){
				$(".drawboy1").fadeIn(1000);
			},1000);

			t2=setTimeout(function(){
				$(".firstdesc").fadeIn(1000);
			},2000);
			
			t3=setTimeout(function(){
				$(".seconddesc").fadeIn(1000);
			},3000);
			t4=setTimeout(function(){
				$(".thriddesc").fadeIn(1000);
			},4000);
			t5=setTimeout(function(){
				$(".drawboy2").fadeIn(500);
			},5000);
		}
		if(index==1){
			$(".men-head").fadeIn(1000);
			t1=setTimeout(function(){
				$(".women-head").fadeIn(1000);
			},1000);
			t5=setTimeout(function(){
				$(".light").fadeIn(500);
			},2000);
			t2=setTimeout(function(){
				$(".firstdesc").fadeIn(1000);
			},3000);
			t3=setTimeout(function(){
				$(".seconddesc").fadeIn(1000);
			},4000);
			t4=setTimeout(function(){
				$(".thriddesc").fadeIn(1000);
			},5000);

		}
		if (index==2){
			$(".young-women").fadeIn(1000);
			t1=setTimeout(function(){
				$(".young-men").fadeIn(1000);
			},1000);
			t2=setTimeout(function(){
				$(".firstdesc").fadeIn(1000);
			},2000);
			t3=setTimeout(function(){
				$(".seconddesc").fadeIn(1000);
			},3000);
			t4=setTimeout(function(){
				$(".thriddesc").fadeIn(1000);
			},4000);
			t5=setTimeout(function(){
				$(".drawboy2").fadeIn(500);
			},5000);
		}
	
}