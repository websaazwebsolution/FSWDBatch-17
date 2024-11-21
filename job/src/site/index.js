import React from 'react'
import './mystyle.css';

const MyStyle = {
    backgroundColor:'blue',
    color:'white',
    padding:'10px',
    textAling:'center'
}

function Website() {
  return (
    <div style={MyStyle}>
        <p>my website</p>
    </div>
   

  )
}

export default Website