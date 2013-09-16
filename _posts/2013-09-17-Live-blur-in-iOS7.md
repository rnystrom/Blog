---
layout: post
title: "Live Blur in iOS7"
---

Lately I have been seeing a lot of designers on [Dribbble](http://dribbble.com/search?q=ios+blur) using blurs in UI concept animations for iOS 7. These designs are usually flat and apply a gaussian blur to the contents beneath views. Apple has demonstrated this technique in their design of iOS 7 with Safari's tool bar and Contact's tab bar.

In design, blur is primarily used to corral your eyes towards an object. If you are presenting a modal atop a busy background, a blurred background will naturally guide your eyes towards the crisp and *in focus* text or images.

Blurs also help present additional information while remaining within the context of the previous screen.

[<img width="320" src="http://whoisryannystrom.com/img/2013-09-17/ios-7-message.jpg" alt="iOS 7 Alert View" />](http://whoisryannystrom.com/img/2013-09-17/ios-7-message.jpg)

Below is an example iOS 7 custom control design by [Jakub Antalik](https://twitter.com/Jakubantalik). I took this beautiful design as a challenge to recreate it as an open source iOS control. I've done these sort of challenges [before](https://github.com/rnystrom/RNRippleTableView), so I didn't think it would be too difficult.

[![Sidebar calendar animation](http://whoisryannystrom.com/img/2013-09-17/dribbble-frosted.gif)](https://twitter.com/Jakubantalik)

Unfortunately in the latest iOS 7 SDK, there is no API to do live blurring of a view. When I say "live blurring" I mean applying a gaussian blur to a screenshot of the contents beneath a view and **maintaining the blur effect throughout animation and state changes** of the background.

There have been some great attempts at creating "live" blur views for iOS, the two most notable being [FXBlurView](https://github.com/nicklockwood/FXBlurView) and [ios-realtimeblur](https://github.com/alexdrone/ios-realtimeblur), but these projects work by continuously polling the runtime, grabbing screenshots of the current view (which occurs on the CPU and main thread), applying a blur to the screenshot, and then adding the image to the view. The "live" effect happens by quickly swapping the blurred image with another, working just like frames of film.

The big bottleneck with most of these implementations is the screenshot process. This operation has to occur **on the CPU** which delays other, more critical operations, and can lag and stutter on older devices.

[Rumors have hinted](http://stackoverflow.com/a/17299759) that Apple is blurring directly on the GPU, but creating such an API would open up security risks, and we've seen how Apple deals with security issues.

One trick that I've experimented with is changing the <code>UIViewContentMode</code> property of <code>UIView</code> (usually <code>UIImageView</code>) to be fixed to a side, and then animate the height or width of the view so it looks like a live-blurred view is sliding in.

[<img src="http://whoisryannystrom.com/img/2013-09-17/animation-explanation.jpg" width="1024" alt="RNFrostedSidebar blur hack" />](http://whoisryannystrom.com/img/2013-09-17/animation-explanation.jpg)

I implemented this trick in my [RNFrostedSidebar](https://github.com/rnystrom/RNFrostedSidebar) UI control and I think the effects are quite nice.

[![RNFrostedSidebar open animation](http://whoisryannystrom.com/img/2013-09-17/open.gif)](http://whoisryannystrom.com/img/2013-09-17/open.gif)

Until a background blur API opens up, I strongly suggest keeping blurs in your designs to a minimum because they can be pretty taxing on the device and hurt user experience. Just remember to keep performance in mind as we design and develop our UIs to match this new iOS.