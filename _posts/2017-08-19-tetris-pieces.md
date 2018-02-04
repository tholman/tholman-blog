---
layout: post
title:  Tetris Pieces
category: code
type: serious
---

*A couple of months ago, I did a little commission work for Electric Object, in the form of Abstract Clocks. While working on the clocks, I ended up creating a bunch of different proof of concepts and directions. This was one of them.*

The initial idea for "[Tetris pieces](http://tholman.com/tetris-pieces)" was to create a bunch of small video game demo's that would use AI to play on your wall, I had looked at snake, a brick breaker game and a maze solver. Ultimately, I found myself drawn to the different renderings of Tetris games. It was so mezmerizing watching tetris play out automatically on the Electric Object, I had to stick with it.

To begin the project, I began researching tetri's AI's, and immediately found one that was [absolutely perfect](https://codemyroad.wordpress.com/2013/04/14/tetris-ai-the-near-perfect-player/) built by a very talented developer, [Yiyuan Lee](https://codemyroad.wordpress.com/author/leeyiyuan/). 

You can read about how the AI works in the post linked above. Here's a snippet about how the AI decides where to put each piece. Its definitely worth the read!

>To meet this goal, our AI will decide the best move for a given Tetris piece by trying out all the possible moves (rotation and position). It computes a score for each possible move (together with the lookahead piece), and selects the one with the best score as its next move.<br><br>The score for each move is computed by assessing the grid the move would result in. This assessment is based on four heuristics: aggregate height, complete lines, holes, and bumpiness, each of which the AI will try to either minimize or maximize.

From this point, I forked the code and set my mind to hacking how the pieces were drawn, so I could have multiple different looks and feels.

![Tetris Pieces, on display.]({{site.url}}/images/tetris-pieces-1.png)

These are, from left to right. 

1: Ambient Blocks, in this version the tiles take up solid block colors. As the game goes on, the hue of these colors rotates very slowly, meaning whenever you look at the wall you should see slightly different colors. This playful touch made it my personal favorite.

2: Classic Tetris, in this specific rendering I've copied the colors and patterns from the original GameBoy game, including that ever present green tinge.

3: Colored Classic, using the colors of the tetris game that appeared on Super Nintendo, the colored tiles perhaps look the nicest on the screen, and definitely bring back some nostalgic feelings!

All in all, the project was definitely a good experience. When you have to plow into someone elses code, with no background its funny what you can learn. Finding and editing the code that renders the tetris pieces to the canvas was a little tricky, but ultimately very rewarding.

➶ [Tetris Pieces in Action](http://tholman.com/tetris-pieces)<br>
➶ [Tetris Pieces source on Github](https://github.com/tholman/tetris-pieces)<br>
➶ [Tetris Pieces on Electric Object](http://tholman.com/tetris-pieces)
