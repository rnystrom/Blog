---
layout: post
title: "HTML5 Websockets and You"
---

> This is a post from my original Wordpress blog. It has some valuable information so I decided to reinstate some of these old posts. Originally posted on February 22, 2011.

It's been too long since I wrote an entry. So much has been going on in my world and the world wide web. Apple released their much desired 4.2 iOS update which brought a load of new changes to the iPod Touch, iPhone, and iPad. Mobile Safari got a ton of needed updates as well. It looks like Apple is finally ready to bring HTML5 in full force to mobile. Check out the new <a href="http://html5test.com/" target="_blank">HTML5 Test</a> score!

Google has also been updating the Android mobile browser pretty ferociously as well. That means the gap between the two most popular smart phones is closing! The only thing we should really have to account for is screen size, which we have been doing since the dawn of the browser. Sadly for RIM, they have been losing business. Even though I was a Blackberry owner, I've already dropped any desire to style for Blackberry browsers. It's just too much of a pain.

I did make the Verizon switch though, and I'm loving it. Apple picking up another carrier means that there will be more iPhones out there in the world. More iOS browsers accessing my sites and tools, which I love. iOS has a great mobile browser.

Enough about economics, let's get coding.

One of the newer HTML5 technologies I'm most excited about are <a href="http://dev.w3.org/html5/websockets/" target="_blank">websockets</a>. Websockets are primarily an HTML standard to replace HTTP data send/request tools like the Comet API. Websockets are able to send a lot of data incredibly fast, seemingly faster than Comet.

I'm not going to spend any time on this post explaining how to implement websockets or how they work, instead I'd like to get the creative juices flowing. Since websockets are able to send/receive data so quickly, we are able to do more than just create a bland chatroom. We can send information about users to eachother in real time. We can move items on the page, we can display each others' cursors. 

Not only can we do this on our PCs, but included in Apple's iOS 4.2 update is websocket support. We can communicate between PC and iOS browsers in real time! Of course apps have been doing this since the iPhone was released, but not instead of installing software, going through the App Store, etc, we can just be online. Its that simple.

Here is a demo I created that combines mobile Safari's websocket and orientation HTML5 tools. The result is pretty interesting. Load up Safari on your PC, and go to the address below. Go to the same address on your iOS device. Enter the code that you are given, and enjoy! This is done through websockets sending the orientation information to the PC and modifying the image of the iphone on the browser. The code is very simple.

**Mobile Browser**

{% highlight js %}
var ax = 0,
ay = 0,
vx = 0,
vy = 0,
rate = 50,
interval,
user = Math.floor(Math.random()*99999);
function init(){
	if(!("WebSocket" in window)){
	}else{
		try{
			socket = new WebSocket(host);		
			socket.onopen = function(){ 
				interval = setInterval(function(){startTilt();},rate);
			}
			socket.onmessage = function(msg){ }
			socket.onclose = function(){ 
				clearInterval(interval);
				$('#id').html('Connection lost');
			}
		} catch(ex){
			$('#id').html('ERROR:'+ex);
		}
	}
}	
function startTilt(){
	socket.send(
		'{"tiltdemo":"yes","ax":"'+ax.toString().substring(0,5)+'",
		"ay":"'+ay.toString().substring(0,5)+'","user":"'+user+'"}'
	);
}	
$(document).ready(function(){
	$('#id').html('Your iOS id:'+user);
	window.ondevicemotion = function(event) {
		ax = event.accelerationIncludingGravity.x;
		ay = event.accelerationIncludingGravity.y;			
	}
	init();
});
{% endhighlight %}

This could be done without jQuery. I'm trying to break the habit I swear!

**Normal Browser**

{% highlight js %}
var user;
function init(){
	if(!("WebSocket" in window)){
		$('body').html('No websocket or canvas support, SORRY.');
	}else{
		try{
			socket = new WebSocket(host);		
			socket.onopen = function(){ }
			socket.onmessage = function(msg){receive(msg);}
			socket.onclose = function(){ }
		} catch(ex){				
		}
	}
}
function receive(msg){
	if(user!==undefined){
		var obj = $.parseJSON(msg.data);
		if(obj.tiltdemo!==undefined&&obj.user==user){
			iphone.style.webkitTransform = 'rotateY(' + 
				(Math.floor((parseFloat(obj.ax)/10)*110)).toString() + 'deg) rotateX(' +
				(Math.floor((parseFloat(obj.ay)/10)*110)).toString() + 'deg)';

			back.style.webkitTransform = 'rotateY(' +
				(Math.floor((parseFloat(obj.ax)/10)*110)).toString() + 'deg) rotateX(' +
				(Math.floor((parseFloat(obj.ay)/10)*110)+180).toString() + 'deg)';
		}
	}
}
$(document).ready(function(){
	$('#tb').keydown(function(e){
		if(e.keyCode==13)
			user = $('#tb').val();
	}).focus();
	$('#ok').click(function(e){
		if($('#tb').val().length>0)
			user = $('#tb').val();
	});
	init();
});
{% endhighlight %}

Play around with websockets, there is a ton of potential here. Ultimately we could be using our mobile devices as gamepads for browser games. How awesome would that be? I wish I knew some game designers right about now.
