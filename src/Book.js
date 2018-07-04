import React from 'react'

class Book extends React.Component {

  render() {
    return (
      <div>
        <span>{this.props.book.title}</span>
        <img src={this.props.book.imageLinks.smallThumbnail}/>
      </div>
    )
  }
}

export default Book
