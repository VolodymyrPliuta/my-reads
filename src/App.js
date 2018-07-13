import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import Shelf from './Shelf'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: {},
    showSearchPage: false,
    searchBook: []
  }

  refresh = () => {
     const books = BooksAPI.getAll();
    books.then((response) => {
      this.setState({books: {
        'currently_reading': response.filter((book) => {
          return book.shelf === 'currentlyReading'
        }),
        'want_to_read': response.filter((book) => {
          return book.shelf === 'wantToRead'
        }),
        'read': response.filter((book) => {
          return book.shelf === 'read'
        }),
      }})
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
			console.log(response)
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
