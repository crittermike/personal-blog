---
templateKey: blog-post
title: Take advantage of Drupal upgrades
date: 2013-04-15
description: Lifting and shifting is a missed opportunity.
tags:
  - development
  - drupal
---

Drupal's upgrade mantra has always been "we will break your code but we won't break your data" and for that reason, Drupal core and contrib maintainers typically spend a lot of time and effort in providing upgrade paths for your data so you can theoretically just run the upgrade script and update your code and you're good to go.

In practice, this is rarely the case. We all know that Drupal major version upgrades (like D6 to D7) are no picnic. Lots of contrib modules don't have decent upgrade paths or do not exist at all for the newest Drupal version forcing you to find a replacement. Any code code you have that stores data will likely need to have custom update hooks written for it as well.

And even ignoring the data, there's still the issue of code. Your custom modules and your theme will have to be rewritten since there are a heap of API changes between any major version.

In other words, Drupal major version upgrades are a big time suck. You're rewriting code and massaging data and re-theming, all just to have a clone of your already-working site on the latest Drupal version.

### Missed opportunities

According to Jeffrey Zeldman, "redesigning without fixing problems is a missed opportunity." Along those lines, I think that upgrading your Drupal site without fixing problems is a missed opportunity.

Why upgrade your site to an exact clone of itself when you could just as easily improve and simplify the problematic parts? You're already rewriting code and tweaking data, so you might as well use that to your advantage instead of just porting your existing site to a new version, warts and all.

However, upgrading your Drupal site via the upgrade script means that you have to keep everything as close to the old version of the site as possible so that the upgrade will work. You can't change content types or fields or roles or modules because then the upgrade will obviously break. So what's the best way to handle this?

### The fresh start and migrate approach

My suggestion is a from-scratch build followed by a migration. The process goes like this:

1.  Identify problematic or messy or improvable areas of your current site.
2.  Sketch out a new, clean, improved site that fixes all of the problems of the current site. Pretend it's a brand new site for a client and you aren't constrained by any technical debt.
3.  Build that site. Build it like a new site, with a new theme and new content types and a new block setup and new field organization and new roles and new everything.
4.  Migrate the old site's content into the new site using the [Migrate module](http://drupal.org/project/migrate). Depending on your setup, you might even be able to use the [Drupal to Drupal framework](http://drupal.org/project/migrate_d2d) for the Migrate module which will simplify your migration.

### Advantages of a clean build

The benefits should be clear here. With any second attempt at something, you go into it with the knowledge of where the first attempt failed, and this is especially true in the world of programming. You recognize gotchas or redundant content types or ugly IA and you know how to fix it.

Or maybe your old site didn't even have any real issues (liar). Maybe you just want to use this opportunity for a redesign and IA overhaul. Either way, the end result here is that you get a better site and you don't have to inherit the old site's problems or legacy choices.

It's worth pointing out that you can do this whenever you want, and you don't have to do it during an upgrade. You're always free to rebuild your site and make it better, but it's costly and it's time that you don't directly get paid for, so it's a tough sell. So the reason it works in this case is that you were already going to be spending a significant amount of time upgrading the site, so it's not time you're losing, it's just time that you're transferring from one objective ("upgrade") to another ("upgrade and improve"), the latter being good for business and the former just being a necessary evil.

Also, doing it this way (with a migrate script rather than the upgrade script) means that _you can continually migrate in new or updated content as you're working_. This is especially useful on sites where content is constantly added, whether it's an active blog or a news site or a site with user comments or a forum, etc. If you upgrade with the upgrade script, then once the script is run, you basically have to lay down a content freeze since it's difficult to pull in any content that was added or edited to the old site after that unless you do it by copying and pasting.

### Disadvantages of a clean build

The only clear disadvantage here is time. It can be a little quicker to do the classic upgrade rather than doing a from scratch build and migration (though often not as much as you'd think). However, my rebuttal to this is that the time you spend now will be time saved later since you're ridding yourself of technical debt and you're fixing issues that need fixing rather than just cloning the site.

**Did I miss anything? [Tweet me](http://twitter.com/mcrittenden) if so.**