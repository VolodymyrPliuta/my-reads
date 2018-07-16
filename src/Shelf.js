import React from 'react'
import Book from './Book'

const Shelf = (props) => {
    if(Object.keys(props.books).length !== 0) {
      let bookArr = [];
      const shelfTitle = props.shelf;
      // Iterate through the books and assign books to each shelf.
      Object.values(props.books[shelfTitle]).map((book,index) => {
        if(shelfTitle === 'currently_reading') {
          bookArr.push(<Book key={book.id} book={book} bookChange={props.bookChange} refresh={props.refresh} />)
        } else if(shelfTitle === 'want_to_read') {
          bookArr.push(<Book key={book.id} book={book} bookChange={props.bookChange}  refresh={props.refresh}/>)
        } else if(shelfTitle === 'read') {
          bookArr.push(<Book key={book.id} book={book} bookChange={props.bookChange}  refresh={props.refresh}/>)
        }
      });
      return(
        <div className="bookshelf-title">
          <h1>{props.titleSection}</h1>
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
          <h1>{props.titleSection}</h1>
        </div>
      )
    }
  }

export default Shelf
