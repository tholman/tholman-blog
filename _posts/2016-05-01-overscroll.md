---
layout: default
title:  Overscroll
category: code
type: joke
---

*Every now and then you find some interesting browser quirks that catch your eye, they're always worth exploring!*

In this instance, I found that if you are tracking the scroll position with an event listener, when you try to scroll down, beyond the end of the page, or up, beyond the top of the page, you still get values coming back. Which means the browser is telling you, the scroll position is in those "overscroll" areas.

Once I found this out, it was a matter of wiring up some functionality to them. I went with a small easter egg.

![Ascii morph, transitioning images](./images/overscroll-1.png)

And on the top.

![Ascii morph, transitioning images](./images/overscroll-2.png)

**EDIT:** Looks like of chrome 51, this doesn't work... leaving us only with safari.

**EDIT 2:** Chrome 58 has brought this back, woo!

➶ [Overscroll site/demo](http://tholman.com/overscroll/)<br>
➶ [Overscroll source on GitHub](https://github.com/tholman/overscroll)