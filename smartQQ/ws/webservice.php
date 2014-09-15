<?php 
	include_once("../include/ez_sql_core.php");
	include_once("../include/ez_sql_mysql.php");
	session_start();
	$flag=isset($_POST["flag"])?$_POST["flag"]:"";
	$msgReceiverid=isset($_POST["msgReceiverid"])?$_POST["msgReceiverid"]:"";

	$rmsgReceiverid=isset($_POST["rmsgReceiverid"])?$_POST["rmsgReceiverid"]:"";

	$gethistorymsgReceiverid=isset($_POST["gethistorymsgReceiverid"])?$_POST["gethistorymsgReceiverid"]:"";

	$msg=isset($_POST["msg"])?$_POST["msg"]:"";

	$curuserid=$_SESSION['myid'];

	$db=new ezSQL_mysql();
	if ($flag=="sendmsg") {
		$sql="insert into messageinfo(msgContent,msgSender,msgReceiver,msgSendTime,msgState) values('$msg','$curuserid','$msgReceiverid',now(),'unread')";
		
		$res=$db->query($sql);
		if (!$res) {
			echo "fail";
		}else{
			echo "ok";
		}
		die();
	}
	if ($flag=="receivemsg") {
		$sql="select * from messageinfo where msgReceiver=$curuserid and msgState='unread' ";	

		$res=$db->get_results($sql);
		if (!$res || count($res) == 0) {
			echo "fail";
			die();
		}
		echo json_encode($res);
		die();
	}
	if ($flag=="yidu") {
		$sql="select * from messageinfo where msgReceiver=$curuserid and msgSender='$rmsgReceiverid' and msgState='unread'";
		$res=$db->get_results($sql);
		if (!$res || count($res) == 0) {
			echo "fail1";
			die();
		}
		echo json_encode($res);
			
		$sql="update messageinfo set msgState='read' where msgReceiver=$curuserid and msgSender='$rmsgReceiverid'";
		$db->query($sql);
		//echo "已读";
	}
	if ($flag=="gethistory") {

		$sql="select * FROM messageinfo WHERE msgSender in($curuserid,$gethistorymsgReceiverid) and msgReceiver in($curuserid,$gethistorymsgReceiverid) and msgSendTime>now()-interval 1 hour order by msgSendTime";
		
		$res=$db->get_results($sql);

		if (!$res || count($res) == 0) {
			echo "fail2";
			die();
		}
		echo json_encode($res);
		
	}

 ?>