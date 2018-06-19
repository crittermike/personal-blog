---
title: Marking Gmail read with Apps Script
date: 2013-05-09
tags:
  - tools
---

Recent versions of Android give you the ability to Archive an email right from the notification bar:

I use this like 30 times a day, for emails that I can tell from the subject that I don't need to read. It's awesome. The only issue is that these message stay unread, and seeing a bunch of unread messages in my archive or labels annoys me, so every morning I search "label:unread" and mark all as read. It's a total first world problem, but annoying nonetheless.

I've been looking for some sort of app or something to auto-mark-as-read any messages not in the inbox for months now. Then someone recently pointed me to [Google Apps Script](https://developers.google.com/apps-script/) and 10 minutes later I had a script running which automatically marks all archived messages as read every minute. I was blown away at how easy this was.

Here's how it's done.

1.  Head to [script.google.com](http://script.google.com) to start a script.
2.  Choose to create a script for Gmail in the little popup.
3.  Delete all the sample code it gives you.
4.  Replace it with this (written using [the API reference](https://developers.google.com/apps-script/reference/gmail/)):

        function markArchivedAsRead() {
          var threads = GmailApp.search('label:unread -label:inbox');
          GmailApp.markThreadsRead(threads);
        };

5.  Save the project with File > Save.
6.  Add a new version using File > Manage Versions and enter "initial version" then submit that.
7.  Do a test run using Run > markArchivedAsRead and be sure and authorize the app when it asks you to.
8.  Add a new trigger using Resource > Current Project's Triggers and choose to run the above function every minute (or hour or day or whatever if you want to be nice to Google's servers).
9.  Save the script again and exit. Don't worry, it will keep running.

And you're done. It will continue to run every minute until you stop it. How awesome is that?

**Update:** Some people are reporting an error which says "This operation can only be applied to at most 100 threads. (line 3, file "Code")". To fix this, you have to manually do a search for "is:unread" and mark all of them as read before running the script, so that it starts with a clean slate. The script can only process 100 threads per run, so if you give it more than 100 on the first run, that'll obviously bust it.

**Hey, maybe you should [follow me on Twitter](http://twitter.com/mcrittenden)!**
