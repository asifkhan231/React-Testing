import React from 'react'

function Greet(props) {
  return (
    <div>
      Hello {props.name?props.name:"Guest"}
    </div>
  )
}

export default Greet
