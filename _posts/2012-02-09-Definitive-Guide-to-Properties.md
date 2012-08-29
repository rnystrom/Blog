---
layout: post
title: Definitive Guide To Properties
---

#### [See the original post here](http://www.iphonedevsdk.com/forum/iphone-sdk-tutorials/26587-slicks-definitive-guide-properties.html)

So apparently I was fairly off on using @properties in iOS. I've been primarily using @properties for *public* objects (ie. properties used by other objects). However, in Objective-C 2.0, @properties used alongside with @synthesize yields accessors (getters and setters) that also reference count.

Take a peak at the article. I've studied it and revised my code using most of these standards. I'm fine with tons of lines of code, brevity isn't a concern to me (shouldn't be a concern with *any* iOS developer).