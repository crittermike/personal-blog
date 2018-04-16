---
templateKey: blog-post
title: Drupal and "Invented Here"
date: 2013-06-04
description: There's a module for that!
tags:
  - process
  - leadership
---

We’ve all heard the term [Not Invented Here (NIH)](http://en.wikipedia.org/wiki/Not_invented_here) thrown around. It refers to a phobia of using technologies that weren’t developed in-house. What some of us might be a little less familiar with is its opposite, [Invented Here (IH)](http://en.wikipedia.org/wiki/Invented_here), which occurs when people are uncomfortable innovating in-house or developing anything for themselves.

IH is a huge problem in the Drupal world.

### Why Drupal specifically?

Drupal spreads IH just because Drupal can do so much with so little code (see more about this in my [Golden Handcuffs post](http://mikecr.it/ramblings/drupals-golden-handcuffs)). Need a customized listing of content with filters? Use Views with exposed filters in the GUI! Need a custom page build with blocks and menus and random crap in a specific layout? Use Panels' page builder in the GUI! The list goes on.

So people see all of these cool things you can do without coding anything yourself, and they hear things like "there's a module for that!" constantly, and they start thinking in terms of contrib instead of in terms of code. The go-to mindset of a lot of Drupal developers, when presented with a problem, is "what combination of contrib modules could do this for me?" instead of "what's the best way to make this, whether it uses contrib or not?"

### Why is this bad?

This mindset is harmful because it removes "what is the cleanest/best way to do this" from the list of questions that developers ask, leading to kludged together solutions within a bunch of unnecessary contrib modules that do a lot of stuff you don't want or need.

Let's take a specific example. Say that you need to display a listing of nodes in three columns and you need to add a taxonomy term filter at the top. That's simple enough using a Views with a grid format and an exposed filter for the term reference field. Now say that the filter needs to be checkboxes instead of a select dropdown, but to prevent a wall of checkboxes showing up you have to limit it only to taxonomy terms which have their own "Featured?" checkbox field checked. So you add a new exposed filter and add the Better Exposed Filters module to output it as checkboxes. Then you try to add a relationship to the taxonomy term to add a filter for the Featured field but the client complains that that also filters the nodes returned which is wrong. So you'll have to undo that and dive into the Views API and hook into the exposed filters and make that happen. And then the client comes back and says that she wants the number of columns to change depending on how many results there are. So now you'll either have to override a template or hook into the view rendering and change the number of columns setting on the fly based on the number of results. This is the part where you quit your dreams of web development and go to clown college or apply at Subway. And you haven't even seen what was coming up in the next phase.

So you started with an accepted contrib module and added more and more crap on top of it until it became a big unmaintainable mess. We've all been in situations like this where a contrib module works except for this one thing or that other thing that you have to override or hack or add another module for, and you end up with a solution that you're not proud of and that you dread having to maintain, all because it seemed easiest to start with contrib.

### What's the alternative?

It's simple, code it yourself. In the example above, make a custom menu callback that runs an EFQ for the nodes and spits them out in a custom template, and build your own form to do the filtering. It's no more work than a couple hours, probably less time than you would have spent screwing around in the Views API trying to get it to obey you, and you get a solution that you have full control over and that you don't have to be embarrassed by.

Another classic example is breadcrumbs. You can either dig into one of the many breadcrumbs modules (Hansel, Custom Breadcrumbs, Menu Breadcrumb, Crumbs, etc.) and try to find some combination that fills whatever bizarre requirements have been thrown at you. Or you can use drupal\_set\_breadcrumb() in your hook\_node\_view()'s and hook\_taxonomy\_term_view()'s and wherever to do exactly what you need with a few lines of code while avoiding the thousands of lines you'd be adding with any of those modules.

### Reinventing the wheel

For some people, leaving behind all of those contrib modules is a tough sell, because contrib is really one of the great things about Drupal. If you're going to reinvent the wheel on CMS features and just use it like a framework instead of like a CMS, they say, then why not just use Django or Rails? My answer to that is that you're still getting the best out of Drupal, you're just getting it from a different place. Instead of milking Views and Panels and Hansel and Context for all that they're worth, you instead milk entities and permissions the Bean module and EFQ and FAPI and DBTNG and fields and hooks for all that they're worth. Django and Rails just don't have equivalents for a lot of that.

Plus it's not like you have to ignore contrib completely. You still have amazing things like Drupal Commerce and OpenLayers at your fingertips, and you're still open to use Views and Panels and whatever else when it makes sense. It's still Drupal.

In the end, it all comes down to two things: building things quickly and buildling things well, and if rolling your own features in some cases means that you don't sacrifice on time and you get a bit of a boost in quality then I don't understand the hesitation there just because you're ignoring some modules in the process.

### Update and responses

Wow, this post has generated some great discussions. Besides the comments below, also check out the [short Reddit thread](http://www.reddit.com/r/drupal/comments/1fnlit/drupal_and_invented_here/) and the [Google+ comments](https://plus.google.com/111020520676817671277/posts/1iDg8UnDS5X) for some really good insight. I wanted to respond to a few common ones:

> You're not taking maintenance into account, Mike! If you custom code things, you have to maintain that, and if you use contrib, somebody else does it for you.

I can't argue with the fact that custom code requires maintenance, but I wholeheartedly disagree that using contrib requires little to no maintenance. I've spent way too many hours fighting upgrades that break dependencies or modules that depend on buggy .dev versions of other modules or tracking down an issue for a bug (that may or may not have a patch which may or may not be current or even work) to agree with that statement.

It's technical debt either way, and if you're worried about technical debt that you own then I think you should be just as worried about technical debt that some other unknown dev or perhaps even [no one](https://twitter.com/MrJoshMiller/status/341991187554660354) owns.

> It's not black and white, you can use contrib where appropriate and use custom code where appropriate.

This is true, and I apologize if my post came across like it wasn't. If you find a solid, well built and maintained contrib module that does what you want well then you'd be a dummy not to use it.

My point is that this mindset of **having** to use contrib ("there's a module for that!") is dangerous. If you find yourself struggling to find a way to implement a feature with contrib or stretching modules past what they're made for or mushing different modules together in a way that makes you queasy, then that's an opportunity to ask yourself why you aren't just coding it yourself.

> Custom code boxes you in. A good contrib module integrates with Views, Services, Rules, etc.

Ask yourself if you really need integration with this stuff. If you do, then ask yourself how much it time it would take to integrate that stuff into your custom module vs. how much time it would take to extend/override a contrib module (which already has support for that stuff) to fit your specs. And then ask yourself how gross the implementation will be either way. At this point you should have a pretty clear picture of what to do--basically go with the one that scares you the least.

> Custom code takes longer than using contrib. Think of the budgets!

This is true sometimes, and in cases where this is true I'd probably advise you to use contrib. This post is about cases where it's not true--where extending and overriding contrib takes more time than custom building. I've found that if you really think about it, this happens more often than you'd like to admit.

**Update (June 28, 2013):** Mike Prasuhn (known in the Drupal community as mikey_p) has written a cool follow up to this post in which he actually implements the feature I described above (in both D7 and D8) and describes the effort required. [Check it out](http://shomeya.com/articles/understanding-how-custom-code-can-help-you-build-your-drupal-site)!