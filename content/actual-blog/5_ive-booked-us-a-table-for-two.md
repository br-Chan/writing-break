---
title: I've booked us a Table for two :O
description:
date: 2026-07-25 23:50:00
tags: tech-talk
noToc: false
---

So, here's (finally) the context for this side project of mine: I want an aide to help me keep in touch with my friends better!

Over the course of my 4-year degree, I've met TONS of knew people. Before university, I was much more introverted and I did have friends (shout out to the man KNW), but I had a lot of trouble meeting new people. My first year of uni changed all that, and it was an exponential growth from there.

[:Pebbling](https://en.wikipedia.org/wiki/Pebbling) is a term used for how penguins present pebbles to their loved ones to show their love, and it's more recently become a term to refer to how [:humans send each other small things](https://en.wikipedia.org/wiki/Pebbling#Pebbling_in_humans) like memes and videos for much the same reason.

I want an application that will help me make sure that I'm keeping in touch with all the people I want to keep in touch with -- whether that's through a small catch up, random question, a physical hangout, a game session, or even just a meme. So it sort of transcends "friends", and more about just the people that you know in general.

## The Frontend, Finally

First off, I had to set up some CORS stuff so that the backend and frontend could properly talk to each other:

```cs
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: "AllowViteDevServer",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});
```

And once I'd added that to my `Program.cs`, we were ready to rumble.

## :Fun Fact about CORS and Nutshell

For anyone not reading this post on [:my actual site](https://br-chan.github.io/writing-break/actual-blog/5_ive-booked-us-a-table-for-two/), I use this library called Nutshell, made by Niki "commits her node modules" Case. It allows links to be opened up as little panels on the same page, rather than opened up in a new page. These links are denoted by the colons prepending them. But I can only link to webpages that have [:CORS enabled](https://ncase.me/nutshell/#CaveatOnLinking) or have Nutshell installed.

## All Roads lead to TanStack

What I want: to show the friends database table as a table in the frontend UI. I knew that there was this library called TanStack Table, but since I'd already used both TanStack's Router and Query libraries I decided to stay away from a third library. I decided to look at ShadCN's documentation on building a [data table](https://ui.shadcn.com/docs/components/base/data-table)...

And the guide suggested using TanStack Table ._.

Oookay... Surely a third TanStack pancake wouldn't hurt?

Admittedly, it was pretty nice.

I basically followed the ShadCN guide that I linked to above, but without some of the optional steps that I didn't want to implement.

1. Create a basic table component (installed by ShadCN or made by yourself)
2. Create a `columns` list of the type `ColumnDef<Friend>[]`, courtesy of TanStack Table. This is a list for all the column names in your table -- at the moment that would be ID and name.
3. Create a `<DataTable />` component to render the basic table with the columns we configured, and call the `useReactTable` hook that gives us some real juicy bits to fiddle with (that sentence sounded better in my head).
4. The table is basically done, but with `useReactTable` you can enable things like row actions (giving you an Actions cell at the end of each row), pagination, sorting (I made the column headers sort names alphabetically), filtering (with a text input field), row selection, and even column visibility toggling.

Ultimately, TanStack Table really blew me away with how much it actually let you do. And all without being 'headless' if you know what I mean -- it's completely table-agnostic in the sense that the library doesn't implement any sort of table. You do that, and then TanStack Table handles the rest.

If you don't care about anything in step 4, then maybe you won't see much use for it. But I still feel like I'm scratching the surface here with what you can do.

Here's what I had after some tinkering!

<img src="/actual-blog/img/5_friends-table.png" alt="The data table of friends">

This showed that I had indeed set everything up in the past 2 posts correctly and friends (created with Scalar for now) can be fetched successfully. Although note I did do a sanity check to just spit out friends' names as text before starting this whole thing, which led to me diagnosing the aforementioned CORS issue.

## Routes and Penguins

My initial idea for the frontend page here is to show the table, always, on the lefthand side, and if you click on a friend it'll pop up some details on the righthand side (as well as the option to edit the friend).

I decided to do this by relocating the data table into the layout of this route. In Next.js, this is the `layout.tsx`. In TanStack Router, if you're doing file-based routing with directories, this is `<your-route>/route.tsx`.

<img src="/actual-blog/img/5_route-tsx.png" alt="The layout with the table">

I learned some cool frontend structure tips from my friend Daniel: always keep the page files as clean as possible and extract any logic to components. I found that whatever code he touched resulted in very easily parsable tsx like the above. In fact, he'd probably extract the outer div into its own component that was just `<div className="">{children}</div>`. He was that ruthless.

I have an index.tsx file that replaces the Outlet with a simple empty state (WIP), and then a $penguinId.tsx for a dynamic route that changes what content is fetched for the Outlet. This has a very important benefit of the state being kept in the URL rather than somewhere mysterious in React (e.g. useState or a state library).

<img src="/actual-blog/img/5_fetched-friend-frontend.png" alt="The friend fetched on the frontend">

The url for this is /friend/1, so the state is tracked and you can copy-paste this link to always get back to what you expect to see.

One last thing I did was switch the term "friend" to "penguin". We must be far more general if I want this application to be about keeping in touch with all the people I want to keep in touch with, not just friends.

## Wait, so what about openapi-react-query?

I promised I'd talk about this. I did do a lot of experimentation, but essentially this library is what you *should* use if you're using openapi-typescript's libraries and also TanStack Query. Otherwise you get duplication of some properties, crucially errors and I believe loading states. I haven't experimented as to which one doesn't get touched, but I believe openapi-typescript prevails over TanStack.

I was okay with using openapi-react-query -- in fact, it actually negates the need to have service functions! You can safely pass in the API path into the wrappers that this library gives you, and it just works as intended. Happy happy joy joy.

Except it's not. Because it's a wrapper that *completely replaces* TanStack Query. And that means it naturally lags behind TanStack and isn't as up to date. The latest version of openapi-react-query was February this year. That's a lot of updates and I'm not sure I want to be left behind that much. Is the effect negligible? Perhaps. But it's given me a lot to think about with not a clear idea of what's the right solution.

I'll have to think on that one. In the meantime, work progresses once more...
