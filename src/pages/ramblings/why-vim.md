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

To take it a step further, you can even use vim key binding in Firefox, Chrome, bash, Thunderbird, etc. [More about that at StackOverflow](https://t.umblr.com/redirect?z=http%3A%2F%2Fstackoverflow.com%2Fquestions%2F826208%2Fmaking-vim-ubiquitous&t=MTRkYTI0MGI0OGM0NzFmMGE5OTIwYmIwNDAwN2NjZDM0NTZiMDE2MCxGd29ydVhOMA%3D%3D&b=t%3Ai2lWvbwQiOie1HtwYcazfA&p=http%3A%2F%2Fmikethecoder.tumblr.com%2Fpost%2F2844287679%2Fwhy-use-vim&m=1). It has a decades-long history and tons of fans, so you start to find that almost anything you do on a computer can be done in a vim-like fashion.

### Vim is lightweight

Eclipse is a beast. Aptana’s right there with it. Netbeans isn’t much better. I found myself using Gedit for about a year just because it had a decent feature set (with plugins, that is) without feeling like a wildebeest. Then I made my way to Komodo Edit, which was dangerously close to wildebeest zone, but not quite there.

Vim starts up immediately and leaves a teeny tiny footprint. Maybe this isn’t important to some, but it really makes me happy.

### Vim has everything I wanted in an IDE

One of the main things that stopped me from giving vim a serious look for so long is the false belief that it was just a simple editor with some crazy key bindings. Turns out, I couldn’t be further from the truth. After just a couple days of using vim, I had set up an environment with:

* Tab autocomplete (for both project functions and language functions) complete with a function definition popup
* The ability to jump from function call to function declaration and back easily
* A sidebar function outline, automatic syntax checking (even including JS using JSLint and HTML using Tidy)
* Spell check (for typing up blog posts like this one)
* Tabs for switching files (although it seems basic, I was worried about using multiple files in vim, but it’s really great)
* Project search (including replace and regexp support)
* Smart indenting and auto-indent support
* Just about any other IDE goodie that I wanted.

I really can’t think of anything I’m missing now that I would have with a different setup.

### Vim has some really great plugins

I’ve found the plugin selection for vim to be a cut above that of most other editors. Some of my favorites are:

* [NERDCommenter](https://t.umblr.com/redirect?z=http%3A%2F%2Fwww.vim.org%2Fscripts%2Fscript.php%3Fscript_id%3D1218&t=YzNlOWNhZmZiOTA1Y2JiZDVkNzEzMWIwYTRiOWRhNDVlYTU4YTIzZCxGd29ydVhOMA%3D%3D&b=t%3Ai2lWvbwQiOie1HtwYcazfA&p=http%3A%2F%2Fmikethecoder.tumblr.com%2Fpost%2F2844287679%2Fwhy-use-vim&m=1) \- Comment out lines/chunks/selections of code in many languages, with your choice of comment types.
* [Gist](https://t.umblr.com/redirect?z=http%3A%2F%2Fwww.vim.org%2Fscripts%2Fscript.php%3Fscript_id%3D2423&t=Yjc5MGY2OGNmYjg4NTU3MDZhNWYxZDJmYzQ1N2RhZjJlMTU5NTkyNSxGd29ydVhOMA%3D%3D&b=t%3Ai2lWvbwQiOie1HtwYcazfA&p=http%3A%2F%2Fmikethecoder.tumblr.com%2Fpost%2F2844287679%2Fwhy-use-vim&m=1) \- Create a GitHub Gist out of the document or selection. This is really, really awesome for me as I tend to send code a lot in IRC.
* [Syntastic](https://t.umblr.com/redirect?z=http%3A%2F%2Fwww.vim.org%2Fscripts%2Fscript.php%3Fscript_id%3D2736&t=ZjkwY2Y5YjAxNTgxZDVhNWI2Y2MwN2VmNjMwNzc0MDdiNjg4YTZhMyxGd29ydVhOMA%3D%3D&b=t%3Ai2lWvbwQiOie1HtwYcazfA&p=http%3A%2F%2Fmikethecoder.tumblr.com%2Fpost%2F2844287679%2Fwhy-use-vim&m=1) \- Automatic syntax checking for many languages. Opens errors up in a split window, highlights problematic lines, lets you jump from error to error, etc.
* [Command-T](https://t.umblr.com/redirect?z=http%3A%2F%2Fwww.vim.org%2Fscripts%2Fscript.php%3Fscript_id%3D3025&t=NTE0ZmZmMTEyMTU0MTM5OWY3Y2ViODA0ZGNmYTQxYmEzOGY5ZWM5YyxGd29ydVhOMA%3D%3D&b=t%3Ai2lWvbwQiOie1HtwYcazfA&p=http%3A%2F%2Fmikethecoder.tumblr.com%2Fpost%2F2844287679%2Fwhy-use-vim&m=1) \- Quickly open project files by typing any part of the filename/path. Named “Command-T” after the keyboard combo in Textmate which does the same. Much faster than using tree-based sidebar project file lists for me.
* [Zen Coding](https://t.umblr.com/redirect?z=http%3A%2F%2Fwww.vim.org%2Fscripts%2Fscript.php%3Fscript_id%3D2981&t=YmNhNmFiYzM3MzdmMzdjNjUwYmZjMTM4NGRhNGUxMTRhYTIwOTY1OSxGd29ydVhOMA%3D%3D&b=t%3Ai2lWvbwQiOie1HtwYcazfA&p=http%3A%2F%2Fmikethecoder.tumblr.com%2Fpost%2F2844287679%2Fwhy-use-vim&m=1) \- Vim support for the amazing Zen Coding HTML/CSS shorthand expander.
* [Taglist](https://t.umblr.com/redirect?z=http%3A%2F%2Fwww.vim.org%2Fscripts%2Fscript.php%3Fscript_id%3D273&t=Nzk4MGY3NTJlZGNjN2UxM2EwOWU0YzFkZWVlYzlkYTExM2RiYzUyMyxGd29ydVhOMA%3D%3D&b=t%3Ai2lWvbwQiOie1HtwYcazfA&p=http%3A%2F%2Fmikethecoder.tumblr.com%2Fpost%2F2844287679%2Fwhy-use-vim&m=1) \- Displays a toggle-able sidebar of project or current file functions/variables for easy jumping.
* [Matchit](https://t.umblr.com/redirect?z=http%3A%2F%2Fwww.vim.org%2Fscripts%2Fscript.php%3Fscript_id%3D39&t=MjVmZDRiNzBkYTQwYTM3ZDNlZDYyYTQ3ZjM5MTA2ZjI3MWZlMjVmMSxGd29ydVhOMA%3D%3D&b=t%3Ai2lWvbwQiOie1HtwYcazfA&p=http%3A%2F%2Fmikethecoder.tumblr.com%2Fpost%2F2844287679%2Fwhy-use-vim&m=1) \- Lets you type % to match more than just the vim default of single characters (like if you want to jump from an HTML opening tag to an HTML closing tag, for example).

### Vim’s modal editing really opens doors for amazing things

This is the main thing that keeps vim users happy. Vim has a “keep your hands on the home row” philosophy, and the only way that’s really possible is by making the main keyboard keys do more than just type letters. So, because of that, you have your regular old insert mode (same as other editors), but you also have a “command mode” that lets typing things execute commands rather than inserting text. Here are a few examples:

* Type `d$` to delete everything from the cursor position to the end of the line (d = delete and $ = end of line)
* Type `o` to create a new line below the current line and enter insert mode on that line.
* Type `ci"` to delete everything inside double quotes and enter insert mode (c = change, i = inside, and “ = what you want to change inside of)
* Type `gg=G` to autoindent the entire file (gg = top of file, ”=“ = autoindent, and G = end of file).

This is crazy for awhile, but then it starts to not seem so crazy, then it starts to actually seem pretty sane, then it becomes amazing. For a quick intro to vim’s commands, type the `vimtutor` command at a terminal and go through that - it only takes about 10-15 minutes.

### Vim is fun to use

All of this adds up to a really enjoyable experience. You have a lightweight, free, feature-rich, customizable editor that’s everywhere and lets you get crap done more quickly. I’m glad I gave it a shot.
