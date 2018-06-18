---
templateKey: blog-post
title: In defense of Functional CSS
date: 2018-06-08
description: An attempted rebuttal to arguments against Functional CSS
tags:
  - development
  - tools
---

Functional CSS (or Atomic CSS, or Utility-first CSS) is the latest thing to have blown my mind. This post is my attempt to explain why I think it's amazing and why all of the common arguments against it are misguided or rooted in outdated ideas.

### What the heck is it?

Functional CSS basically means that you have a ton of tiny, single purpose classes that are named based on their visual function.

For example, instead of something like this:

```html
<div class="profile-card">
  ...
</div>

<style>
  .profile-card {
    padding: 20px;
    margin: 20px;
    color: #eee;
    background: #333;
    border: 1px solid #555;
  }
</style>
```

You'd instead just do this:

```html
<div class="m-5 p-5 text-gray-light bg-gray-darker border border-gray-light">
  ...
</div>
```

So instead of actually writing any CSS, you just apply the utility classes for each of the CSS rules that you would normally have written.

### But I don't want to sit there and write a bajillion utility classes

And you don't have to. Lots of frameworks exist, such as:

* [Tailwind](https://tailwindcss.com/) (my favorite)
* [Tachyons](http://tachyons.io/)
* [Basscss](http://basscss.com/)

There are also [lots more](https://css-tricks.com/need-css-utility-library/) if none of those are doing it for you.

### Isn't that basically the same thing as inline styles?

Not quite, for a few reasons:

* Inline styles don't respect media queries, which basically rules out responsive design
* Inline styles aren't limited to pre-defined options, meaning you can still end up with 90 different shades of blue)
* Inline styles cause specificity issues, since they trump separate stylesheets.
* Inline styles don't support print-specific styles.
* Inline styles can't apply to multiple elements. Utility classes can define `.bg-blue` once and have it apply to many things, which leads to shorter markup and quicker rendering speed.
* Inline styles are a pain to type. Compare `class="f-sm bg-blue"` to `style="font-size: 10px; background-color: #0000ff;"`.

Utility classes fix all of these things.

If, however, your objection to inline styles is that dirty up your markup or they go against your principles, then keep reading.

### What about separation of concerns and semantic class names?

This can be tough to get past, but let's think about it. First of all, let me be clear that I'm NOT suggesting we do away with semantic **markup**, meaning using the correct HTML elements. I'm talking about semantic **class names**, which are classes that describe what that element _is_ or _contains_ rather than what it looks like. With that in mind, first ask yourself if your class names are even semantic. If you're using presentational classes like `card` or `form__submit--disabled`, then they probably aren't.

If your classes ARE semantic, then why is this useful? Have you ever really looked at a thing with `class="profile-card"` and said "oh this is a profile card", when it wouldn't have been just as easy to tell that based on the context or what it contains?

If your answer is an emphatic "YES I HAVE!" then there's nothing stopping you from continuing to add those semantic classes, even if they're irrelevant for styling. You can still make the first class `profile-card` for your own sake, and follow it with the utility classes that do the styling. You can completely ignore the styling implications of the class names that you choose, because there are none.

As a side note, this approach can also help with debugging, for those situations where you see something broken in the browser and need to find out where in the codebase that thing is being defined. It's a lot easier to track down `profile-card` in your code than `bg-blue mt-5 w-50`, even though `profile-card` won't have any CSS attached to it.

I think that separation of concerns (i.e., the whole idea that the markup should be completely independent from the styling) is something that has been burned into our brains because of the history of CSS (trying to get people away from using tables, sites like CSS Zen Garden, etc.) and it's not necessarily very useful anymore. If you're skeptical, take some time and read [this post](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) which really was a light bulb for me.

### OK, but the DOM still looks like a dumpster fire

Again, this is tough to get past, but once you get used to it, there's a chance you might just learn to love it. That dumpster fire tells you exactly what something will look like, and doesn't give you any information you don't need.

Anyways, it looks better than it would if you were using many of the common CSS in JS solutions, which give you a ton of crazy randomly-generated class names.

### I don't want to have to repeat the same 20 classes on every single button

That's understandable. I will say that there's a chance that repeating those 20 classes can actually be somewhat valuable, because when you get into a situation where one of the buttons needs to have slightly more margin-top than the others, then it's easy to fix.

Also, if you find yourself in a situation where you're using the exact same classes in a bunch of different places, that's probably a DRY problem with repeated markup, and you should likely consider abstracting that into a reusable fragment or template so that you can define it in one place and just include it wherever you need it.

That said, for situations where you're sure that you need to reuse the exact same set of styles, and for whatever reason it doesn't make sense to abstract that into a reusable template, then some of the frameworks have solutions for this. Tailwind, for example, [allows creating components](https://tailwindcss.com/docs/extracting-components/) which are composed of utility classes. This allows you to do things like this:

```html
<button class="btn-blue">Button</button>

<style>
.btn-blue {
  @apply .bg-blue .text-white .font-bold .py-2 .px-4 .rounded;
}
.btn-blue:hover {
  @apply .bg-blue-dark;
}
</style>
```

Note that you can always combine component classes with utility classes for the pieces that do vary. So you can do things like:

```html
<button class="btn-blue mt-3">Button</button>
```

That'll give you all of the default classes for `btn-blue` in addition to adding a custom `margin-top` for this specific instance.

All that said, I don't necessarily love this approach because it can muddy the waters. You might end up in a place where lots of things use component classes and lots of things don't and you aren't really sure what the dividing line is. My suggestion is to only use this technique when you absolutely have to because the alternative would drive you crazy.

### Won't I end up with thousands of classes that I don't even need?

Since the framework generates so many classes, plus versions of those classes for hover state or responsive breakpoints, you really end up with a lot of classes unless you do something about it.

This may not be a huge deal, since (as an example), all of Tachyons is only [15kb when compressed and minified](https://medium.com/@philipardeljan/15kb-of-css-is-all-youll-ever-need-%EF%B8%8F-634da7258338), and most non-trivial sites have at least that size in custom CSS.

Either way, the frameworks have solutions for this too. Tachyons for example has [a generator](https://github.com/tachyons-css/generator) which allows you to specify which classes you need or don't need, and Tailwind has [configuration support](https://tailwindcss.com/docs/configuration) for it as well. For example, this allows you to say "I don't need responsive versions of box-shadow classes", or "I only need classes for these 4 colors."

### What if I need things (colors, fonts, padding options) that don't exist in the pre-made classes?

Frameworks to the rescue again. The same configuration options I mentioned above give you the ability to specify what you want your padding options to be, or which font families to use for which font stacks, or what your color options are, etc.

You can basically build your own list of utility classes, to the point that it's theoretically possible that you shouldn't need to write a single line of custom CSS.

### Ok fine, but what are the benefits?

There's really a lot to love here, I think.

* You don't have to write any CSS of your own (which, to me, is fantastic)
* You can likely build things faster (obviously non-scientific, but anecdotally I've seen many people confirm this)
* You don't ever have to think about naming things
* You can tell what something looks like by just reading the markup for it
* You don't ever have to worry that changing the styles for one thing will break something else (which may make visual regression testing irrelevant)
* You never have to deal with one instance of a thing needing a slightly different style than the other instances, which screws up your reusable classes.
* Your CSS always stays the same size rather than expanding over time
* It's easy to un-apply a style by just removing the class (as opposed to the traditional cascade where you typically have to override, adding even more CSS)
* Rendering speed performance is supposedly improved (though I have seen no proof of this)

### Still not convinced?

Here's a [giant list of links defending Functional CSS](https://johnpolacek.github.io/the-case-for-atomic-css/) that you may find interesting.

Also, feel free to [tweet at me](https://twitter.com/mcrittenden) and debate!
