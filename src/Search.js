import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends React.Component {
  onChange = (e) => {
    if(e.length !== 0) {
      this.props.searchBooks(e)
    }
    else {
      this.props.clearSearch() 
    }
  }
  render () {
    console.log(this.props.searchBook)
    let array = [];
    let d = new Date();
    if(this.props.searchBook.length > 0) {
      this.props.searchBook.map(book => {
        book.shelf = 'none'
        array.push(<Book key={book.id} book={book} bookChange={this.props.bookChange} refresh={this.props.refresh} />)
      })
    } else {
      array.push(<h1 key={d.getTime()}> Type in the above search field to get a result</h1>) 
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input onChange={(e) => this.onChange(e.target.value )}  type="text" placeholder="Search by title or author"/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {array}
                </ol>
              </div>
            </div>
    )
  }
}

export default Search
