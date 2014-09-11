$(function(){
	$(".statetitleon").attr("flag","open");
	$(".statetitleoff").attr("flag","open");
	$(".statetitleon").click(function(){
		if ($(".statetitleon").attr("flag")=="open") {
			$(this).next(".onlinelist").hide();
			$(".statetitleon").attr("flag","close");
		}else{
			$(this).next(".onlinelist").show();
			$(".statetitleon").attr("flag","open");
		}
	});

	$(".statetitleoff").click(function(){
		if ($(".statetitleoff").attr("flag")=="open") {
			$(this).next(".offlinelist").hide();
			$(".statetitleoff").attr("flag","close");
		}else{
			$(this).next(".offlinelist").show();
			$(".statetitleoff").attr("flag","open");
		}
	});

	$(".friendInfoArea").click(function(){
		$(".talkArea").append(123);
	});
});