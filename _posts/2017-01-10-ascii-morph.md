---
layout: post
title:  Ascii Morph
category: code
type: serious
---

*While playing around with ASCII art, I explored animating one image to another.*

AsciiMorph is a small JS library designed to transition between two ascii images for an old website of mine.

![Ascii morph, transitioning images](/images/ascii-morph-1.gif)

The library counts the spaces around the "image" and then systematically collapses it from the outside inwards. 

Rather than just hiding the bordered ascii characters, they are replaced by a series of slashes and stars, which gives a general collapsing effect.

➶ [Ascii Morph on CodePen](https://codepen.io/tholman/full/BQLQyo)<br>
➶ [Ascii Morph on Github](https://github.com/tholman/ascii-morph)
