import React from 'react'
import { useSelector } from 'react-redux'
import data from "./res.json"
export default function FirstBlog() {
   const blog= useSelector(state=>state.blogclicked)
  
    const author = data[blog].author
  return (
    <div>
   <p>  BLOG NO YOU OPENED IS : {blog+1}</p> 
<p> by -: {author} </p> 

    </div>
  )
}




