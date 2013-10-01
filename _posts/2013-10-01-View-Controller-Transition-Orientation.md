---
layout: post
title: View Controller Transitions with Orientation
---

When iOS 7 was announced at WWDC in 2013, there were an incredible amount of new APIs that caught my eye. Watching one of the developer sessions from my couch in Ohio a few hours after it took place, I stumbled upon session 218: *Custom Transitions Using View Controllers*.

This session contained a lot of confusing information about an incredibly exciting new API. I say "incredibly exciting" because graphics and user interaction on iOS are what really get me excited. I love exploring and [discovering](http://capptivate.co/) new ways to delight my users.

The core functionality of this new API uses the protocol [<code>UIViewControllerAnimatedTransitioning</code>](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewControllerAnimatedTransitioning_Protocol/Reference/Reference.html).

This is how Apple describes the new API:

![View Controller Custom Transitions described by Apple](http://whoisryannystrom.com/img/2013-10-01/apple-transitions.jpg)

If you're confused, don't worry. This about sums up the entire session 218 video **and the sample code**.

I was really hoping we'd get to see some examples of how Apple created their custom transitions, but the only sample provided performs a simple transition using <code>UICollectionViewCell</code> animations, which is a little different than the <code>UIViewController</code> transitions they demo in the session.

I'll attempt to explain how <code>UIViewControllerAnimatedTransitioning</code> works as briefly as I can.

You are currently looking at view controller A and want to present view controller B.

![Two View Controllers](http://whoisryannystrom.com/img/2013-10-01/1.jpg)

You initialize a transition and are given a *container view* that facilitates the animation of your transition.

![Container View](http://whoisryannystrom.com/img/2013-10-01/2.jpg)

Add view controller B's view to the container.

![Adding B to the container](http://whoisryannystrom.com/img/2013-10-01/3.jpg)

Perform an animation on the views of view controllers A and B (**not** on the container).

![Simplest of all animations](http://whoisryannystrom.com/img/2013-10-01/4.jpg)

Afterwards you're left with view controller B presented, and, by calling [<code>animationEnded:</code>](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewControllerAnimatedTransitioning_Protocol/Reference/Reference.html#//apple_ref/occ/intfm/UIViewControllerAnimatedTransitioning/animationEnded:), the presentation is completed.

I started experimenting and quickly found what I thought to be a bug. On July 15th I filed my first bug report with Apple (#14444833, thanks for those who resubmitted). I also created a thread on the dev forums that got [quite popular](https://devforums.apple.com/thread/196451?start=0&tstart=0). 

No one ever got an official answer.

Recently [Ash Furrow](https://twitter.com/ashfurrow) and [Bradford Dillon](https://twitter.com/jbradforddillon) created some really great posts on custom UIViewController transitions on [Teehan & Lax's](http://www.teehanlax.com/blog/custom-uiviewcontroller-transitions/) and [Double Encore's](http://www.doubleencore.com/2013/09/ios-7-custom-transitions/) blogs, respectfully.

Both guides are great and do a good job at explaining how to create your own custom UIViewController custom transitions from scratch. However, both fail to explain how to implement proper orientation support.

![Teehan example orientations](http://whoisryannystrom.com/img/2013-10-01/teehan.jpg)

After a lot of digging, I found that the container view's **frame** is always laid out in portrait, even if the device is in landscape.

This piece of the puzzle was likely biggest source of [confusion](https://devforums.apple.com/message/891193#891193).

It took a lot of tinkering, but I finally found a useful solution. Even though the frame of the container view is stuck in portrait, I found that the **bounds** of the container view is always corrected for device orientation.

I'm not entirely sure that this is intended, but since the container view should be agnostic of your view controller hierarchy, it shouldn't necessarily adjust for orientation.

From the [frame documentation]([Frame](https://developer.apple.com/library/ios/documentation/uikit/reference/uiview_class/UIView/UIView.html#//apple_ref/occ/instp/UIView/frame):

> The frame rectangle, which describes the view’s location and size in its superview’s coordinate system.

From the [bounds documentation](https://developer.apple.com/library/ios/documentation/uikit/reference/uiview_class/UIView/UIView.html#//apple_ref/occ/instp/UIView/bounds):

> The bounds rectangle, which describes the view’s location and size in its own coordinate system.

I think the API is *too vague*. More sample code and documentation really needs to be provided. But for now, if you're going to use custom view controller transitions, make sure to adjust your new views with the bounds of the container.

I've setup a [Github project](https://github.com/rnystrom/TransitionExample) with examples using code, NIBs, and Storyboards. Please feel free to use the code from my [transition controller](https://github.com/rnystrom/TransitionExample/blob/master/TransitionExample/TransitionController.m#L38-45) as a starting point. Hopefully this will provide a good starting point to perform awesome, oriented animations.