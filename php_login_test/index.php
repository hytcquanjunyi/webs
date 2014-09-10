<?php 
	include_once("include/ez_sql_core.php");
	include_once("include/ez_sql_mysql.php");
	session_start();
	$userid=isset($_POST["userid"])?$_POST["userid"]:"";
	$userpwd=isset($_POST["userpwd"])?$_POST["userpwd"]:"";
	if ($userid!="" && $userpwd!="") {
	
		$DBHelp=new ezSQL_mysql();
		$sql = "select * from userinfo where concat(id)='".$userid."' and userpwd='".$userpwd."'";
		$res = $DBHelp->get_row($sql);
		if (!$res) {
			header("location:login.php?error=failed");
			die();
			//echo "fail ";
		}
		else{
			$_SESSION["currentuserid"]=$userid;
			$_SESSION["currentuserNickname"]=$res->userNickname;
			//echo "welcome! $res->userNickname";
		}
	}
	$curid=isset($_SESSION["currentuserid"])?$_SESSION["currentuserid"]:"";
	$curuserNickname=isset($_SESSION["currentuserNickname"])?$_SESSION["currentuserNickname"]:"";
	if ($_SESSION["currentuserid"]=="") {
			header("location:login.php?error=needlogin");
	}
	else {
		echo "welcome back $curuserNickname";
	}
	

 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title>Home</title>
 </head>
 <body>
 
 </body>
 </html>