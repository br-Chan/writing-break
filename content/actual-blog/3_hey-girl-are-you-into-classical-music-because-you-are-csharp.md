---
title: Hey girl are you into classical music, because you are C#!
description: 
date: 2026-07-11 17:51:00
tags: tech-talk
noToc: false
---

## What is this?

As this writing blog nears its 1-year anniversary, I look back and appreciate that my writing skills have improved so much. However, I still find it difficult to give the software engineering part of my mind a voice. I'm a software engineering student, so being able to describe problems, discuss ideas and diagnose road blocks is super important. I think that's something I haven't been practicing very much.

So I've decided to chronicle some of my coding escapades, officially combining my writing hobby with my coding hobby! With any luck, I'll improve my softeng skills and my chances on the job interview stage in one fell swoop.

A couple days ago I began my latest personal project: a full-stack web development project that I intend to use to show off what I've learned about software development so far, as well as to add C# and ASP.NET to my toolbelt. I'll keep the purpose of the application fairly on the down-low for now, but for the sake of context let's say I want to keep track of all my friends in one handy dandy place, and get right into the tech talk.

## Architecture

I went for a monorepo (read: monolith) in this project because I'm fairly used to it and I enjoy the convenience of keeping everything in one repository for the purpose of a personal project.

I used yarn workspaces in my internship in the summer of '24, which was an... Interesting experience. Many hard times were had trying to ensure correct typing and intellisense across packages. But I certainly reaped the benefits of it. When I was a web developer at WDCC last year, our [repository](https://github.com/UoaWDCC/uabc-web) was also a monorepo, with the frontend and backend contained in an `apps` directory and shared code in a `packages` directory (types, schemas, UI, etc.). And in our Part IV Project this year, my partner Daniel also set up the repository as a monorepo.

Speaking of the Part IV Project, the tech stack there is fairly similar to what I intended to use for my own project: an ASP.NET backend and a Vite + React frontend with Tanstack Router and Query. I shy away from Next.js these days, because I see no use for many of its features (such as SSR). And it goes without saying that I can't learn ASP.NET if I'm using a full-stack framework! When I built my [portfolio website](https://br-chan.github.io/) last year, I went for Vite + React and Tanstack Router to achieve a very comfortable experience without using a nuke on a peanut shell.

## Frontend Tech Stack

Speaking of peanut shells, setting up these things is peanuts for me now. I remember in 2024 when my friend Thomas dropped the word "boilerplate" and I had no idea what that meant. Now it's an integral part of my lexicon.

There's something I find very relaxing about setting up boilerplate. It's like making your bed, or doing the dishes. It's a simple kind of monotony that gives you the small joys in life.

<img src="/actual-blog/img/3_frontend-boilerplate.png" alt="Frontend peanuts">

Here's the tech stack at the end of day 1:

### :Tanstack Router

I'm listing this first because I used its CLI to set up the boilerplate:

🔥 `pnpx @tanstack/cli create frontend --router-only` 🔥

This set up literally all other dependencies other than the [:ShadCN](#ShadCN) configs and Tanstack Query (more on that in the next post).

Steered clear from using Tanstack's encompassing framework called [Tanstack Start](https://tanstack.com/start/latest), because that sounded exactly like what I was trying to get away from when choosing not to use Next.js. I like Tanstack, but not THAT much. (*looks quizzically at [Tanstack AI](https://tanstack.com/ai/latest)*)

### :Vite + React

I don't know why I say "Vite + React" when simply "React" would do. I think it's because I need to specify I'm not using Next.js or (*gulp*) create-react-app.

Vite is a fun build tool, and I'm happy it's become so popular.

### :Tailwind CSS

I know a couple folks in the tech interview space who *always* ask: why does one use Tailwind CSS?

To which my answer is that I LIKE IT. We could go on and on about the technical reasons: all the classes get scanned and compiled into a single CSS file that only has the CSS you need, it's super fast, you can do cool theming and variable shenanigans and yada yada ya. To me, the biggest benefit of using Tailwind CSS is that it's easy on the mind. The CSS stays on the same file as the rest of your HTML and TypeScript -- and even better, it's attached to precisely the HTML element it's used for.

My mind finds Tailwind classes so much easier to parse and understand. Reusability isn't even an issue because React promotes modularity and handles what Tailwind CSS lacks: if you find yourself repeating the same Tailwind CSS in multiple classes, the fault might be on how you're designing your components.

Although some might have a different opinion altogether...

<img src="/actual-blog/img/3_no-css.png" alt="respectfully, no css ~ Thomas Dickson">

### :ShadCN

I've seen some rebuttals to ShadCN's widespread usage, and I do agree with them. However, this project's learning goals are centred on the backend rather than the frontend, so I decided to stick with what I've already used.

### :Biome

I always opt for Biome instead of ESLint + Prettier these days. It was introduced to me last year, and I will now die on this hill. It's infinitely easier to set up and configure, and I readily enjoy their default rules. I've had essentially zero trouble with it (other than setting up the VS Code extension to run lint on save, but ultimately the Biome config just has to sit in the root directory and you're smooth sailing after that).

## ASP.NET Antics

To boil down the experience to a couple words: wow it was easy. I tend to find learning completely new techs rather confusing, and I spend a day just beginning to understand it -- as is the software engineering way. But dipping my toes into dotnet was like slipping on a copy of my favourite shoes. C# feels like Java's brother from another mother, and JavaScript's cool uncle. ASP.NET helps set up the boilerplate for you with its CLI and gives you a smooch on your cheek while their at it.

Maybe it's just a testament to how far I've come since I started this software engineering journey almost 4 years ago -- I've grown a lot in such a short time, and I'm able to pick these things up much more easily now. I should probably give that part of me more love.

I followed the tutorial to build a "minimal API" ASP.NET backend, and I silently thought to myself when I could start building a controller for the API.

Cue the realisation that there is a completely other strat called controller-based API that I should be using instead. Fortunately, I barely had to start from scratch because the aforementioned dotnet CLI is a godsend.

I created a Friend model that contained only an id and a name, to be expanded on later. Following the official tutorial, I created a DbContext for it and added it to the Program.cs -- for now it's hooked up to an in-memory database. Then all I had to do was run a dotnet command and the controller was built for me!

Later on I would go back and make changes to this auto-generated controller, and in the further future I want to think about creating services. But I'll cross that bridge when I get there -- I think it's good not to get too bogged down by architectural decisions and just make something that works first.

A quick aside: I find it very interesting that C# prefers Title Case in their file and folder naming conventions, which isn't something I've seen in any other convention. Took a bit to get used to, but it's been growing on me.

<img src="/actual-blog/img/3_backend-boilerplate.png" alt="Backend brazil nuts">

Here is where I stopped playing around with C# and turned in for the night. The next day, I'd return to the frontend and wonder how I was going to hook up this shiny new backend. Enter: Tanstack Query. More on that in the next Real™ Blog Post.
