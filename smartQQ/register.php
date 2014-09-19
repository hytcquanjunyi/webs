<?php 
	include_once("include/ez_sql_core.php");
	include_once("include/ez_sql_mysql.php");
	$userpwd=isset($_POST["userpwd"])?$_POST["userpwd"]:"";
	$usernickname=isset($_POST["usernickname"])?$_POST["usernickname"]:"";
?>
<!DOCTYPE html>
<html>
<head>
	<title>register</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="css/register.css">
	<script type="text/javascript" src="js/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="js/register.js"></script>
</head>
<body>
<div class="main">
	<div class="header">
		注册新用户
	</div>
	<form method="post"  enctype="multipart/form-data">
		<div class="nickNameinput">
			<span class="label">昵称：</span><input type="text" name="nickname" id="usernickname" />
		</div>
		<div class="pwdinput">
			<span class="label">密码：</span><input	type="password" name="pwd" id="userpwd"/> 
		</div>
		<div class="headimgArea">
			<div class="headimg">
				<?php
					echo "<img src='headimages/' />"
				?>
			</div>
			<input type="file" name="file" id="filebtn" />
			<input type="button" name="sub" id="uploadbtn" value="上传" />
		</div>
		<div class="registinput">
			<input type="submit" value="注册" id="registbtn">
		</div>
	</form>
</div>
</body>
</html>

