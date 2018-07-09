import React from 'react'
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends React.Component {
  onChange = (event) => {
    const data = BooksAPI.update({id: this.props.bookid},
    event.target.value
    )
    data.then((response) => {
      console.log(response)
      this.props.refresh();
    })
   console.log(event.target.value) 
  }
  render() {
    return(
      <div className="book-shelf-changer">
        <select onChange={this.onChange}>
          {console.log(this.props)}
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
