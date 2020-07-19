---
layout: post
title:  Blue Screen of Death
category: code
type: joke
---

*In light of how amazing web development tools have become, last week I got to thinking, what could I do to make development much much harder.*

`BlueScreenOfDeath.js` is a small script you can add to your webpage, that will catch any error that its thrown, and more or less, make it impossible for you to debug what was wrong.

When the error is caught, the script strips the page of any elements it may have had (so we're down to just an empty `body` tag). It will replace it with the classic Blue Screen of Death style.

It will also spam the crap out of your web console, effectively making it impossible to see what the error was in the first place.

![Blue screen of death](/images/blue-screen-of-death-1.png)

And then, naturally, I couldn't help myself but create a "bleu" version.

![Bleu screen of death](/images/blue-screen-of-death-2.png)

**EDIT:** I also ended up using this for my [404 page](http://tholman.com/404).

➶ [Blue Screen of Death](http://tholman.com/blue-screen-of-death/)<br>
➶ [Blue Screen of Death on Github](https://github.com/tholman/bsod.js)