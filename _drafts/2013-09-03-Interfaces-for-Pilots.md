---
layout: post
title: Designing Interfaces for Pilots
---
We all know that classes in Objective-C are declared with ```@interface``` and defined with ```@implementation```. Most of the guides and tutorials out there frequently stuff all of a class's properties in the public interface. However I would like to propose a different mindset when designing your classes, even if you're the only person that will ever use them.

Some may know that I am a hobbyist private pilot. In my training  I had to learn a lot about how an airplane worked. There is a lot that goes into putting an object into the air. The physics of air flowing over a wing, the engineering of a Lycoming combustion engine, and or the electronics and wiring that make up the control and instrument systems. All of this was quite a bit to learn up front, but after I made it past the curve I was able to focus on the fun part: flying.

To me, learning about how to fly is just the same as learning the basics of Objective-C. There are a **lot** of intrinsic details that everyone should understand before going into the world and writing production-ready software. But again, after the curve, its all about the fun part.

A class declaration exposes details and controls about the class to either the application or the developer using your API. Imagine a basic cockpit: you have a yoke for controlling the pitch and roll, pedals to control the yaw, and instruments relaying information to the pilot such as altitude, airspeed, and heading. Just like a pilot uses the controls and instruments to fly a plane, a developer uses properties and methods to interact with a specific class.

Now I explained previously how there is a lot more to an airplane than a knobs and dials, but the pilot isn't as concerned about that. All they need is for the inputs to work in order to manipulate the aircraft. A class should be designed exactly the same way. Properties and methods should be exposed so that the user can get the output that they need.

Let's look at a real world example of some quality code that gives the user just enough control to display a progress HUD. Specifically we're going to examine [SVProgressHUD](LINK GOES HERE) by [Sam Vermette](LINK GOES HERE). I'm going to omit some of the extended methods for brevity's sake.

{% highlight objc %}
+ (void)show;
+ (void)showProgress:(CGFloat)progress;
+ (void)showSuccessWithStatus:(NSString*)string;
+ (void)showErrorWithStatus:(NSString *)string;
+ (void)showImage:(UIImage*)image status:(NSString*)status;
+ (void)dismiss;
+ (BOOL)isVisible;
{% endhighlight %}

Sam looked at the amount of code it took to initialize and display similar HUDs and decided that the same output could be achieved using simple class methods. The result is code that is easily used and understood:

{% highlight objc %}
[SVProgressHUD show];
{% endhighlight %}

This **one line** tells the user what class the HUD is coming from as well as what is happening. If you check out the [implementation of SVProgressHUD](LINK TO GITHUB) you can see there is quite a lot that is actually happening (775 lines worth as of 4/21/13).

You can use the implementation file to declare private properties and methods:

{% highlight objc %}
// SVProgressHUD.m
@interface SVProgressHUD()
// properties and methods here
@end
{% endhighlight %}

Similar to the way some aircraft instruments are for information only, keep some properties of your class ```readonly``` in the public interface and ```readwrite``` in the private interface. This helps communicate that the property is either for informational purposes or only its own properties are to be manipulated (though I would advise that if the property is *only* for information, make it a method with a return).

{% highlight objc %}
// MyView.h
@interface MyView
@property (nonatomic, strong, readonly) UILabel *titleLabel;
- (CGFloat)progress;
@end

// MyView.m
@interface MyView()
@property (nonatomic, strong, readwrite) UILabel *titleLabel;
@property (nonatomic) CGFloat progress;
@end
@implementation
- (CGFloat)progress {
	return _progress;
}
@end
{% endhighlight %}

Other inspiration for this type of design can be lifted right from Apple's own classes. Take a look at [UITableViewCell's header](FIND APPLE LINK) sometime.

My point is to design class interfaces that give other developers, including yourself, a clear understanding of what the class can do by making the nitty-gritty private. Just like when I'm flying an airplane, I write classes that give control to only what is necessary.