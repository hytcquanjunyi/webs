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
		/*html += '		<div id="' + chatDivID + '" class="qqChat">';
		html += '			<div class="chatTitle">';
		html += '				<div class="chatMenu"></div>';
		html += '				<div class="chatFriendName">' + friendName +'</div>';
		html += '				<div friendAID = "friendA'+friendID+'" chatDivID="' + chatDivID + '" class="chatClose">关闭</div>';
		html += '			</div>';
		html += '			<div class="chatHistory"></div>';
		html += '			<div class="chatControl"></div>';
		html += '		</div>';*/



		html+=	'<div id="'+chatDivID+'" class="qqChat" >';			
		html += '		<div class="chatTitle">	';			
		html += '			<div class="chatMenu"></div>'				
		html += '			<div class="chatFriendName">'+friendName+'</div>'				
		html += '			<div friendaID="friendA'+friendID+'" chatDivID="'+chatDivID+'" class="chatClose">关闭</div>';			
		html += '		</div>';
		html += '		<div class="chatHistory">';
						
		html += '		</div>'			
		html += '		<div class="chatControl">';
		html += '			<div class="chat_toolbar">';
		html += '				<div class="add_face_btn btn btn_face">';
		html += '					<span class="btn_img"></span>';

		html += '				</div>';
		html += '				<input class="input input_white chat_textarea">';
		html += '				<button  class="send_chat_btn btn btn_small btn_blue" cmd="sendMsg">';
		html += '	        		<span class="btn_text">发送</span>';
		html += '	    		</button>';
		html += '			</div>';
		html += '			<div class="face_images qq_face_area" >';
		html += '			    <ul class="wrap">';
				        
		html += '			        <li class="faceIteam faceIteam1" cmd="chooseFace" style="width: 0px;"> ';  
		html += '				        <i title="[微笑]" txt="[微笑]" href="javascript:;"></i>';
		html += '				        <i title="[撇嘴]" txt="[撇嘴]"  href="javascript:;"></i>';
		html += '				        <i title="[色]"  	txt="[色]" href="javascript:;"></i>';
		html += '				        <i title="[发呆]" txt="[发呆]" href="javascript:;"></i>';
		html += '				        <i title="[得意]" txt="[得意]" href="javascript:;"></i>';
		html += '				        <i title="[流泪]" txt="[流泪]"  href="javascript:;"></i>';
		html += '				        <i title="[害羞]" txt="[害羞]"  href="javascript:;"></i>';
		html += '				        <i title="[闭嘴]" txt="[闭嘴]"  href="javascript:;"></i>';
		html += '				        <i title="[睡]"  	txt="[睡]"  href="javascript:;"></i>';
		html += '				        <i title="[大哭]" txt="[大哭]"  href="javascript:;"></i>';
		html += '				        <i title="[尴尬]" txt="[尴尬]"  href="javascript:;"></i>';
		html += '				        <i title="[发怒]" txt="[发怒]"  href="javascript:;"></i>';
		html += '				        <i title="[调皮]" txt="[调皮]"  href="javascript:;"></i>';
		html += '				        <i title="[呲牙]" txt="[呲牙]"  href="javascript:;"></i>';
		html += '				        <i title="[惊讶]" txt="[惊讶]"  href="javascript:;"></i>';
		html += '				        <i title="[难过]"	txt="[难过]" href="javascript:;"></i>';
		html += '				        <i title="[酷]" 	txt="[酷]" href="javascript:;"></i>';
		html += '				        <i title="[冷汗]"	txt="[冷汗]" href="javascript:;"></i>';
		html += '				        <i title="[抓狂]"	txt="[抓狂]" href="javascript:;"></i>';
		html += '				        <i title="[吐]" 	txt="[吐]" href="javascript:;"></i> ';
		html += '				        <i title="delKey" href="javascript:;"></i>';
		html += '			        </li>';
					        
		html += '			        <li class="faceIteam faceIteam2" cmd="chooseFace" style="width: 0px;">';
		html += '				        <i title="[偷笑]" txt="[偷笑]" href="javascript:;"></i>';
		html += '				        <i title="[可爱]" txt="[可爱]" href="javascript:;"></i>';
		html += '				        <i title="[白眼]" txt="[白眼]" href="javascript:;"></i>';
		html += '				        <i title="[傲慢]" txt="[傲慢]" href="javascript:;"></i>';
		html += '				        <i title="[饥饿]" txt="[饥饿]" href="javascript:;"></i>';
		html += '				        <i title="[困]" 	txt="[困]" href="javascript:;"></i>';
		html += '				        <i title="[惊恐]" txt="[惊恐]" href="javascript:;"></i>';
		html += '				        <i title="[流汗]" txt="[流汗]" href="javascript:;"></i>';
		html += '				        <i title="[憨笑]" txt="[憨笑]" href="javascript:;"></i>';
		html += '				        <i title="[大兵]" txt="[大兵]" href="javascript:;"></i>';
		html += '				        <i title="[奋斗]" txt="[奋斗]" href="javascript:;"></i>';
		html += '				        <i title="[咒骂]" txt="[咒骂]" href="javascript:;"></i>';
		html += '				        <i title="[疑问]" txt="[疑问]" href="javascript:;"></i>';
		html += '				        <i title="[嘘]"   txt="[嘘]" href="javascript:;"></i>';
		html += '				        <i title="[晕]"   txt="[晕]" href="javascript:;"></i>';
		html += '				        <i title="[折磨]" txt="[折磨]" href="javascript:;"></i>';
		html += '				        <i title="[衰]"   txt="[衰]" href="javascript:;"></i>';
		html += '				        <i title="[骷髅]" txt="[骷髅]" href="javascript:;"></i>';
		html += '				        <i title="[敲打]" txt="[敲打]" href="javascript:;"></i>';
		html += '				        <i title="[再见]" txt="[再见]" href="javascript:;"></i>';
		html += '				        <i title="delKey" href="javascript:;"></i>';
		html += '			        </li>';
					        
		html += '			        <li class="faceIteam faceIteam3" cmd="chooseFace" style="width: 0px;">';
		html += '				        <i title="[擦汗]"  txt="[擦汗]"href="javascript:;"></i>';
		html += '				        <i title="[抠鼻]"  txt="[抠鼻]"href="javascript:;"></i>';
		html += '				        <i title="[鼓掌]"  txt="[鼓掌]"href="javascript:;"></i>';
		html += '				        <i title="[糗大了]"txt="[糗大了]"  href="javascript:;"></i>';
		html += '				        <i title="[坏笑]" txt="[坏笑]" href="javascript:;"></i>';
		html += '				        <i title="[左哼哼]" txt="[左哼哼]" href="javascript:;"></i>';
		html += '				        <i title="[右哼哼]" txt="[右哼哼]" href="javascript:;"></i>';
		html += '				        <i title="[哈欠]" txt="[哈欠]" href="javascript:;"></i>';
		html += '				        <i title="[鄙视]" txt="[鄙视]" href="javascript:;"></i>';
		html += '				        <i title="[委屈]" txt="[委屈]" href="javascript:;"></i>';
		html += '				        <i title="[快哭了]" txt="[快哭了]" href="javascript:;"></i>';
		html += '				        <i title="[阴险]" txt="[阴险]" href="javascript:;"></i>';
		html += '				        <i title="[亲亲]" txt="[亲亲]" href="javascript:;"></i>';
		html += '				        <i title="[吓]"  txt="[吓]" href="javascript:;"></i>';
		html += '				        <i title="[可怜]" txt="[可怜]" href="javascript:;"></i>';
		html += '				        <i title="[菜刀]" txt="[菜刀]" href="javascript:;"></i>';
		html += '				        <i title="[西瓜]" txt="[西瓜]" href="javascript:;"></i>';
		html += '				        <i title="[啤酒]" txt="[啤酒]" href="javascript:;"></i>';
		html += '				        <i title="[篮球]" txt="[篮球]" href="javascript:;"></i>';
		html += '				        <i title="[乒乓]" txt="[乒乓]" href="javascript:;"></i>';
		html += '				        <i title="delKey" href="javascript:;"></i>';
		html += '			        </li>';
					        
		html += '			        <li class="faceIteam faceIteam4" cmd="chooseFace" style="width: 0px;">';
		html += '				        <i title="[咖啡]" href="javascript:;"></i>';
		html += '				        <i title="[饭]" href="javascript:;"></i>';
		html += '				        <i title="[猪头]" txt="[猪头]" href="javascript:;"></i>';
		html += '				        <i title="[玫瑰]" txt="[玫瑰]" href="javascript:;"></i>';
		html += '				        <i title="[凋谢]" txt="[凋谢]" href="javascript:;"></i>';
		html += '				        <i title="[示爱]" txt="[示爱]" href="javascript:;"></i>';
		html += '				        <i title="[爱心]" txt="[爱心]" href="javascript:;"></i>';
		html += '				        <i title="[心碎]" txt="[心碎]" href="javascript:;"></i>';
		html += '				        <i title="[蛋糕]" txt="[蛋糕]" href="javascript:;"></i>';
		html += '				        <i title="[闪电]" txt="[闪电]" href="javascript:;"></i>';
		html += '				        <i title="[炸弹]" txt="[炸弹]" href="javascript:;"></i>';
		html += '				        <i title="[刀]"   txt="[刀]" href="javascript:;"></i>';
		html += '				        <i title="[足球]" txt="[足球]" href="javascript:;"></i>';
		html += '				        <i title="[瓢虫]" txt="[瓢虫]" href="javascript:;"></i>';
		html += '				        <i title="[便便]" txt="[便便]" href="javascript:;"></i>';
		html += '				        <i title="[月亮]" txt="[月亮]" href="javascript:;"></i>';
		html += '				        <i title="[太阳]" txt="[太阳]" href="javascript:;"></i>';
		html += '				        <i title="[礼物]" txt="[礼物]" href="javascript:;"></i>';
		html += '				        <i title="[拥抱]" txt="[拥抱]" href="javascript:;"></i>';
		html += '				        <i title="[强]"   txt="[强]" href="javascript:;"></i>';
		html += '				        <i title="delKey" href="javascript:;"></i>';
		html += '			        </li>';
					        
		html += '			        <li class="faceIteam faceIteam5" cmd="chooseFace" style="width: 0px;">';
		html += '				        <i title="弱" href="javascript:;"></i>';
		html += '				        <i title="握手" txt="[握手]" href="javascript:;"></i>';
		html += '				        <i title="胜利" txt="[胜利]" href="javascript:;"></i>';
		html += '				        <i title="抱拳" txt="[抱拳]" href="javascript:;"></i>';
		html += '				        <i title="勾引" txt="[勾引]" href="javascript:;"></i>';
		html += '				        <i title="拳头" txt="[拳头]" href="javascript:;"></i>';
		html += '				        <i title="差劲" txt="[差劲]" href="javascript:;"></i>';
		html += '				        <i title="爱你" txt="[爱你]" href="javascript:;"></i>';
		html += '				        <i title="NO"   txt="[NO]" href="javascript:;"></i>';
		html += '				        <i title="OK"   txt="[OK]" href="javascript:;"></i>';
		html += '				        <i title="爱情" txt="[爱情]" href="javascript:;"></i>';
		html += '				        <i title="飞吻" txt="[飞吻]" href="javascript:;"></i>';
		html += '				        <i title="跳跳" txt="[跳跳]" href="javascript:;"></i>';
		html += '				        <i title="发抖" txt="[发抖]" href="javascript:;"></i>';
		html += '				        <i title="怄火" txt="[怄火]" href="javascript:;"></i>  ';  
		html += '				        <i title="转圈" txt="[转圈]" href="javascript:;"></i>';
		html += '				        <i title="磕头" txt="[磕头]" href="javascript:;"></i>	';			            
		html += '				        <i title="回头" txt="[回头]"  href="javascript:;"></i>	';			            
		html += '				        <i title="跳绳" txt="[跳绳]"  href="javascript:;"></i>	';			            
		html += '				        <i title="挥手" txt="[挥手]"  href="javascript:;"></i>	';			            
		html += '				        <i title="delKey" href="javascript:;"></i>';
		html += '			        </li>';
					        
		html += '			        <li class="faceIteam faceIteam6" cmd="chooseFace" style="width: 0px;">';
		html += '				        <i title="[激动]" href="javascript:;"></i>';
		html += '				        <i title="[街舞]" href="javascript:;"></i>';
		html += '				        <i title="[献吻]" href="javascript:;"></i>	';			            
		html += '				        <i title="[左太极]" href="javascript:;"></i>';				            
		html += '				        <i title="[右太极]" href="javascript:;"></i>';
		html += '				        <i title="[双喜]" href="javascript:;"></i>';
		html += '				        <i title="[鞭炮]" href="javascript:;"></i>	';			            
		html += '				        <i title="[灯笼]" href="javascript:;"></i>	';			            
		html += '				        <i title="[发财]" href="javascript:;"></i>	';			            
		html += '				        <i title="[K歌]" href="javascript:;"></i>	';			            
		html += '				        <i title="[购物]" href="javascript:;"></i>	';			            
		html += '				        <i title="[邮件]" href="javascript:;"></i>	';			            
		html += '				        <i title="[帅]" href="javascript:;"></i>	';			            
		html += '				        <i title="[喝彩]" href="javascript:;"></i>	';		            
		html += '				        <i title="[祈祷]" href="javascript:;"></i>';
		html += '				        <i title="[爆筋]" href="javascript:;"></i>	';			            
		html += '				        <i title="[棒棒糖]" href="javascript:;"></i>';
		html += '				        <i title="[喝奶]" href="javascript:;"></i>    ';        
		html += '				        <i title="[下面]" href="javascript:;"></i>    ';
		html += '				        <i title="[香蕉]" href="javascript:;"></i>      ';      
		html += '				        <i title="delKey" href="javascript:;"></i>';
		html += '			        </li>       ';
		html += '			    </ul>';
		html += '			    <ul class="btnsWrap">';
		html += '			    	<li class="selected" _index="0"></li>';
		html += '			    	<li _index="1"></li>';
		html += '			    	<li _index="2"></li>';
		html += '			    	<li _index="3"></li>';
		html += '			    	<li _index="4"></li>';
		html += '			    	<li _index="5"></li>';
		html += '			    </ul>';
		html += '			</div>';
		html += '		</div>		';
		html += '	</div>';







		$("body").append(html);

		$(".qqChat").draggable({handle:".chatTitle",containment: "#containment-wrapper", scroll: false});

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
		
		$(".NotifySettingArea").show();
	});
	$(".NotifySettingClose").click(function(){
		$(".NotifySettingArea").hide();
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

	/**********显示QQ表情************/
	$(".add_face_btn").click(function(){
		$(".chatHistory").css("height","100px");
		if($(".qq_face_area").css("display")=="block"){
			$(".qq_face_area").hide();
			$(".chatHistory").css("height","");
		}
		else{
			$(".qq_face_area").show();
		}
	});


	$(document).on("click",".add_face_btn",function(){
		$(".chatHistory").css("height","100px");
		if($(".qq_face_area").css("display")=="block"){
			$(".qq_face_area").hide();
			$(".chatHistory").css("height","");
		}
		else{
			$(".qq_face_area").show();
		}
	});


	/*************QQ表情换页****************/
		$(".btnsWrap li").click(function(){
			$(".btnsWrap li").removeClass("selected");
			$(this).addClass("selected");
			var index=$(this).attr("_index");
			$(".wrap").animate({"margin-left": -index*700+"px"},500);
		});

		$(document).on("click",".btnsWrap li",function(){
			$(".btnsWrap li").removeClass("selected");
			$(this).addClass("selected");
			var index=$(this).attr("_index");
			$(".wrap").animate({"margin-left": -index*700+"px"},500);
		});

	/**********添加qq表情************/
		$(".faceIteam i").click(function(){
			
			$(".input").val($(".input").val()+$(this).attr("txt"));
		});

		$(document).on("click",".faceIteam i",function(){
			$(".input").val($(".input").val()+$(this).attr("txt"));
		});
		/*******发送消息以及表情替换文字********/
		/*
		$(".send_chat_btn").click(function(){
			var txt=$(".input").val();
			var length=$(".input").val().length;
			for (var i=0;i<length;i++) {
				txt=txt.replace("[微笑]","<img src='images/14.gif' />");
				txt=txt.replace("[撇嘴]","<img src='images/1.gif' />");
				txt=txt.replace("[色]","<img src='images/2.gif' />");
				txt=txt.replace("[发呆]","<img src='images/3.gif' />");
				txt=txt.replace("[得意]","<img src='images/4.gif' />");
				txt=txt.replace("[流泪]","<img src='images/5.gif' />");
				txt=txt.replace("[害羞]","<img src='images/6.gif' />");
				txt=txt.replace("[闭嘴]","<img src='images/7.gif' />");
				txt=txt.replace("[睡]","<img src='images/8.gif' />");
				txt=txt.replace("[大哭]","<img src='images/9.gif' />");
				txt=txt.replace("[尴尬]","<img src='images/10.gif' />");
				txt=txt.replace("[发怒]","<img src='images/11.gif' />");
				txt=txt.replace("[调皮]","<img src='images/12.gif' />");
				txt=txt.replace("[呲牙]","<img src='images/13.gif' />");
				txt=txt.replace("[惊讶]","<img src='images/0.gif' />");
				txt=txt.replace("[难过]","<img src='images/15.gif' />");
				txt=txt.replace("[酷]","<img src='images/16.gif' />");
				txt=txt.replace("[冷汗]","<img src='images/96.gif' />");
				txt=txt.replace("[抓狂]","<img src='images/18.gif' />");
				txt=txt.replace("[吐]","<img src='images/19.gif' />");
				txt=txt.replace("[偷笑]","<img src='images/20.gif' />");
				txt=txt.replace("[可爱]","<img src='images/21.gif' />");
				txt=txt.replace("[白眼]","<img src='images/22.gif' />");
				txt=txt.replace("[傲慢]","<img src='images/23.gif' />");
				txt=txt.replace("[饥饿]","<img src='images/24.gif' />");
				txt=txt.replace("[困]","<img src='images/25.gif' />");
				txt=txt.replace("[惊恐]","<img src='images/26.gif' />");
				txt=txt.replace("[流汗]","<img src='images/27.gif' />");
				txt=txt.replace("[憨笑]","<img src='images/28.gif' />");
				txt=txt.replace("[大兵]","<img src='images/29.gif' />");
				txt=txt.replace("[奋斗]","<img src='images/30.gif' />");
				txt=txt.replace("[咒骂]","<img src='images/31.gif' />");
				txt=txt.replace("[疑问]","<img src='images/32.gif' />");
				txt=txt.replace("[嘘]","<img src='images/33.gif' />");
				txt=txt.replace("[晕]","<img src='images/34.gif' />");
				txt=txt.replace("[折磨]","<img src='images/35.gif' />");
				txt=txt.replace("[衰]","<img src='images/36.gif' />");
				txt=txt.replace("[骷髅]","<img src='images/37.gif' />");
				txt=txt.replace("[敲打]","<img src='images/38.gif' />");
				txt=txt.replace("[再见]","<img src='images/39.gif' />");
				txt=txt.replace("[擦汗]","<img src='images/97.gif' />");
				txt=txt.replace("[抠鼻]","<img src='images/98.gif' />");
				txt=txt.replace("[鼓掌]","<img src='images/99.gif' />");
				txt=txt.replace("[糗大了]","<img src='images/100.gif' />");
				txt=txt.replace("[坏笑]","<img src='images/101.gif' />");
				txt=txt.replace("[左哼哼]","<img src='images/102.gif' />");
				txt=txt.replace("[右哼哼]","<img src='images/103.gif' />");
				txt=txt.replace("[哈欠]","<img src='images/104.gif' />");
				txt=txt.replace("[鄙视]","<img src='images/105.gif' />");
				txt=txt.replace("[委屈]","<img src='images/106.gif' />");
				txt=txt.replace("[快哭了]","<img src='images/107.gif' />");
				txt=txt.replace("[阴险]","<img src='images/108.gif' />");
				txt=txt.replace("[亲亲]","<img src='images/109.gif' />");
				txt=txt.replace("[吓]","<img src='images/110.gif' />");
				txt=txt.replace("[可怜]","<img src='images/111.gif' />");
				txt=txt.replace("[菜刀]","<img src='images/112.gif' />");
				txt=txt.replace("[西瓜]","<img src='images/89.gif' />");
				txt=txt.replace("[啤酒]","<img src='images/113.gif' />");
				txt=txt.replace("[篮球]","<img src='images/114.gif' />");
				txt=txt.replace("[乒乓]","<img src='images/115.gif' />");
				txt=txt.replace("[咖啡]","<img src='images/60.gif' />");
				txt=txt.replace("[饭]","<img src='images/61.gif' />");
				txt=txt.replace("[猪头]","<img src='images/46.gif' />");
				txt=txt.replace("[玫瑰]","<img src='images/63.gif' />");
				txt=txt.replace("[凋谢]","<img src='images/64.gif' />");
				txt=txt.replace("[示爱]","<img src='images/116.gif' />");
				txt=txt.replace("[爱心]","<img src='images/66.gif' />");
				txt=txt.replace("[心碎]","<img src='images/67.gif' />");
				txt=txt.replace("[蛋糕]","<img src='images/53.gif' />");
				txt=txt.replace("[闪电]","<img src='images/54.gif' />");
				txt=txt.replace("[炸弹]","<img src='images/55.gif' />");
				txt=txt.replace("[刀]","<img src='images/56.gif' />");
				txt=txt.replace("[足球]","<img src='images/57.gif' />");
				txt=txt.replace("[瓢虫]","<img src='images/117.gif' />");
				txt=txt.replace("[便便]","<img src='images/59.gif' />");
				txt=txt.replace("[月亮]","<img src='images/75.gif' />");
				txt=txt.replace("[太阳]","<img src='images/74.gif' />");
				txt=txt.replace("[礼物]","<img src='images/69.gif' />");
				txt=txt.replace("[拥抱]","<img src='images/49.gif' />");
				txt=txt.replace("[强]","<img src='images/76.gif' />");
				txt=txt.replace("[弱]","<img src='images/77.gif' />");
				txt=txt.replace("[握手]","<img src='images/78.gif' />");
				txt=txt.replace("[胜利]","<img src='images/79.gif' />");
				txt=txt.replace("[抱拳]","<img src='images/118.gif' />");
				txt=txt.replace("[勾引]","<img src='images/119.gif' />");
				txt=txt.replace("[拳头]","<img src='images/120.gif' />");
				txt=txt.replace("[差劲]","<img src='images/121.gif' />");
				txt=txt.replace("[爱你]","<img src='images/122.gif' />");
				txt=txt.replace("[NO]","<img src='images/123.gif' />");
				txt=txt.replace("[OK]","<img src='images/124.gif' />");
				txt=txt.replace("[爱情]","<img src='images/42.gif' />");
				txt=txt.replace("[飞吻]","<img src='images/85.gif' />");
				txt=txt.replace("[跳跳]","<img src='images/43.gif' />");
				txt=txt.replace("[发抖]","<img src='images/41.gif' />");
				txt=txt.replace("[怄火]","<img src='images/86.gif' />");
				txt=txt.replace("[转圈]","<img src='images/125.gif' />");
				txt=txt.replace("[磕头]","<img src='images/126.gif' />");
				txt=txt.replace("[回头]","<img src='images/127.gif' />");
				txt=txt.replace("[跳绳]","<img src='images/128.gif' />");
				txt=txt.replace("[挥手]","<img src='images/129.gif' />");
				txt=txt.replace("[激动]","<img src='images/130.gif' />");
				txt=txt.replace("[街舞]","<img src='images/131.gif' />");
				txt=txt.replace("[献吻]","<img src='images/132.gif' />");
				txt=txt.replace("[左太极]","<img src='images/133.gif' />");
				txt=txt.replace("[右太极]","<img src='images/134.gif' />");
				txt=txt.replace("[双喜]","<img src='images/136.gif' />");
				txt=txt.replace("[鞭炮]","<img src='images/137.gif' />");
				txt=txt.replace("[灯笼]","<img src='images/138.gif' />");
				txt=txt.replace("[发财]","<img src='images/139.gif' />");
				txt=txt.replace("[K歌]","<img src='images/140.gif' />");
				txt=txt.replace("[购物]","<img src='images/141.gif' />");
				txt=txt.replace("[邮件]","<img src='images/142.gif' />");
				txt=txt.replace("[帅]","<img src='images/143.gif' />");
				txt=txt.replace("[喝彩]","<img src='images/144.gif' />");
				txt=txt.replace("[祈祷]","<img src='images/145.gif' />");
				txt=txt.replace("[爆筋]","<img src='images/146.gif' />");
				txt=txt.replace("[棒棒糖]","<img src='images/147.gif' />");
				txt=txt.replace("[喝奶]","<img src='images/148.gif' />");
				txt=txt.replace("[下面]","<img src='images/149.gif' />");
				txt=txt.replace("[香蕉]","<img src='images/150.gif' />");
			}
			var html="";
			html +="	<div class='talkcontent'>";
			html +="		<div class='talktime'>	";		
			html +="				<span class='chattime'>16:30</span>";		
			html +="		</div>";
			html +="		<a href='' class='talkclicon' style='background-image: url();'></a>";
			html +="		<div class='talkcleft'>					";
			html +="			<span class='talkclname'>雪做的花冠</span>";				
			html +="			<p class='talkcltxt'>"+txt+"</p>";			
			html +="		</div>";
			html +="	</div>";
			if(txt=="" ){
				return;
			}
			$(".chatHistory").append(html);
			//alert($(".input").val().length);
			$(".input").val("");
		});*/

		
		$(document).on("click",".send_chat_btn",function(){

			var txt=$(".input").val();
			var length=$(".input").val().length;
			for (var i=0;i<length;i++) {
				txt=txt.replace("[微笑]","<img src='images/14.gif' />");
				txt=txt.replace("[撇嘴]","<img src='images/1.gif' />");
				txt=txt.replace("[色]","<img src='images/2.gif' />");
				txt=txt.replace("[发呆]","<img src='images/3.gif' />");
				txt=txt.replace("[得意]","<img src='images/4.gif' />");
				txt=txt.replace("[流泪]","<img src='images/5.gif' />");
				txt=txt.replace("[害羞]","<img src='images/6.gif' />");
				txt=txt.replace("[闭嘴]","<img src='images/7.gif' />");
				txt=txt.replace("[睡]","<img src='images/8.gif' />");
				txt=txt.replace("[大哭]","<img src='images/9.gif' />");
				txt=txt.replace("[尴尬]","<img src='images/10.gif' />");
				txt=txt.replace("[发怒]","<img src='images/11.gif' />");
				txt=txt.replace("[调皮]","<img src='images/12.gif' />");
				txt=txt.replace("[呲牙]","<img src='images/13.gif' />");
				txt=txt.replace("[惊讶]","<img src='images/0.gif' />");
				txt=txt.replace("[难过]","<img src='images/15.gif' />");
				txt=txt.replace("[酷]","<img src='images/16.gif' />");
				txt=txt.replace("[冷汗]","<img src='images/96.gif' />");
				txt=txt.replace("[抓狂]","<img src='images/18.gif' />");
				txt=txt.replace("[吐]","<img src='images/19.gif' />");
				txt=txt.replace("[偷笑]","<img src='images/20.gif' />");
				txt=txt.replace("[可爱]","<img src='images/21.gif' />");
				txt=txt.replace("[白眼]","<img src='images/22.gif' />");
				txt=txt.replace("[傲慢]","<img src='images/23.gif' />");
				txt=txt.replace("[饥饿]","<img src='images/24.gif' />");
				txt=txt.replace("[困]","<img src='images/25.gif' />");
				txt=txt.replace("[惊恐]","<img src='images/26.gif' />");
				txt=txt.replace("[流汗]","<img src='images/27.gif' />");
				txt=txt.replace("[憨笑]","<img src='images/28.gif' />");
				txt=txt.replace("[大兵]","<img src='images/29.gif' />");
				txt=txt.replace("[奋斗]","<img src='images/30.gif' />");
				txt=txt.replace("[咒骂]","<img src='images/31.gif' />");
				txt=txt.replace("[疑问]","<img src='images/32.gif' />");
				txt=txt.replace("[嘘]","<img src='images/33.gif' />");
				txt=txt.replace("[晕]","<img src='images/34.gif' />");
				txt=txt.replace("[折磨]","<img src='images/35.gif' />");
				txt=txt.replace("[衰]","<img src='images/36.gif' />");
				txt=txt.replace("[骷髅]","<img src='images/37.gif' />");
				txt=txt.replace("[敲打]","<img src='images/38.gif' />");
				txt=txt.replace("[再见]","<img src='images/39.gif' />");
				txt=txt.replace("[擦汗]","<img src='images/97.gif' />");
				txt=txt.replace("[抠鼻]","<img src='images/98.gif' />");
				txt=txt.replace("[鼓掌]","<img src='images/99.gif' />");
				txt=txt.replace("[糗大了]","<img src='images/100.gif' />");
				txt=txt.replace("[坏笑]","<img src='images/101.gif' />");
				txt=txt.replace("[左哼哼]","<img src='images/102.gif' />");
				txt=txt.replace("[右哼哼]","<img src='images/103.gif' />");
				txt=txt.replace("[哈欠]","<img src='images/104.gif' />");
				txt=txt.replace("[鄙视]","<img src='images/105.gif' />");
				txt=txt.replace("[委屈]","<img src='images/106.gif' />");
				txt=txt.replace("[快哭了]","<img src='images/107.gif' />");
				txt=txt.replace("[阴险]","<img src='images/108.gif' />");
				txt=txt.replace("[亲亲]","<img src='images/109.gif' />");
				txt=txt.replace("[吓]","<img src='images/110.gif' />");
				txt=txt.replace("[可怜]","<img src='images/111.gif' />");
				txt=txt.replace("[菜刀]","<img src='images/112.gif' />");
				txt=txt.replace("[西瓜]","<img src='images/89.gif' />");
				txt=txt.replace("[啤酒]","<img src='images/113.gif' />");
				txt=txt.replace("[篮球]","<img src='images/114.gif' />");
				txt=txt.replace("[乒乓]","<img src='images/115.gif' />");
				txt=txt.replace("[咖啡]","<img src='images/60.gif' />");
				txt=txt.replace("[饭]","<img src='images/61.gif' />");
				txt=txt.replace("[猪头]","<img src='images/46.gif' />");
				txt=txt.replace("[玫瑰]","<img src='images/63.gif' />");
				txt=txt.replace("[凋谢]","<img src='images/64.gif' />");
				txt=txt.replace("[示爱]","<img src='images/116.gif' />");
				txt=txt.replace("[爱心]","<img src='images/66.gif' />");
				txt=txt.replace("[心碎]","<img src='images/67.gif' />");
				txt=txt.replace("[蛋糕]","<img src='images/53.gif' />");
				txt=txt.replace("[闪电]","<img src='images/54.gif' />");
				txt=txt.replace("[炸弹]","<img src='images/55.gif' />");
				txt=txt.replace("[刀]","<img src='images/56.gif' />");
				txt=txt.replace("[足球]","<img src='images/57.gif' />");
				txt=txt.replace("[瓢虫]","<img src='images/117.gif' />");
				txt=txt.replace("[便便]","<img src='images/59.gif' />");
				txt=txt.replace("[月亮]","<img src='images/75.gif' />");
				txt=txt.replace("[太阳]","<img src='images/74.gif' />");
				txt=txt.replace("[礼物]","<img src='images/69.gif' />");
				txt=txt.replace("[拥抱]","<img src='images/49.gif' />");
				txt=txt.replace("[强]","<img src='images/76.gif' />");
				txt=txt.replace("[弱]","<img src='images/77.gif' />");
				txt=txt.replace("[握手]","<img src='images/78.gif' />");
				txt=txt.replace("[胜利]","<img src='images/79.gif' />");
				txt=txt.replace("[抱拳]","<img src='images/118.gif' />");
				txt=txt.replace("[勾引]","<img src='images/119.gif' />");
				txt=txt.replace("[拳头]","<img src='images/120.gif' />");
				txt=txt.replace("[差劲]","<img src='images/121.gif' />");
				txt=txt.replace("[爱你]","<img src='images/122.gif' />");
				txt=txt.replace("[NO]","<img src='images/123.gif' />");
				txt=txt.replace("[OK]","<img src='images/124.gif' />");
				txt=txt.replace("[爱情]","<img src='images/42.gif' />");
				txt=txt.replace("[飞吻]","<img src='images/85.gif' />");
				txt=txt.replace("[跳跳]","<img src='images/43.gif' />");
				txt=txt.replace("[发抖]","<img src='images/41.gif' />");
				txt=txt.replace("[怄火]","<img src='images/86.gif' />");
				txt=txt.replace("[转圈]","<img src='images/125.gif' />");
				txt=txt.replace("[磕头]","<img src='images/126.gif' />");
				txt=txt.replace("[回头]","<img src='images/127.gif' />");
				txt=txt.replace("[跳绳]","<img src='images/128.gif' />");
				txt=txt.replace("[挥手]","<img src='images/129.gif' />");
				txt=txt.replace("[激动]","<img src='images/130.gif' />");
				txt=txt.replace("[街舞]","<img src='images/131.gif' />");
				txt=txt.replace("[献吻]","<img src='images/132.gif' />");
				txt=txt.replace("[左太极]","<img src='images/133.gif' />");
				txt=txt.replace("[右太极]","<img src='images/134.gif' />");
				txt=txt.replace("[双喜]","<img src='images/136.gif' />");
				txt=txt.replace("[鞭炮]","<img src='images/137.gif' />");
				txt=txt.replace("[灯笼]","<img src='images/138.gif' />");
				txt=txt.replace("[发财]","<img src='images/139.gif' />");
				txt=txt.replace("[K歌]","<img src='images/140.gif' />");
				txt=txt.replace("[购物]","<img src='images/141.gif' />");
				txt=txt.replace("[邮件]","<img src='images/142.gif' />");
				txt=txt.replace("[帅]","<img src='images/143.gif' />");
				txt=txt.replace("[喝彩]","<img src='images/144.gif' />");
				txt=txt.replace("[祈祷]","<img src='images/145.gif' />");
				txt=txt.replace("[爆筋]","<img src='images/146.gif' />");
				txt=txt.replace("[棒棒糖]","<img src='images/147.gif' />");
				txt=txt.replace("[喝奶]","<img src='images/148.gif' />");
				txt=txt.replace("[下面]","<img src='images/149.gif' />");
				txt=txt.replace("[香蕉]","<img src='images/150.gif' />");
			}
			var html="";
			html +="	<div class='talkcontent'>";
			html +="		<div class='talktime'>	";		
			html +="				<span class='chattime'>16:30</span>";		
			html +="		</div>";
			html +="		<a href='' class='talkclicon' style='background-image: url();'></a>";
			html +="		<div class='talkcleft'>					";
			html +="			<span class='talkclname'>小明</span>";				
			html +="			<p class='talkcltxt'>"+txt+"</p>";			
			html +="		</div>";
			html +="	</div>";
			if(txt=="" ){
				return;
			}
			$(".chatHistory").append(html);
			//alert($(".input").val().length);
			$(".input").val("");
		});


});