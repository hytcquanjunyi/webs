$(function(){
	$("#search").hover(
		function(){
			$(this).css("border-color","#458fec");
		},
		function(){
			$(this).css("border-color","");
		}
		);
	$("#searchmune").hover(
		function(){
			$(this).find("dd").show();
			$(this).css("background-position","-552px -200px");
		},
		function(){
			$(this).find("dd").hide();
			$(this).css("background-position","");
		});



	$(".News1").mouseover(function(){
		//alert(123);
		$(this).addClass("newsTTLactive");
		var nextnode = $(this).next();
		//alert(nextnode);
		$(nextnode).removeClass("newsTTLactive");
		$(this).parent().parent().next().show();
		$(this).parent().parent().next().next().hide();
	});

	$(".News2").mouseover(function(){
		$(this).addClass("newsTTLactive");
		var prevnode=$(this).prev();
		$(prevnode).removeClass("newsTTLactive");
		$(this).parent().parent().next().hide();
		$(this).parent().parent().next().next().show();
	});


	$(".rightArea3ContentLi").mouseover(
			function(){
				$(".rightArea3ContentLi").find(".details").removeClass("show");
				$(this).find(".details").addClass("show");
			});
	$(".rightArea3ContentLi1").mouseover(
			function(){
				$(".rightArea3ContentLi1").find(".details").removeClass("show");
				$(this).find(".details").addClass("show");
			});
	$(".rightArea3ContentLi2").mouseover(
			function(){
				$(".rightArea3ContentLi2").find(".details").removeClass("show");
				$(this).find(".details").addClass("show");
			});
	
	
});