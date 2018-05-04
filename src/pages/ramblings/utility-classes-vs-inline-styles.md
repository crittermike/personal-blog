---
templateKey: blog-post
title: Utility classes vs. inline styles
date: 2018-05-04
description: Written the day he passed away
tags:
  - development
  - css
---

One of the most common arguments against functional CSS aka atomic CSS aka utility-first CSS, such as [Tachyons](http://tachyons.io/) or [Tailwind](https://tailwindcss.com/), is that it's no different than just writing inline styles on everything. Here's my take on why that's not true.

## Utility classes are pre-defined 

With inline styles, you can do anything you want in terms of colors, font stacks, font sizes, spacing, etc. With utility classes, those things are pre-defined so you have some enforced consistency by reusing them. This prevents you from having 82 shades of blue on your website as it evolves over time.

## Utility classes support media queries

This means that utility classes support responsive design among all of the other power that media queries bring. Inline styles are just always active, no matter what.

## Utility classes don't cause specificity issues 

Inline styles trump stylesheets. With utility classes, it's still just regular old CSS so the normal specificity rules still apply. 

## Utility classes style multiple elements

Inline styles are 1 to 1, meaning they can only style one element at a time. Classes style many elements at a time. This improves rendering speed.

## Utility classes are easier to type

This is a minor point, but once you get the hang of it, it's easier and faster to type `class="f-sm bg-blue"` than `style="font-size: 10px; background-color: #0000ff;"`.

## Utility classes respect print styles or disabling stylesheets

This is important for accessibility. Inline styles will stick around when printing pages, but utility classes can be set to be ignored when printing, or can respond differently when printing. 

Inline styles also stick around if the user disables stylesheets, which is confusing and annoying for any user who chooses to do that.

