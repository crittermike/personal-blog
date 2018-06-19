---
title: Drupal's Golden Handcuffs
date: 2012-10-08
tags:
  - development
  - drupal
---

Drupal's main draw is that it gives you the power to do an _insane_ amount of work with zero coding. This is both its blessing and its curse.

### The blessing

Drupal is great for developers for exactly one reason: **it's really, really productive**.

Here's a short list of example things that can be accomplished in Drupal with no custom code:

* A listing of arbitrary content written by user X and published within the last Y months (where X and Y are arguments in the URL in the form blog/user/X/recent/Y), grouped by month and formatted as an ordered list with custom wrapper elements and classes per-field and per-row.
* A full featured RESTful API which exposes your sites entities (whether it be products, users, categories, blog posts, videos, whatever) as resources with niceties like YouTube video links formatted as embed code and referenced images converted to grayscale.
* Completely custom types of content with arbitrary fields such as link inputs with custom validation, photo uploaders with unlimited values and drag/drop ordering, custom tabs acting as field containers, multiple WYSIWYGs per textarea depending on which input format you choose (markdown, raw HTML/PHP, filtered HTML with custom allowed tags, blah blah).
* Routinely parse and import content from external data sources (XML, CSV, and JSON to name a few) as Drupal content with source fields mapped to Drupal's custom content fields in the GUI
* Robust and fast site search powered by a Solr backend and index with support for facets/filters, sorting, weighted results, multiple search sections/pages each with their own set up default filters (by content type, category, arbitrary field value), etc.
* A global store locator with geocoding and proximity searching, locations displayed as custom icons on a map, and the ability to customize the output of the results list (show a thumbnail of the store if you want to, output results as a table with sortable columns if you want to, I could go on).

Seriously, it's freaking ridiculous. The benefits of having all this available in a ready-made GUI without custom code should be obvious, but I'm going to list them out here so that I can waste your precious time.

* No debugging your custom code
* No digging through the docs trying to find the API function you need for an odd task
* A discoverable UI--click around until you find what you're looking for, rather than digging through code
* A team of thousands of users and contributors testing the code in ways you never would have imagined and fixing the bugs
* A much much smaller risk of security breaches due to that team
* Holy crap, so much faster

That last one sums it up. Creating advanced functionality by clicking around is so much faster than writing it by hand, even if you're using an opinionated framework that cuts down significantly on the custom code you'd have to write. The minimal debugging and bug fixing and security auditing and API reading are all just more time saved.

In essence, Drupal is _extremely_ productive once you know your way around core and the popular contrib modules, so much so that it's very hard to leave it for something else for general purpose site building.

### The curse

So Drupal lets you get crap done really quickly and sends you laughing all the way to the bank...what's the problem? Here's the problem. Here's the typical day for a Drupal developer:

* I'm bored
* I'm bored
* WTF?????
* I'm bored
* Lunch!
* I'm bored
* I'm bored
* I'm bored
* YOU SUCK DRUPAL
* I'm bored

The particularly astute readers will have noticed that a Drupal developer is usually either 1) being bored clicking around or 2) screaming at Drupal for failing them in extremely hard to debug ways.

#### When stuff breaks, it shatters

Let's start with #2. The issue with building complex functionality on top of code that you didn't write is that when something breaks, you cry. Debugging through layers and layers of code on top of code written by other people is much more likely to cause you to light socks on fire than debugging your own code.

Say that you're using the Media: YouTube module to display YouTube links attached to content as embedded videos, and the options to adjust the video size aren't actually doing anything (note that this bug is entirely hypothetical--Media: YouTube is great as far as I know). Where do you go? You probably first search the issue queue for that module, and maybe you'll see an issue about it and a fix which might involve upgrading to a dev release and possibly breaking compatibility with the version of the Media module you're using. Or, more likely, you can't find anything in the issue queue so you dig through the Media: YouTube code which contains lots of calls to custom formatter hooks (in Drupal core) and to hooks in the Media module, all of which have their own nasty call stack to worry about. So basically, you're going to have a bad time. However, at least you're doing something that requires brain power.

#### The click monkey

That brings us to #1. Most of the time everything works alright more or less so you're just clicking around plugging away with building the site. This is almost worse, because you are now a click monkey (the type of monkey that code monkeys make fun of).

Everything that you were excited about as a programmer--working through interesting solutions to complex issues, writing sweet algorithms, refactoring crappy functions into beautiful snowflake functions--all that stuff is just a pipe dream, and you're nothing more than a well paid mouse button operator.

#### Can custom code cure cancer cornflake?

Still, you'll likely need to write _some_ custom code, whether it's for a unique feature that there isn't a module for or you're just doing some theming overrides. It seems like this should be the escape from the monotony of clicking but really it generally just ends up being frustrating. Drupal just isn't a great system to code for.

* It's complex. Try wrapping your head around [the render array](http://drupal.org/node/930760) in 7 or figuring out WTF to do with [stream wrappers](http://drupal.org/node/560424).
* Content and display are not well separated. Modules build markup directly, hopefully with theme_whatever functions that you can override in your theme, but often not. Doing this in custom code just feels sad, even after years of doing it.
* The Drupal 7 database abstraction layer is nothing more than a PITA. I don't know anyone who prefers that to raw SQL, and IMO the added benefit of having a tiny bit more database agnosticism isn't worth the decreased DX.
* Drupal 8 will "hopefully" bring with it Views in core, a GUI layout builder in core, edit-in-place in core, all of which are things which will have their own complexities to learn and understand and override and debug.
* Many changes require flushing the Drupal cache to appear. If I had a jellybean for everytime I flushed Drupal's cache in the last few years, I would be too busy eating jellybeans to write this.
* Documentation is still a mess, despite a huge community-wide effort to improve.
  * Individual contrib modules may or may not have docs, and if you're lucky they may be a page on drupal.org or a README.txt in the module. However, the chances that there are docs specifically for developers rather than site builders are slim to none, so you're often stuck digging through contrib module code looking for hooks and functions to do what you need.
  * Drupal core documentation is scattered across various book pages throughout the site and many things just don't have documentation at all (at least that that I've found).
  * Many docs pages are outdated but don't tell you that, so you find yourself hoping that someone in the comments has said what Drupal version that page applies to, and maybe even linked to an updated page for the newest release.
  * It's always a battle to find the API function you're looking for if you don't know what it's named. What's the function to select all nodes assigned to a taxonomy term? Here, let's search the API for taxonomy. Hmm, 10 pages of results. How about for "taxonomy nodes"? Zero results. Resort to Google, hope that someone has asked this on Stack Overflow, finally find it, and repeat the process 10 minutes later with another function.

So no, custom code cannot cure cancer cornflake. Custom code is either also boring if you've done that thing times before or frustrating if you haven't.

_Note that I understand that there are many reasons why most of the above list of grievances can't be changed (for example, if modules didn't build markup directly then you'd be stuck doing it all yourself in the theme ala Expression Engine which would greatly increase your development time), but it doesn't mean that I have to enjoy it._

### The future

Will Drupal become more fun in the future? Possibly, but likely not. Possibly because things like API cleanup and docs and miscellaneous DX niceties can add up to a difference, but likely not because Drupal has always been and always will be about being productive over being fun to code on. Drupal 8 is adding more functionality (see [Spark](http://drupal.org/project/spark)) rather than subtracting it.

It's a vicious cycle--Drupal attracts people who want to get crap done and don't care as much about getting it done in the most enjoyable or most elegant way possible, because that's what Drupal's good at. These people in turn become contributors and push Drupal further along that road.

### The Golden Handcuffs

So your work isn't quite as interesting or challenging as it might be if you're working with Django or Rails or whatever, but you're able to do stuff a lot faster than you'd be able to do it using anything else so you can't leave without dealing with the frustration of knowing that. Try spending 150 hours building proximity search with mapping in Django and knowing that it would take a day in Drupal. It's the Drupal Tradeoff (tm) and unfortunately it's not something that any version of Drupal can really improve upon.

So what to do? Well I know what I'll do, I'll keep using Drupal and getting crap done, and I'll just use other technologies on side projects to stay sane and feel challenged and interested. Tis the power of the golden handcuffs.

Discuss on [Hacker News](http://news.ycombinator.com/item?id=4604555) or reply to me [on Twitter](http://twitter.com/mcrittenden).
