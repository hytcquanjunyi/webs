<?php 
	include_once("include/ez_sql_core.php");
	include_once("include/ez_sql_mysql.php");
	session_start();
	$db=new ezSQL_mysql();
	
	$useraccount=isset($_POST["useraccount"])?$_POST["useraccount"]:"";

	$selectuserid="select * from userinfo where useraccount='$useraccount'";

	$res=$db->get_var($selectuserid);

	$userid=$res;

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

			$sql2="select * from friendsinfo where userid='$userid'";
			
			$result=$db->get_results($sql2);

			if (!$result) {
				
			}
			else{

				if (isset($_SESSION["myid"])) {
					//echo "已登陆";
				}
				else{
					foreach ($result as $friend) {
						$friendid=$friend->friendid;
						$sql3="insert into messageinfo(msgType,msgContent,msgSender,msgReceiver,msgSendTime,msgState) values('unnormal','login','$userid','$friendid',now(),'unread')";
						$db->query($sql3);
					}
				}
			}

			$_SESSION["myid"]=$userid;

			$_SESSION["mynickname"]=$res->userNickname;
			$_SESSION["myheadimg"]=$res->userHeadImage;
			
			$sql="update userinfo set userState='online',curtime=now() where concat(id)='".$userid."'";
			$db->query($sql);

			
			//$sql3="insert into messageinfo(msgType,msgContent,msgSender,msgReceiver,msgSendTime,msgState) values('unnormal','login','$userid','$friendid')";
			//echo "success";			
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
	<div class="mengban">		
	</div>
	<div class="addfriendArea">
		<div class="closeaddfriendArea">x</div>
		<div class="addfriendinfoArea">
			<p><span class="spaninput">ID:</span><input type="text" id="adduserid"></p>
			<p><span class="spaninput">昵称:</span><input type="text" id="addusername"></p>
		</div>
		<div class="addfriendbtnArea"><input type="submit" class="searchfriendbtn" value="查找好友" /></div>
		<div class="searchresultlist">
			<ul class="searchresultlistul">
				<li><span class="colum">ID</span><span class="colum">昵称</span><span class="colum">操作</span></li>
				<li class="searchresultlistul2">
					
				</li>
				<!-- <li>
						<span class="colum">1</span>
						<span class="colum">小明</span>
						<span class="colum">
							<a href="#" friendid='1' class="addthis">添加</a>
						</span>
					</li>-->

			</ul>
		</div>
	</div> 

	<div class="main">
		<div class="friendlistArea">		
			<div class="userinfoArea">
				<div class="userheadimgArea">
					<?php 
						echo "<img src=".$curheadimg."  />";
				 	?>
				 </div>
				<div class="userProfile">
					<a href="" class="userProName" >
						<?php 
					 		echo "$curnickName";
					 	?>
					</a>
					<div class="userState">
						
					</div>
					<div class="addfriendicon" title="添加好友">+</div>
					 <div class="requesticon" title="好友请求">*</div> 
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
									$onlinehtml.="<li id='friend".$friendid."' friendid='$friendid'  friendnickname='$friendnickname' class='friendlistli'>";
									$onlinehtml.=	"<div class='friendlisthead'> <img src=".$friendheadimg." /></div>";
									$onlinehtml.=	"<div class='friendInfoArea'>";
									$onlinehtml.=	"	<span class='friendnickname'>".$friendnickname."</span>";
									$onlinehtml.=	"	<div class='messageicon'></div>	";
									$onlinehtml.=	"</div>";
									$onlinehtml.="</li>";
								}
								else{
									$offlinehtml.="<li id='friend".$friendid."' friendid='$friendid' friendnickname='$friendnickname' class='friendlistli'>";
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
					</li>  -->

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
		<div class="requestlistArea">
				<div class="closerequestlistArea">x</div>
				<ul class="requestlistul">
					<!-- <li>
						<span class="colum2">ID为1的小明请求加你为好友</span>
						<span class="colum3" ><a friendid="1" class="agreeaddthis">同意</a></span>
					</li> -->
					
				</ul>
		</div>
			<div class="talkform">
				<div class="closetalkform"><span class="closetalkformspan" >x</span></div>
				<div class="talkheader">与xxx聊天 </div>	
				<div class="talkhistory">
					<div class="friendconversationArea">
						<div class="friendtalkheadpic"></div>
						<div class="frienddialogArea">
							<div class="frienddialog">aaaassssssfafrawserawfrawsefkjcakjiofjwirawserawfrawsefkjcakjiofjwi		
							</div>
						</div>			
					</div> 					
					<div class="myconversationArea">
						<div class="mytalkheadpic"></div>
						<div class="mydialogArea">
							<div class="mydialog">aaaassssssfafrawserawfrawsefkjcakjiofjwirawserawfrawsefkjcakjiofjwi		
							</div>
						</div>			
					</div> 
					
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