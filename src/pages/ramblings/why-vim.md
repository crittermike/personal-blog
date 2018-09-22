---
title: Why would anyone use vim?
date: 2011-01-20
tags:
  - development
  - tools
---

(Note: this is a post for vim newbies. If you’re an experienced user, you won’t find anything new here)

I recently switched to vim full time after years of asking myself that question. It seemed like a huge percentage of the better hackers I came across used vim, but all I could see was “no mouse, no IDE goodies, no deal.” Why would anyone subject themselves to that? Well, turns out, here’s why:

### Vim is ubiquitous

For web developers who do a decent amount of SSH'ing and editing on a server somewhere, this is huge. Pretty much any Linux box you can find yourself in will have vim installed, and it’s a huge plus when that editor just happens to be the editor you use day in and day out and are comfortable with.

To take it a step further, you can even use vim key binding in Firefox, Chrome, bash, Thunderbird, etc. [Here's a nice list](https://xaizek.github.io/2016-08-13/big-list-of-vim-like-software/). It has a decades-long history and tons of fans, so you start to find that almost anything you do on a computer can be done in a vim-like fashion.

### Vim is lightweight

Vim starts up immediately and leaves a teeny tiny footprint. Maybe this isn’t important to some, but it really makes me happy.

Contrast this with the beastly modern IDEs or even the "lighter weight" text editors (Atom and VS Code especially, which are Electron-based) that take seconds to launch and gobble RAM. It's very refreshing.

### Vim has everything I wanted in an IDE

One of the main things that stopped me from giving vim a serious look for so long is the false belief that it was just a simple editor with some crazy key bindings. Turns out, I couldn’t be further from the truth. After just a couple days of using vim, I had set up an environment with:

- Tab autocomplete (for both project functions and language functions) complete with a function definition popup
- The ability to jump from function call to function declaration and back easily
- A sidebar function outline, automatic syntax checking (even including JS using JSLint and HTML using Tidy)
- Spell check (for typing up blog posts like this one)
- Tabs for switching files (although it seems basic, I was worried about using multiple files in vim, but it’s really great)
- Project search (including replace and regex support)
- Smart indenting and auto-indent support
- Just about any other IDE goodie that I wanted.

I really can’t think of anything I’m missing now that I would have with a different setup.

### Vim has some really great plugins

I’ve found the plugin selection for vim to be a cut above that of most other editors. Some of my favorites are:

- [Fugitive](https://github.com/tpope/vim-fugitive) \- A vim-based Git wrapper that lets you do most git things without leaving vim.
- [Syntastic](https://github.com/vim-syntastic/syntastic) \- Automatic syntax checking for many languages. Opens errors up in a split window, highlights problematic lines, lets you jump from error to error, etc.
- [Ctrl-P](https://github.com/kien/ctrlp.vim) \- Quickly open project files by typing any part of the filename/path. Much faster than using tree-based sidebar project file lists for me.
- [Gist](https://github.com/mattn/gist-vim) \- Create a GitHub Gist out of the document or selection. This is really, really awesome for me as I tend to send code a lot in IRC.
- [Tagbar](https://github.com/majutsushi/tagbar) \- Displays a toggle-able sidebar of project or current file functions/variables for easy jumping.
- [NERDCommenter](https://github.com/scrooloose/nerdcommenter) \- Comment out lines/chunks/selections of code in many languages, with your choice of comment types.
- [Emmet](https://github.com/mattn/emmet-vim) \- Vim support for the amazing HTML/CSS shorthand expander.

### Vim’s modal editing really opens doors for amazing things

This is the main thing that keeps vim users happy. Vim has a “keep your hands on the home row” philosophy, and the only way that’s really possible is by making the main keyboard keys do more than just type letters. So, because of that, you have your regular old insert mode (same as other editors), but you also have a “command mode” that lets typing things execute commands rather than inserting text. Here are a few examples:

- Type `d$` to delete everything from the cursor position to the end of the line (d = delete and $ = end of line)
- Type `o` to create a new line below the current line and enter insert mode on that line.
- Type `ci"` to delete everything inside double quotes and enter insert mode (c = change, i = inside, and “ = what you want to change inside of)
- Type `gg=G` to autoindent the entire file (gg = top of file, ”=“ = autoindent, and G = end of file).

This is crazy for awhile, but then it starts to not seem so crazy, then it starts to actually seem pretty sane, then it becomes amazing. For a quick intro to vim’s commands, type the `vimtutor` command at a terminal and go through that - it only takes about 10-15 minutes.

### Vim is fun to use

All of this adds up to a really enjoyable experience. You have a lightweight, free, feature-rich, customizable editor that’s everywhere and lets you get crap done more quickly. I’m glad I gave it a shot.
