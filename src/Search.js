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
