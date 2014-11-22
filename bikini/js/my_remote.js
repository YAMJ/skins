

function sendKey(key)
{
	var url = "http://" + Ip_device + ":8008/system?arg0=send_key&arg1=" + key;
	console.log("sendKey: " + url);
	$("#cmd").load(url, null);
}

function myTimer(key)
{
myVar=window.setInterval("document.getElementById('"+key+"').style.visibility='visible';",100);
console.log("myTimer: " + myVar);
}

function myStopFunction(key)
{
console.log("myStopFunction: " + myVar + " Id:" + key);
if (myVar) {clearInterval(myVar);}
document.getElementById(key).style.visibility='hidden';
} 

	



