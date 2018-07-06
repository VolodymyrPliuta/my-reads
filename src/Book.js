import React from 'react'

class Book extends React.Component {

  render() {
    return (
      <div>
        <img src={this.props.book.imageLinks.smallThumbnail}/>
        <div>{this.props.book.title}</div>
        <div><em>{this.props.book.authors.toString()}</em></div>
      </div>
    )
  }
}

export default Book
