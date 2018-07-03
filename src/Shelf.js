import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Shelf extends React.Component {
  constructor(props) {
    super(props)
    this.state={
     books: {}
    }
  }

  componentDidMount() {
    let books = BooksAPI.search('Astronomy');
    books.then(response => this.setState({books: {'currently_reading': response}}));
  }

  render() {
    if(Object.keys(this.state.books).length !== 0) {
      let bookArr = [];
      this.state.books.currently_reading.map((book,index) =>
        bookArr.push(<Book key={book.id} book={book} />)
      )
      return(
        <div className="bookshelf-title">
          <h1>{this.props.titleSection}</h1>
          {bookArr}
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
