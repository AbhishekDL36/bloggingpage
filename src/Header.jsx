import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'

export default function Header() {
const dispatch = useDispatch()
 const logout=  useSelector(state=>state.logoutfn)
const valuee= useSelector(state=>state.userName)
const handlelogout=()=>{
  localStorage.removeItem('nameval');

  if(logout){
    logout()
  }

  dispatch({
    type:"logout"
  })
}

  return (<div>
 <nav style={{background:"#B0C4DE", height:"63px" , paddingTop:"15px" , paddingLeft:"580px", fontSize:"26px",fontFamily:"cursive"}}>
      BLOGGING WEBSITE
    <button onClick={handlelogout}>logout</button>
    </nav>
  <div style={{textAlign:"center" , fontSize:"25px" ,paddingTop:"20px", fontFamily:"fantasy"}}>Hello , {valuee } </div>  
  
  </div>
   
  )
}
