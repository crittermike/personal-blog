---
templateKey: blog-post
title: JIRA ticket template in the 3 C's format
date: '2017-05-23T00:00:00-04:00'
description: >-
  A concise little template that you can copy and paste when creating JIRA
  tickets.
tags:
  - process
  - tools
---
If you've never heard of the 3 C's, here's [some context](https://www.agilealliance.org/glossary/three-cs/).

Basically, it's a strategy for writing issues/tickets that breaks them into the Card (user story), the Conversation (documentation and detailed requirements), and the Confirmation (testing steps and acceptance criteria).

Here's a concise little template that you can copy and paste when creating JIRA tickets.

-----

## h2. Card

Also known as the User Story. Explain the requirement in a sentence or two. This should just enough text to identify the requirement, including any crucial information about site/environment.

> As a [user role], I want [function], so that [value].

If this doesn't fit as a user story (e.g., a bug ticket), that's fine, just explain it as a concise sentence.

## h2. Conversation

This should answer the question "What are all the things someone would need to know in order to build this?" 

Attachments such as wireframes, screenshots, and other documentation may be referenced here. Implementation notes, if necessary, should go here as well.

## h2. Confirmation

This should include both Acceptance Criteria for when a feature can be considered done and the Testing Steps on how to confirm that. Any other information required for testing should go here as well.

-----

Note that there's nothing really JIRA-specific about this besides the fact that the headings start with "h2." which is JIRA's formatting. Feel free to steal it and adapt it however you'd like if it's useful to you.

[Here it is as a Gist as well](https://gist.github.com/mikecrittenden/6d9835907e3244904e5adb0094cd4972).
