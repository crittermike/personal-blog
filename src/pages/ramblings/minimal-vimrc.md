---
templateKey: blog-post
title: A minimal .vimrc file
date: 2017-05-24
description: The bare minimum vim config, travel sized for your convenience.
tags:
  - tools
  - development
---

"For those of you who work on a lot of unfamiliar servers, you probably use vim a good bit. It can be useful to have a simple, small .vimrc file that you can just copy to wherever to set some sane defaults.

Here's the one I use for that. It fixes indenting, syntax highlighting, and a couple other small things, and that's it. 

```vim
set backspace=2         " backspace in insert mode works like normal editor
set shiftwidth=2        " indent by 2 spaces when auto-indenting
set softtabstop=2       " indent by 2 spaces when hitting tab
syntax on               " syntax highlighting
filetype indent on      " activates indenting for files
set autoindent          " auto indenting
set number              " line numbers
colorscheme desert      " colorscheme desert
set nobackup            " get rid of anoying ~file
```