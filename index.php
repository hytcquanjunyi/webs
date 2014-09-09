<?php 
	require_once("include/DbHelp.php");
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>phptest</title>
	<meta http-equiv="Content-Type" content="text/html utf-8" />
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
	<div class="all">
		<ul>
		<?php
			$myDb = new DB();
			$sql = "select * from newslist";
			$res = $myDb->get_all($sql);
			if (!$res) {
				echo "null";
			}else{
				while (list($key,$val) = each($res)) {
					echo "<li>".$val["newsTitle"]." </br></br> ".$val["newsContent"]."</li></br></br></br>";
				}
			}
			/*插入数据
			$insertdata= array('newsTitle' =>"my second time of inserting data" ,'newsContent'=>"this is my content" );
			 $myDb->insert("newslist",$insertdata);
			*/

			/*查询数据
			$sql = "select * from newslist";
			$result=$myDb->query($sql);
			if (!$result) {
				echo "null";
			}
			else{
				while ($row=mysql_fetch_array($result)) {
					echo "<li>".$row["newsTitle"]."</li>";
				}
			}*/

		/*
			$con=mysql_connect("localhost","root","123");
			if(!$con){

			}else{
				mysql_query("set names utf8");
				mysql_select_db("myDataBase", $con);
				$result=mysql_query("select * from newslist");	
				if($result){
					while ($a=mysql_fetch_array($result)) {
						echo $a['newsTitle'];
						echo "</br>";
					}
				}
			}
			*/
			
		?>
		</ul>
	</div>
</body>
</html>