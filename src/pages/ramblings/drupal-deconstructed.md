---
title: Drupal 7 Deconstructed
date: 2016-10-14
tags:
  - development
  - drupal
---

For years now I've wanted to dig through Drupal core, line by line, and understand how the big pieces do what they do. I'm finally doing that, and writing up my notes as I go.

**[Drupal 7 Deconstructed](https://github.com/mikecrittenden/drupal-7-deconstructed) is the in-progress result of that.**

If you've ever wondered what happens in the bootstrap process, or how Drupal's Form API works, or how exactly Drupal figures out which menu callback to run per page request, then this is the place to go.

It's just getting started, and so far I've only gone through the bootstrap process and the menu router, but I'm having a great time and learning a ton, so I expect to fill it up quickly.

### Who could benefit from this?

Any developer who has ever wondered how Drupal works could get some value out of reading this. You'll need to know at least a little about Drupal development to understand parts (for example, I don't explain what `hook_menu()` is when talking about the menu router), but you shouldn't need to be an expert or anything.

If you feel like that describes you, but you don't understand a part, please let me know so that I can make it more approachable.

### Want to help?

If you're interested in helping out, the best thing to do would be to keep an eye on the repo and proofread or review things as they're written.

Pull requests are also greatly appreciated, whether you want to fix a typo or submit a whole new chapter.

Or, if nothing else, just let me know if you like this idea! Knowing that this could be helpful to people besides just me is a huge motivational boost to keep things moving.

### What's the end game?

I don't know. I could see this staying on GitHub forever, or being published on Leanpub, or ending up as a blog series.

Any suggestions?

### Why Drupal 7? What about Drupal 8?

I chose Drupal 7 because it still has a pretty long shelf life left. Drupal 8 Deconstructed definitely needs to be written though, and I'd love to dive into that after 7 is complete.

### What about contrib?

I would love to take apart some of the more commonly used contrib modules like Views, CTools, Panels, Webform, Pathauto, etc., as well, but one step at a time!

**Please check out [Drupal 7 Deconstructed](https://github.com/mikecrittenden/drupal-7-deconstructed) and let me know what you think so far!**
