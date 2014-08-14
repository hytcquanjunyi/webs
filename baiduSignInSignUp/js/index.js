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


	$("#LoginUserName").keyup(function(){
		$("#Loginaccountclear").css("opacity","1");
		
		if($(this).val().length==0){
			$("#Loginaccountclear").css("opacity","0");
		}
	});

	$("#LoginPassWord").keyup(function(){
		$("#Loginpasswordclear").css("opacity","1");
		
		if($(this).val().length==0){
			$("#Loginpasswordclear").css("opacity","0");
		}
	});

	$(".clearword").click(function(){
		$(this).prev("input").val("");
	});






	$("#regaccount").focus(function(){
		$("#tips1").show();
	});

	$("#regaccount").blur(function(){
		$("#tips1").hide();
	});

	$("#regaccount").keyup(function(){
		$("#regaccountclear").css("opacity","1");
		
		if($(this).val().length==0){
			$("#regaccountclear").css("opacity","0");
		}
	});
	
	$("#regaccountclear").click(function(){
		$("#regaccount").val("");
		$("#regaccountclear").css("opacity","0");
	});


	$("#regpassword").focus(function(){
		$("#tips2").css("visibility","visible");
	});

	$("#regpassword").blur(function(){
		if($("#regpassword").val().length<=0){
			$("#tips2").css("visibility","hidden");
		}
		
	});

	$("#regpassword").keyup(function(){

		$("#regpasswordclear").css("opacity","1");



		if($(this).val().length>=6 && $(this).val().length<=14){
			$("#c1").css("background-position","-77px -135px");
		}
		else{
			$("#c1").css("background-position","-77px -150px");
		}
		$("#c2").css("background-position","-77px -135px");
		if($(this).val().length> $.trim($(this).val()).length){
			$("#c3").css("background-position","-77px -150px");
		}else{
			$("#c3").css("background-position","-77px -135px");
		}  
		if($(this).val().length==0){
			$("#regpasswordclear").css("opacity","0");
			$("#tips2 span").css("background-position", "-77px -115px");
		} 

	});
	$("#regpasswordclear").click(function(){
		$("#regpassword").val("");
		$("#tips2 span").css("background-position", "-77px -115px");
		$("#regpasswordclear").css("opacity","0");
	});
	
	$("#regconfrimpassword").keyup(function(){	
		$("#regconfrimpasswordclear").css("opacity","1");
		if($(this).val().length==0){
			$("#regconfrimpasswordclear").css("opacity","0");
		}
	});
	$("#regconfrimpasswordclear").click(function(){
		$("#regconfrimpassword").val("");
		$("#regconfrimpasswordclear").css("opacity","0");
	});
	

	$("#regconfrimpassword").keyup(function(){
		if($(this).val()==$("#regpassword").val()){
			$("#tips3").css("visibility","hidden");
		}
		else{
			$("#tips3").css("visibility","visible");
		}
	});
	
	

});