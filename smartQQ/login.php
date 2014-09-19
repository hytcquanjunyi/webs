
<!DOCTYPE html>
<html>
<head>
	<title>smartQQ_Login</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="css/login.css">
	<script type="text/javascript" src="js/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="js/login.js"></script>
</head>
<body>
	<div id="mq_login_title">
		Smart QQ
	</div>
	<div class="signin" id="login">
		<div id="qrlogin" class="qrlogin">
			<h4 class="qr_title_text">安全登陆防止盗号</h4>
			<div id="qrlogin_step1">
				
			</div>
		</div>

		<div id="signinSep" class="signin_sep">
			<span class="signin_sep_line"></span>
			<span class="signin_sep_text">或者</span>
		</div>
		<form action="index.php" method="POST">
			<div id="signinArea" class="signin-area">
				<h4 class="input_login_text">帐号密码登录</h4>
				<span class="loginerrorInfo">
					<?php 
						$info=isset($_GET["error"])?$_GET["error"]:"";
						if ($info=="failed") {
							echo "登陆失败";
						}
						if($info=="pleaselogin"){
							echo "请先登录";
						}
					 ?>

				</span>
				<div class="sigin-area-bg">
					<div class="sigh-input">
						<input name="userid" placeholder="ID" type="text" class="inputuserid" />
					</div>
					<div class="sigh-input">
						<input name="userpwd" type="password" class="inputuserpwd" />
					</div>
				</div>
				<div class="signinbtnArea">
					<input type="submit" value="登 陆" id="login_button"/>
				</div>
				<a href="register.php" class="register">注册新用户?</a>
			</div>
		</form>
	</div>
</body>
</html>