var div = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");
var div4= document.createElement("div");
var div5 = document.createElement("div");
var div6 = document.createElement("div");
var div7 = document.createElement("div");
var div8 = document.createElement("div");
div.className = "hidden";
div2.className = "hidden";
div3.className = "hidden";
div4.className = "hidden";
div5.className = "hiddenThumb";
div6.className = "hiddenThumb";
div7.className = "hiddenThumb";
div8.className = "hiddenThumb";

var feedLarge = new Instafeed({
	get: 'user',
	userId: '144458141',
	accessToken: '144458141.1677ed0.8046d39f2e1a4d59ac976bf49ba5312b',
	resolution: 'standard_resolution',
	target: 'instafeed-large',
    template: '<a class="instagram-{{orientation}}" href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
});
feedLarge.run();

var feedSmall = new Instafeed({
	get: 'user',
	userId: '144458141',
	accessToken: '144458141.1677ed0.8046d39f2e1a4d59ac976bf49ba5312b',
	resolution: 'low_resolution',
	target: 'instafeed-small',
    template: '<a class="instagram-{{orientation}}" href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    after: function() {
    	document.getElementById("instafeed-small").appendChild(div);
    	document.getElementById("instafeed-small").appendChild(div2);
    	document.getElementById("instafeed-small").appendChild(div3);
    	document.getElementById("instafeed-small").appendChild(div4);
    }
});
feedSmall.run();

var feedThumb = new Instafeed({
	get: 'user',
	userId: '144458141',
	accessToken: '144458141.1677ed0.8046d39f2e1a4d59ac976bf49ba5312b',
	resolution: 'thumbnail',
	target: 'instafeed-thumb',
    template: '<a class="instagram-{{orientation}}" href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    after: function() {
    	document.getElementById("instafeed-thumb").appendChild(div5);
    	document.getElementById("instafeed-thumb").appendChild(div6);
    	document.getElementById("instafeed-thumb").appendChild(div7);
    	document.getElementById("instafeed-thumb").appendChild(div8);
    }
});
feedThumb.run();