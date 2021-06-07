// JavaScript Document
var Name,Pass;
var CookieB;
//用户名的检测
function nameText(){
	Name = form1.u.value;		//获取文本框的value值并赋值给Name
	var str = new RegExp("^[A-Za-z0-9]+$");		//正则表达式判断
	var P = str.test(Name);
	if(Name==null||Name==""){		//判断用户是否用输入
		document.getElementById("namefield").innerHTML="*用户名不能为空!";
	}else{
		if(!P){
			document.getElementById("namefield").innerHTML="*仅支持字母和数字输入";
		}else{
			document.getElementById("namefield").innerHTML="";
		}
	}
}
//密码的检测
function passText(){
	Pass = form1.p.value;
	var str = new RegExp("^[A-Za-z0-9]+$");
	var P = str.test(Pass);
	if(Pass==null||Pass==""){
		document.getElementById("passfield").innerHTML="*密码不能为空!";
	}else{
		if(!P){
			document.getElementById("passfield").innerHTML="*仅支持字母和数字输入";
		}else{
			document.getElementById("passfield").innerHTML="";
		}
	}
}
//获取值
function CookieFor(){
	getCookie("name",Name);
	getCookie("pass",Pass);
}
function getCookie(N,C){
	var MyCookie;
	if(document.cookie.length>0){
		CookieN = document.cookie.indexOf(N+"=");
		if(CookieN!=-1){
			CookieN=CookieN+N.length+1
			CookieC=document.cookie.indexOf(";",CookieN);
			if(CookieC==-1) {
				CookieC=document.cookie.length;
				MyCookie = unescape(document.cookie.substring(CookieN,CookieC));
			}else{
				MyCookie = unescape(document.cookie.substring(CookieN,CookieC));
			}
		}
	}
	if(MyCookie==C){
		CookieB=true;
	}
}
//提交按钮
function Submit(){
	var N = document.getElementById("namefield").innerHTML;
	var P = document.getElementById("passfield").innerHTML;
	if(N==""&&P==""){
			document.getElementById("form1").submit();
	}
}






