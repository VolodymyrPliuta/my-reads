import React from 'react'
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends React.Component {
  onChange = (event) => {
    const data = BooksAPI.update({id: this.props.bookid},
    event.target.value
    )
    data.then((response) => {
      this.props.refresh();
    })
  }

  render() {
    return(
      <div className="book-shelf-changer">
        <select onChange={this.onChange} defaultValue={this.props.bookShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}
export default ShelfChanger
