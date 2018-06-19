---
title: Progress ruins it (or, Drupal is boring)
date: 2009-07-30
tags:
  - development
  - drupal
---

I love Drupal, don’t get me wrong. I have a really soft spot in my heart for ExpressionEngine too. And WordPress always has its place. But I’m growing more and more frustrated at the various CMS’s out there for one reason and one reason only: they’re too easy. Here’s a typical day spent building a site in Drupal:

* Fire up the browser and go to the admin section.
* Click around and change a few options
* Go to Drupal.org and download a few modules
* Copy them to the /sites/all/modules folder
* Enable them in the admin section
* Click around and configure those modules for awhile
* Log out, test the site as an anonymous user
* Log in, fix whatever didn’t work (usually permissions issues in my case)
* Repeat until the site is finished.

Of course, this isn’t always the case. Often you’ll run into cases where custom modules need to be built or contrib modules need to be extended, etc., but more often than not, you can build a whole site without any code. The exception to this is the templating which is really more annoying than fun. To illustrate, here’s the process for templating in Drupal:

* Start with a PSD
* Slice it up
* Code up a static template with flat HTML/CSS (this is usually the fun part)
* Create a new Drupal theme (usually by adapting Zen or Basic or BlueTrip or Starkish whatever)
* Delete all preloaded CSS and upload your CSS
* Open up page.tpl.php and throw in your container divs
* Spend a while changing your CSS selectors to match what Drupal gives you

Boo. Coding is all about finding clever solutions to unique problems, and so far, the only part of the Drupal process that lets us do that is the slicing and dicing, which isn’t even really part of the “Drupal process” if you think about it. The beginner to novice at any of these CMS’s will love this, because it’s amazing the amount you can accomplish in a short period of time without even really doing anything yourself. That’s great right? Well yeah, sort of. It’s great for budgets and time constraints. It’s great for happy clients.

But it’s just not any fun. We didn’t learn how to build compilers and optimize enterprise web applications in school so we could click around all day. After the first couple sites built on Drupal, you find yourself hungry for coding. You need to code! You need syntax errors and for loops and SQL queries, all that meat and potatoes stuff that comes along with web development. And don’t say “well just code your own modules, then!” because that ruins the point of using a CMS. Why use something on the basis of it being so powerful if you’re just going to ignore all that and make it powerful yourself? That’s stupid.

It seems to me that we’ve taken so many steps forward by now that we need to take a couple steps back. I can now set up a full-featured ecommerce site with no coding whatsoever. I can set up a social network with nothing but a tiny bit of knowledge about FTP and Databases, and access to Google. Drupal is the “Self-Checkout” of web development: it’s progress because it saves time and money, but it’s depressing because it invalidates the education and jobs of the cashiers who used to do the checkouts (ok, maybe a bad example). I find it hard to believe that I’m called a “web developer” when all I do is enable and configure somebody else’s code.

I feel like I need to mention the happy medium: frameworks. Anybody else tried Django? Or CodeIgniter? Or Cake? Or anything out there? If you have, I’d be willing to bet you enjoyed it. Why? Because it let you code! And we’re not talking about the grunt code of opening and closing DB connections or validating email addresses. We’re talking about the awesome stuff…intense image manipulation algorithms for example. Or unique user input processing. Or anything cool and not boring.

I will never say that frameworks are gaining ground because they’re the end-all-be-all of web development. They’re not. If anything, Drupal is, because it makes everything so doable. But frameworks are gaining ground because they’re the perfect balance. You can do just enough coding but also have just enough handled for you. But the CMS is still king, and looks to stay there for awhile.

I don’t know if there’s really anything intelligent to take out of this. Drupal will be around for awhile because of the amazing timesaver that comes along with the extreme power and modularity. Developers will still push it because faster site turnaround in general means more sites which means more cash, and the average worker will take more cash (i.e., Drupal) over more interesting projects (i.e., Django) any day. And I can’t say that I wouldn’t. We all have to eat. It’s just a little disturbing to have your jobs reduced to pointers and clickers. It’s boring. It’s scary.

At the rate turnkey solutions are progressing, I’d be willing to bet that it’s only a short matter of time before the bulk of Drupal’s downloads go from developers to end users looking to cut out the middle man. I’m not going to say that we need to be worried about job security. There will always be the anti-DIY types, or the non-technical types, or the types who need really complicated sites (i.e., custom Drupal modules), etc. So don’t call it paranoia. Just call it food for thought. Call it stupid. Call it Ralph. I just think it deserves your point-and-click brainpower for minute. Thoughts?
