$(function(){
	$(".friendA").click(function(){
		var friendID = $(this).attr("friendID");
		var chatDivID = "chat" + friendID;
		if ($(this).attr("isOpen") == "true") {
			//将已经打开的窗口置顶
			$(".qqChat").css("z-index","15");
			$("#" + chatDivID).css("z-index","16");
			return;
		}
		$(this).attr("isOpen","true");
		
		var friendName = $(this).attr("friendName");
		var html ="";
		html += '		<div id="' + chatDivID + '" class="qqChat">';
		html += '			<div class="chatTitle">';
		html += '				<div class="chatMenu"></div>';
		html += '				<div class="chatFriendName">' + friendName +'</div>';
		html += '				<div friendAID = "friendA'+friendID+'" chatDivID="' + chatDivID + '" class="chatClose">关闭</div>';
		html += '			</div>';
		html += '			<div class="chatHistory"></div>';
		html += '			<div class="chatControl"></div>';
		html += '		</div>';

		$("body").append(html);

		//置顶
		$(".qqChat").click(function(){
			$(".qqChat").css("z-index","15");
			$(this).css("z-index","16");
		});
		$(".chatClose").click(function(){
			var curCloseDivID = $(this).attr("chatDivID");
			$("#" + curCloseDivID).remove();


			var friendAid = $(this).attr("friendAID");
			$("#" + friendAid).attr("isOpen","false");

			
		});

		var divTop = Math.random()*100+10;
		var divLeft = Math.random()*240+320;

		$("#" + chatDivID).css({
			"top": divTop + "px",
			"left": divLeft + "px"
		});
	});
	
	/************点击会话***************/
	$("#session").click(function(){
		$(".nav_tab_head li").removeClass("selected");
		$(this).addClass("selected");
		$(".panel").removeClass("selected");
		$("#panel-1").addClass("selected");
	});
	/************点击联系人***************/
	$("#contact").click(function(){
		$(".nav_tab_head li").removeClass("selected");
		$(this).addClass("selected");
		$(".panel").removeClass("selected");
		$("#panel-2").addClass("selected");
	});
	/************点击发现***************/
	$("#plugin").click(function(){
		$(".nav_tab_head li").removeClass("selected");
		$(this).addClass("selected");
		$(".panel").removeClass("selected");
		$("#panel-3").addClass("selected");
	});
	/************点击设置***************/
	$("#setting").click(function(){
		$(".nav_tab_head li").removeClass("selected");
		$(this).addClass("selected");
		$(".panel").removeClass("selected");
		$("#panel-4").addClass("selected");
	});
	/************点击联系人中的好友标签***************/
	$("#clickMemberTab1").click(
		function(){
			//alert(123);
			$(".tab_head li").removeClass("active");
			$(this).addClass("active");
			$(".list").removeClass("active2");
			$("#friendList").addClass("active2");
		});
	/************点击联系人中的群标签***************/
	$("#clickMemberTab2").click(
		function(){
			$(".tab_head li").removeClass("active");
			$(this).addClass("active");
			$(".list").removeClass("active2");
			$("#qunlist").addClass("active2");
		});
	/************点击联系人中的讨论组标签***************/
	$("#clickMemberTab3").click(
		function(){
			$(".tab_head li").removeClass("active");
			$(this).addClass("active");
			$(".list").removeClass("active2");
			$("#taolunzulist").addClass("active2");
		});
	/************点击联系人中的好友标签中的收缩展开***************/
	$(".list_group").click(function(){	
			if ($(this).next().css('display')=="block") {				
				$(this).next().hide();
				$(this).find(".list_arrow_right").css("background", "");
			}
			else{
				$(this).next().show();
				$(this).find(".list_arrow_right").css({"background": "url(css/images/open_arrow_fire.png) no-repeat 12px","background-size": "14px 14px"});
			}
	});
	/************点击设置中状态***************/
	$("#online_state_setting").click(function(){
		if($("#online_state_setting ul").css("display")=="block"){
			$("#online_state_setting ul").hide();
		}
		else{
			$("#online_state_setting ul").show();
		}
	});
	/************点击设置消息相关设置***************/
	$("#clickNotifySetting").click(function(){
		var html ="";
		html += '		<div class="NotifySettingArea">';
		html += '			<div class="NotifySettingHead">';
		html += '				<div class="NotifySettingtMenu"></div>';
		html += '				<div class="NotifySettingTitle">设置</div>';
		html += '				<div class="NotifySettingClose">关闭</div>';
		html += '			</div>';
		html += '			<div class="chatHistory"></div>';
		html += '			<div class="chatControl"></div>';
		html += '		</div>';
		$("body").append(html);
	});

	/************点击设置中关于QQ***************/
	$("#aboutQQ").click(function(){
		if($("#about_qq_all").css("display")=="block"){
			$("#about_qq_all").hide();
			$(this).find(".more_icon").css("background", "");
		}
		else{
			$(this).find(".more_icon").css({"background": "url(css/images/open_arrow_fire.png) no-repeat center","background-size":"100% 100%"});
			$("#about_qq_all").show();
		}
	});
});