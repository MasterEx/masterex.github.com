var pathTmp = window.location.pathname;
if(pathTmp.charAt(0) == '/')
	pathTmp = pathTmp.substring(1);
if(pathTmp.charAt(pathTmp.length-1) == '/')
	pathTmp = pathTmp.substring(0, pathTmp.length-1);
var pathArray = pathTmp.split( '/' );
var path = '';
var flag = true;
if(pathArray.length > 0) {
	for(var i=pathArray.length-1;i>=0;i--) {
		if(!pathArray[i] || pathArray[i].indexOf(".html") > -1)
			continue;
		path += '../';
		if(pathArray[i] == 'archive') {
			flag = false;
			break;
		}
	}
}
if(flag) {
	path='./'
}

var ORIGINAL_MENU=
'<ul class="visible">'+
'<li><a href="'+path+'archive.rss"><img width="32" alt="rss" src="'+path+'images/rss.png" /></a>'+
'</li><li><a href="'+path+'about.html">About</a></li>'+
'<li><a href="'+path+'archive.html">Archive</a></li>'+
'<li><a href="'+path+'index.html">Home</a></li>'+
'</ul>';
var MOBILE_MENU=
'<ul>'+
'<li><a href="'+path+'index.html">Home</a></li> &bull;'+
'<li><a href="'+path+'archive.html">Archive</a></li> &bull;'+
'</li><li><a href="'+path+'about.html">About</a></li> &bull;'+
'<li><a href="'+path+'archive.rss">RSS</a>'+
'</ul>';

function checkWidth() {
	if(document.documentElement.clientWidth<=816) {
		document.getElementById("menu").innerHTML = MOBILE_MENU;
	} else {
		document.getElementById("menu").innerHTML = ORIGINAL_MENU;
	}
}

window.onresize = function(event) {
    checkWidth();
};

checkWidth();
