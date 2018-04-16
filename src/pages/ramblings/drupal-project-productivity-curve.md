---
templateKey: blog-post
title: Drupal's Productivity Curve
date: 2017-01-17
description: Yet another way Drupal stands alone, for better or worse.
tags:
  - development
  - drupal
---

There are a lot of things that make Drupal projects unique from your typical software development projects, but one of the most interesting to me is the productivity curve.

Specifically, Drupal projects tend to have lots of visible progress at the start and then things slow down considerably. In contrast, many (most?) non-Drupal projects are the opposite - they have little to show at the beginning but things are being cranked out really quickly closer to the end.

Here's a very technical graph to illustrate:

![Drupal project productivity curve graph](https://dl.airtable.com/9cRA94n2RCyhdpkzZkhN_full_drupal_productivity.png)

A typical Drupal project
------------------------

Drupal projects make the first 80% pretty easy and the last 20% really freaking hard, which is the exact opposite of many other common frameworks or technologies. Let's look at an example.

You're building a community site for shoelace enthusiasts. It contains a forum, a blog with commenting, some basic page content, media upload and browsing, photo albums, whatever. All the normal stuff that you see a lot.

The interesting thing here is that Drupal allows you to build simple versions of all of that stuff really quickly in the GUI without having to do any real "work" (i.e., programming). You can have a working (for some definition of that word) site up in a matter of days or a couple weeks at most that satisfies the high level requirements.

But of course, that's not good enough. We just have a bunch of generated markup dumped onto pages, which looks horrible and is nowhere near the mockups. We need theming, and we have a boat load of tweaks to make to functionality. This field needs to be split into two columns. That sidebar needs to only appear on pages that match a specific URL pattern. The blog needs to allow for customizing the sort order of the first 5 items. We need an extra wrapper div around a specific field so that our stupid 3rd party JS lib can find it. We need to add a custom exposed filter that Views doesn't support out of the box. We have to change the available values for a select list but Drupal is complaining that that field already has data. Drupal makes all of these things difficult because it has to, by nature of what Drupal is.

What we basically had after those first couple weeks is a prototype. Drupal is in a world of its own (in a good way) when it comes to prototyping CRUD. It's all the stuff that comes in the conversion from the prototype to the real, living-and-breathing, hard-to-break-by-even-the-dumbest-of-users, looks-like-something-not-designed-by-a-programmer, website. Altering markup is tough (yes, even if you're just overriding a template). Theming in general is tough. Making little tweaks to functionality or behavior is tough. Drupal is just opinionated to the point that stuff that would be easy in non-Drupal sites becomes a pain. And again, that's not a bad thing. It's just a natural result of what makes Drupal Drupal.

A Typical Non-Drupal Project
----------------------------

(First of all, this is pretty wishy washy because "Non-Drupal" can mean anything from Dreamweaver generated to whatever the latest Rails release is now. So bear with me and keep an open mind for now.)

Remember when I said Drupal makes the first 80% really easy and the last 20% really hard? Well, you must know what's coming next then. 

_In general, non-Drupal projects tend to make the first 80% tougher than Drupal, but the last 20% is drastically easier._

It takes a while to create your DB structure, models or data structure, admin forms with things like WYSIWYG and image cropping, user authentication and permissions, content detail pages and listings, user facing forms, user registration and password reminders, comments on content items with threading, etc. All of that stuff can be a big pain, and there's drastically more manual work involved than with Drupal.

But once you have that done, and you've reached the "working" site stage mentioned in the previous section, the rest is really easy. It's easy to split something into 2 columns when you wrote the markup in the first place. It's easy to alter behavior that you yourself defined in code. It's easy to decide when and where a sidebar should appear when you are the one that told it where/how to appear in the first place, in code.

Theming is quicker. Tweaks are quicker. Moving this thing into the footer and that thing into the sidebar is quicker. All of the types of things that tend to make up the last 20% of the project are just much easier to do than if you were using Drupal

Why the difference?
-------------------

Why are the 80% vs. 20% times so different between Drupal and non-Drupal projects? I think it comes down to one thing: who wrote the code.

One of the main draws of Drupal is that you can accomplish so much without having to write a line of code. This means that a lot of your functionality is powered by code that someone else wrote.

Not writing that code means that it's tougher for you to change things when needed, for two reasons:

1.  You just aren't as familiar with it. It takes you a while to understand what the original writers were doing, how they were doing it, and what the best way to make your change will be. The bigger the module that you're altering, the tougher this tends to be, and that's unfortunate because most of the really common modules (i.e., the ones that most commonly need to have their behavior altered) are pretty huge. 
2.  You can't just go edit the file wherever it exists in core or contrib, like you could if it was custom code. Hacking contrib or core is a big no-no in Drupal-land so you have to spend your time in alter hooks, preprocess functions, overridden templates, or patches. There's nothing quite like spending hours trying to find a hook that would work or a template that you could override (and with what naming convention?!) just to add a stupid wrapper div to a stupid thing you need to wrap, which would take 2 minutes if you wrote the template to begin with.

So that's the difference. That's why the first 80% is easier with Drupal (because you're able to stick to the pre-written code) and the last 20% is harder (because you've having to extend/alter/theme the pre-written code). 

So what?
--------

Why does it matter? Slow start and fast finish vs. fast start and slow finish, who cares as long as it all gets done eventually and in about the same amount of time?

Well, clients care. You know how we're supposed to be under-promising and over-delivering? Using a fast start/slow finish approach makes this kind of tricky. Stakeholders often don't see "percent complete" in terms of hours spent vs. the budget, or time left until the deadline, or any of those actual numeric factors.

Instead, it often ends up just being a "feel" thing. Wow, the site already works, we're really moving fast! I think we may beat the deadline! It "feels" like we've gotten a lot done! We already can add/edit/delete content with all of these fields, and it all appears on the site, and it's only been 3 weeks! All that's left is the tweaking!

You see where I'm going with this? If you show that much visible progress to a not-super-technical client in the first few weeks, then they can expect that much visible progress on a regular basis. It's a bit disheartening as a client to see so much progress in a few weeks, and then only little bits at a time for the next few months.

Well, what's the answer?
------------------------

Yeah yeah, everything sucks, but what can we do about it? Sadly, I don't think there is a silver bullet.

One thing that can help is to make more of a focus on feature-based scheduling. If you're starting the project by having everyone lay the foundation (fields, content types, listing pages, etc.) for _all_ of the features, then iterating on top of that by theming _all_ of the features, then you run into the problems described above. That's no good.

But if you get everyone working on the _same_ feature (or 2 or 3 features if you have a really big team), and push it through from start to finish before moving onto the next thing, then that at least gets you to "complete" with a specific thing more quickly than if you sort of built them all out at once.

But that's not exactly a revolutionary idea. We've all heard of sprints and MVPs and iterative development, which is why I certainly wouldn't call that approach a silver bullet; it's more like a best practice at this point.

Other than that, I think it's just important that clients are made aware and expectations are set. Make sure they know that they'll see lots of changes at first and then the visible changes will slow down because that's just the way Drupal is. And work really really hard to find places where you can show them complete features, or even better, hand them off so that the clients can play with them in a client-facing dev environment somewhere.

Am I saying that this is a reason to avoid Drupal? Absolutely not. I think Drupal is awesome, and the amount of work you can get done without coding has many pros which far outweigh the one con mentioned in this post. I'm just saying that this is a caveat to keep in mind, and plan ahead for, and explain to clients ahead of time.