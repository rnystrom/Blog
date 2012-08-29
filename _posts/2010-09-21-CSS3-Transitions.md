---
layout: post
title: CSS3 Transitions
---

> This is a post from my original Wordpress blog. It has some valuable information so I decided to reinstate some of these old posts. Originally posted on September 21, 2010.

As promised, here is part 2 of my brief CSS3 animations explanations. In this post I'm covering my favorite method of CSS animation, transitions. Transitions share a lot in common with keyframes, but though the outcome can sometimes appear to be exactly the same, their execution and purpose is vastly different.

A transition is similar to a keyframe in the fact that you are defining the behavior of a change in an element's style properties. The big difference between the two is that transitions say what happens when an element moves <b>between</b> properties. In keyframes we just have a "from" and "to". Picture transitions as declaring "from", "to" and back to "from". That means you can control what happens both dynamically <i>and</i> randomly (ie. when a user hovers, clicks, etc).

<ul>
<li><b>Keyframes</b> - Going from A to B</li>
<li><b>Transitions</b> - What happens in between point A and B</li>
</ul>

Transitions can do <i>almost</i> everything that a keyframe can do, plus a little more. There are a few cons, however, but I'll get to those in a bit.

Defining a transitions is as easy as this:

	-webkit-transition: all 1s linear;

That's it. Broken up into english, you have:

	-webkit-transition: [<i>properties</i>] [<i>duration</i>] [optional(<i>timing-function</i>)];

This says that <b>any style change to that DOM element will transition over a one second animation</b>. Say you go from width:20px to width:200px, the element will stretch out from 20 to 200 over a one second interval.

Let's say that in the previous example in order to change the element's width, you added a new class with Javascript that overrode the width in the CSS. If we were to revert that change and set the element's properties to what they originally were, then the <b>reverse</b> transition would take effect. In this case, 200px to 20px over a one second interval.

For an example of adding/removing a class, just click on the "Past Posts" button above. The calendar is moved with a -webkit-transition.

Choosing how different properties transition is simple as well. In the above example, I used "all" which tells the transition to apply to every property change. In an experiment I created a butterfly and I used different transitions to make the it rotate faster than it arrives at a corner of the screen because butterflies fly straight. Here's a quick excerpt:

	-webkit-transition-property: -webkit-transform, left, top; 
	-webkit-transition-duration: 2s, 10s, 10s;
	-webkit-transition-delay: 0s, 0s 0s;

<ul>
<li><b>-webkit-transition-property</b> - REQUIRED! The name of the property (Note that for -webkit-transforms we use "-webkit-transform". This encapsulates any transform.)</li>
<li><b>-webkit-transition-duration</b> - REQUIRED! Though the default is 0, if you do not assign this a value, there will be no effect! However in the use of multiple properties, you may want an instant change, so 0 is still usable.</li>
<li><b>-webkit-transition-timing-function</b> - Optional. Default is "ease". Here you can use any of the basic timing function names (linear, ease-in, ease-in-out, etc).
<li><b>-webkit-transition-delay</b> - Optional, the time from the beginning of the transition for the effect to take place.</li>
</ul>

Now, let's throw some hardware acceleration into the mix. Here is our CSS:

	.object{
		-webkit-transition:all 2s linear;
	}
	.animation{
		-webkit-transform: translateX(500px);
	}

To cause our element with class "object" to move 500px to the right over a two second interval, we just have to add the class "animation" to that object. But make sure you do <b>not</b> overwrite the original "object" class!

<b>translateX</b> is an effect in the new CSS3 library. This function does the same thing as a transition from left:0 to left:500px. However, translate is a separate property that moves the object independently. That is, say you have a position:relative div and change it's left value. You will then change the positioning of adjacent elements. With translate, you will not.

For some reading on 2D and 3D -webkit-transforms, read the W3's official drafts <a href="http://www.w3.org/TR/css3-2d-transforms/" target="_blank">here</a> and <a href="http://www.w3.org/TR/css3-3d-transforms/" target="_blank">here</a>. (3D transforms is a whole different topic to discuss. To save time, I'll just direct you to <a href="http://webkit.org/blog/386/3d-transforms/" target="_blank">Surfin' Safari</a>, where I learned what I currently know).

When it comes to drawbacks, transitions share many similar problems that keyframes currently do. Most of the problems are due to a large lack of browser support (again here you will only be able to use -webkit-transitions with Chrome and Safari).

So with all of these goodies, why would you ever consider using a keyframe instead of a transition? Simple, iterations. You cannot tell a transition to repeat itself. Transitions are for changes in properties <b>only</b>. <a href="http://blog.whoisryannystrom.com/?p=40">In my previous post</a> you can see that keyframes have a specific property for managing the number of times the animation iterates (1 to infinity). So, bear this in mind when deciding which to use. Usually if iterations are not an issue, I opt for -webkit-transitions over keyframes because they are syntactically easier to manage.

Extra credit: You can use keyframes with transforms. Transforms are not exclusive to transitions!
