import React from 'react'

class Shelf extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      
    }
  }

render() {
  return(
    <div className="bookshelf-title">
      <h1>{this.props.titleSection}</h1>
    </div>
    )
  }
}

export default Shelf
