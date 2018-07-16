import React from 'react'

const Header = (props) => {
    return(
      <div className="list-books-title">
        <h1>{props.title}</h1>
      </div>
    )
  }

export default Header
