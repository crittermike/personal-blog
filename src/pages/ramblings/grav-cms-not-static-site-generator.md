---
templateKey: blog-post
title: Grav CMS is not a static site generator
date: 2018-04-30
tags:
  - tools
  - development
---

I'm a fan of Grav CMS. I'm a fan of static site generators. But Grav CMS is not a static site generator. I'm creating this post to link to people who are confused by this.

### That word, "static"

Grav is a "static file CMS". Things like Jekyll or Hugo or Gatsby are "static site generators". People seem to see the word "static" and assume that they're the same thing, but they very much aren't.

Grav is a regular old CMS, along the same lines as Wordpress or Craft, and can do more or less the same things as other CMS'es, except that instead of using a database it keeps content and config in static files. 

A "static site generator" exports a set of static HTML files, one per page, that you can host pretty much anywhere. This really has nothing to do with Grav, and Grav isn't any better suited to doing that than any other CMS is.

### What Grav can do that static site generators can't do

Here's a short, incomplete list of things that Grav can do easily which you can't do with a static site, unless you rely on external services for them:

- User-facing forms
- Email sending
- Dynamic content
- Search
- Immediate site updates 

Note that these are simplified. For example, you *can* have search on a static site without relying on an external service if you pre-build a search index (in, say, JSON) and load it clientside using something like [LunrJS](https://lunrjs.com/), but if we're being hand wavy and speaking in generalities, it's true enough.

### What static sites can do that Grav can't do

On the flipside, here are some things that you can get out of static sites that Grav can't offer:

- Host anywhere (S3, GitHub pages, etc.)
- No backend required
- Super fast
- Virtually un-hackable

Again, we're being hand-wavy. Grav can be super fast too, for example. But you get the idea.

### Make sense?

If not, please [tweet at me](https://twitter.com/mcrittenden) and we'll sort it out.