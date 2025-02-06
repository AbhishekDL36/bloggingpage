import React from 'react'
import { useSelector } from 'react-redux'

export default function FirstBlog() {
   const blog= useSelector(state=>state.blogclicked)
    console.log(blog)
  return (
    <div>
      first blog h yr,{blog+1}
    </div>
  )
}




