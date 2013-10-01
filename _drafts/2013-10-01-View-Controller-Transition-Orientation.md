---
layout: post
title: View Controller Transitions with Orientation
---

When iOS 7 was announced at WWDC in 2013, there were an incredible amount of new APIs that caught my eye. Watching one of the developer sessions from my couch in Ohio a few hours after it took place, I stumbled upon session 218: *Custom Transitions Using View Controllers*.

This session contained a lot of confusing information about an incredibly exciting new API. I say "incredibly exciting" because graphics and user interaction on iOS are what really get me excited. I love exploring and [discovering](http://capptivate.co/) new ways to delight my users.

This new API, the core of which uses the protocol [<code>UIViewControllerAnimatedTransitioning</code>](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewControllerAnimatedTransitioning_Protocol/Reference/Reference.html). Yes, it's a mouthful of a class name.

This is how Apple describes the new API:

![View Controller Custom Transitions described by Apple](http://whoisryannystrom.com/img/2013-10-01/teehan.jgp)

That image just about sums up the entire session 218 video **and the sample code**.

I was really hoping we'd get to see some examples of how Apple created their custom transitions, but the only sample provided performs a weak transition using a <code>UICollectionView</code> which is more niche than a plain ol' <code>UIViewController</code>.

I'll attempt to explain how <code>UIViewControllerAnimatedTransitioning</code> works as briefly as I can:

You are currently looking at view controller A and want to present view controller B.

![Two View Controllers](http://whoisryannystrom.com/img/2013-10-01/1.jpg)

You initialize a transition and are given a *container view* that facilitates the animation of your transition.

![Container View](http://whoisryannystrom.com/img/2013-10-01/2.jpg)

Add view controller B's view to the container.

![Adding B to the container](http://whoisryannystrom.com/img/2013-10-01/3.jpg)

Perform an animation.

![Simplest of all animations](http://whoisryannystrom.com/img/2013-10-01/4.jpg)

Afterwards you're left with view controller B presented and, by calling [<code>animationEnded:</code>](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewControllerAnimatedTransitioning_Protocol/Reference/Reference.html#//apple_ref/occ/intfm/UIViewControllerAnimatedTransitioning/animationEnded:), the presentation is completed.

I took to my own devices and quickly found what I thought to be a bug. On July 15th I filed my first bug report with Apple (#14444833, thanks for those who resubmitted). I also created a thread on the dev forums that got [quite popular](https://devforums.apple.com/message/898394). None of us ever got an answer.

Recently [Ash Furrow](https://twitter.com/ashfurrow) and [Bradford Dillon](https://twitter.com/jbradforddillon) created some really great posts on custom UIViewController transitions on [Teehan & Lax's](http://www.teehanlax.com/blog/custom-uiviewcontroller-transitions/) and [Double Encore's](http://www.doubleencore.com/2013/09/ios-7-custom-transitions/) blogs, respectfully.

Both guides are great and do a good job at explaining how to create your own custom UIViewController custom transitions from scratch. 

However, both fail to explain how to implement proper orientation support.

![Teehan example orientations](http://cl.ly/image/3I420r0O2M3M/teehan.png)