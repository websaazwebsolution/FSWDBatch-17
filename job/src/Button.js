import React from 'react'

function Button(props) {
  return (
    <button style={{
        color: props.color,
        backgroundColor: props.bg,
        padding: "5px",
        margin: "10px",
             }}
      >{props.title}</button>
  )
}

export default Button