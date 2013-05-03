---
layout: post
title: "Avoiding Circular Reference"
---

This is just a collection of tips and tricks that I've learned in the past year on how to properly strucutre your files, classes, and protocols to avoid any circular reference errors/warnings. These errors are usually LLVM compiler warnings where the compiler gets mixed up due to circular <code>#import</code> references. It's pretty easy to avoid but can be a tremendous headache to debug.

