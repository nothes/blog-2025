---
title: Eleventy For This Beginner
tags: 
    - coding
    - websites
    - tech
    - static site generators
    - eleventy
date: 2025-07-03 00:00:00.00 -7
---

Ok, I know I said most of my writing wouldn't be tech stuff, but that's what I'm up to right now, so there we go. Maybe this weekend I'll show off all the work I've been doing outside, after I'm done beating back the weeds. In the meantime, though...

Yesterday I talked about the silly long chain of tasks I ended up doing to get vacation pictures on the web. Today is more about how I've found this new toolchain, compared to the last one. I guess I should preface this with my background, so that it's a little more clear where I'm coming from. I graduated with a BS in Computer Science in 2005. I learned HTML & CSS & Javascript in school. Aaaaaaand... basically never touched it again. Fast forward to, I dunno, 2015 or 16? My brain was _doing things_ and I needed to write it out, so I did some research, and installed hugo. And it was good. I was quickly charmed by how I could write little markdown files and magically they'd turn into beautiful professional-looking pages! I spent some time waffling over a theme, as one does, and in the end was pretty happy with where I ended up.

Life got busy, I stopped writing, there was a global pandemic, I got therapy and a new antidepressant, and here we are 7 years after my last post, and I was ready to start back up! My HTML/CSS knowledge is mostly 20 years old, and was never terribly good in the first place, I just let the theme do all of that! It was _Close Enough_. So, that's where I was at, when I picked up eleventy.

So, biggest conclusions, first: it's very powerful, and very customizable, and I got up and going pretty quick. Yay! But it took a lot more knowledge and doc-reading (I have so many tabs open to documentation sites, guys, so. many. tabs.) to get there. I'm lucky I've got 20+ years of sifting through tech docs to get the info that I need, AND someone else overjoyed to answer questions. (I love a good enabler, thank you, Evan!!!) It's going to be more work to get to a polished professional-looking site, if I decide I want to bother. Right now, though, I've got a fresh up-to-date server, with a firewall, and a web server that is serving content over https like any other modern website, and I'm okay with resting on my laurels for the moment.

The lack of themes [like hugo has](https://themes.gohugo.io) was actually kind of shocking. I... I had to think for myself about what I wanted my website hierarchy to look like, and what features I wanted (tag collections? an about page? a list of my favorite egg corns and typos?), and what it all should _look like_?! I hadn't thought about that stuff in decades! What even does a website look like, these days??? 

But I am a stubborn soul (yes, John, I _know_it, that just doesn't _stop_ it!), and I had already told myself I was going to learn the new thing, so I was committed! So, I started reading tutorials. I started with the [tiniest tutorial possible](https://sia.codes/posts/itsiest-bitsiest-eleventy-tutorial/) (thank you, Sia, it's awesome!), and that got me some of the very basic configuration and layouts going. Some of it, like a YAML front matter block that told the SSG some details to help it make the HTML for me, was very familiar. Some of it (LOOKING AT YOU, NUNJUCKS, JUST... WHY??? MUSTACHE?!?! Who names these things?!), was very much less so. A lot of it reminded me of writing php to customize a phpbb instance back in college. Using little JSON snippets instead of a whole database is pretty freeing, I must say! (Depending on your relative age, you're currently thinking "oh, how cute,", or "oh, how archaic,", at this moment. Thus aging along with tech, everyone is either horribly archaic or amazingly bleeding edge, or Just Right, which is exactly where you are/were.) 

Thankfully, my wonderful enabler, Evan, was quick to direct me to do some things I otherwise wouldn't have realized I needed to. Install a stable version of eleventy so I wouldn't be surprised by updates changing things out from under me, answering questions like "why won't it work???", and guiding me towards standards like ESM and Liquid as a layout format.

Two particularly comical problems/points of confusion for you all to giggle at. You probably know that Apple recently announced it's new OS'es and features for the year, and talk of liquid glass is everywhere. So it's not _too_ shocking that instead of naming my layouts as .liquid files, I named them .glass files. the error you get when you do that is... well, lets say it was opaque. 

```
*[main][~/Sites/blog]$ npx @11ty/eleventy --serve
[11ty] Problem writing Eleventy templates:
[11ty] Cannot read properties of undefined (reading 'aliasKey') (via TypeError)
```

What. What alias key? What are you _on_ about, eleventy??? I eventually put it together by searching "alias" on the eleventy site & finding that you can alias layout files to other names, and since my layout file wasn't one of the known file type extensions it knew, it was looking for it to be an alias to something that _was_, but it couldn't find it. Oops!

The second one was looking up liquid formatting. Sample code all over eleventy's site is in multiple different template languages, and very clear - great job, people! - so I knew that there was a 'for' loop in liquid. Off I went to the [liquidJS site](https://liquidjs.com/index.html), and looked for the documentation link I was sure was somewhere close. "Ah, API, that must be what I need!" and, indeed, there was a link to [ForTag](https://liquidjs.com/api/classes/ForTag.html) pretty obviously there in the sidebar. But the contents of that doc looked _nothing_ like the rest of the syntax I'd seen in example code. Something was very wrong. I asked Evan why the hell this documentation was so poorly written, and he was clearly amused/dismayed as he pointed me toward [the docs for _using_ it](https://liquidjs.com/tags/for.html), as opposed to developing _for_ it. Now that I have a bit more vocabulary under my belt, I see where I went wrong, but geeze, guys, it says _API_, what was I _supposed_ to think?!

edit: Evan would like to clarify that he was neither amused nor dismayed (admit it, sir, you laughed, I know I did!). He says "I was sympathetic, having made that same mistake in the nunjucks docs more than once 😆", so there ya go, record corrected! :P

Evan is quite good about leaving me make my own mistakes and come ask questions, but he did slip me this [brilliantly written blog article](https://benmyers.dev/blog/eleventy-data-cascade/) by Ben Myers, that in the act of explaining the data cascade - arguably one of the most awesome features of eleventy! - gave a couple short and clear examples that really helped me build something that will be easy to maintain and update, as time goes on. Thanks, again, Ben! :wave:

Most everything else I've done has been relatively straightforward, but it's always fought back, just a bit. Part of me says that I should go back to hugo and never have to think about HTML again. The rest of me is kind of enjoying something just pretty enough to be useable without all that... modernity, that most sites seem to have. It's just grey, with some words in the middle. I kind of like that. Sometimes that's me, too. Just grey, with some words in the middle. :) 

I'm still struggling over when to use filters, shortcodes, or nested Liquid files to do what I want, and where the data cascade is accessable from. If I have a dictionary of data in the global data, why can't I use it in a snippet of html generated in a liquid file that's included in other templates? And what's the "right" way to create and use little reusable chunks? It'll come, I'm sure, but for now, still a bit confusing.

My next (and maybe last?) item on my website to-do list, is to figure out how to get pagination working for my index page. I got it generating [tag pages](https://nothe.purplellamas.net/tags/) almost on accident and apparently not quite correctly, but the more basic case - I'd like my posts to show in a list and if there's too many, to have a next/prev button - currently eludes me. It's not too urgent, though, I've got four whole posts, and probably 10 readers, max. I'm not too worried. I've got an RSS (er, atom) feed, I've got posts up, I'm pretty pleased with myself. I won the "can I do that?" challenge!

So, takeaways: If you want to get up and running, with a pretty standard layout, and just want to plug your content in and go? I would recommend hugo. Do you want your site to be lovingly hand-crafted, with lots of cool and flexible tools to make it just the way you want? Do you have some obscure hierarchy you want, or know _just_ the perfect css and design elements to make it just the way you want? You're probably already familiar with some of this tech stack, and eleventy may Just Work, for you! For me, I'm using the tool that isn't what I would suggest to myself from the outside, but, whelp... stubborn. 






















