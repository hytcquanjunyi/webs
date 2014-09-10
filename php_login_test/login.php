<?php 
	$info=isset($_GET["error"])?$_GET["error"]:"";
	

	if ($info=="failed") {
		echo('登陆失败');
	}
	if($info=="needlogin"){
		echo "需要先登录";
	}
	
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="css/login.css">
	<script type="text/javascript" src="js/jquery-1.10.2.js"></script>
</head>
<body>
	<form action="index.php" method="post" >
		<input name="userid" type="text" id="txtuserID"/>
		<input name="userpwd" type="password" id="txtuserpwd">
		<input type="submit" value="登陆" >
	</form>
</body>
</html>