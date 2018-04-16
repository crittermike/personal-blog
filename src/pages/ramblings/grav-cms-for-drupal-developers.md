---
templateKey: blog-post
title: Grav CMS for Drupal Developers
date: 2017-05-08
description: An intro to Grav in terms Drupal devs can relate to.
tags:
  - development
  - drupal
---

If you've never heard of it, Grav is a pretty neat little flat-file CMS. If you're a Drupal developer, words like "flat-file" and "neat" and "little" are probably foreign to you. This post is an attempt to explain what Grav is, why it's neat, and how to use it, in terms that you'll understand.

Wait, what's wrong with just using Drupal?
------------------------------------------

Why would anyone EVER think of leaving our beloved Drupal in the ditch to use something else?!

> "If you want to build a small web site, I'm not sure it makes sense to use Drupal today. It's good for… ambitious sites." [#driesnote](https://twitter.com/hashtag/driesnote?src=hash)
> 
> — Actually, (@eaton) [April 25, 2017](https://twitter.com/eaton/status/856862735820353536)

That's a pretty good reason. Dries himself has said that Drupal may not be the best fit for small sites. There are simpler solutions that make the easy stuff easy and the hard stuff somewhat easier (as opposed to Drupal which makes the hard stuff easy and the easy stuff really frustratingly difficult sometimes).

First of all, where is the database?
------------------------------------

As a Drupal developer, you live and die by the database. You've probably worked on sites that have had many hundreds of database tables. You might even remember the first time you realized that each field gets 2 database tables of its own.

The first thing you should understand about Grav is that there is no database. In place of it, there are 2 types of things:

\- YAML files which hold configuration

\- Markdown files which hold content

That's it. If you want to make a change to config, you change it in the relevant YAML file. If you want to update a page, you change it in the relevant Markdown file.

Oh, so it's a static site generator like Jekyll? No!
----------------------------------------------------

So far it may sound like a static site generator, but it's not. It's a CMS. This means that it can still do all the same types of things other CMS'es can do, that aren't available to static site generators.

For example, there's a really nice admin plugin that lets editors edit content via a UI, and upon saving, the content is instantly updated on the site (rather than the site needing to be re-built). Some static site generators have UI's, but they still require the intermediary site-generation step after making an edit.

You can also still have dynamic content listings, send emails, redirect users, integrate with web services, display user-facing forms, etc., since Grav is built with PHP and is super duper alterable via custom plugins. You'd need to handle that stuff client-side with a static site generator.

Content types in Drupal = Page Types in Grav
--------------------------------------------

Let's start with the basics - the age old "content type." In Drupal, creating a content type happens in the UI.

In Grav, to create a content type, you just create a “whatever.html.twig” file in the templates/ directory of your theme. Doing that automatically tells Grav that “Whatever” should be a new Page type.

This means that when creating a page in the UI, you can choose the “Whatever” page type. Or, if you’re creating content via adding a Markdown file directly, just name the file whatever.md which tells Grav that it’s a “Whatever” type of page.

[Read the docs on this](https://learn.getgrav.org/themes/theme-basics#content-pages-twig-templates).

Custom fields in Drupal = Blueprints in Grav
--------------------------------------------

In Drupal, creating custom fields happens in the UI.

In Grav, to create custom fields for a given page type, you’ll do it in a YAML file. Grav calls this a “Blueprint”. Just create a file in /user/blueprints/pages/PAGETYPE.yaml and throw in something like this:

```yaml
title: PAGETYPE
'@extends':
    type: default
    context: blueprints://pages
form:
  fields:
    tabs:
      fields:
        content:
          fields:
            header.heading:
              type: text
              label: Heading
            header.subheading:
              type: text
              label: Subheading
```

Basically, that will add two new text fields (“Heading” and “Subheading”) to the “Content” tab of the form for that page type.

When you save that form, it’ll throw that data into a little YAML block at the top of the Markdown file that stores the content of that page. This is called [Frontmatter or Headers](https://learn.getgrav.org/content/headers) and is actually really really cool because it means that the sky is basically the limit in terms of how to store structured data. You can store it in any way that YAML supports.

Then, in the Twig template (we’ll get to templates later), you can output the data for those custom fields using `{{ header.heading }}` or `{{ header.subheading }}`.

[Read the docs on this.](https://learn.getgrav.org/forms/blueprints/example-page-blueprint)

Views in Drupal = Page Collections in Grav
------------------------------------------

In Drupal, creating a content listing happens (usually) in the Views UI.

In Grav, there’s the concept of a “Collection” which allows you to loop through and list arbitrary content. Here’s an example:

```yaml
content:
    items: @self.children
    order:
        by: date
        dir: desc
    limit: 10
    pagination: true
```

And then in the Twig template, you’d just loop through them like so:

```twig
{% for p in page.collection %}
    <h2>{{ p.title }}</h2>
    {{ p.summary }}
{% endfor %}
```

Collections support lots of the same filtering/sorting/pagination concepts that Views supports. Some of the more complex stuff (such as fields from relationships or exposed filters) would have to be custom built via a plugin, but this should handle most of the things you’d typically use Views for pretty well.

Another interesting note here is that there's a 3rd party plugin called [View](https://github.com/ellioseven/grav-plugin-view) that adds some more power to this system.

[Read the docs on this](https://learn.getgrav.org/content/collections).

Taxonomy in Drupal = Taxonomy in Grav
-------------------------------------

Yep, it’s even named the same thing for you.

In Drupal, creating a Taxonomy happens in the blah blah blah you get the idea. All of this stuff is done in the UI in Drupal.

In Grav, creating a Taxonomy just means adding it to your site.yaml config file, like so:

```yaml
taxonomies: \[category,tag\]
```

Just add it to that array and you’ve created a new taxonomy. Then, you can reference it from any given page like this, in the YAML Frontmatter:

```yaml
title: Post title
taxonomy:
    tag: \[animal, dog\]
    category: pets
```

And that’s it. Taxonomies are MUCH simpler in Grav than in Drupal. They aren’t fieldable, for example (without some customization). They’re basically just a way to group content together, so that you can create listings (“Collections”) out of them.

[Read the docs on this](https://learn.getgrav.org/content/taxonomy).

Configuration/CMI/Features in Drupal = YAML files in Grav
---------------------------------------------------------

In Drupal, configuration is stored in the database. Drupal 8 provides core with the ability to sync this configuration with YAML in the filesystem, but the source of truth is the database.

This means that if you want to push some new configuration some site A to site B, you have to make the change in the UI, export it to YAML, move that YAML to the other site (via a git push or some other mechanism), and import it on the other site to make it live. People usually use Drush or Features to help with this process.

In Grav, the source of truth for configuration is the YAML itself, since there’s no database. To change configuration, just change the YAML file, and Grav will immediately recognize that. To move that change to another site, just git push/pull it and it’s live.

[Read the docs on this](https://learn.getgrav.org/basics/grav-configuration).

Install profiles/distributions in Drupal = Skeletons in Grav
------------------------------------------------------------

This is one area where Grav really shines.

In Drupal, shipping a distribution mostly involves doing work to make sure that a site has everything it need in code and exported configuration, and installs correctly using the installer. This is a result of Drupal relying on a database, but not wanting to ship an exported copy of that database with the distribution.

In Grav, since there’s no database, a “distribution” (or a "Skeleton" in Grav-speak) is basically just a copy of the codebase. Grav has no notion of "installation" like Drupal's installer. Just copy the codebase to another web root somewhere and it’s ready to run. This means that it’s really easy to ship open source Skeletons, many of which are [available here](https://getgrav.org/downloads/skeletons).

(It’s a tiny bit more nuanced than that since all you really need is the /user directory of the codebase which is where all the custom code is stored, but you get the idea).

[Read the docs on this](https://learn.getgrav.org/advanced/grav-development#grav-skeletons).

Paragraphs in Drupal = Modular Pages in Grav (kind of)
------------------------------------------------------

If you aren't familiar, Paragraphs is a very popular Drupal module that lets you build content in arbitrary "slices", each of which can contain arbitrary fields.

Grav has the concept of Modular Pages, which is pretty similar. Basically, a Modular Page is just a collection of other pages, but those "other pages" aren't reachable on their own, and they're special types that are made specifically for being placed into Modular Pages.

For example, a Modular Page being used as the homepage may be comprised of a Slideshow page, then a Feature List page, then an Image With Caption page, etc., and none of those sub-pages are actual pages that are reachable on their own. So even though they're called "pages", it's basically the same idea as Paragraphs.

The UI for this is different since each of those sub-pages are editable on separate forms instead of all of them being in the same form like how Paragraphs does it, but you can accomplish most of the same things this way.

[Read the docs on this](https://learn.getgrav.org/content/modular).

Drush in Drupal = CLI tools in Grav
-----------------------------------

Drush has saved the butt of many a Drupal developer. These days, Drupal Console is doing pretty well for itself too, but it’s the same basic idea. Talking to your site via the CLI is useful.

Grav has a couple built in CLI tools for many of the same purposes:

*   [bin/grav](https://learn.getgrav.org/cli-console/grav-cli): performs basic site tasks such as clearing cache, making backups, installing dependencies, or creating new projects
*   [bin/plugin](https://learn.getgrav.org/cli-console/grav-cli-plugin): performans commands provided by plugins (instead of Grav core), such as creating new users via the admin plugin
*   [bin/gpm](https://learn.getgrav.org/cli-console/grav-cli-gpm): (“Grav Package Manager”) - performs tasks you would expect of a package manager, such as listing, downloading, and updating plugins

Other random stuff
------------------

Here’s some other stuff that didn’t really deserve its own section. Feel free to read up on the docs on these if you’re curious.

*   CSS/JS aggregation in Drupal = [Asset Manager (“Pipelining”) in Grav](https://learn.getgrav.org/themes/asset-manager)
*   Image styles in Drupal = [Image Actions in Grav](https://learn.getgrav.org/content/media#image-actions)
*   Webform in Drupal = [form.md files in Grav](https://learn.getgrav.org/forms/forms)
*   Caching in Drupal = [Caching in Grav](https://learn.getgrav.org/advanced/performance-and-caching)
*   Base Themes in Drupal = [Base Themes in Grav](https://learn.getgrav.org/themes/customization#theme-inheritance)
*   Per-environment settings in Drupal = [Environment Configuration in Grav](https://learn.getgrav.org/advanced/environment-config)
*   Multisite in Drupal = [Multisite in Grav](https://learn.getgrav.org/advanced/multisite-setup)

Shortcomings and Downsides
--------------------------

There are a few things to keep in mind if you’re looking at using Grav for a project instead of Drupal.

One is that Grav doesn’t scale nearly as well. Many Drupal sites have many millions of nodes, thanks to the usage of a database. In general, I probably wouldn’t suggest using Grav once you start getting into the thousands with page count. Performance will likely start to suffer.

Drupal also really shines in creating complex content models, where there are many types of nodes/entities which reference each other or embed each other or reuse each other's fields, etc. Grav is perhaps more "page focused" than "data focused", which makes it much easier to work with for many sites, but not a great fit for some sites that need those complex relationships.

Grav also doesn’t really have the notion of an editorial workflow or moderation system. It does support published vs. unpublished, and there are things like [Git Sync](https://getgrav.org/blog/git-sync-plugin) to auto-deploy from a staging environment (or your local site) to a production environment if you set it up to do so, but there’s no approval process along the lines of what Drupal and some modules can provide.

Obviously, Grav also isn’t going to have anywhere near the amount of 3rd party plugins (modules) that Drupal has. Things like integration with web services or commonly used libraries will have to be hooked up yourself, more often than not. That said, the API is solid and the [documentation for it](https://learn.getgrav.org/api/) is legit.

That’s by no means an exhaustive list, but it's about all I’ve found so far. For your typical small to medium sized sites, Grav can be a really great solution that cuts out some of the overhead of a typical Drupal site. Recommended!