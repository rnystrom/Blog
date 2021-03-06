---
layout: post
title: "CSS3 Experimenting"
---

> This is a post from my original Wordpress blog. It has some valuable information so I decided to reinstate some of these old posts. Originally posted on September 21, 2010.

There has been a lot surfacing about CSS3 in the past couple of years. Ever since I've gotten into web development and design at Sanger &amp; Eby, I've been ever-so pushing my brain's boundaries. The latest thing that I've been experimenting (more like playing) with is CSS3 animations, and in particular, -webkit-transforms. Why only Webkit transforms? Mostly because of the iPad.<!--more-->

I purchased an iPad a few days after they were released and found that jQuery animations would run incredibly poorly on it. After a lot of research I found out that Mobile Safari supports hardware acceleration only for 3d Webkit transforms. So, I decided that I needed to focus solely on 3d transforms in order to get a solid and crisp animation<em>. </em>Obviously, the goal here is to completely replace the need for Flash.

The only downside to all of this, currently, is browser support. Only Safari (Mobile and Windows/OS X) will render and animate true 3d. Since these effects are in the Webkit framework, Chrome will animate and attempt to display 3d effects, but it's really just a 2d translation (the best example of the difference is <a title="here" href="http://css3playground.com/flip-card.php" target="_blank">here</a>, view this in Safari and then Chrome).

My idea was to animate a butterfly flying. I'd imagine this would be pretty easy for a Flash designer, but again the goal is to create something render-able in Mobile Safari. I started with a basic image of a monarch butterfly.

After some GIMP crafting/coloring, I broke the image up in 3 places. The goal here is to have the body as a static, non-moving image. The left and right wings will need to "flap" up and down while staying attached to the body. At first I used a rotateY(45deg) but the origin for the transformation was still the center of the image. This created a rotation similar to the cards flipping. The best thing to do is to set the center of rotation on one of the image's sides. Here is the markup for one wing:

	.butterfly .lwing{
		position:absolute;
		width:191px; height:260px;
		top:0; left:0;
		background:url(lwing.png);
		-webkit-perspective:500;
		-webkit-transition: all 1s ease-in-out;
		-webkit-transform-origin: 100% 0%;
	}

All it takes then is to setup the images to look like the butterfly inside a container. The parent div can then be used to move the butterfly around the page. Figuring out how to control the timings of the animations of this parent div took a little bit of research, but basically instead of having one -webkit-transition defining the timing and motion of all animations, you need to separate them:

	-webkit-transition-property: -webkit-transform, left, top;
	-webkit-transition-duration: 2s, 10s, 10s;
	-webkit-transition-delay: 0s, 0s 0s;

I also created two classes to give the wings some depth so that they didn't look like they were simply lifting off of a flat surface.

	.lwing-init{
		-webkit-transform: rotateY(-30deg);
	}
	.rwing-init{
		-webkit-transform: rotateY(30deg);
	}

And finally, to time everything together and give the butterfly some randomized flight, I used Javascript. Here I used jQuery to simplify my selections. Also, the framework provided a clean and easily understood markup. The important part of this code is the setInterval. I used to code infinite loops by either doing a while 1==1 { } or calling a function inside itself. But then I had to use setTimeout. In the end this caused a lot of memory usage. Here's the final JS:

	var corners = [];
	corners[0]='rtcorner';
	corners[1]='ltcorner';
	corners[2]='rbcorner';
	corners[3]='lbcorner';
	function animateWings(){
		$('.lwing').toggleClass('lwing-animate');
		$('.rwing').toggleClass('rwing-animate');
	}
	function animateButterfly(){
		$('.butterfly').removeClass('rtcorner').removeClass('ltcorner').removeClass('rbcorner')&#8629;
		.removeClass('lbcorner');
		setTimeout(function(){
			$('.butterfly').addClass(corners[Math.floor(Math.random()*4)]);
			},1000);
	}
	$(document).ready(function(){
		$('.lwing').addClass('lwing-init');
		$('.rwing').addClass('rwing-init');
		var interval = setInterval('animateWings()',800);
		var butint = setInterval('animateButterfly()',6000);
	});
