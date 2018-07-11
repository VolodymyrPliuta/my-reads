import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import Shelf from './Shelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: {},
    showSearchPage: false
  }

  moveBook = (book) => {
    //    for(let state of this.state){
    // } 
  }

  refresh = () => {
     const books = BooksAPI.getAll();
    books.then((response) => {
      console.log(response)
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

  componentWillMount() {
    this.refresh()
  }

  UpdateShelf = (bookid, shelf) => {
    //BookAPI.update(bookid)
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <Header title="MyReads" />
                  <Shelf titleSection="Currently Reading" shelf="currently_reading" books={this.state.books} bookChange={this.moveBook()} refresh={this.refresh}/>
                  <Shelf titleSection="Want to Read" shelf="want_to_read" books={this.state.books} refresh={this.refresh}/>
                  <Shelf titleSection="Read" shelf="read" books={this.state.books} refresh={this.refresh}/>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
