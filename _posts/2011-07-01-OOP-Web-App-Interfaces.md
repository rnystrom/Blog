---
layout: post
title: "OO Web Apps"
---

> This is a post from my original Wordpress blog. It has some valuable information so I decided to reinstate some of these old posts. Originally posted on July 1, 2011.

I've been brainstorming ways to come up with some low-resource and memory usage ways to make a nice looking/feeling UI for web apps. Obviously we need to use out basics: HTML, CSS, Javascript, but how can we use the least amount of device memory and the least amount of lines of code while still getting something that runs great? I took a stab at a button example and I think I found a pretty nifty way to go about this.

iOS is a great operating system, but mobile safari leaves a lot to be desired. One of those is the default UI elements (like input elements) are just plain-jane Mac icons. Their events are dull and boring. On top of all of that, we can't completely customize the CSS attributes of them (just <em>try</em> to style a default button element, it looks like trash!).

I personally like big, round buttons for my inaccurate fingertips. I also like a simple, subtle, and <b>fast</b> event response to show me that I pressed what I wanted. There are two types of feedback that I prefer: either some sort of highlight, or a ripple. 

The best way to save resources is to utilize OOP and create some classes for our objects. Create the constructor, set some defaults, then set up your events. Make sure to add your event with <b>addEventListener</b>. (Again since I'm using mobile, I'm trying as hard as possible to avoid redundancy with jQuery)
