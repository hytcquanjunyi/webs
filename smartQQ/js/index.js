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


	$(".friendlistli").click(function(){
		var flag =$(this).attr("flag");
		if (flag=="open") {

			return;
		}
		$(this).find(".messageicon").hide();
		$(".friendlistli").attr("flag","close");
		$(this).attr("flag","open");
		$(".talkform").show();
		$(".talkheader").html($(this).attr("friendnickname"));
		$(".msgsendbtn").attr("friendid",$(this).attr("friendid"));
		$(".talkhistory").html("");
		var receiverid=$(this).attr("friendid");
		gethistory();
		$.ajax({
			type:"post",
			url:("ws/webservice.php"),
			data:{flag:"yidu",rmsgReceiverid:receiverid},
			success:function(res){
				if (res == "fail1") {return;}
				var array=eval(res);
				
				$.each(array,function(){
					//alert(this.msgContent);
					var th=this;
					var html ="";
					html+="<div class='friendconversationArea'>";
					html+="	<div class='friendtalkheadpic'></div>";
					html+="		<div class='frienddialogArea'>";
					html+="		<div class='frienddialog'>"+this.msgContent;		
					html+="		</div>";
					html+="	</div>";			
					html+="</div>";
					$(".talkhistory").append(html);

				});
				
				
			}	
		});
	});

	$(".msgsendbtn").click(function(){
		msgtxt=$(".inputmessage").val();
		receiverid=$(this).attr("friendid");
		
		$.ajax({
			type:"post",
			url:("ws/webservice.php"),
			data:{flag:"sendmsg",msgReceiverid:receiverid,msg:msgtxt},
			success:function(res){
				//alert(res);
			}
		});
		var html ="";	
		html+="<div class='myconversationArea'>";
		html+="	<div class='mytalkheadpic'></div>";
		html+="		<div class='mydialogArea'>";
		html+="		<div class='mydialog'>"+msgtxt;		
		html+="		</div>";
		html+="	</div>";			
		html+="</div>";
		$(".talkhistory").append(html);
		$(".talkhistory").animate({scrollTop:"9999999px"});
	});
	//setTimeout("receivemsg()",1000);
	setInterval("receivemsg()",1000);
});

function receivemsg(){
	var receiverid=$(".msgsendbtn").attr("friendid");
	$.ajax({
			type:"post",
			url:("ws/webservice.php"),
			data:{flag:"receivemsg"},
			success:function(res){
				if (res == "fail") {return;}
				var array =eval(res);
				//alert(array);
				$.each(array,function(){
					//alert(this.msgContent);
					var th=this;
					if (this.msgSender==$(".msgsendbtn").attr("friendid")) {
						//$(".talkhistory").append(this.msgContent);
						$.ajax({
							type:"post",
							url:("ws/webservice.php"),
							data:{flag:"yidu",rmsgReceiverid:receiverid},
							success:function(res){
								if (res == "fail1") {return;}
								var array=eval(res);								
								$.each(array,function(){
									//alert(this.msgContent);
									var th=this;
									var html ="";
									html+="<div class='friendconversationArea'>";
									html+="	<div class='friendtalkheadpic'></div>";
									html+="		<div class='frienddialogArea'>";
									html+="		<div class='frienddialog'>"+this.msgContent;		
									html+="		</div>";
									html+="	</div>";			
									html+="</div>";
									//html+="<li>"++"</li>";
									$(".talkhistory").append(html);
									$(".talkhistory").animate({scrollTop:"9999999px"});

								});
								
								
							}	
						});
					}
					else{				
						$(".friendlistli").each(function(){
							if (th.msgSender==$(this).attr("friendid")) {
								//alert($(this).attr("friendid"));
								$(this).find(".messageicon").show();
							};
							//alert($(this).attr("friendid"));
						});
					}

				});
				//$("body").append(res);
			}
		});
}

function gethistory(){
	var receiverid=$(".msgsendbtn").attr("friendid");
	$.ajax({
			type:"post",
			url:("ws/webservice.php"),
			data:{flag:"gethistory",gethistorymsgReceiverid:receiverid},
			success:function(res){
				if (res == "fail2") {return;}
				
				var array=eval(res);
				//alert(array);
				var html ="";			
				$.each(array,function(){
					//alert(this.msgContent);
					var th=this;					
					if (this.msgReceiver==$(".msgsendbtn").attr("friendid")) {
						html+="<div class='myconversationArea'>";
						html+="	<div class='mytalkheadpic'></div>";
						html+="		<div class='mydialogArea'>";
						html+="		<div class='mydialog'>"+this.msgContent;		
						html+="		</div>";
						html+="	</div>";			
						html+="</div>";
					}else{
						html+="<div class='friendconversationArea'>";
						html+="	<div class='friendtalkheadpic'></div>";
						html+="		<div class='frienddialogArea'>";
						html+="		<div class='frienddialog'>"+this.msgContent;		
						html+="		</div>";
						html+="	</div>";			
						html+="</div>";
					}
										
				});	
				$(".talkhistory").append(html);						
			}
		});
}
