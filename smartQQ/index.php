<?php 
	include_once("include/ez_sql_core.php");
	include_once("include/ez_sql_mysql.php");
	session_start();
	$userid=isset($_POST["userid"])?$_POST["userid"]:"";
	$userpwd=isset($_POST["userpwd"])?$_POST["userpwd"]:"";
	if ($userid!=""&&$userpwd!="") {

		$db=new ezSQL_mysql();
		$sql="select * from userinfo where concat(id)='".$userid."' and userpwd='".$userpwd."'";
		$res=$db->get_row($sql);
		if(!$res){
			header("location:login.php?error=failed");
			die();
		}
		else{
			$_SESSION["myid"]=$userid;
			$_SESSION["mynickname"]=$res->userNickname;
			echo "success";			
		}
	}
	$curid=isset($_SESSION["myid"])?$_SESSION["myid"]:"";
	$curnickName=isset($_SESSION["mynickname"])?$_SESSION["mynickname"]:"";
	if ($curid=="") {
		header("location:login.php?error=pleaselogin");
		die();
	}

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<meta charset="utf-8"/>

	<script type="text/javascript" src="js/jquery-1.10.2.js"></script>
</head>
<body>

</body>
</html>