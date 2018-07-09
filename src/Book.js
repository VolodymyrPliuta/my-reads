import React from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {

  render() {
    return (
      <li>
        <div className="book" >
          <div className="book-top">
            <img className="book-cover" style={{ width: 128, height: 193}} src={this.props.book.imageLinks.smallThumbnail}/>
            <ShelfChanger s={this.props} bookid={this.props.book.id} refresh={this.props.refresh}/>
          </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors"><em>{this.props.book.authors.toString()}</em></div>
        </div>
      </li>
    )
  }
}

export default Book
