---
layout: post
title: "My Core Data Stack"
---

- FRC in background http://stackoverflow.com/questions/6898441/nsfetchedresultscontroller-performfetch-on-background-thread/7403484#7403484
- kugler on performance http://floriankugler.com/blog/2013/4/29/concurrent-core-data-stack-performance-shootout
- objc.io http://www.objc.io/issue-4/

- 1 MOC for all main thread stuff
- spawn worker MOC as private threads w/ main MOC as parent
- no merging w/ notifs or other weird stuff
- save & load from disk as little as possible