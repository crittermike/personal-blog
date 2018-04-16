---
templateKey: blog-post
title: AngularJS's declarative markup
date: 2013-04-11
description: It's really not as yucky as it looks.
tags:
  - development
  - frontend
---

"Every time a discussion of AngularJS pops up, [someone](http://www.reddit.com/r/programming/comments/y6vw0/angularjs_an_awesome_javascript_library/c5sygyn) [inevitably](https://news.ycombinator.com/item?id=5526058) [brings](https://news.ycombinator.com/item?id=4375821) [up](https://news.ycombinator.com/item?id=5169170) the fact that Angular wants you to add custom ng-* attributes to your markup. They say that we worked so hard to get away from stuff like:

```html
<a onclick="whatever()" href="#">Click me</a>
```

...by replacing it with jQuery callbacks declared in a separate JS file, and now Angular is trying to bring back the old busted style by using stuff like:

```html
<a ng-click="whatever()" href="#">Click me</a>
```

Here's why I think this is not a big deal.

### You can make it conform to the HTML5 spec

One of the most common problems people have with this is that ng-* is not a valid HTML attribute. The quick and easy answer to that is that Angular also accepts data-ng-* which **is** HTML5 conformant. It's just not as widely used.

### HTML is already behavior-oriented.

The argument that JS behavior for user actions should be separated from markup doesn't make much logical sense to me, because HTML itself is built around the notion of behavior.

Each link has an href that says what happens when you click it. Each form has an action that says what happens when you submit it. Select dropdowns open when you click them. Radio buttons and checkboxes toggle when you select them. Saying that HTML and HTTP actions are kosher but JS actions are not seems arbitrary to me.

### A document vs. an application

I think we can all agree that separating content from presentation and logic is nice and recommended in a **document**.

However, Angular applications are not documents, they are applications. They are dynamic and they live and breath and they respond to user input. This is a paradigm shift and as such it should be treated with different rules and different best practices.

(Yes, all HTML pages are technically documents, but you know what I mean).

### It's not global

One reason why onclick="whatever()" is so frowned upon is that the whatever() function had to be global for it to be recognized.

With Angular's ng-click="whatever()" approach, whatever() is just a function on the $scope object for whatever controller that markup is using, which means you're not throwing everything into the global scope. This has the added benefit of making it easily testable (testability is very highly valued in the Angular community).

### It has to live somewhere

An event listener by definition **requires** at least some DOM and at least some JS so that it can tie the two together. In the world of jQuery callbacks you're adding DOM to your JS (in the form of selectors). In the world of Angular you're adding JS to your DOM. Either way you're coupling them, which brings us to...

### The alternative is no picnic

Doing it the jQuery callback way means matching behavior up to jQuery selectors, which means that your behavior depends on whichever class or ID or decided to assign to your markup. This means that a class change that might just be for CSS purposes could break your JS in non-obvious ways. This is a refactoring nightmare and will make scare you away from making any edits to your markup when making design changes.

Plus, when the behavior is defined in the markup, you can easily tell what is happening when you click this or hover that. If you see ng-click="whatever" then you know you can grep your JS for whatever() to find the function's definition.

On the other hand, if your jQuery callbacks are defined in one of 10 or 20 JS files and you have no idea which selector the JS is using to grep for it, finding the code you're looking for can be tough. It usually involves setting an event breakpoint in the browser's dev tools and stepping through the debugger until you see it, which is not my idea of a good time.

### Did I miss anything?

[Tweet me](http://twitter.com/mcrittenden) if so."