import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Footer() {
    const val=   useSelector(state=>state.pageNum)
    console.log(val)
  const dispatch=  useDispatch()
  return (
    <div style={{background:"#B0C4DE"}}>
      <button style={{fontSize:"30px",border:"0px" , background:"transparent"}} onClick={()=>dispatch({
        type:"-"
      })} >〈</button>
      <button style={{fontSize:"30px" , border:"0px" , background:"transparent"}} onClick={()=>dispatch({
        type:"+"
      })}>〉</button>
    </div>
  )
}
