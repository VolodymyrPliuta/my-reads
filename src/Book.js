import React from 'react'

class Book extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>{this.props.book.title}</span>
      </div>
  )
  }
}

export default Book
