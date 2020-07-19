---
layout: post
title:  Github Corners
category: code
type: serious
---

*My personal take on the "fork me on GitHub" banners.*

For a long time, I have used "fork me on GitHub" banners on my sites and projects, for the most part because these were regular go-to of most developers. I decided that I'd like to create something a little more modern and playful, and as such, this project was born.

Technically speaking this update isn't really too much of a reach, but is one of those projects where you can do a little to get a lot.

I moved GitHubs infamous [Octocat](https://octodex.github.com/) into the corner, as an SVG, and then seperated its arm in sketch, so I could add some CSS animations to it.

![The github corner in sketch](/images/github-corners-1.png)

The animation is added with CSS, which means people can use it if they like, but its not going to be mandatory. The animation is added by default on hover, which will allow it to wave.

```css
@keyframes octocat-wave {
  0% {
    transform: rotate(0deg);
  }
  
  20% {
    transform: rotate(-25deg);
  }
  
  40% {
    transform: rotate(10deg);
  }
  
  60% {
   transform: rotate(-25deg);
  }
  
  80% {
    transform: rotate(10deg);
  }
  
  100% {
    transform: rotate(0deg);
  }
}
```

There are a lot of other advantages to using SVG, over the "original" github ribbons, one of the biggest is that the colors are totally malliable, you can change a single CSS property and have it change, rather than having to pull out and change a whole image (with text).

From here, I built a little site to offer the code, which was made to deliberately show off some of the colors and options available.

![The github corner in sketch](/images/github-corners-2.png)

**EDIT:** There's some [great discussion](https://github.com/tholman/github-corners/issues/15) about how to use CSS blend modes, to blend the github corners seamlessly with any background, including those that are not a flat color. Given the future, when blend modes are deeply rooted in the web, or for people not too worried about much older browsers, this is already an awesome option!

**EDIT 2:** Some awesome people have made tools to build your own [custom corner](https://codepen.io/Rplus/pen/wKZOBo). Ultimately I've left this [GitHub issue](https://github.com/tholman/github-corners/issues/5) open, just incase I decide to build an "official" version.

**EDIT 3:** Honestly seeing these all over the web. Always makes me proud.

➶ [GitHub Corners web page (get them here!)](http://tholman.com/github-corners)<br>
➶ [GitHub Corners source on Github](https://github.com/tholman/github-corners)


