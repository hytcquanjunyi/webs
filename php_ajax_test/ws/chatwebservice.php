<?php 
	require_once("../include/DbHelp.php");

	$MyDB=new DB();
	$flag1=isset($_POST["flag"])?$_POST["flag"]:"";
	$sendmsg=isset($_POST["sendmsg"])?$_POST["sendmsg"]:"";

	$getunreadmsg1=isset($_POST["getunreadmsg"])?$_POST["getunreadmsg"]:"";

	$curuserid=isset($_POST["curuserid"])?$_POST["curuserid"]:"";
	$msgtxt1=isset($_POST["msgtxt"])?$_POST["msgtxt"]:"";
	$receiverID=2;
	
	

	if ($flag1=="") {
		die();
	}
	if ($flag1=="true" && $sendmsg=="true") {
		
		//$sql="insert msgtable(senderID,receiverID,msgContent,sendTime) values(".$curuserid.",".$receiverID.",'".$msgtxt1."',now())";
		//$MyDB->insert($sql);
		echo "消息发送成功";

	}
	if ($flag1=="true" && $getunreadmsg1=="true") {
		$sql="select * from msgtable where receiverID=".$curuserid." and state=0";
		$updatesql="update msgtable set state=1 where receiverID=".$curuserid."and state=0";		
		$result=$MyDB->query($sql);
			if (!$result) {
				echo "null";
			}
			else{
				while ($row=mysql_fetch_array($result)) {
					echo "<li>".$row["msgContent"]."</li>";
				}
			}
		$res=mysql_query($updatesql);
		
	}
	if ($flag1=="update") {
		//$dataArray = array('userName' =>"小明","gender"=>"男");
		//$MyDB->update("userInfo",$dataArray);
	}

 ?>