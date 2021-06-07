// JavaScript Document
// JavaScript Document
//用户名的检测
function nameText(){
	var Name = form.user.value;		//获取文本框的value值并赋值给Name
	var str = new RegExp("^[A-Za-z0-9]+$");		//正则表达式判断
	var P = str.test(Name);
	if(Name==null||Name==""){		//判断用户是否用输入
		document.getElementById("NY").innerHTML="*用户名不能为空!";
	}else{
		if(!P){
			document.getElementById("NY").innerHTML="*仅支持字母和数字输入";
		}else{
			document.cookie="name="+escape(Name);
			document.getElementById("NY").innerHTML="";
		}
	}
}
//密码的检测
function passText(){
	var Pass = document.getElementById("p").value;
	var str = new RegExp("^[A-Za-z0-9]+$");
	var P = str.test(Pass);
	if(Pass==null||Pass==""){
		document.getElementById("PY1").innerHTML="*密码不能为空!";
	}else{
		if(!P){
			document.getElementById("PY1").innerHTML="*仅支持字母和数字输入";
		}else{
			document.cookie="pass="+escape(Pass);
			document.getElementById("PY1").innerHTML="";
		}
	}
}
//当确认密码框获得焦点时判断密码框是否已输入
function passFocus(){
	var Pass = document.getElementById("p").value;
	var str = new RegExp("^[A-Za-z0-9]+$");
	var P = str.test(Pass);
	if(Pass==null||Pass==""||!P){
		document.getElementById("PY2").innerHTML="*请先输入正确的密码!";
	}else{
		document.getElementById("PY2").innerHTML=" ";
	}
}
//确认密码函数
function passReally(){
	var Pass = document.getElementById("p").value;
	var PassR = document.getElementById("p2").value;
	if(Pass==null||Pass==""){
		
	}else{
		if(PassR==Pass){
			document.getElementById("PY2").innerHTML="两次密码一致";
		}else{
			document.getElementById("PY2").innerHTML="*两次密码不一致";
		}
	}
}
//其它信息的获取和储存
function QT(){
	var Year = document.getElementById("Y").value;
	var Month = document.getElementById("M").value;
	var MyDate = document.getElementById("D").value;
	var Sex = document.getElementsByName("sex");
	//日期
	if(Year=="-"||Month=="-"||MyDate=="-"){
		document.getElementById("DY").innerHTML="请选择出生日期";
	}else{
		document.getElementById("DY").innerHTML="";
	}
	//性别
	if((Sex[0].checked==false)&&(Sex[1].checked==false)){
		document.getElementById("SY").innerHTML="请选择性别";
	}else{
		document.getElementById("SY").innerHTML="";
	}
}
//手机号的检验
function MyTell(){
	var Myc = new RegExp("^1[0-9]{10}$");
	var MyC, MyTell;
	MyC = document.getElementById("Tell").value;
	MyTell = Myc.test(MyC);
	if(MyC==""||MyC==null){
		document.getElementById("Tell").focus();
		document.getElementById("TY").innerHTML="请输入手机号码";
	}else{
		if(!MyTell){
			document.getElementById("TY").innerHTML="请输入正确的手机号码";
		}else{
			document.cookie="tell="+escape(MyC);
			document.getElementById("TY").innerHTML="";
		}
	}
}
//提交按钮
function Submit() {
	var N, P, T, D, S;
	N = document.getElementById("NY").innerHTML;
	P = document.getElementById("PY2").innerHTML;
	T = document.getElementById("TY").innerHTML;
	D = document.getElementById("DY").innerHTML;
	S = document.getElementById("SY").innerHTML;
	if (N == "" && P == "两次密码一致" && T == "" && D == "" && S == "") {
		document.getElementById("form").submit();
	}
}



