<?php 
	include_once("include/ez_sql_core.php");
	include_once("include/ez_sql_mysql.php");
	session_start();
	$userid=isset($_POST["userid"])?$_POST["userid"]:"";
	$userpwd=isset($_POST["userpwd"])?$_POST["userpwd"]:"";
	$db=new ezSQL_mysql();
	if ($userid!=""&&$userpwd!="") {

		
		$sql="select * from userinfo where concat(id)='".$userid."' and userpwd='".$userpwd."'";
		$res=$db->get_row($sql);
		if(!$res){
			header("location:login.php?error=failed");
			die();
		}
		else{
			$_SESSION["myid"]=$userid;
			$_SESSION["mynickname"]=$res->userNickname;
			$_SESSION["myheadimg"]=$res->userHeadImage;
			$sql="update userinfo set userState='online' where concat(id)='".$userid."'";
			$db->query($sql);
			echo "success";			
		}
	}
	$curid=isset($_SESSION["myid"])?$_SESSION["myid"]:"";
	$curnickName=isset($_SESSION["mynickname"])?$_SESSION["mynickname"]:"";
	$curheadimg=isset($_SESSION["myheadimg"])?$_SESSION["myheadimg"]:"";
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
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<script type="text/javascript" src="js/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
</head>
<body>
	<div class="main">
		<div class="friendlistArea">
			<div class="userinfoArea">
				<div class="userheadimgArea">
					<?php 
						echo "<img src=".$curheadimg."  />";
				 	?>
				 </div>
				<div class="userProfile">
					<a href="" class="userProName">
						<?php 
					 		echo "$curnickName";
					 	?>
					</a>
					<div class="userState">
						
					</div>
				</div>
				<div class="logoutbtn">退出</div>
			</div>
			<ul class="friendlistul">
				<span class="statetitleon">在线好友</span>
				<ul class="onlinelist">
					<?php
						$sql="select * from userinfo,friendsinfo where friendsinfo.friendid=userinfo.id and friendsinfo.userid=".$curid; 
						//echo "$sql";
						$res=$db->get_results($sql);
						$onlinehtml="";
						$offlinehtml="";

						if ($res) {
							foreach ($res as $friend) {
								$friendheadimg=$friend->userHeadImage;
								$friendnickname=$friend->userNickname;
								$friendid=$friend->friendid;
								if($friend->userState=='online'){
									$onlinehtml.="<li friendid='$friendid'  friendnickname='$friendnickname' class='friendlistli'>";
									$onlinehtml.=	"<div class='friendlisthead'> <img src=".$friendheadimg." /></div>";
									$onlinehtml.=	"<div class='friendInfoArea'>";
									$onlinehtml.=	"	<span class='friendnickname'>".$friendnickname."</span>";
									$onlinehtml.=	"	<div class='messageicon'></div>	";
									$onlinehtml.=	"</div>";
									$onlinehtml.="</li>";
								}
								else{
									$offlinehtml.="<li friendid='$friendid' friendnickname='$friendnickname' class='friendlistli'>";
									$offlinehtml.=	"<div class='friendlisthead'> <img src=".$friendheadimg." /></div>";
									$offlinehtml.=	"<div class='friendInfoArea'>";
									$offlinehtml.=	"	<span class='friendnickname'>".$friendnickname."</span>";
									$offlinehtml.=	"	<div class='messageicon'></div>	";
									$offlinehtml.=	"</div>";
									$offlinehtml.="</li>";
								}
							}
							echo "$onlinehtml";
						}
					?>
					<!-- <li class="friendlistli">
						<div class="friendlisthead"></div>
						<div class="friendInfoArea">
							<span class="friendnickname"> 姓名</span>
						</div>
					</li> -->
				</ul>
				<span class="statetitleoff">离线好友</span>
				<ul class="offlinelist">
					<!-- <li class="friendlistli">
						<div class="friendlisthead"></div>
						<div class="friendInfoArea"></div>
					</li> -->
					<?php 
						echo "$offlinehtml";
					?>
				</ul>

			</ul>
		</div>
		<div class="talkArea">
			<div class="talkform">
				<div class="talkheader">与xxx聊天</div>	
				<div class="talkhistory">
					<!-- <div class="friendconversationArea">
						<div class="friendtalkheadpic"></div>
						<div class="frienddialogArea">
						<div class="frienddialog">aaaassssssfafrawserawfrawsefkjcakjiofjwirawserawfrawsefkjcakjiofjwi		
						</div>
						</div>			
					</div> -->
					<!-- <div class="myconversationArea">
						<div class="mytalkheadpic"></div>
						<div class="mydialogArea">
						<div class="mydialog">aaaassssssfafrawseraw		
						</div>
						</div>
					</div> -->
				</div>
				<div class="talktext">
					<div class="inputtxt">
						<input type="text" maxlength="4000" class="inputmessage"/>
					</div>
					<div class="talksendbtn">
						<input type="submit" value="发送" class="msgsendbtn"/>
					</div>
					<div class="clear"></div>
				</div>
			</div>

		</div>
		<div class="clear"></div>
	</div>
</body>
</html>