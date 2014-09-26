<?php 
	include_once("include/ez_sql_core.php");
	include_once("include/ez_sql_mysql.php");	
	$db=new ezSQL_mysql();	
	
	
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
		<form method="post" enctype="multipart/form-data">
		<div class="userAccountinput">
			<span class="label">账号：</span><input type="text" name="useraccount" id="useraccount" /><span class="tips">已存在</span>
		</div>
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
		</div>
		<div class="registinput">
			<input type="submit" value="注册" id="registbtn" name="sub">
		</div>
	</form>
</div>
</body>
</html>
<?php 
	////////上传文件////////////
	$name="";
	if(isset($_POST["sub"])){
		//$upfile="../upload_file/".$_FILES["file"]["name"];

		$name=time();//定义变量，保存图片名，以防图片的名字相同
		echo $name;

		$name.=strrchr($_FILES["file"]["name"],".");//上传文件的名称

		echo $name;
		$num=rand(1,10);
		$type=$_FILES["file"]["type"];
		$size=$_FILES["file"]["size"];
		$tmp_name=$_FILES["file"]["tmp_name"];
		if($_FILES["file"]["error"]>0){
			echo "上传文件有误:".$_FILES["file"]["error"]."<br/>";
		}else{
			echo "上传文件名为：".$name."<br>";
			echo "上传文件类型为：".$type."<br>";
			echo "上传文件大小为：".($size/1024)."<br>";
			echo "上传到：".$tmp_name."<br>";
			if(file_exists("headimages/$name")){
				echo "已经存在";
			}else{
				if(move_uploaded_file($tmp_name,"headimages/$name")){
					echo $name."上传成功";
				}else{
					echo $name."上传失败";
				}

			}
		}
	}
	if (isset($_POST["sub"])) {
		$userpwd=isset($_POST["pwd"])?$_POST["pwd"]:"";
		$useraccount=isset($_POST["useraccount"])?$_POST["useraccount"]:"";
		$usernickname=isset($_POST["nickname"])?$_POST["nickname"]:"";		
		if ($useraccount==""||$userpwd==""||$usernickname=="") {
			echo "<script> alert('请将信息填写完整')</script>";
			die();
		}
		$sql="insert into userinfo(useraccount,userpwd,userNickname,userHeadImage,userState) values('$useraccount','$userpwd','$usernickname','headimages/$name','offline')";		
		//
		$res=$db->query($sql);
		if (!$res) {
			//删除上传的图片；
			$file_delete_path="headimages/$name";
			if (file_exists($file_delete_path)) {
				if(unlink($file_delete_path)){
					echo "The file was deleted successfully";
				}else{
					echo "The specified file could not be deleted";
				}
			}
			
		}
		else{
			header("location:login.php");
		}
	}
	
	
 ?>

