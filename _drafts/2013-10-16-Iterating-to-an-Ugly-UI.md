---
layout: post
title: Iterating to an Ugly UI
---

Lately I've been working on a golfing app that shows ranges and weather conditions for a course. The concept and app are quite simple. I decided to spend significantly more time on perfecting the utilitarian design.

After designing the basic tab-bar navigation, I needed to design the very first view that the user would see. The first view is a list of holes on the course with some branding and supplementary information. 

Here are some table cell sketches I made for the course view.

<a href="http://whoisryannystrom.com/img/2013-10-15/sketch.jpg" title="http://whoisryannystrom.com/img/2013-10-15/sketch.jpg"><img class="wide" src="http://whoisryannystrom.com/img/2013-10-15/sketch.jpg" alt="Initial course list sketch" /></a>

My natural inclination is to hop onto [Dribbble](http://dribbble.com) and see what the latest trends are. I've studied search tags long enough to immediately search for ["ios7 list"](http://dribbble.com/search?q=ios7+list) and sort by "Most Popular".

I took the Dribbble search results and created my first design.

[<img width="320" src="http://whoisryannystrom.com/img/2013-10-15/1.jpg" alt="First Design Concept" />](http://whoisryannystrom.com/img/2013-10-15/1.jpg)

This first design uses iOS 7 style blurring with the background image. The information layout is pretty sparse though. Each hole only shows the hole number, par, and yardage for a single tee. Pretty weak use of space.

The spacing between each hole would allow for some fun, staggered animations. Maybe keep the blurred background and fade in the map of the hole? Its iOS 7 right? Animations to the dome.

One thing that I really took away from the first design is the hole number green with white inner border. Golfers should be familiar with [this style](http://cdn.firespring.com/images/6be767fc-d804-45d5-b4d3-aa4411785276.jpg) of signage.

[<img width="320" src="http://whoisryannystrom.com/img/2013-10-15/2.jpg" alt="Second Design Concept" />](http://whoisryannystrom.com/img/2013-10-15/2.jpg)

The second design iterates on the first by only adding a feint line connecting each hole. The line reinforces the order of each hole, mimicking the golf cart trail between each. The actual data that's displayed doesn't change from the first design.

[<img width="320" src="http://whoisryannystrom.com/img/2013-10-15/3.jpg" alt="Third Design Concept" />](http://whoisryannystrom.com/img/2013-10-15/3.jpg)

Nothing much to see here, just a layout rearrangement. The benefit is that there are more holes on the screen at a time.

[<img width="320" src="http://whoisryannystrom.com/img/2013-10-15/4.jpg" alt="Fourth Design Concept" />](http://whoisryannystrom.com/img/2013-10-15/4.jpg)

The fourth design is complete chaos. I got carried away with the idea that "more holes on the screen" = "better layout". I'm sure you can see how chaotic this screen is.

[<img width="320" src="http://whoisryannystrom.com/img/2013-10-15/5.jpg" alt="Final Design Concept" />](http://whoisryannystrom.com/img/2013-10-15/5.jpg)

The fifth and final design heads in a completely different direction than where I started. I decided to refocus my efforts, delete my "Dribbble Inspiration" folder, and think critically about the usage of this single view.

I realized that high-contrast was extremely important because golfers were very likely to be in direct sunlight trying to read on a glossy, finger-smudged screen. So, I got rid of the background blur.

- explain each iteration
- interactions & animations
- throw it all away and focus utility
- sunlight is a factor (high contrast, black on white)
- animations waste time, nothing to load/veil
- more information on screen in hierarchy (hole order matters)
- circle touches on course hole signs (color + border + typeface)
- include hole info that matters holistically (#, handicap, par)
- branding shows imagery but doesn't take too much space
- yardage is holistic info
- remember state of last viewed hole
- dribbblization of design hurts usability
	- focus on designing for utility, not just to be shiny