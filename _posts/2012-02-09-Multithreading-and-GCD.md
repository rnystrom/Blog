---
layout: post
title: Multithreading Beginners Tutorial
---

#### [See the original post here](http://www.raywenderlich.com/4295/multithreading-and-grand-central-dispatch-on-ios-for-beginners-tutorial)

After doing some serious job searching a few days ago (mainly in Silicon Valley... some day), I realized there are several techs that I need to brush up on. One of them that I've never thought of is multi-threading on iOS. I've used threading in C++ and Python for research and test scenarios, but I was always under the assumption that threading on iOS was a no-no.

Apparently I'm dead wrong. The Grand Central Dispatch is Apple's threading solution. It's fairly simple: seperate objects that will be used on the main thread and sub threads, define your thread queue, add objects to the queue, and then some fancy things in between and after.

The biggest advantage of threading on iOS is that you don't make your user wait for things to load. This is huge. Say you're crunching a *ton* of data, well your user will have to sit there and wait for the main thread to finish its processing. With multi-threading, you could load your view and in the background crunch your data, firing a delegate call when everything is all finished. Simple.

The only thing to be weary of is that you cannot use UIKit objects in threads, leave those to the main thread.
