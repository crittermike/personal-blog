---
templateKey: blog-post
title: Drupal + Cloud9
date: 2017-01-17
description: Pros and cons of doing Drupal development on Cloud9 IDE.
tags:
  - development
  - drupal
---

"[Cloud9](http://c9.io) is an IDE and development environment in the cloud. Yeah yeah, buzzwords buzzwords, but what does this really mean?

Let's dig in a bit, starting with the positives.

What I Like
-----------

I've been using it heavily for a few months now, and here are the features that stand out to me. 

### Workspaces

C9 gives you "workspaces", each of which is a complete Ubuntu-based environment (i.e., a Docker container behind the scenes). This means that you can install stuff, use `sudo`, change config, etc. You can create and delete workspaces as you please.

You can really go to town on these things in pretty much any way that is useful. 

### Workspace cloning

C9 also lets you clone workspaces to create new ones. Cloning is super fast - usually around 30 seconds for me from start to finish. This means I can do things like having a stock "Drupal" workspace that has all the tools and config that I like to have for Drupal projects, which I just clone when setting up a new Drupal site. There are other cool possibilities here too, which I'll get to shortly.

Sure, theoretically Vagrant and friends let you do this already for local environments, but the speed and ease that C9 brings to this process is unmatched compared to anything I've seen.

### Out of the box debugging (for Node.js, PHP, Go, and C++)

Interactive debugging is already there, waiting for you. In PHP for example, you just click the little "bug" icon before running your app, and then set a breakpoint wherever you want. No messing with xdebug config or path mappings or exposing ports, none of that. Just click and you're done.

This is especially nice for me on the Node.js side, since I've never learned how to set up a Node debugger and don't particularly want to.

### Custom runners

Cloud9 environments come with some pre-configured "runners", which are basically commands that you can run by clicking a button, and have their output stuck into their own tabs. For example, starting the app typically means starting the "Apache" runner to get the server running, which will throw Apache logs into the output of that tab. 

That's all fine, but it gets more interesting when you create custom runners. You can drop in a name and command and some configuration such as the current directory, and then you have a nice little command runner waiting to be clicked. I like this for things like "grunt watch" which watches for Sass updates, but it's even more useful for commands with hard to remember names, so that you can kind of abstract that away. It's like shell aliases on steroids, in a way.

### Performance

Cloud9 is surprisingly quick given that it's a pretty bulky web app. I don't have an insanely powerful laptop or anything, and I found the Cloud9 IDE to be responsive enough that I never really saw any noticeable slowness, which is the goal after all.

What I don't like
-----------------

### No VPNs

Due to the way Cloud9 is built, it can't really connect through an existing VPN. So if you're trying to work on a site that is hidden behind a VPN, then it might be test to avoid Cloud9 for that project.

### IDE limitations

The C9 IDE is ok, but not good, and definitely not great. If PHPStorm is a 9/10 in terms of IDE functionality, then Cloud9 is more like a 4 or a 5. It's a pretty decent text editor, but a pretty lame IDE.

For example, it's missing features like:

*   Jumping directly to a function definition from somewhere that function is called
*   Auto-generating block comments with @params, etc., based on function code
*   Function parameter hinting as you type
*   Viewing all usages of a given function
*   Project-wide autocompletion that works smartly and consistently

### Restricted workspace cloning

You can only clone your own workspace - you can't clone someone else's. This means that it's basically impossible to have a setup where a tech lead manages a "pristine" project workspace which everyone else can clone whenever they need to start fresh, or when new people are ramped on. I love the sound of that workflow, and it's disappointing that it isn't allowed.

### Credit card required for signup

You can't sign up to C9 without entering your credit card info, even for the free accounts. This isn't the end of the world for me or possibly for you, but it can be a real bummer when you want to give someone on your team access to your codebase to do some pair programming. The "how much do I really want this?" factor kicks into high gear when you're asked to pull out your credit card.

Use cases
---------

### Open source work

C9 is great for doing open source work. It gives you the ability to share your code or your environment when anyone just by sending a link,  which can help a lot when collaborating on something remotely that is only on your local environment.

Plus, with workspaces being so cheap and powerful, you can have a separate workspace for each open source project that you maintain. That way, you always have an environment ready to be worked on for everything, and you never have to wonder if that environment you build 6 months ago for module X is still running and working.

### Demos

Creating a workspace specifically for a demo (or a prototype or anything else temporary that you want to show other people) can be really nice. It even gives you a URL to share with people so they can try out your demo with their own two hands.

This lets you work on your demo in a clean, empty environment, which can just be deleted when you're done. 

### Random fiddling around

You know that thing where there's a new tool or app or whatever that you want to try installing, but you don't want to worry about adding more dependencies or possibly bringing in a different version of a dependency that will break something else? 

The speed with which you can spin up C9 workspaces is great here. Create a workspace in a few seconds, do whatever you want, and delete it. That way you never have to worry about leaving any remnants of your random tinkering on your main computer.

### Pair programming

One of the banner features of C9 is the ability to live-edit code along with other people, and see each other's updates in real time. If you ever pair program, then this is basically the dream. It sure beats screen sharing over a Google Hangout. 

### Debugging

The out of the box debugger support kind of automatically makes "debugging" a good use case for Cloud9. The fact that you have a full Ubuntu environment means that you can usually change whatever you need to change to replicate your prod setup, and the built in debugger can take it from there to help you find your bug.

Again, you can always just use Docker yourself to replicate an environment and install Xdebug, but this is just so much easier.

### Regular old development

If you can live without advanced IDE features, and you don't need a VPN to access anything, then you can really do most of your regular everyday development on C9. That way you have cheap workspaces and easy debugging and shareable URLs for everything that you work on.

Tips
----

Finally, here are some tips for getting the most out of Cloud9, especially if you're using it for Drupal.

**1\. Start each workspace from a starter instance that has all the tools you need**

For example, create a "Drupal" starter workspace that has Drush, Drupal Console, Apache config, git aliases, XHprof (here are [installation instructions](https://gist.github.com/mikecrittenden/341a7ce1da019c1d2a22008e665c3565)), etc. Then, whenever you spin up a new site, just clone that workspace.

**2\. Create per-ticket workspaces**

Taking workspace cloning to the next level, you can just create a stock workspace for your project which you never actually touch except to keep it up to date. Then just clone it every time you start work on a new ticket. That way you can have completely separate environments for unrelated workstreams, and you never have to worry about clobbering data or whatnot when switching back and forth. Plus, that ticket you worked on 3 weeks ago will still have a working environment to go back to when it fails QA and needs a fix.

**3\. Make the keybindings match your main editor/IDE**

Cloud9 has fully configurable keybindings for just about everything. This means that you can make C9 keyboard shortcuts match the ones you're already used to from your normal editor/IDE. That way it's really easy to switch back and forth. There are even Vim and Emacs modes!

**4\. Create custom runners for all the things**

Think of all the commands you run on a regular basis. Things like "grunt watch" or "drush cc all" or "drush updb -y && drush fra -y", etc. Put all of those things in custom runners, so you can just click a button to watch them run in their own tab. This is especially useful for complex commands that you're likely to forget.

**5\. Go crazy with the layout**

C9 lets you drag and drop tabs to dock to the left or right or bottom, and resize however you want. You can have a terminal on the right and server logs at the bottom, or keep them all in tabs in the same place. It's up to you. 

**6\. Don't ignore the project search (and replace)**

If you're like me then you might be tempted to install The Silver Searcher or Ack or just use grep to search your codebase. Before you do that, at least give C9's code search a try. It's fast, it supports regex, and it gives you lots of options about where you want to search. It's surprisingly robust, so give it a shot.

The end
-------

Overall I think Cloud9 is really pretty great for what it is. It's lacking some IDE features and it suffers a bit unavoidably just based on the fact that it's cloud based, but it also solves a lot of real world problems that make up for all that in most cases.

I'm using it for a pretty big chunk of my day to day development nowadays, and it's saved me plenty of headaches.

Do you have any concerns or questions? Feel free to comment below if so. I'm curious to hear about the types of things holding other people back from using it."