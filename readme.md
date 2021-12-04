# About My Next.js Concept

My Next.js concept was inspired by my [WPNext-Theme](https://github.com/RecaMedia/wpnext-boilerplate) project which allows users to quickly arrange components within a page, while allowing me (as the developer) to quickly create tailored made components for my client per their request. This is a simple setup that can be expanded on for the use of Sitecore. You can also watch [my video demonstration](https://www.youtube.com/watch?v=swGBhaH4er4). What this demostrates is how a json file output by Sitecore can quickly instruct what components to load on the front-end using Next.js.

## Getting Started

You will need to run `npm install` within the root directory. Once completed with installation, use `npm run dev` to run locally. You can access the page via [http://localhost:4000](http://localhost:4000).

## Demo

To view how this demo works, you must pass the `api` URL parameter with a value of `1`, `2`, or `3`. This will determine which json file you wish to load on the page and render the selected components. You can modify the json files here: `/public/json/`. The components being rendered are available here: `/modules`.