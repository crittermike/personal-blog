---
templateKey: blog-post
title: Taco Bell Programming
date: 2016-10-14
description: How to turn a terrible accident into a learning opportunity.
tags:
  - development
  - tools
---

If you haven't read [Ted Dziuba](http://teddziuba.com/)'s [post on Taco Bell programming](http://teddziuba.com/2010/10/taco-bell-programming.html), go do that now. It's really a great post.

The gist is basically that we can and should be writing programs using the stuff that's been available for tens of years, stuff like bash and xargs and find, and that using the latest and greatest tool or language simply adds complexity and bugs. He compares it to Taco Bell, which uses "roughly eight ingredients" in random combinations to make the entire menu.

This was like a smack in the face to me, a person who always gets excited about trying the new hotness. One thing about it concerned me though - a lot of that stuff just isn't fun. Nobody wants to write stuff in bash, and there's a reason people use modern tools: they're often more fun and less annoying.

So I emailed him to ask him how he balances that. Here's my email:

> Hey Ted,
> 
> Feel free to ignore this question if you'd like. I'm sure you get a lot of emails from random devs, especially lately.
> 
> Straight to the point, just read your taco bell programming post and was intrigued by it, but it didn't mention anything about dev preferences or the dev experience. For example, writing something in bash (like Hubot for example) might take less code to do it in Python or CoffeeScript or whatever and it might be the more solid solution but most devs will go way out of their way to avoid having to write something non-trivial in bash.
> 
> So the question is, how do you find a balance between simplicity/tried-and-tested-tools (taco bell ingredients) and ease or enjoyment of development (using a more modern language/tool just because it's less annoying)?
> 
> Thanks. Big fan of your posts.

Here's his response. I wasn't planning on posting his response (if he even ended up responding) but it's such a great answer, I'd feel like a chump if I didn't share it.

> Hey Mike.
> 
> I know a lot of devs will go out of their way to avoid shell scripting, and generally using the tools already available to them by their operating system. I know, I used to be one of them.
> 
> I got into letting Unix do as much as it can for me by the advice of a systems administrator I hired, who really swayed me toward that culture, and after the first project I wrote on Unix principles, I immediately saw the value of it (this one piece of functionality was the most rock solid thing I have ever written, it's been running for 2 years now with zero maintenance).
> 
> On to your question. I guess it depends on what's easy for you to do as a developer. Learning a new language like Bash isn't something to take lightly. I still don't know enough of it to be dangerous, but I hack things together. Once you understand the Unix Way, the process becomes much easier. I'd recommend reading "The Art of Unix Programming" for some great insights.
> 
> Generally, you're never writing nontrivial code in Bash. You use a bash script to string together smaller utilities into something useful. All the real meat of execution happens in the programs your shell script calls. Nothing precludes you from writing bits of functionality in any language you want. One of the Unix Way principles is that "a program should do one thing, and do it well".
> 
> When I try to find the balance between Unix tools and custom tools, I ask 3 questions:
> 
> 1) What parts of this problem does the operating system solve for me?
> 
> 2) Of the parts that the OS can't solve, am I simply not aware of something my OS does that can solve the problem? (This happens a lot.)
> 
> 3) What's likely to be the most brittle part of the system?
> 
> I find that a lot of developers have gross misconceptions about how operating systems work, and will try to excuse themselves behind a veil of "scalability" or somesuch. For example, I had a good argument with a developer last week who was convinced that "starting processes was slow", so he was cooking up some threaded catastrophe.
> 
> Fact was, it's simply not true. Modern Linuxes can spawn processes very quickly, and actually use the same syscall to spawn a process that they do to spawn a thread (clone()).
> 
> At the end of the day, it's really something that comes with experience. With any system you write, V2 is always way better, because you're more aware of the things you don't know :-)