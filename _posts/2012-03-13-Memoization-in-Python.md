---
layout: post
title: "Memoization in Python"
---

I ran into a pretty interesting problem last week. I was working on an AI for my senior thesis (its an iOS game), and I wanted it done in python to be able to test it out on any machine before porting it over to Objective C (though it'll likely be done in C for speed reasons). The algorithm used a *lot* of recursion. I basically did the following:

* Find all possible states of the game
    * 13 dice, 5 possible rolls (one side was repeated twice) which yields 2380 combinations **for the first roll**
    * Gather the possible decisions from each roll (collect a certain face of die, remove from bag)
    * Find all possible states of remaining die
* When at an end state for a turn, return the collected points
* Average the number of points for each decision
    * The highest average is the *best* action to take

This entire process meant that I had to find the score for roughly 7 * 10^31 outcomes of the game. However, not all of these outcomes are unique. There are multiple ways to score 5 points. There are also multiple ways to roll 5 rays, 2 tanks, 0 cows, 2 chickens, and 0 humans. Using a raw computation of each state took about 1.5 minutes to find a solution when starting with 10-11 dice (13 dice took far too long for my level of patience). I needed to find a faster solution, especially since there are repeated states.

### Memoization

I needed to build a cache object in Python. The memory footprint wasn't going to be huge, even with 7 * 10^31 states. A lot of those states are repitions, and each state only needs to hold an integer value from the range 0 to 16 (16 is the maximum possible score for one turn). The solution I came up with is a form of Memoization. I created a dictionary and added keys and values based on the parameters of the function that I was recursing. The function looked like this:

{% highlight python %}
def getAvgPoints(num_remaining, tanks, rays, humans, chickens, cows ):
    if num_remaining == 0:
        if ( ... ):
            return 0
        else:
            return humans + chickens + cows + (3 if humans > 0 and chickens > 0 and cows > 0 else 0 )   
    ...
    // get all combinations
    // recursively get their scores, calling getAvgPoints( ... )
    ...
    return score
{% endhighlight %}

To cache these values and avoid repeated calculations, I added this to the beginning of the function:

{% highlight python %}
cache = {}
def getAvgPoints(num_remaining, tanks, rays, humans, chickens, cows ):
    key = '%s-%s-%s-%s-%s-%s' % (num_remaining, tanks, rays, humans, chickens, cows )
        if cache.get(key):
            return cache.get(key)
    ...
{% endhighlight %}

And that's it. Now, if I've already figured out the score for a certain number of remaining and collected dice, I skip all of the nitty-gritty and just return the score which saves tons of time. Time spent calculating went from about 1-1.5 minutes to **1-3 seconds**.

My professor, [Dr. Fred Annexstein](http://twitter.com/#!/proffreda), told me that this was a strategy called *Memoization*. After a bit of digging, I can confirm this is exactly what I did. Sure I didn't discover something new, but it does feel great having found the solution myself. The algorithm is fast, damn fast, for what is being computed.

Now how to implement all of this into a real-time game AI.