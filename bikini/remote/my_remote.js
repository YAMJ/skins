

var tid;
var fastRefresh = 0;

$(document).ready(init);

function init()
{

		$("#ip").val(Ip_device);
		$("#timer").val("0");
		$("#resolution").val("640");
	

	screenCapture();
}

function screenCapture()
{
	$("#resolution").val("640");
	var w = $("#resolution").attr("value");
	var h = w / 16 * 9;

	$("#screenCol").css("width", w + "px");
	$("#screenCol").css("height", h + "px");
	$("#screenControl").css("width", w + "px");
	$("#screenControl").css("height", h + "px");

	$(".button").css("width", (w / 10) + "px");
	$(".button").css("height", (h / 8) + "px");
	$(".button").css("font-size", (w / 48) + "px");

//	var url = "http://" + $("#ip").attr("value") + ":8008/system?arg0=capture_screen&arg1=/opt/sybhttpd/default/capturescreen1.jpg&arg2=" + w + "&arg3=" + h;

//	$("#cmd").load(url, null, refresh);

}

function refresh()
{
	var url = "http://" + $("#ip").attr("value") + ":8883/capturescreen1.jpg?" + Math.random()

	new preloadImage(url, function()
	{
		$("#screen").attr("src", url);

		var t = $("#timer").attr("value");
		if (fastRefresh > 0)
		{
			fastRefresh--;
			t = 1;
		}

		if (t > 0)
		{
			tid = setTimeout(function()
			{
				screenCapture();
			}, t);
		}
	});
}

function preloadImage(url, callback)
{
	var pic = new Image();
	pic.onload = function()
	{
		callback();
	}
	pic.src = url;
}

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
console.log("myStopFunction: " + myVar);
if (myVar) {clearInterval(myVar);}
document.getElementById(key).style.visibility='hidden';
} 

	



