import React from 'react'
import Book from './Book'

class Shelf extends React.Component {

  render() {
    if(Object.keys(this.props.books).length !== 0) {
      let bookArr = [];
      const shelfTitle = this.props.shelf;
      // Iterate through the books and assign books to each shelf.
      Object.values(this.props.books[shelfTitle]).map((book,index) => {
        if(shelfTitle === 'currently_reading') {
          bookArr.push(<Book key={book.id} book={book} bookChange={this.props.bookChange} refresh={this.props.refresh} />)
        } else if(shelfTitle === 'want_to_read') {
          bookArr.push(<Book key={book.id} book={book} bookChange={this.props.bookChange}  refresh={this.props.refresh}/>)
        } else if(shelfTitle === 'read') {
          bookArr.push(<Book key={book.id} book={book} bookChange={this.props.bookChange}  refresh={this.props.refresh}/>)
        }
      });
      return(
        <div className="bookshelf-title">
          <h1>{this.props.titleSection}</h1>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {bookArr}
            </ol>
          </div>
        </div>
      )
    } else {
      return(
        <div className="bookshelf-title">
          <h1>{this.props.titleSection}</h1>
        </div>
      )
    }
  }
}

export default Shelf
