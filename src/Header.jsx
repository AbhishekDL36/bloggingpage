import React, { useState } from 'react'

export default function Header() {
    const a= prompt("Hello, please confirm me your name")
const [val,setVal] = useState(a)
  return (
    <nav style={{background:"#B0C4DE", height:"63px" , paddingTop:"15px" , paddingLeft:"580px", fontSize:"26px",fontFamily:"cursive"}}>
      BLOGGING WEBSITE
      <p style={{paddingTop:"30px"}}>WELCOME , {val}</p>
    </nav>
  )
}
