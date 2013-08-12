---
layout: post
title: "Testing Formats"
---

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <a href="#">Nulla vitae</a> elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante <em>venenatis</em> dapibus posuere velit aliquet.

<div class="extrawide">
{% highlight objc %}
NSNumber *searchKey = @(123456);
NSMutableArray *store = [NSMutableArray array];
for(int i = 0; i < 1000000; i++) {
    [store addObject:@(i)];
}

NSDate *start = [NSDate date];
NSPredicate *predicate = [NSPredicate predicateWithFormat:@"self = %@",searchKey];
NSNumber *r1 = [[store filteredArrayUsingPredicate:predicate] lastObject];
NSLog(@"Filtered search completed in %f",-[start timeIntervalSinceNow]);

start = [NSDate date];
NSInteger index = [store indexOfObjectPassingTest:^BOOL (NSNumber *num, NSUInteger idx, BOOL *stop) {
    return num == searchKey;
}];
r1 = store[index];
NSLog(@"Pass test search completed in %f",-[start timeIntervalSinceNow]);
{% endhighlight %}
</div>

<i>Cras justo odio</i>, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo.

Donec ullamcorper <em>nulla non metus</em> auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.

{% highlight objc %}
// SVProgressHUD.m
@interface SVProgressHUD()
// properties and methods here
@end
{% endhighlight %}

> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.

<div class="wide">
{% highlight objc %}
NSString *dateString = @"2012/12/04 15:20:00";
NSString *dateFormat = @"yyyy/MM/dd HH:mm:ss";
NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
formatter.dateFormat = dateFormat;
NSDate *date = [formatter dateFromString:dateString];

formatter.dateFormat = @"yyyy/MM/dd";

NSLog(@"%@",[formatter stringFromDate:date]);
{% endhighlight %}
</div>

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.