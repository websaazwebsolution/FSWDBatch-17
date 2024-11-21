import React from 'react'

function Email(){
        return(
            <h1>admin@gmail.com</h1>
        )
}

function Address(){
        return(
            <h1>Karachi</h1>
        )
}

function Contact() {
  return (
    <div>
        <email/> 
        <Email />
        <Address />
        0335554444
    </div>
  )
}

export default Contact