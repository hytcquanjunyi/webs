<?php 
	session_start();
	include_once("../include/ez_sql_core.php");
	include_once("../include/ez_sql_mysql.php");
	
	$flag=isset($_POST["flag"])?$_POST["flag"]:"";

	$msgReceiverid=isset($_POST["msgReceiverid"])?$_POST["msgReceiverid"]:"";

	$rmsgReceiverid=isset($_POST["rmsgReceiverid"])?$_POST["rmsgReceiverid"]:"";

	$gethistorymsgReceiverid=isset($_POST["gethistorymsgReceiverid"])?$_POST["gethistorymsgReceiverid"]:"";

	$msg=isset($_POST["msg"])?$_POST["msg"]:"";

	$curuserid=$_SESSION["myid"];
	
	
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
		$sql="select * from messageinfo where msgReceiver=$curuserid and msgState='unread' and msgType='normal' ";	

		$res=$db->get_results($sql);
		if (!$res || count($res) == 0) {
			echo "fail";
			die();
		}
		echo json_encode($res);
		die();
	}
	if ($flag=="yidu") {
		$sql="select * from messageinfo where msgReceiver=$curuserid and msgSender='$rmsgReceiverid' and msgState='unread' and msgType='normal'";
		$res=$db->get_results($sql);
		if (!$res || count($res) == 0) {
			echo "fail1";
			die();
		}
		echo json_encode($res);
			
		$sql="update messageinfo set msgState='read' where msgReceiver=$curuserid and msgSender='$rmsgReceiverid'";
		$db->query($sql);
		die();
		//echo "已读";
	}
	if ($flag=="gethistory") {

		$sql="select * FROM messageinfo WHERE msgSender in($curuserid,$gethistorymsgReceiverid) and msgReceiver in($curuserid,$gethistorymsgReceiverid) and msgState='read' and msgType='normal' and msgSendTime>now()-interval 1 hour order by msgSendTime";
		
		$res=$db->get_results($sql);

		if (!$res || count($res) == 0) {
			echo "fail2";
			die();
		}
		echo json_encode($res);
		die();
	}
	if($flag=="searchfriend"){
			$searchaccount=isset($_POST["searchaccount"])?$_POST["searchaccount"]:"";
			$searchname=isset($_POST["searchname"])?$_POST["searchname"]:"";

			$sql="select * from userinfo where 1=1 ";

			if ($searchaccount!="") {
				$sql.=" and useraccount='".$searchaccount."'";
			}
			if ($searchname!="") {
				$sql.=" and userNickname='".$searchname."'";
			}
			
			if ($searchaccount =="" and $searchname=="") {
				echo "nocondition";
				die();
			}
			$res=$db->get_results($sql);
			if (!$res || count($res)==0) {
				echo "noone";
				die();
			}
			echo json_encode($res);
			die();
	}
	if($flag=="addfriend"){
		$receiverid=isset($_POST["receiverid"])?$_POST["receiverid"]:"";
		if($receiverid==$curuserid){
			echo "不能添加自己为好友";
			die();
		}

		$check="select * from friendsinfo where userid=$curuserid and friendid=$receiverid";
		$res=$db->get_results($check);
		if (count($res)!=0) {
			echo "你们已经是好友了";
			die();
		}
		
		$sql="insert into messageinfo(msgType,msgContent,msgSender,msgReceiver,msgSendTime,msgState) values('unnormal','addfriend',".$curuserid.",".$receiverid.",now(),'undo')";

		$db->query($sql);
		echo "已发送请求";
		die();
	}
	if ($flag=="dealaddrequest") {
		$sql="select * from messageinfo,userinfo where messageinfo.msgSender=userinfo.id and msgType='unnormal' and msgContent='addfriend' and msgState='undo' and msgReceiver=".$curuserid;
		$res=$db->get_results($sql);
		if (!$res || count($res)==0) {
			echo "noresult";
			die();
		}
		echo json_encode($res);	
		die();
	}
	if ($flag=="agreethis") {


		$friendid=isset($_POST["friendid"])?$_POST["friendid"]:"";

		$sql1="insert into friendsinfo(userid,friendid,friendNotename) values(".$curuserid.",".$friendid.",'newfriend')";
		$db->query($sql1);
		$sql2="insert into friendsinfo(userid,friendid,friendNotename) values(".$friendid.",".$curuserid.",'newfriend')";
		$db->query($sql2);

		$sql3="update messageinfo set msgState='done' where msgType='unnormal' and msgSender='$friendid' and msgReceiver='$curuserid' and msgContent='addfriend'";
		$db->query($sql3);

		$sql4="insert into messageinfo(msgType,msgContent,msgSender,msgReceiver,msgSendTime,msgState) values('unnormal','addfriend','$curuserid','$friendid',now(),'agree')";
		$db->query($sql4);

		$sql5="select id,useraccount,userNickname,userHeadImage,curtime, 1 as state from userinfo where id=$friendid ";

		$result=$db->get_results($sql5);
		if (!$result ||count($result)==0) {
			echo "fail";die();
		}

		date_default_timezone_set('PRC');	//设置默认时区
		$t=time()-strtotime($result[0]->curtime);
		if ($t<5) {
			$result[0]->state="online";
		}else{
			$result[0]->state="offline";
		}
		echo json_encode($result);

		$sql6="insert into messageinfo(msgType,msgContent,msgSender,msgReceiver,msgSendTime,msgState) values('unnormal','login','$curuserid','$friendid',now(),'unread')";
		$db->query($sql6);
		die();
		
	}
	if ($flag=="checklogin") {
		$sql="select * from messageinfo,userinfo where messageinfo.msgSender=userinfo.id  and msgType='unnormal' and msgContent='login' and msgReceiver='$curuserid' and msgState='unread'";
		$res=$db->get_results($sql);
		if (!$res || count($res)==0) {
			echo "nologin";die();
		}
		echo json_encode($res);
		$sql2="update messageinfo set msgState='read' where msgType='unnormal' and msgContent='login' and msgReceiver='$curuserid' and msgState='unread'";
		$db->query("$sql2");
		die();
	}

	if ($flag=="logout") {
		$sql1="update userinfo set userState='offline' where id=$curuserid";
		$db->query($sql1);
		$sql2="select * from friendsinfo where userid='$curuserid'";		
		$result=$db->get_results($sql2);
		foreach ($result as $friend) {
			$friendid=$friend->friendid;
			$sql3="insert into messageinfo(msgType,msgContent,msgSender,msgReceiver,msgSendTime,msgState) values('unnormal','logout','$curuserid','$friendid',now(),'unread')";
			
			$db->query($sql3);
		}
		session_destroy();
		
		die();
	}

	if ($flag=="checklogout") {
		$sql="select * from messageinfo,userinfo where messageinfo.msgSender=userinfo.id  and msgType='unnormal' and msgContent='logout' and msgReceiver='$curuserid' and msgState='unread'";

		$res=$db->get_results($sql);
		if (!$res || count($res)==0) {
			echo "nologout";die();
		}
		echo json_encode($res);
		$sql2="update messageinfo set msgState='read' where msgType='unnormal' and msgContent='logout' and msgReceiver='$curuserid' and msgState='unread'";
		$db->query("$sql2");

		die();
		
	}
	
	if ($flag=="updatecurTime") {
		$sql="update userinfo set curtime=now() where id=$curuserid";
		
		$db->query($sql);
		die();
	}
	
	if ($flag=="checkcurtime") {
		
		$sql3="select * FROM userinfo,friendsinfo where userinfo.id=friendsinfo.friendid and friendsinfo.userid='$curuserid' and userState='online' and date_add(curtime,interval 5 second)<now()";
		
		$result = $db->get_results($sql3);

		if ($result || count($result)!=0) {
			echo json_encode($result);
			die();
		}
		echo "noUnexpectLogout";
		die();

		
		//$sql4="update userinfo set userState='offline' where "
		die();
	}
	if ($flag=="checkuserexist") {
		$useraccount=isset($_POST["useraccount"])?$_POST["useraccount"]:"";
		$sql="select useraccount from userinfo where useraccount='$useraccount'";
		$res=$db->get_var("$sql");
		if ($res) {
			echo "has";die();
		}
		// $result=isset($res)?$res:"1";
		// echo "$result";
		
	}

 ?>

