---
layout: post
title:  Passive Aggressive Office Simulator
category: code
type: joke
---

*"Remember everybody, the crisper is for green vegetables only, anything else found in it will be thrown out at the end of the day." ~ Passive aggressive post-it note.*

One of the funnier things I found from office life was the small messages that would blast out to the whole company "There's a fire drill tomorrow.", "The coffee machine on the first floor is broken" etc. Now that I'm working remotely, in a weird way, I miss them. As such, the passive agressive office simulator Slackbot was born.

![Welcome to office simulator!](/images/office-simulator-1.png)

The core of this slackbot is the npm module, [slackbots](https://github.com/mishk0/slack-bot-api), which honestly made the whole process a breeze. The bot itself is broken into a few key pieces.

The first piece, is the scheduler, which will take specific actions (namely sending a passive aggressive message), and give it a time to be shared with everyone. These are generally within work hours.

The second piece is a "ticker", which keeps the script checking the time, and seeing if there is anything that needs to be ran.

The final piece, is of course, the messages themselves. They were all hand written by me, and also include wildcard variants... so something like the day of the week, or a piece of stationary (please put the stapler back where you found it!) could be switched out, to add a small extra dimension of randomness.

![Really keeping it passive](/images/office-simulator-2.png)

Another little piece, which I felt gave it that little bit of extra "officey" cringe, was follow up messages. If your office is out of ink, you'll be sure to get another message when it gets back in!

![Oh no, we're out of ink](/images/office-simulator-3.png)

... 5 days later

![Phew, we have ink again.](/images/office-simulator-4.png)

Building a slackbot was a fun way to spend a day or two, honestly, the amount of articles and support docs out there makes it one of those technical, yet quickly rewarding projects!

➶ [Office Simulator source and installation instructions](https://github.com/tholman/office-simulator)



