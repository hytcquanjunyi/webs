$(function(){
	$("#sendbtn").click(function(){
		var msgContent=$("#msgtext").val();
		alert(msgContent);
		$.ajax({
			type:"POST",
			url:"ws/chatwebservice.php",
			data:{flag:'msg',sendmsg:"true",msgtxt:msgContent,curuserid:userid},
			success:function(res){
				alert(res);
			}
		});
	});

	setInterval("getMyMsg()",1000);
});
var userid=2;
var receiverid;

function getMyMsg(){
	$.ajax({
			type:"POST",
			url:"ws/chatwebservice.php",
			data:{flag:'true',getunreadmsg:'true',curuserid:userid,sendmsg:""},
			success:function(res){
				//alert(res);
				$("#talkhistory").append(res);
			}
		});
}