import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import Shelf from './Shelf'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: {},
    showSearchPage: false,
    searchBook: []
  }

  refresh = () => {
    let data = BooksAPI.getAll();
    data.then((response) => {
      let books = {
        'currently_reading': response.filter((book) => {
          return book.shelf === 'currentlyReading'
        }),
        'want_to_read': response.filter((book) => {
          return book.shelf === 'wantToRead'
        }),
        'read': response.filter((book) => {
          return book.shelf === 'read'
        }),
      }
      this.setState({'books': books})
    });
  }

  clearSearch = () => {
    this.setState({'searchBook': []});
  }

  componentWillMount() {
    this.refresh()
  }

  searchBooks = (word) => {
    const search = BooksAPI.search(word);
    search.then((response) => {
      this.setState({'searchBook': response})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <Search clearSearch={this.clearSearch} searchBooks={this.searchBooks} searchBook={this.state.searchBook} refresh={this.refresh}/>
        )}/>
      <Route exact path='/' render={() => (
        <div className="list-books">
          <Header title="MyReads" />
          <Shelf titleSection="Currently Reading" shelf="currently_reading" books={this.state.books} refresh={this.refresh}/>
          <Shelf titleSection="Want to Read" shelf="want_to_read" books={this.state.books} refresh={this.refresh}/>
          <Shelf titleSection="Read" shelf="read" books={this.state.books} refresh={this.refresh}/>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      )}/>
  </div>
    )
  }
}

export default BooksApp
