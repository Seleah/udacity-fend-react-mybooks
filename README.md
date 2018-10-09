# MyReads Project

This is my version of a project assignment for the Front End Nanodegree Program offered by Udacity called MyReads. This project is to practice with React to create a single page app with routes and do so with components that are brought together to create the end project. I added a star rating to each book that has one, and I would like to create a new view for seeing details on a book when clicked.

Check it out, play around with it, and I hope you enjoy!

## TL;DR

* install all project dependencies with `npm install`
* install 'react-router-dom' with `npm install react-router-dom`
* start the development server with `npm start`

## Directory
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles.
    ├── App.js # This is the root.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   ├── arrow-drop-down.svg
    │   └── star.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    └── components # Directory added to contain and organize the components added to complete this project
        ├── Book.js
        ├── Shelf.js
        └── routes # Directory containing views
            ├── Home.js # Main view, containing three shelves with books that can be moved
            └── Search.js # Search view, with a search bar to use for finding books to add to a shelf

```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

# Credit
Project created with the starter code provided by Udacity [here](https://github.com/udacity/reactnd-project-myreads-starter) and the help of [this walkthrough](https://www.youtube.com/watch?v=acJHkd6K5kI&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s&index=8), done by Udacity Project Coach, Ryan Waite.