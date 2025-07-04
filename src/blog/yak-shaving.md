---
title: You Must First Invent The Universe
tags: 
    - coding
    - websites
    - tech
    - sysadmining
    - yakshaving
date: 2025-07-02 00:00:00.00 -7
---

When in doubt, start with Carl Sagan, and you probably won't go wrong. The full quote is,

> If you wish to make an apple pie from scratch, you must first invent the universe.

...want an apple pie, yet? Carl was talking about how there's not really any way to make something "from scratch", or all by yourself. And he's right, you could say, make a hand-made sweater, and that's from scratch, but someone or some machine spun that yarn. You could spin that yarn, but someone else sheared that sheep. You could raise and feed and sheer that sheep, but you are still depending on veterinarians, and the folks who made the building that shelters your animal, and grows the feed, and forges the shearers, etc etc etc. You get the idea. The world is a team sport, and always has been.

The concept of yak-shaving is kind of the opposite. Google tells me the story I heard is apocryphal, but I like it more, so that is what I'm going to tell you. (Plus, the actual origin is apparently Ren & Stimpy, and I have always disliked that show, so... here's my petty middle finger.) The story, then, goes like this: 

> Last week, my boss asked me to fix a bug in my software. I went to the office, and sat down at my desk, launched my IDE, and got working.I quickly noticed that the office was freezing cold, though. So I went to grab a sweater. But I realized I didn't have one in the office. So I decided to learn to knit, to make one. But I realized I didn't have any yarn to learn to knit, yet. So I found some clippers, and caught a plane to Tibet. My boss called me, at that point, and asked, "Rey, what are you up to, I thought you were going to fix that bug like I asked?" I turned on my camera, and showed him that I was, in fact, shaving a yak, so that I had fiber to make yarn to knit a sweater, so I wouldn't be cold so I could work on the bug he'd asked me to fix.

Obviously, this is ridiculous, but the idea of crafting to solve a tech bug always makes me happy. Yak shaving is when you try to achieve a goal, and end up miles away, trying to fulfill a dependency that's absurdly far away from your initial goal.

And thats been my last couple weeks. It all started when I got back from my kayak trip, and  wanted to share my pictures, and the story of my adventure. So I grabbed my laptop, and went to write up a markdown file of my story. However, the version of hugo - the site generating application I had been using in the past - was out of date, and wouldn't run on the OS my laptop was currently at. (Yes, it had been that long since I wrote a blog post. I have no excuse, here.) So, I went to update hugo (layer 1).

On my laptop, that wasn't too bad, download a new binary and on we go. But, past me had set up some automated deployment to get my contents out, and that depended on hugo running on our server. And it wasn't out of date there, but having my dev environment not match the deployment environment is just asking for pain, so I went to update hugo, there, too! (layer 2).

Hugo kindly informed me that it was as up to date as it could be, thank you very much, because the server (actually a virtual machine through a hosting company) was absurdly old. Ubuntu 18.04, which hit it's end of life May 31, 2023. So, I decided I needed to update my server's OS. (layer 3). 

An absurd amount of time and a ticket to support later, I had broken our current web server, learned that it was created as a 32 bit environment, and could _not_ be upgraded any further than 18.04. I would need to stand up a new server with an up to date OS. (layer 4).

So, there I was, most of a week in, trying to figure out how to restore a backup from an old and busted server, to a new and awesome one. Turns out, thats' Not A Thing. There's not as much of a real division between OS and user data in linux - you can put things wherever you want, and people do! So, my next move is to stand up a duplicate server with an up to date OS, and then copy everything I want/need to the new one, and update DNS. (layer 5). 

So, that's what I did. Kind of. I decided to just move _my_ site, and leave the rest of the purplellamas family where it is, so that I didn't break anything John was depending on. (Great marriage tip - don't fuck up your husband's email!!) So, I had an opportunity to make a change, and my friend Evan had been talking about eleventy, and I thought "ah, an opportunity to learn a new set of tools!" So, I decided to pick up a new thing to learn. (layer 6). 

But, before I could get going, I realized that I had skipped a step. I hadn't installed a web server! So my adventures in "reading tutorials and then following them with enough knowledge to know that they aren't asking me to delete everything" continued as I installed and configured nginx. Part of the tutorial advised opening holes in the firewall for the web server, good idea!! Part of doing that led me to realize that said firewall wasn't enabled, so being a good security minded human, I did that. I did not, however, open a hole for SSH beforehand. (Now's when you're welcome to point and laugh). (layer 7).

At this point, I finally began to unwind the stack. I fixed my firewall, I configured my web server, I redirected my DNS to my new server IP, on my new upgraded server, with a up to date new static site generator, and finally, FINALLY, I could post a blog post. Yesterday I pushed my first bit of content to the server, and was so relieved! The whole point being, please enjoy reading my words, it took work to get here! 

That yak is bald!!!

(I'll have a separate post about my adventures in eleventy vs hugo, it was a rougher transition than I initially expected, but that's going to wait. Wouldn't want to spoil you all, dear readers!) 
