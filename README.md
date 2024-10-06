# Learning Journal

Prototype of a responsive layout for a blog / learning journal. Built with HTML, CSS, and JavaScript for the Scrimba front-end developer path. Used as a learning exercise to practice CSS Grid layouts.

![Journal Screenshot](images/journal-animation.gif)

## Features

- Responsive layout for mobile and desktop
- Article metadata dynamically loaded and rendered from JS
- Main article list + an about me page that re-uses the same article rendering logic

## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

- Uses CSS grid to support mobile and desktop viewport sizes
- Factors header/footer/article into reusable JS modules to not repeat code across index and about-me pages

## Files

- `index.html`: The main HTML structure
- `style.css`: Styles for the menu application
- `main.js`: JavaScript for dynamically rendering blog posts from a file [not yet implemented]
- `articles.js`: Rendering logic for article data
- `article-data.js`: Article data used to render the site
- `about-me.html`: Extra page to demonstrate reusability of "recent articles" rendering code