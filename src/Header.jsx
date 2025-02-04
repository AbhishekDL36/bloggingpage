import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
 const name=  useSelector(state=>state.userName)
  return (<div>
 <nav style={{background:"#B0C4DE", height:"63px" , paddingTop:"15px" , paddingLeft:"580px", fontSize:"26px",fontFamily:"cursive"}}>
      BLOGGING WEBSITE
     hello , {name}
    </nav>
    
  </div>
   
  )
}
