$(function(){
	$("#useraccount").blur(function(){
		var account=$(this).val();
		$.ajax({
			type:"post",
			url:("ws/webservice.php"),
			data:{flag:"checkuserexist",useraccount:account},
			success:function(res){
					if (res=='has') {
						$(".tips").show();
					}else{
						$(".tips").hide();
					}
			}
		});
	});
});