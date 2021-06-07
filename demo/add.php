<?php
	require 'config.php';
	
	$_birthday = $_POST['year'].'-'.$_POST['month'].'-'.$_POST['day'];
	
	$query = "INSERT INTO zhuce_user (user, password, birthday, sex , phone) 
												VALUES ('{$_POST['user']}', sha1('{$_POST['password']}'), '{$_birthday}', '{$_POST['sex']}', '{$_POST['phone']}')";

	mysql_query($query) or die('新增失败！'.mysql_error());
	
	$a = mysql_affected_rows();
	
	mysql_close();
	
	if($a>0){
		echo '提交成功，即将跳转...';
		header("refresh:1;url=login.html");
	}
?>