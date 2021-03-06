---
layout: post
title: "Mobile Web App Frameworks"
---

> This is a post from my original Wordpress blog. It has some valuable information so I decided to reinstate some of these old posts. Originally posted on April 11, 2011.

I've been experimenting with several web apps in and out of work lately, both of which demanded rigorous mobile UI's. After spending a lot of time customizing my own mobile UI's but always wasting hours of time, I decided to check out a couple good APIs for mobile web. I played with a <em>lot</em> of APIs and only two stood out as contenders: Sencha Touch and jQuery Mobile.

### [jQuery Mobile](http://jquerymobile.com/)

I'll start with the more known. jQuery Mobile is made by the same guys that have "revolutionized" javascript coding (I'm putting that in quotes because though a lot of people praise jQuery, I honestly think t has to be used in moderation). They have been alpha testing jQuery Mobile for a while but only recently released their v1.0 beta.

If you head over to their site and play with the demos, the first thing you will likely notice is the speed. jQuery Mobile is clunky and slow, not quite the blistering pace that you would expect on mobile. Making web apps is already gimped by trying to imitate native, but when you load your app up with a huge framework, it really can become noticeable. One of the biggest drawbacks to jQuery Mobile is the fact that it is <b>not</b> standalone. You have to have jQuery loaded as well. I for one will always preach that if you want performance, you cannot use jQuery on mobile.

That aside, why would I consider jQuery Mobile one of the best? Simply because it is the most thought out, organized, and reliable mobile APIs out there. Sure, it's not crazy fast, but when you just need something to work, jQuery Mobile will do a damn good job. The project I used it on called for just a mobile version of a client's website. Simple enough. Combined with <a href="http://api.jquery.com/category/plugins/templates/" target="_blank">jQuery Templates</a> you can quickly, let me repeat, <em>quickly</em> create a mobile web application. Sometimes you just need something to work.

Finally, take a look at jQuery Mobile's list of supported devices. This is pretty insane.

    Apple iOS 3.2-5.0 beta: Tested on the original iPad (3.2 / 4.3), iPad 2 (4.3), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), and 4 (4.3 / 5.0 beta)
    Android 2.1-2.3: Tested on the HTC Incredible (2.2), original Droid (2.2), Nook Color (2.2), HTC Aria (2.1), emulator (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
    Windows Phone 7: Tested on the HTC 7 Surround
    Blackberry 6.0: Tested on the Torch 9800 and Style 9670
    Blackberry Playbook: Tested on PlayBook version 1.0.1 / 1.0.5
    Palm WebOS (1.4-2.0): Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
    Firebox Mobile (Beta): Tested on Android 2.2
    Opera Mobile 11.0: Tested on the iPhone 3GS and 4 (5.0/6.0), Android 2.2 (5.0/6.0), Windows Mobile 6.5 (5.0)
    Kindle 3: Tested on the built-in WebKit browser included in the Kindle 3 device
    Chrome Desktop 11-13 – Tested on OS X 10.6.7 and Windows 7
    Firefox Desktop 3.6-4.0 – Tested on OS X 10.6.7 and Windows 7
    Internet Explorer 7-9 – Tested on Windows XP, Vista and 7 (minor CSS issues)
    Opera Desktop 10-11 - Tested on OS X 10.6.7 and Windows 7
    Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
    Opera Mini (5.0-6.0) - Tested on iOS 3.2/4.3
    Windows Phone 6.5 – Tested on the HTC
    Blackberry4.x: Tested on the Curve 8330

Just nuts. I give the guys at jQuery a lot of credit for really focusing on useability, like they usually do. Kudos guys.

### [Sencha Touch](http://www.sencha.com/products/touch/)

I can't speak highly enough of this API. It. Is. Amazing. The guys at Sencha really hit one out of the park, again. If you haven't heard of Sencha before, they are the people who created <a href="http://www.sencha.com/products/extjs/" target="_blank">Ext JS</a>, an API for making web apps for desktops that function and resemble native apps.

A huge bonus with Sencha is that it is a fully fledged MVC. You have Stores for data, Models for data relationships, Templates for displaying data, and custom functions in objects and throughout our app for total control. I found that Sencha was a great way to process large amounts of data quickly and efficiently. The Store class also has a lot of good ways to do AJAX requests and pull remote data. Though, to dynamically update your store with different parameters can become a little bit of a chore, but still, it is a model at least.

The Template class is incredible. It goes beyond jQuery's template() by letting you use javascript inside the templates to change data. In the Template class you can create custom methods to check and alter the data from the Store.

Then there is the UI. Sencha Touch's UI is both beautiful and an immense pain in the ass. For starters, they have created a great theming framework that looks good and works well with whatever you do. That aside, if you want to get custom with your listviews, your modals, etc, you are going to have to get pretty hacky with the API. Be careful, if you want a fully customization experience, Sencha might not be your thing.

But, Sencha Touch's UI is the most responsive UI API out there for mobile, hands down. Google just released their Google+ service which has a faster UI, but that code isn't being handed out in an API anytime soon. Large lists, data manipulation, modals, swipe and multitouch events... the list goes on and on. There is plenty of good stuff to try out with Sencha.

### Conclusion

Do some pre-production and find out your needs. Both of these APIs are incredible, but they succeed at different things. I would in no way, shape, or form say they are interchangeable. Just take some time before you start coding to find out what is best.
