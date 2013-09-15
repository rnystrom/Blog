---
layout: post
title: "Live Blur in iOS7"
---

Lately I have been seeing a lot of designers on [Dribbble](http://dribbble.com/search?q=ios+blur) using blurs in gorgeous animations for iOS 7 concepts. These designs usually fall in line with the iOS 7 paradigm of being flat and blurring the contents underneath the views. Apple has demonstrated this technique in their design of iOS 7 with Safari's tool bar and Contact's tab bar.

Below is an example iOS 7 custom control design by [Jakub Antalik](https://twitter.com/Jakubantalik). I took this beautiful design as a challenge to recreate it as an open source iOS control. I had done these sort of challenges [before](https://github.com/rnystrom/RNRippleTableView), so I didn't think it would be too difficult.

[![Sidebar calendar animation](http://whoisryannystrom.com/img/2013-09-17/dribbble-frosted.gif)](https://twitter.com/Jakubantalik)

Unfortunately in the latest iOS SDK, there still does not exist any API to do live blurring of a view. When I say "live blurring" I mean applying a gaussian blur to a screenshot of the contents beneath a view.

There have been some great attempts at creating "live" blur views for iOS, the two most notable being [FXBlurView](https://github.com/nicklockwood/FXBlurView) and [ios-realtimeblur](https://github.com/alexdrone/ios-realtimeblur), but these projects work by continuously polling the runtime, grabbing screenshots of the current view (which occurs on the CPU and main thread), applying a blur to the screenshot, and then adding the image to the view. The "live" effect happens by quickly swapping the blurred image with another, working just like frames of film.

The big bottleneck with most of these implementations is the screenshot. This has to occur **on the CPU** which delays other, more critical operations, and can lag and stutter on older devices.

[Rumors have hinted](http://stackoverflow.com/a/17299759) that Apple is blurring directly on the GPU, but that creating an API could create a security risk, and we've seen Apple during a security breach.

One trick that I've played with is using the <code>UIViewContentMode</code> property of <code>UIView</code> (specifically <code>UIImageView</code>) and animate the height or width of the view to give the appearance that a frosted view is animating on top of another view. I implemented this trick in my [RNFrostedSidebar](https://github.com/rnystrom/RNFrostedSidebar) UI control.

[<img src="http://whoisryannystrom.com/img/2013-09-17/animation-explanation.jpg" width="1024" alt="RNFrostedSidebar blur hack" />](http://whoisryannystrom.com/img/2013-09-17/animation-explanation.jpg)

Until such an API opens up, I strongly urge designers to be mindful of the blurs they use for production apps. Blurring is easy, but live blurring is a performance nightmare. We would be better of if we stopped drooling over blurs and design with performance in mind.