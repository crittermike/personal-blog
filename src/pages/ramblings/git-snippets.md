---
templateKey: blog-post
title: A collection of random useful Git snippets
date: 2017-05-18
description: Because git is just so weird.
tags:
  - development
  - tools
---

This is the post that I'll use as a living dumping ground for random useful git snippets that I come across. Enjoy!

Use git blame to see when a change was REALLY made, as opposed to just a whitespace or copy/paste commit:

```bash
git blame -w # ignores white space
git blame -M # ignores moving text
git blame -C # ignores moving text into other files
```

Fetch a file from another branch without switching branches:

```bash
git checkout <OTHER_BRANCH> -- path/to/file.txt
```

Delete already-merged git branches (except for specific ones you name):

```bash
git branch --merged | grep -v "\*" | grep -v master | grep -v develop | grep -v release | xargs -n 1 git branch -d
```

View the git log for a specific line or number of lines in a file:

```bash
git log -L 1,1:some-file.txt
```

Search all commit diffs for a specific string - both regex and non-regex versions

```bash
git rev-list --all | xargs git grep '<YOUR REGEX>' # regex
git rev-list --all | xargs git grep -F '<YOUR STRING>' # non-regex
```

View a diff on a specific file between the current branch and another branch

```bash
git diff some-other-branch some-filename.js
```

Move your last commit to a different branch, for when you accidentally commit to the wrong branch

```bash
# undo the last commit, but leave the changes available
git reset HEAD~ --soft
git add .
git stash

# move to the correct branch
git checkout name-of-the-correct-branch
git stash pop
git add .
git commit -m "your message here"

# now your changes are on the correct branch
```
Delete all untracked files, but do a dry run first:

```bash
git clean -fn
```

List the most recently updated branches:

```bash
git for-each-ref --sort=-committerdate refs/heads/ | head
```
