---
layout: post
title: "Reducing the size of your IPA"
---

    @property (nonatomic, strong) RACReplaySubject *searchBarReplaySubject;
    
    //...
    
    self.searchBarReplaySubject = [RACReplaySubject subject];
    [[[self.searchBarReplaySubject filter:^BOOL (NSString *text) {
        return [text length] > 2;
    }]
      throttle:0.5]
     subscribeNext:^(NSString *text) {
         DDLogInfo(text);
     }];
     
     // ...
     
     - (void)searchBar:(UISearchBar *)searchBar textDidChange:(NSString *)searchText {
        [self.searchBarReplaySubject sendNext:searchText];
    }