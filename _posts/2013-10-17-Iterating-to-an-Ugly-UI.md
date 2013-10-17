---
layout: post
title: Iterating to an Ugly UI
---

I've been working on an app for golf courses that gives golfers range finding and the latest weather. The concept and app are rather simple, so I decided to spend some time perfecting the design.

After deciding on tab bar navigation, I needed to create the view the user sees immediately after launch. The first view is a list of holes on the course with some branding and supplementary information.

<a href="http://whoisryannystrom.com/img/2013-10-17/sketch.jpg" title="http://whoisryannystrom.com/img/2013-10-17/sketch.jpg"><img class="wide" src="http://whoisryannystrom.com/img/2013-10-17/sketch.jpg" alt="Initial course list sketch" /></a>

My usual first step, when I start a brand new design, is to hop onto [Dribbble](http://dribbble.com) and see what the latest trends are. I've done enough searching on Dribbble to know to first search ["ios7 list"](http://dribbble.com/search?q=ios7+list) and sort by "Popular".

[<img width="480" src="http://whoisryannystrom.com/img/2013-10-17/search_results.jpg" alt="Dribbble results for iOS7+List" />](http://whoisryannystrom.com/img/2013-10-17/search_results.jpg)

I took the Dribbble search results and created my first design.

[<img width="320" src="http://whoisryannystrom.com/img/2013-10-17/1.jpg" alt="First Design Concept" />](http://whoisryannystrom.com/img/2013-10-17/1.jpg)

I tried to make the app look "iOS 7" by blurring a photo of one of the holes and placing it in the background. Each hole only shows the hole number, par, and yardage for a single tee. 

The spacing between each hole would give me room to create some dynamic animations. Maybe keep the blurred background in place and slide in the map of the hole.

If you ask me, this is a weak use of screen real-estate.

I really liked the hole number green with a white, inner border.  [The style](http://cdn.firespring.com/images/6be767fc-d804-45d5-b4d3-aa4411785276.jpg) should be familiar to most golfers.

[<img width="320" src="http://whoisryannystrom.com/img/2013-10-17/2.jpg" alt="Second Design Concept" />](http://whoisryannystrom.com/img/2013-10-17/2.jpg)

This second design iterates on the first only adding a feint line connecting each hole. The line reinforces order, kind of like a golf cart trail between each hole. The actual data that's displayed doesn't change at all.

[<img width="320" src="http://whoisryannystrom.com/img/2013-10-17/3.jpg" alt="Third Design Concept" />](http://whoisryannystrom.com/img/2013-10-17/3.jpg)

Not much changed on the third iteration, only the cell layout. Putting everything on the same line and reducing sizes put more holes on the screen at once.

[<img width="320" src="http://whoisryannystrom.com/img/2013-10-17/4.jpg" alt="Fourth Design Concept" />](http://whoisryannystrom.com/img/2013-10-17/4.jpg)

I ended up getting carried away with the idea that _more holes on the screen_ means _better layout_. 

Its a wreck.

Taking a step back, I saw how I was digging a deeper and deeper hole. I needed to stop staring at the trees and start focusing on the forest.

[<img width="320" src="http://whoisryannystrom.com/img/2013-10-17/5.jpg" alt="Final Design Concept" />](http://whoisryannystrom.com/img/2013-10-17/5.jpg)

The fifth and final design heads in a new direction. I refocused my efforts, deleted my _Dribbble Inspiration_ folder, and thought critically about how this screen would be viewed.

I realized that golfers were going to be in direct sunlight trying to read text on a glossy, finger-smudged screen. I got rid of the background blur and used black text on white for maximum contrast and readability.

The only information that really matters on this view is the yardage for each tee box, hole number, handicap, and par. The rest of the data should be in the hole views or elsewhere in the app. The new data layout is light and balanced.

I also removed every animation. Course data is loaded from local resources, so a fancy animation isn't masking any work. Users would just end up waiting, and they frequently [like to complain](http://www.marco.org/2013/08/27/along-for-the-ride) about how annoying pointless animations can be.

I'm quite happy with the final design, but you won't catch me posting it on Dribbble, because it doesn't really follow any design trends.

And that's a good thing.

The final interface serves its purpose. It presents basic course information, removes distractions, and is completely accessible. Sometimes following trends for the sake of being trendy creates [Dribbblisation](http://insideintercom.io/the-dribbblisation-of-design/) and hurts the usability of your product.