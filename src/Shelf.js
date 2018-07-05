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
    let books = BooksAPI.search('Art');
    books.then(response => this.setState({books:
      {'currently_reading': response, 'want_to_read': response, 'read': response}
    }));
  }

  render() {
    if(Object.keys(this.state.books).length !== 0) {
      let bookArr = [];
      bookArr.push(<Book key={this.state.books.currently_reading[0].id} book={this.state.books.currently_reading[0]} />)
      bookArr.push(<Book key={this.state.books.currently_reading[1].id} book={this.state.books.currently_reading[1]} />)
      bookArr.push(<Book key={this.state.books.currently_reading[2].id} book={this.state.books.currently_reading[2]} />)
        /*
      this.state.books.currently_reading.map((book,index) =>
        bookArr.push(<book key={book.id} book={book} />)
      )
      */
      console.log(this.state)
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
