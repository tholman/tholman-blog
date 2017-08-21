---
layout: post
title:  Tetris Pieces
categories: code
---

*A couple of months ago, I did a little commission work for Electric Object, in the form of Abstract Clocks. While working on the clocks, I ended up creating a bunch of different proof of concepts and directions. This was one of them.*

The initial idea for "Tetris pieces" was to create a bunch of small video game demo's that would use AI to play on your wall, I had looked at snake, a brick breaker game and a maze solver. Ultimately, I found myself drawn to the different renderings of Tetris games, and got unable to move beyond them.

To begin the project, I began researching tetri's AI's, and immediately found one that was [absolutely perfect](https://codemyroad.wordpress.com/2013/04/14/tetris-ai-the-near-perfect-player/) built by a very talented developer, [Yiyuan Lee](https://codemyroad.wordpress.com/author/leeyiyuan/). 

You can read about how it works in the post linked above. Here's a little teaser though, its worth the read!

>To meet this goal, our AI will decide the best move for a given Tetris piece by trying out all the possible moves (rotation and position). It computes a score for each possible move (together with the lookahead piece), and selects the one with the best score as its next move.<br><br>The score for each move is computed by assessing the grid the move would result in. This assessment is based on four heuristics: aggregate height, complete lines, holes, and bumpiness, each of which the AI will try to either minimize or maximize.

From this point, I forked the code and set my mind to hacking how the pieces were drawn, so I could have multiple different looks and feels.