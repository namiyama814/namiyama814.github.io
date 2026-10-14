---
title: Development
description: From experimenting with AI to learning web development and using coding agents.
---

# Development

## First experiments: AI and a message board

I started experimenting with programming in my second year of junior high school after hearing that tools such as ChatGPT could write code.

One of my earliest attempts was a message board published using Google Apps Script's HTML hosting feature. I did not yet understand the difference between a server and a client. Posts were stored in the browser's local storage, so users could not actually share messages with one another.

That experience made me realize I needed to learn the fundamentals, although I did not start studying systematically right away.

## Learning the fundamentals: ZEN Study

In my third year of junior high school, I gained early access to ZEN Study through an enrollment benefit for the N High School Group. I worked through its web application development course from November to the following March.

| Course | Main topics |
| --- | --- |
| Web Application Development 1 | HTML, CSS, static hosting with GitHub Pages |
| Web Application Development 2 | Linux, Git, Docker, Node.js, asynchronous processing, a Slack bot |
| Web Application Development 3 | HTTP, deployment, cookies, authentication, databases, basic security |
| Web Application Development 4 | Web frameworks, GitHub Apps, CI/CD, data modeling, a scheduling service |

Alongside the course, I made small web applications of my own. There was also supplementary material about React and Next.js, but I did not study those sections as thoroughly at the time.

## What I wanted to build: Anzdrop

Even before I understood much about programming, I was interested in file-transfer services such as Fileforce and GigaFile.

I wondered whether I could build something I would want to use myself by improving the encryption approach and usability. That was the starting point for Anzdrop. It describes the motivation behind the project, not a verified claim that it is more secure than existing services.

## From chat-based AI to coding agents

At first, I used free chat-based AI tools to generate code, then manually copied and pasted it into the project. This was tedious. Long conversations also led to context limitations, repeated answers, and changing implementation plans.

Later, tools such as Claude Code and Codex changed the workflow. Some tasks that had previously taken me around two weeks could be completed in about ten minutes. That is my experience with specific tasks, not a general benchmark.

## Current workflow

I frequently use TypeScript, Hono, Next.js, and Astro.

I do not always follow a rigid planning or architecture process, and sometimes work out details while building. I do make a point of checking functionality by using the application myself in a browser.

When contributing to open source, I want to focus on changes that matter to users and maintainers rather than simply increasing my PR count. See [Open Source](/en/oss) for details.
