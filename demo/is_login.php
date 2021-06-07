<?php
	require 'config.php';
	
	$_pass = sha1($_POST['password']);
	
	$query = mysql_query("SELECT user FROM zhuce_user WHERE user='{$_POST['user']}' AND password='{$_pass}'") or die('SQL错误！');
	
	if (mysql_fetch_array($query, MYSQL_ASSOC)) {		//用户名和密码正确
		echo "登录成功！";
		header("refresh:1;url=../index.html");
	} else {	//用户名和密s码不正确；
		echo "<script>alert('用户或密码错误，请重新登录')</script>";
		header("refresh:1;url=login.html");
	}
	
	mysql_close();
?>