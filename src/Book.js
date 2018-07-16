import React from 'react'
import ShelfChanger from './ShelfChanger'

const Book = (props) => {
    return (
      <li>
        <div className="book" >
          <div className="book-top">
            <img className="book-cover" style={{ width: 128, height: 193}} src={props.book.hasOwnProperty('imageLinks') ? props.book.imageLinks.smallThumbnail : ''}/>
            <ShelfChanger bookid={props.book.id} refresh={props.refresh} bookShelf={props.book.shelf}/>
          </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors"><em>{props.book.hasOwnProperty('authors') ? props.book.authors.toString() : props.book.authors = ''}</em></div>
        </div>
      </li>
    )
  }

export default Book
