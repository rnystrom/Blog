---
layout: post
title: "CSS3 Keyframes"
---

> This is a post from my original Wordpress blog. It has some valuable information so I decided to reinstate some of these old posts. Originally posted on September 14, 2010.

There are two main options for using CSS3 animations: keyframes and transitions. Both have their advantages and are syntactically different. I'll do my best to explain each in Layman's terms and also give some examples. In this post I'll be going over keyframes.

Keyframes let you control what properties are changed and when. To create a keyframe animation, you need the following:
<ul>
	<li><strong>from</strong> or <strong>0%</strong> - This is the origin of your frame. Here you need to define the properties that are going to be modified. It is best practice to match the properties in the class/ID definition in your stylesheet, especially if you are delaying the animation.</li>
	<li><strong>to</strong> or <strong>100%</strong> - Easy to figure this part out: to/100% contains the properties' new values. Make sure you restate each value in <strong>from</strong>.</li>
</ul>
Here is an example:

	@-webkit-keyframes move {
		from {
			left: 0px;
		}
		to {
			left: 200px;
		}
	}

<em>Optionally</em>, if you use <strong>0% - 100%</strong>, you can also provide steps of changes in between. You chose the percentages of the steps. I usually match up the percentages with my timing. If my animation is going to take 4 seconds and I want the color to change at 1.5 seconds, then I just do 1.5/4*100 = 37.5%. So, my new keyframe will look like this:

	@-webkit-keyframes move {
		0% {
			left: 0px;
			background:red;
		}
			38% {
			background:blue;
		}
			100% {
			left: 200px;
		}
	}

Now that you have defined your animation, in this case we've called it "move", we can apply it to a DOM object. Personally, I always store my animations in their own separate classes. This does not mean that you cannot store the animation and it's properties in a main class, ID, or even in the DOM CSS definition (ie. div, a, img), I think it's just better practice to keep them separate. Here are all of your animation options:
<ul>
	<li><strong>-webkit-animation-name</strong> - REQUIRED! You have to pick your previously defined keyframe. In our case, we would put "-webkit-animation-name: move;". This is whatever you named your keyframe. If you have done custom web fonts before, this should be easier to understand.</li>
	<li><strong>-webkit-animation-duration</strong> -REQUIRED! Also, self explanatory. How long you want the animation to last. The animation will not work without this property set.</li>
	<li><strong>-webkit-animation-direction</strong> - Two options here, either <strong>normal</strong> (default) or <strong>alternate</strong>. <strong>Normal </strong>executes the keyframe as is, while <strong>alternate</strong> reverses the keyframe on <em>odd</em> iterations.</li>
	<li><strong>-webkit-animation-timing-function</strong> - Default: <strong>ease</strong>. Your other options are <strong>linear, ease-in, ease-out, ease-in-out</strong>. See <a href="http://css-infos.net/property/-webkit-animation-timing-function" target="_blank">this link</a> for more information on their behaviors.</li>
	<li><strong>-webkit-animation-iteration-count</strong> - Default: <strong>1</strong>. The only two options are any integer (greater than 1), or <strong>infinite</strong> to make the keyframe execution indefinitely.</li>
</ul>
Keyframes are a great way to keep messy and resource using Javascript off of your pages and away from your users. But, keep in mind that only browsers using the Webkit engine will be able to utilize them. Currently, this means only Chrome and Safari. However, both Mozilla and Opera will be using animations very soon. I believe Firefox 3.7 will be using <strong>-moz</strong> and Opera may already support some <strong>-o</strong> animations.

Another downside, and the reason I stick mostly to transitions, is that mobile support for keyframes is pretty weak. Yes, you will your iPhone to render a keyframe animation, but it will be just as choppy as a jQuery.animate({...}) function.

In the next CSS Animations post, I'll be covering <strong>-webkit-transitions</strong>, and after that I'll be showing some examples of how to tie it all together and create some amazing works/tools with some help from Javascript.

I left out any examples of how to use keyframes in this post, but be sure to check out some of the sources I used to create this small guide for some excellent examples and source code:
<ul>
	<li><a href="http://webkit.org/blog/324/css-animation-2/" target="_blank">Surfin' Safari</a></li>
<li><a href="http://www.endigodesign.com/2010/06/learn-how-to-use-css3-keyframe-animation/" target="_blank">Endigo Design</a></li>
<li><a href="http://www.leemunroe.com/css3-animations/" target="_blank">Lee Munroe</a></li>
<li><a href="http://css-infos.net/" target="_blank">CSS Property Database</a></li>
</ul>
