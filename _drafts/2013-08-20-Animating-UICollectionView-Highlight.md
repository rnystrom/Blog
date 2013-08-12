---
layout: post
title: Animating Highlight with UICollectionView
---
On a recent app at [Dynamit](http://dynamit.us), [Mike Waclo](TWITTER LINK) suggested we create a subtle scale animation as visual feedback on cell selection.

UITableViews even have a blue selection animation by default. One would think that with the boilerplate code [improvements](CREATE CELL CODE) that UICollectionView has over UITableView, that selection indication would be a no-brainer. 

It turned out to be more difficult than I had hoped.

I ended up spending a good couple hours playing with different code and sifting Stack Overflow for answers. It turns out there is no default animation. Furthermore, when a UICollectionViewCell is selected, UICollectionView freezes state changes with the layout and views.

UICollectionView has unfortunately named methods and poor documentation. It seemed the obvious to override ```-collectionView:didHighlight:``` and ```-collectionView:didUnhighlight:``` to invoke animations, but that turned up fruitless.

After a while of playing guess and check I found out that the best time to fire any animations are when UICollectionViewCell changes the value of its ```highlighted``` property. To do this you override the ```-setHighlighted:``` method of your UICollectionViewCell subclass.

Here is an example of a simple animation for highlighting a UICollectionViewCell.

{% highlight objc %}
- (void)setHighlighted:(BOOL)highlighted {
    [super setHighlighted:highlighted];
    if (highlighted != self.highlighted) {
        CGFloat alpha = 1.f;
        if (highlighted) {
            alpha = 0.5f;
        }
        [UIView animateWithDuration:0.25 animations:^{
            self.alpha = alpha;
        }];
    }
}
{% endhighlight %}