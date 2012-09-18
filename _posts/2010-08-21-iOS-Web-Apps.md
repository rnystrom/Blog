---
layout: post
title: "Guide to iOS Web Apps"
---

> This is a post from my original Wordpress blog. It has some valuable information so I decided to reinstate some of these old posts. Originally posted on October 21, 2010.

When I first started toying around with the idea of making apps, I came to the brink of buying an Apple Developer's SDK along with a Macbook Pro just to be able to develop my own applications. I wasn't really interested in the money that comes with the App Store, just spreading my ideas and learning new technology.

I ditched the idea of spending big bucks on a computer and an SDK and decided I'd make web applications that did the same things as native apps. I used jQuery for some animations and called it a day. However, when I opened up my site on my iPad it ran terribly. I tried using the site for a while, but it just felt awful, so I gave up.

I soon found out that iOS web animations were a tricky breed. I found <a href="http://www.paulrhayes.com/experiments/cube-3d/index.html">this demo</a> and it ran perfectly on my iPad. I <em>immediately </em>began researching how to make everything run smoothly. The more I learned about hardware acceleration, the more I wanted to make something new, something smooth.

That's when I realized that you can actually save websites to your homescreen and have a custom icon, just like an app! I've been studying web app techniques and after learning all that I can from Googling have finally pushed the boundaries to where I am exploring technologies and techniques not practiced publicly. 

So without further adieu, I present my guide to creating the perfect web application.

<h4>Quick Links</h4>
<ul>
<li><a href="#toolbox">Toolbox</a></li>
<li><a href="#icon">Creating an Icon</a></li>
<li><a href="#splash">Creating a Splash Screen</a></li>
<li><a href="#nourl">Removing the Address Bar</a></li>
<li><a href="#noscroll">Stop Zooming and Scrolling</a></li>
<li><a href="#statusbar">Change the Status Bar</a></li>
<li><a href="#css">Cascading Style Sheets</a></li>
<li><a href="#javascript">Javascript</a></li>
</ul>

<h2><a class="nohover" id="toolbox">Toolbox</a></h2>
Here is what you need to know, some of which you need to know pretty well, to create a solid iOS web application:
<h4>HTML5</h4>
You don't need to necessarily be an HTML5 guru to create web apps, but the more the know the more you can do. Mobile Safari supports a lot of HTML5 features, and in the upcoming iOS 4.2, it's gaining even more.

Links:
<ul>
<li><a href="http://html5doctor.com/" target="_blank">HTML5 Doctor</a></li>
<li><a href="http://diveintohtml5.org/" target="_blank">Dive Into HTML5</a> (check out their &lt;canvas&gt; tutorial!)</li>
</ul>

<h4>CSS</h4>

You will need to be able to style your pages pretty well. But on top of this you should really read up on all of the new CSS3 properties. In combination with the &lt;canvas&gt; element, you should be aiming to reduce the number of images on your page by creating your own gradients, shadows, transformations, and animations. Remember that iOS devices usually don't have an amazing amount of memory. The more images that are loaded, the more memory is used. Using CSS will still use system memory, but you will take less of a performance hit.

Links:
<ul>
<li><a href="http://www.w3schools.com/css/" target="_blank">W3 Schools</a></li>
<li><a href="http://www.css3.info/" target="_blank">CSS3 Previews and Demos</a></li>
<li><a href="http://www.w3.org/" target="_blank">Official W3 Documentation</a></li>
<li><a href="http://webkit.org/" target="_blank">Webkit Project</a></li>
</ul>

<h4>Javascript</h4>

To make a web application feel like an application and not a website, you need to have a very good understanding of how javascript works and how you can properly optimize your javascript, both in size and speed. The larger your code is the longer it takes to load, and the more complicated and sloppy your code is the slower your application will run. You need to conserve resources in your application as best as possible.

<i>Special Note:</i> I know that everyone loves to use jQuery, but in many cases jQuery can take very long to perform relatively simple tasks. Use jQuery with caution. Store DOM elements as variables, avoid searching the DOM every time you want to call an object. Also never use $.animate(). Ever. <a href="http://www.tvidesign.co.uk/blog/improve-your-jquery-25-excellent-tips.aspx" target="_blank">Here is a great site</a> for optimizing your jQuery code.

<ul>
<li><a href="http://www.sitepen.com/blog/2008/07/10/touching-and-gesturing-on-the-iphone/" target="_blank">iOS Javascript Events</a> - This is the best resource I have found</li>
</ul>

<h4>Server Side Control</h4>

You don't need to be an expert in server-side controls to create a web app for iOS. However, the better you are, the better your apps will be (see the next technology). The biggest thing that you should be able to do is detect an iOS device on the server side and then redirect, or filter, the content that is displayed. In PHP I use this simple script to determine what the user agent is, and then tailor the content I display to fit the limitations of the user:

{% highlight php5 %}
<?php
if(strstr($USER_AGENT,'iPhone') || strstr($USER_AGENT,'iPod')){
	$browser = 0;
}elseif(strstr($USER_AGENT,'iPad')){
	$browser = 1;
}elseif(strstr($USER_AGENT,'MSIE')){//internet explorer
	$browser = 2;
}elseif(strstr($USER_AGENT,'MOZILLA')){	//firefox
	$browser = 3;
}else{//chrome or safari (webkit)
	$browser = 4;
}
{% endhighlight %}

As far as languages go, I prefer PHP for my server side control when developing for iOS devices. I initially started using ASP.net, but the more that I got into using AJAX, the more ASP.net was trying to do than was necessary. In general I find ASP.net to be a solid language, but when it comes to minimization and optimization, it usually does more than I ask. Stick to something simple that will control your HTML, CSS, and Javascript output. I have not gotten a chance to experiment with Ruby or even HTTP via Python, but I have heard good things about them.

<h4>AJAX</h4>

Short for Asynchronous Javascript And XML, AJAX provides an incredibly fast method for updating a page's content. You can create images, access databases, and even change an entire page's DOM with AJAX, avoiding that "page flicker" that ruins the immersion of using a website as an application. I usually use jQuery's $.ajax() method because it's syntactically simple, but feel free to use whatever you are most comfortable with. Just please, please avoid ASP.net's <asp:UpdatePanel> control, it will send and receive way too many requests than is necessary.

Links:
<ul>
<li><a href='http://api.jquery.com/category/ajax/' target='_blank'>jQuery $.ajax()</a></li>
<li><a href='http://www.yourhtmlsource.com/javascript/ajax.html' target='_blank'>Javascript AJAX</a></li>
</ul>

<h2><a class='nohover' id='icon'>Creating an Icon</a></h2>

Open up whatever image editor you want and create a blank 114x114 pixel PNG. This creates the maximum icon size for the Retina display. Once you have created and uploaded the image, link to it like so:

{% highlight html %}
<link rel='apple-touch-icon' href='/images/icon.png' />
{% endhighlight %}

or if you don't want the gloss overlay:

{% highlight html %}
<link rel='apple-touch-icon-precomposed' href='/images/icon.png' />
{% endhighlight %}

The image will automatically be glossed (unless you use the second link) and the corners rounded, so don't worry about applying any of those effects in your image editor.

<h2><a class='nohover' id='splash'>Creating a Splash Screen</a></h2>

Just like the icon, add the following meta tag to the head of your html:

{% highlight html %}
<link rel='apple-touch-startup-image' href='/images/splash.png' />
{% endhighlight %}

For the iPhone/iPod, you need to create a PNG that is 320x460px, and for the iPad the image needs to be 768x1004px. Make sure that you create portrait oriented images. Currently the iPad will load an app in landscape mode, but it will still use the 768x1004px image which leaves a blank, see-through, space on the left side of the screen. I haven't found a fix for this, so if anyone has any ideas, let me know!

<strong>Update: </strong>I would love if Apple could address the orientation of startup images for the iPad. It may have changed in 4.2, but it seems now that if you start a web app with a startup image from <em>landscape </em>orientation, iOS will not load the image. You have to start the app in <em>portrait </em>mode to see it. 

<h2><a class='nohover' id='nourl'>Removing the Address Bar</a></h2>

This is very simple. In my opinion you should always remove the address bar to give your web app a native app appearance.

{% highlight html %}
<meta name='apple-mobile-web-app-capable' content='yes' />
{% endhighlight %}

<h2><a class='nohover' id='noscroll'>Stop Zooming and Scrolling</a></h2>

If your app fits inside the window and you would like to prevent the user from scrolling, or if you want to prevent zooming in and out, add the following:

For scaling, add to the head:

{% highlight html %}
<meta name='viewport' content='user-scalable=no, width=device-width' />
{% endhighlight %}

For scrolling, add to your javascript:

{% highlight js %}
function block(e) {
	e.preventDefault() ;
}
{% endhighlight %}

and to the body element:

{% highlight html %}
<body ontouchmove='block(e)'>
{% endhighlight %}

<h2><a class='nohover' id='statusbar'>Change the Status Bar</a></h2>

This is another simple aesthetic change. I'd prefer Apple allow the status bar to be removed so that we can take advantage of the entire 1024x768 resolution, but it is always present.

{% highlight html %}
<meta name='apple-mobile-web-app-status-bar-style' content='default' />
{% endhighlight %}

The other values for <b>content</b> are:

	defualt, black, black-translucent

<h2><a class='nohover' id='css'>Cascading Style Sheets</a></h2>

In this section, I will assume you have a basic understanding of CSS and how it works. Mobile Safari takes advantage of a lot of new CSS3 properties. In my experimenting, some of the new properties must have the prefix <b>-webkit</b>, while others do not. In debugging, if you don't see a property, try toggling this prefix.

<h4>Linking to CSS</h4>

Should you put your CSS in your HTML? Or should you link to external files? How do you distinguish from the different files for different devices?

Usually, I use one master stylesheet. I try my best to reduce HTTP requests, because I believe the iPad (as an example) can only load 2 threads at a time. I'm not 100% on this, but I know it is limited when compared to a desktop browser. I also like to tailor what is loaded on the server side. There are techniques to choosing a stylesheet in the HTML, but I think server side is the easiest way to go (goes parallel with tailoring my HTML and Javascript, keeping structure consistent).

However, if you do not want to select a stylesheet based on the user_agent, here is a device width technique:

{% highlight html %}
<link media='only screen and (max-device-width: 480px)' href='/css/iphone.css' type= 'text/css' rel='stylesheet' />
{% endhighlight %}

<h4>Detecting Orientation</h4>

You should also separate your stylesheets based on the device's orientation. I generally put all of the style properties in one file, and in another, correct for the opposite orientation with <b>!important</b> tags on each property I am changing. Usually this leaves me with two stylesheets (and that is all that will be requested on the page load!): one being very large for one orientation, and the other very small with opposite orientation corrections. To determine orientation for stylesheet selection, use this:

{% highlight html %}
	<link type='text/css' rel='Stylesheet' media='all and (orientation:portrait)' charset='utf-8' href='css/ipadp.css' />
	<link type='text/css' rel='Stylesheet' media='all' charset='utf-8' href='css/ipad.css' />
{% endhighlight %}

<h4>Animating with CSS</h4>

To start off, if you are used to jQuery, please drop everything that you know about animating DOM elements. Currently, jQuery will sometimes animate objects by simply changing the "left" CSS property instead of using a -webkit-transition or keyframe.

Please see my previous posts on CSS animation for ideas:
<ul>
<li><a href="http://blog.whoisryannystrom.com/?p=40" target="_blank">CSS Keyframes</a></li>
<li><a href="http://blog.whoisryannystrom.com/?p=47" target="_blank">CSS Transitions</a></li>
</ul>

Here are a few other tips:
<ul>
<li><b>Flickering</b> - Sometimes you will encounter flickering when you animate a large object. This is because to Mobile Safari, each object is a 3D element, which means it has a front and back. When you animate an element, you are only animating one side. Use this to make the backface transparent:

{% highlight css %}
-webkit-backface-visibility: hidden;
{% endhighlight %}

<li><b>Page Size</b> - Take advantage of CSS3's ability to create gradients, shadows, and rounded corners and avoid using any &lt;img&gt; tags. This saves page load time and system memory. There are some good guides to making glossy buttons with CSS3, just search around Google.</li>
<li><b>Avoid :hover</b> - The :hover property will act like a toggle. You may be able to find a way to take advantage of it, but usually it will only cause extra markup.</li>
<li><b>Prevent Page Selection</b> - If you are planning on having the user touch elements for more than a second, you might want to consider adding this to your body element in your CSS. This will stop any "Open in New Window" popups, text highlighting, and image copying.

{% highlight css %}
-webkit-user-select:none;
{% endhighlight %}

</ul>

<h2><a class='nohover' id='javascript'>Javascript</a></h2>

Again, you should have a fairly good understanding of Javascript if you are making an iOS web app. The only way to really make your app interactive is to use Javascript. I will just list some tips here.

<h4>How to Load</h4>

The only Javascript that I like to load outside of the HTML is the jQuery framework. Other than that, I like to tailor the scripts for the device being used and load it directly with the HTML at the <b>end</b> of the document. It is good practice to put all of your Javascript after the DOM elements (ie. right before you close the body). If you put Javascript before everything else, the browser will stop loading the page until all of the scripts have loaded/executed.

<h4>Tips</h4>

<ul>
<li><b>Touch events</b> - Use touch events instead of mouse events. These include:
<ul>
<li><i>ontouchstart</i></li>
<li><i>ontouchmove</i></li>
<li><i>ontouchend</i></li>
</ul>
Read the link above in the Toolbox section for more details. 
</li>
<li>
<b>Gesture events</b> - Use gesture events when you want to fire events for touches with more than one finger. These include:
<ul>
<li><i>ongesturestart</i></li>
<li><i>ongesturechange</i></li>
<li><i>ongestureend</i></li>
</ul>
Again, there is a good amount of information on the properties associated with gestures in the Javascript Toolbox link above. For gestures, take a look at scale and rotation properties.
</li>
<li><b>Optimization</b> - Again, avoid jQuery as much as possible. It is fine to load the framework and use it to modify some objects, but overall, jQuery's methods are not optimized for mobile or low memory browsers. 

I use a fair amount of global variables in my code. However, it is a good idea to store as few as possible so that you don't use too much memory. Store only critical objects. I think of it as a weight and balance check: If you are going to use an object every 100ms, then storing it in memory is probably going to pay off in better performance for how much memory it uses. On the flip side, if you use an object infrequently, recreating the object or searching the DOM for it again will probably be better because then you can save memory for other tasks.

Always try to minimize.
</li>
<li><b>OnLoad</b> - Make use of jQuery's $(document).ready() or an onload function to assign global variables, call init events, etc. You need to make sure that the DOM elements load. Sometimes it is better to use a timeout function to ensure everything has loaded.

{% highlight js %}
setTimeout(function(){init();},200);
{% endhighlight %}

</li>
<li><b>AJAX</b> - Try to use AJAX everywhere that you need to send, receive, or display data. In my planning phase, I make sure that I can completely avoid any "flickering" between pages or data loads. It ruins immersion.
</ul>

<h2>Summary</h2>

This entire post is just a round up of what I have learned and gathered about making iOS web applications. It took me a long time to get to this point, and if I had things laid out this plainly when I had gotten started, things would have gone a lot smoother. I thought I'd just share the love and save some people some time. 

I started making web apps to avoid using OSX and the Apple Developer's SDK, and it has really paid off. There is a lot to learn about tailoring to a specific product. Please keep in mind though, Apple devices are not the <em>only </em>means of being on the web and using applications. I think they are revolutionary devices, but if you are creating content for public use (or even commercial), you will have to meet the needs of Firefox, Safari, Chrome, IE, Opera... the list goes on and on (keep in mind other mobile browsers too like Blackberry and Android!).

But, I have fun using my Apple products with my web apps. The touch interface is amazing, even when using a web app. By optimizing and minimizing, you can easily create a native feeling web application for your iOS device.
