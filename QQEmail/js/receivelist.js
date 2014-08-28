$(function(){
	$(".biaojibtn").click(function(){
		$(this).find(".biaojiwei").show();
		return false;
	});
	$(document).click(function(){
		$(".biaojiwei").hide();
		$(".yidongdao").hide();
	});

	$(".yidongbtn").click(function(){
		$(this).find(".yidongdao").show();
		return false;
	});
});