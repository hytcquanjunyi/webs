$(function(){

	$(".mengban").css('opacity','0.5');

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

	$(".logoutbtn").click(function(){
		$.ajax({
			type:"post",
			url:("ws/webservice.php"),
			data:{flag:"logout"},
			success:function(res){
				$("body").append(res);
					window.location.replace("login.php");
				
			}
		});
	});

	$(document).on("click",".friendlistli",function(){
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

		/*$.ajax({
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
		});*/
		
		receivemsg();
	});
	/*$(".friendlistli").click(function(){
		
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
		receivemsg();
	});*/

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
	//setTimeout("checklogin()",1000);
	setInterval("checklogin()",1000);


	$(".closeaddfriendArea").click(function(){
		$(".mengban").hide();
		$(".addfriendArea").hide();
		
	});

	$(".addfriendicon").click(function(){
		$(".mengban").show();
		$(".addfriendArea").show();
	});
	$(".closetalkformspan").click(function(){
		$(".talkform").hide();
		$(".msgsendbtn").removeAttr("friendid");
		$(".friendlistli").attr("flag","close");
	});



	$(".searchfriendbtn").click(function(){
		$(".searchresultlistul2").html("");
		var id=$("#adduserid").val();
		var name=$("#addusername").val();
		$.ajax({
			type:"POST",
			url:"ws/webservice.php",
			data:{flag:"searchfriend",searchid:id,searchname:name},
			success:function(res){

				if (res=="noone") {
					alert("没有符合条件的");
					return;
				}
				if (res=="nocondition") {
					alert("请输入查询条件");
					return;
				}
				var obj=eval(res);
				$.each(obj,function(){
					var html ="";
					html+="<li>";
					html+="	<span class='colum'>"+this.id+"</span>";
					html+=" <span class='colum'>"+this.userNickname+"</span>";
					html+=" <span class='colum'><a  friendid='"+this.id+"' class='addthis'>添加</a></span>";
					html+="</li>";
					$(".searchresultlistul2").append(html);
				});
				

			}
		});
		$(document).on( "click",".addthis" ,function(){
			var id=$(this).attr("friendid");			
			$.ajax({
				type:"POST",
				url:"ws/webservice.php",
				data:{flag:"addfriend",receiverid:id},
				success:function(res){
					alert(res);
				}
			});
		});

	});


	$(".requesticon").click(function(){
		if ($(".requestlistArea").css("display")=="block") {

			$(".requestlistArea").hide();

		}else{
			$(".requestlistArea").show();
		}
		$(".requestlistul").html("");
		$.ajax({
			type:"POST",
			url:"ws/webservice.php",
			data:{flag:"dealaddrequest"},
			success:function(res){
				if (res=="noresult") {
					$(".requestlistul").append("<li>没有任何请求</li>");
					
					return;
				};
				var obj=eval(res);
				$.each(obj,function(){
					
					var html="";
					html+="<li>";
					html+="	<span class='colum2'>ID为"+this.msgSender+"的"+this.userNickname+"请求加你为好友</span>";
					html+="	<span class='colum3' ><a friendid='"+this.msgSender+"' class='agreeaddthis'>同意</a></span>";
					html+="</li>";
					$(".requestlistul").append(html);
				});
			}
		});
	});
	$(".closerequestlistArea").click(function(){
		$(".requestlistArea").hide();
	});

	$(document).on("click",".agreeaddthis",function(){
		var id=$(this).attr("friendid");
		$.ajax({
			type:"post",
			url:("ws/webservice.php"),
			data:{flag:"agreethis",friendid:id},
			success:function(res){
				alert(res);
			}
		});
	});
	/*$(".agreeaddthis").click(function(){
		var id=$(this).attr("friendid");
		$,ajax({
			type:"post",
			url:("ws/webservice.php"),
			data:{flag:"agreethis",friendid:id},
			success:function(res){
				alert(res);
			}
		});
	});*/
});

function receivemsg(){
	var receiverid=$(".msgsendbtn").attr("friendid");
	$.ajax({
			type:"post",
			url:("ws/webservice.php"),
			data:{flag:"receivemsg"},
			async:false,
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
							async:false,
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

function checklogin(){
	$.ajax({
		type:"post",
			url:("ws/webservice.php"),
			data:{flag:"checklogin"},
			async:false,
			success:function(res){
				if (res=="nologin") {
					return;
				}
				var obj=eval(res);
				$.each(obj,function(){
					$("#friend"+this.id+"").remove();
					var html="";
					html+="<li id='friend"+this.id+"' friendid='"+this.id+"'  friendnickname='"+this.userNickname+"' class='friendlistli'>";
					html+=	"<div class='friendlisthead'> <img src= "+this.userHeadImage+" /></div>";
					html+=	"<div class='friendInfoArea'>";
					html+=	"	<span class='friendnickname'>"+this.userNickname+"</span>";
					html+=	"	<div class='messageicon'></div>	";
					html+=	"</div>";
					html+="</li>";
					$(".onlinelist").append(html);


				});
			}
	});
	$.ajax({
		type:"post",
			url:("ws/webservice.php"),
			data:{flag:"checklogout"},
			async:false,
			success:function(res){
				//$("body").append(res);
				if (res=="nologout") {
					return;
				}
				var obj=eval(res);
				$.each(obj,function(){
					$("#friend"+this.id+"").remove();
					var html="";
					html+="<li id='friend"+this.id+"' friendid='"+this.id+"'  friendnickname='"+this.userNickname+"' class='friendlistli'>";
					html+=	"<div class='friendlisthead'> <img src= "+this.userHeadImage+" /></div>";
					html+=	"<div class='friendInfoArea'>";
					html+=	"	<span class='friendnickname'>"+this.userNickname+"</span>";
					html+=	"	<div class='messageicon'></div>	";
					html+=	"</div>";
					html+="</li>";
					$(".offlinelist").append(html);


				});
			}
	});
}

function gethistory(){
	var receiverid=$(".msgsendbtn").attr("friendid");

	$.ajax({
			type:"post",
			url:("ws/webservice.php"),
			async:false,
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
