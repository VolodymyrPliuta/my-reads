# MyReads Project

This is an assessment project for a [Front-End Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) program.. It is a book app that allows you to search for any books hosted on a Back-End API and add it to any of three shelves: "Currently Reading", "Want to Read", "Read". As well you can move books from shelf to shelf and just remove them from the shelves.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## Prerequisites

Install [Node.js](https://nodejs.org/en/)

## Installation

* to clone a project from [GitHub](git@github.com:VolodymyrPliuta/Book-read-app.git), run in your terminal
    ```
   git clone git@github.com:VolodymyrPliuta/Book-read-app.git
   ```
* go to project directory
  ```
  cd Book-read-app
  ```
* install all dependencies
   ```
   npm install
   ```
* start the development server with `npm start`
   ```
   npm start
   ```

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html #
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── Header.js # Header component of the app.
    ├── Book.js # This component represents a book.
    ├── Shelf.js # Shelf component.
    ├── ShelfChanger.js # Represents a button for changing shelves.
    ├── Search.js # Search component searches retrieves books from Back-End API.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

A backend serveri is provided for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

## Contributing

Anybody is welcome to contribute to this project

![MyReads](https://github.com/VolodymyrPliuta/MyReads/blob/master/img/myreads.png)
