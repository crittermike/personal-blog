---
title: Contrib-Minded Development
date: 2016-05-06
tags:
  - development
  - drupal
---

It’s common practice for people who use open source software (including Drupalers, _ahem ahem_) to submit back to the community for the sake of the others building and using that software. It’s the right thing to do, it’s what open source is all about, and so on – you’ve heard that all before. But sometimes it’s hard to bite that particular bullet if you don’t see any personal value to you.

I’m here to tell you about how giving back to the community can actually help you directly, right now, with the real-life projects that you’re working on at this very moment.

## What are you even talking about?

Approach each problem already asking yourself, “How can I submit this to the open source community?” Or, in other words, “Which parts of this feature can be extracted to be useful to the open source community?”

This means splitting off your code in ways that you probably otherwise wouldn’t. Your modules need to have a single purpose, and they need to be reusable for other projects. You can’t have a lot of hard dependencies floating around everywhere. You have to sit down and think about how to split up Giant Feature X into as many flexible and useful pieces as possible. Try to keep extremely project-specific features to a minimum.

Why should you do this? Well, I’m here to tell you why.

### We get by with a little help from our (millions of) friends

On a typical **client** project, you may be working with a few other developers, and hopefully you have some structured method of code review. Maybe anyone can merge anyone else’s code, and maybe there are requirements that the person doing the review has to actually test it, etc. Good job! That’s great, but it could be better. You’re only getting the eyes of 2 or 3 people on your code, after all.

On a typical **open source** project, every piece of code you push to Drupal.org or Github or wherever has the potential for any number of people to come across it, review it, use it, debug it, improve it, find security issues with it, work out performance fixes for it, and so on. You’re getting a heck of a lot more than 2 or 3 people looking at your code, even if you happen to publish something obscure or hard to find.

They are using your code in ways that you may not have thought about when you were writing it. The code you wrote to solve one specific use case can probably solve a heck of a lot of other use cases as well, and when people use it for those, they’ll find ways to make new improvements. Or they’ll find bugs that you haven’t come across yet. Or they’ll test the performance limits in ways that you wouldn’t (until someone famous tweets about your site).

These are your friends. They are helping you for free, without being asked. Imagine the glory that can come of you using them to your advantage. Think of showing up to work and telling a client that a specific feature is 50% faster now, and all it took was a 30 minute review of a pull request from someone in Utah.

### Maintenance happens by default

On a typical client project, you build the feature and you deploy it. After that, you probably only touch that code if someone finds a bug, or if you have to alter it in some way for new functionality you’re building elsewhere.

On a typical open source project, people are constantly poking and prodding at your code. You might get a pull request on some code you wrote 6 months ago that makes it more readable, just for the sake of it being more readable. You could get one a year later that adds comments. You’re getting free maintenance updates on code that you wrote in the past, which most likely wouldn’t be touched again unless it had to be.

Over time, you can improve the general code quality of your project a lot without having to really do much besides review, test, and merge the pull requests/patches.

### Code like everyone’s watching

Don’t pretend that the code you submit to a client project is as pristine as the code you submit to open source projects. I don’t believe it. For most people, code submitted to an open source project is perfectly commented, all of the variable names thoughtfully considered, functions smaller and more re-usable, and generally just be prettier.

With that in mind, if a feature you’re working on is going to end up being open sourced, then you’re more likely to code like everyone is watching. That means you end up with a better product at the end of the day. It’s more maintainable, it’s more readable, and it’s just better. This should always be the goal.

### Robustness and flexibility are suddenly must-haves

Writing code that you intend to be useful for other people on other projects forces you to make your code as reusable and flexible as possible. Suddenly you’re focused on how to best split things up to solve specific problems in a clean, self-contained way.

This is software engineering 101, but it often gets missed in the day-to-day grind. Have you ever written a Drupal module that does 20 things, all of which are related to a specific feature, but otherwise have nothing in common with each other? And then a month later you realize that one of those 20 things would actually be useful for this new feature over here? If only you had been coding that for contrib and created separate utilities for each of those things. The regret!

## Why not?

### It takes more time/effort/budget/whatever to get things contrib-ready

That’s true, but it often saves more time than it costs in the long run. Think of it this way: the reason it takes more time is just because you’re forced to do things right instead of taking shortcuts.

### Maintaining an open source project is hard work

I get that, and I know we’re all busy people. But keep in mind that something is better than nothing. If you don’t have the time to respond to every issue and pull request and question, then just publish the code and leave a note that you’re looking for a co-maintainer (and/or you’re not actively maintaining it). That way people can still use and improve your code, and you have less responsibility to set aside a bunch of time to keep up with it.

### Some things just aren’t useful for other people

Of course, not 100% of the code you write for your projects would be useful for others. That’s ok. Split off the pieces that could be useful elsewhere, and keep the super-duper-project-specific-and-obscure stuff isolated. That way, you can open source the useful stuff.

Also, don’t underestimate the usefulness of your code. If you’re writing something and you’re thinking, “Well, I guess theoretically someone somewhere may find this useful, but it’s highly unlikely because this is pretty out there,” just publish it anyway. You may be surprised. And even if nobody ever touches it, then you still get all the benefits that came from you prepping it for open-source readiness.

### Some clients won’t allow you to open source their code

Yeah, I hear you. In cases like that, you’re kind of stuck. But did you talk to the client about it? And if they were uneasy about it, did you explain _why_ it could be a good idea? I think the whole _let’s drop all your code online so that everyone can see it!_ thing sounds really scary for clients, especially non-technical ones, but if you put it in terms that are meaningful to them, they may come around.

### Public code can lead to security concerns

This is true, but keep in mind that the vast majority of the open source community will, upon finding a security bug, report it responsibly. That isn’t necessarily true for the type of people who are crawling around the internet searching for security issues on live sites. I would make a case that this is more of a pro than a con. The community can catch your security issues before they’re exploited. If you don’t open source it, it’s just going to keep sitting there in production, waiting to be exploited.

What concerns do you have? Let us know in the comments!
