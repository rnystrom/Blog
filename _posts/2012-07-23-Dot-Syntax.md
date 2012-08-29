---
layout: post
title: Dot Syntax
---

I can't say I totally agree with this. The post by [Bret Simmons](http://inessential.com/) is well written and brings up some good points. However, I tend to feel that dot-syntax in Objective-C was introduced merely to appease the masses who found bracket-syntax unappealing. Dot-syntax doesn't actually offer your writing anything new aside from a *different* way to do things. It doesn't compile faster (actually, it may even compile *slower* because it is an added feature).

That being said, I have my own quarrels with dot syntax. Sometimes I use it to break up the day and make my code look a little more interesting. However I refuse to set any property with dot syntax.

    self.property = newValue;

Just say no to this. Maybe getting a property with dot-syntax can be allowed.

    self setProperty:newValue;

Much better.