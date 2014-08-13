$(function(){
	/*********点击登录按钮 蒙板和登录框显示************/
	$("#login_btn").click(function(){
		$(".mengban").show();
		$(".LoginArea").show();
	});
	/*******jquery ui 可拖拽************/
	$(".LoginArea").draggable({handle:".DraggableHeader"});
	/*********点击登录框中叉叉 蒙板和登录框消失************/
	$(".closeLoginAbtn").click(function(){
		$(".mengban").hide();
		$(".LoginArea").hide();
	});
	/*******当登录框中文本框获得焦点*******/
	$("#LoginUserName").focus(function(){
		$(".userNameLabel").css("background-position","0 -108px");
	});
	$("#LoginPassWord").focus(function(){
		$(".passwordLabel").css("background-position","0 -187px");
	});

	/*******当登录框中文本框失去焦点*******/
	$("#LoginUserName").blur(function(){
		$(".userNameLabel").css("background-position","");
	});
	$("#LoginPassWord").blur(function(){
		$(".passwordLabel").css("background-position","");
	});


	$("#regaccount").keypress(function(){	
		
	});
	

});