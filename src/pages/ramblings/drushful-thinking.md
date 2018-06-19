---
title: Drushful Thinking
date: 2016-05-07
tags:
  - development
  - drupal
---

## What is Drush?

If you're asking that question right now then congratulations! You are one of the lucky people who will have your life changed today! Cancel everything and read up on [Drush](https://github.com/drush-ops/drush), the command line bridge to Drupal.

## Everybody knows about Drush, ya Dingus!

That's more like it. Who doesn't love Drush, right? Right!

But more and more, I find myself seeing people reinventing things that Drush already handles because they just don't know all that Drush can do. It's getting frustrating, and I want to fix that.

# First, The Basics

## Stuff everybody knows

Here are a few Drush commands that most people know and love, just to get them out of the way:

* drush updb: run pending database updates
* drush cc all: clear all caches
* drush dl <something>: download the <something> module
* drush en <something>: enable the <something> module

## Stuff everybody knows (Features Edition**™**)

And if you're using Features, you're probably familiar with:

* drush fra: revert all Features
* drush fe: export a new or updated Feature with a new component
* drush fu <featurename>: update the <featurename> Feature with updated site config
* drush fr <featurename>: revert the site's config to the current state of the <featurename> Feature

## Aliases

For a lot of the fun stuff, you'll have to understand Drush aliases. If you don't, here's the gist: Drush aliases give you an easy way to run Drush commands on remote Drupal sites, as opposed to only being able to use it on your local sites. If you're constantly SSH'ing into different environments just to run a couple quick commands, you need to stop doing that.

There's [lots](http://www.astonishdesign.com/blog/drush-aliases-what-why-and-how) [of](https://www.deeson.co.uk/labs/drupal-drush-aliases-and-how-use-them) [documentation](http://www.bariswanschers.com/blog/working-drush-alias-files-teams) about Drush aliases and how to create your own, but most of the docs lack notes on some of the lesser known awesome things you can do with aliases. Keep reading, sailor.

Well, one more thing. This is probably a good time to mention a couple quick commands.

Firstly, let's run an arbitrary shell command on our dev environment.

    drush @foo-dev exec echo $SOMETHING

Or maybe we should just go ahead and SSH in to do something a little more complex.

    drush @foo-dev ssh

Or maybe we need to do a bunch of aliased commands, but we want to do it without SSH'ing in (because the commands require local files or something). We can make a Drush alias persist until we tell it to stop using:

    drush site-set @foo-dev

And then when we're done doing what we do, we can just run it again without the "@foo-dev" argument to unset it.

Now, keep reading, sailor.

# Syncing Ship

(Warning: these headlines are going to get worse and worse)

One of the most common things to do with Drush aliases is to sync stuff from one alias to another.

For example, want to sync the dev site database down into your local?

    drush sql-sync @foo-dev @foo-local

How about files? Sync 'em!

    drush rsync @nexderm-dev:%files @nexderm:%files

Or maybe some unwashed sent you a DB dump and you have to import it the old fashioned way?

    cat ~/path/to/file.sql | drush sql-cli

Sometimes you want to drop your entire database before importing, to make sure you don't get any tables left behind from your old install that aren't supposed to be there. That's as easy as:

    drush sql-drop

Sometimes, it's useful to be able to automate running arbitrary SQL commands on multiple environments, and that's pretty easy too. Say for example that you quickly want to get the username for uid 1 on the prod environment (the "drush user-information" command would be much better for this, but shut up).

    drush @foo-prod sqlq 'select name from users where uid = 1'

That one is also good for automation, like if you want to write a quick script that changes the username for uid 1 on all environments.

# Drupal Without Drupal

It's often useful to run one-off arbitrary code within the context of Drupal, without having to actually put it in the codebase somewhere. This is typically done one of two ways:

If it's just a short one-liner, then there's the ever-useful "php-eval" (aka "ev") command. For example, let's inspect a node object.

    drush @foo-dev php-eval 'print\_r(node\_load(123));'

Or if it's a longer one, then we can just throw our code into a PHP file, and run it using:

    drush php-script filename.php

# Reports Cohorts

Drush is really good at getting us information from Drupal without waiting for a full page load.

How many times have you navigated to the Watchdog page and sat through page load after page load while you went through the pagination and added filtering and blah blah blah to find an error message? Stop doing that! Do this instead:

    drush watchdog-show

There are a lot of useful options for watchdog-show, such as:

* --tail (continuously show new messages)
* --full (show the full output, with all of the fields, instead of the summarized version)
* --severity (such as "--severity=error")
* --count (show more than the default 10, such as "--count=100")

And I'd bet you're familiar with "drush vget" to get variables, but did you know you can pass "--format=whatever" to get the results formatted as JSON or CSV or YAML or a bunch of other things, for easy scripting?

Another one of my favorites is this charm, which basically prints out the stuff you see on the Status Report page in Drupal. It's nice for sanity checking before pushing releases live.

    drush status-report

And then there's this guy, which prints out a bunch of useful info about the current installation, such as DB info, path to PHP executable and .ini file, Drupal version, Drupal root, etc. It's a nice first step when debugging a broken install.

    drush status

And for those times when you need to edit a config file (php.ini, or settings.php, or an alias file, or .htaccess, etc.), you can run this to let you choose which of those files to edit and it'll open it up in an editor for you:

    drush config

# Using Users

Drush is nothing short of a miracle when it comes to user management.

First of all, there's the ever-annoying task of logging in as this user or that user. You usually don't know the password, or maybe you're just too lazy to type it. Run this to open up your browser with a one-time login link so you can skip all of that malarky:

    drush user-login name-or-uid

Or, if you're slightly less lazy, and just want to change the password to something so that you can log in the old fashioned way:

    drush user-password name-or-uid --password=test1234

Then there's the "fun" process of adding a user and filling out the form. Skip that:

    drush user-create person123 --mail="what@isthis.com" --password="letmein"

Once that's done, you probably want to give that new user some roles. For role stuff, you have this:

    drush user-add-role "user editor" person123
    drush user-remove-role "user editor" person123

But watch out! The role you need to add doesn't exist yet! Let's add it, and give it some permissions.

    drush role-create 'user editor'
    drush role-add-perm 'user editor' 'administer users'

If you just need to show information about a user, such as email address, roles, UID, etc., try this. I'm embarrassed to say that I've been using raw SQL for this for years.

```
drush user-information name-or-uid
```

# Fields of Dreams

One of the most under-used things that Drush gives you is field management tools. I'm going to be lame here and just copy and paste the docs, since they're pretty self explanatory.

```
Field commands: (field)
 field-clone Clone a field and all its instances.
 field-create Create fields and instances. Returns urls for field editing.
 field-delete Delete a field and its instances.
 field-info View information about fields, field_types, and widgets.
 field-update Return URL for field editing web page.
```

# Other Schtuff

Here are some great commands that don't really fit into any clear-cut categories.

It has some neat archiving tools:

```
drush archive-dump #backup code, files, an DB to a single package
drush archive-restore #expand one of those archives into a full Drupal site
```

Somewhat similar to those is this one, which will download and install Drupal, serve it using a little built-in server, and log you in, all in one command. Note that this one includes about a bazillion options and is super duper powerful.

```
drush core-quick-drupal
```

Drush also lets you play with the cache, which can save a lot of time when debugging a caching issue:

```
drush cache-get your-cid your-bin
drush cache-set your-cid your-data your-bin your-expire
```

There are a couple unknown commands for working with contrib:

```
drush pm-info modulename #display included files, permissions, configure link, version, dependencies, etc.
drush pm-releasenotes modulename #show the release notes for the version of module that you're using
```

Run cron! Not exciting, but super useful.

```
drush cron
```

Have you ever been in the middle of debugging and you know that something is happening in a form_alter (or some other hook) but you're not sure in which module? Try this command, which will tell you all of the implementations of a given hook, and let you choose one to view the source code of it.

```
drush fn-hook form_alter
```

And finally, this bad boy is basically "Drush docs in a box" and has a TON of useful info. Seriously, try it now.

```
drush topic
```

# Drushful Thinking

There's a giant heap of useful Drush commands, some of which you hopefully hadn't seen before. So what, right?

The "so what" is that it's useful to start thinking in terms of "how can Drush do this for me?" and you'll often find that the answer is "pretty easily."

Play a game with yourself. Next time you're working on site building or anything that involves a lot of clicky clicky in the Drupal UI, give yourself a jellybean or a chip or something every time you do something in Drush instead of in the UI.

But why? Well for one, before you know it, you'll be spending much less time waiting on page loads. But secondly, Drush lends itself to automation, and thinking in terms of Drush naturally leads you to think in terms of automating and scripting things, which is a great place to be.

Practice some Drushful Thinking! And let me know any of your favorite Drush tips and tricks in the comments. Check out [drushcommands.com](http://www.drushcommands.com/) for some more inspiration.
