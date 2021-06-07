// JavaScript Document
//获取数据
var CookieName,CookieTell,CookiePass;
function getCookieName(){
	if(document.cookie.length>0){
		var CookieN = document.cookie.indexOf("name=");
		if(CookieN!=-1){
			CookieN=CookieN+"name".length+1;
			CookieC=document.cookie.indexOf(";",CookieN);
			if(CookieC==-1) {
				CookieC=document.cookie.length;
				CookieName = unescape(document.cookie.substring(CookieN,CookieC));
			}else{
				CookieName = unescape(document.cookie.substring(CookieN,CookieC));
			}
		}
	}
}
function getCookieTell(){
	if(document.cookie.length>0){
		var CookieN = document.cookie.indexOf("tell=");
		if(CookieN!=-1){
			CookieN=CookieN+"tell".length+1;
			var CookieC=document.cookie.indexOf(";",CookieN);
			if(CookieC==-1) {
				CookieC=document.cookie.length;
				CookieTell = unescape(document.cookie.substring(CookieN,CookieC));
			}else{
				CookieTell = unescape(document.cookie.substring(CookieN,CookieC));
			}
		}
	}
}
//用户输入判断
var Name,MyC;
//用户名的检测
function nameText(){
	Name = document.getElementById("u").value; 		//获取文本框的value值并赋值给Name
	var str = new RegExp("^[A-Za-z0-9]+$");		//正则表达式判断
	var P = str.test(Name);
	if(Name==null||Name==""){		//判断用户是否用输入
		document.getElementById("namefield").innerHTML="*用户名不能为空!";
	}else{
		if(!P){
			document.getElementById("namefield").innerHTML="*仅支持字母和数字输入";
		}else{
			getCookieName();
			if(CookieName!=Name){
				document.getElementById("namefield").innerHTML="*用户名不存在！";
			}else{
				document.getElementById("namefield").innerHTML="";
			}
		}
	}
}
//手机号的检验
function MyTell(){
	MyC = document.getElementById("p").value;
	var Myc = new RegExp("^1[0-9]{10}$");
	var MyC, MyTell;
	MyTell = Myc.test(MyC);
	if(MyC==""||MyC==null){
		document.getElementById("tellfield").innerHTML="请输入手机号码";
	}else{
		if(!MyTell){
			document.getElementById("tellfield").innerHTML="请输入正确的手机号码";
		}else{
			getCookieTell();
			if(CookieTell!=MyC){
				document.getElementById("tellfield").innerHTML="*该手机号还未注册！";
			}else{
				document.getElementById("tellfield").innerHTML="";
			}
		}
	}
}
//验证码
var Cun;		//全局变量存储验证码
//生成验证码的函数
function myYan(){
	var str = new String();		//定义一个字符串对象
	var xiaBiao;
	var yanZheng = "";		//局部变量存储验证码
	str = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";		//验证码的所有字符
	for(var i=1;i<5;i++){
		xiaBiao = Math.round(Math.random()*62);		//产生0~62的随机数
		yanZheng += str.charAt(xiaBiao);		//随机截取str中的一个字符并加进yanZheng
	}
	document.getElementById("mafield").innerHTML=yanZheng		//将生成的验证码放到文本框
	Cun = yanZheng;		//将验证码赋值给全局变量，方便后面myIf()函数的比较
	//每次触发函数的时候ID=m的文本框清空
	document.getElementById("m").value="";
}
//检验用户验证码输入是否正确的函数
function myIf(){
	if(	document.getElementById("m").value==Cun){
		document.getElementById("mafield").innerHTML="验证码正确"	;
	}else{
		document.getElementById("mafield").innerHTML="*验证码错误！";
	}
}
//提交按钮
function ST(){
	var N,T,M;
	N = document.getElementById("namefield").innerHTML;
	T = document.getElementById("tellfield").innerHTML;
	M = document.getElementById("mafield").innerHTML;
	if(N==""&&T==""&&M=="验证码正确"){
		getCookiePass();
		alert("您的密码是："+CookiePass);
	}
}
//获取用户密码
function getCookiePass(){
	if(document.cookie.length>0){
		var CookieN = document.cookie.indexOf("pass=");
		if(CookieN!=-1){
			CookieN=CookieN+"pass".length+1
			var CookieC=document.cookie.indexOf(";",CookieN);
			if(CookieC==-1) {
				CookieC=document.cookie.length;
				CookiePass = unescape(document.cookie.substring(CookieN,CookieC));
			}else{
				CookiePass = unescape(document.cookie.substring(CookieN,CookieC));
			}
		}
	}
}










