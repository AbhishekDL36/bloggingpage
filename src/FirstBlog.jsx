import React from 'react'
import { useSelector } from 'react-redux'
import data from "./res.json"
import { Link } from 'react-router-dom'
export default function FirstBlog() {
   const blog= useSelector(state=>state.blogclicked)
  
    const author = data[blog].author
    const content = data[blog].info
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center",gap:"20px",flexDirection:"column",height:"84vh",background:"#A39DCD"}}>
   <p>  BLOG NO YOU OPENED IS : {blog+1}</p> 
<p> by -: {author} </p> 
<p>{content}</p>
<Link to="/"><button style={{background:"transparent", padding:"20px"}}>back to list of blogs</button> </Link> 
    </div>
  )
}




