import React from 'react'
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

  moveBookToShelf = () => {
    
  }

  backArrow = () => {
   this.setState({ showSearchPage: false })
  }
  render() {
    const r = BooksAPI.search('art')
    r.then((resp) => {
    console.log(resp)
    })
    return (
      <div className="app">
        {this.state.showSearchPage ? (
            <Search clearSearch={this.clearSearch} searchBooks={this.searchBooks} searchBook={this.state.searchBook} backArrow={this.backArrow} refresh={this.refresh}/>
        ) : (
          <div className="list-books">
            <Header title="MyReads" />
                  <Shelf titleSection="Currently Reading" shelf="currently_reading" books={this.state.books} refresh={this.refresh}/>
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
