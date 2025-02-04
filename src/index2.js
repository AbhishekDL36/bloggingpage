import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import App from './App'
import Welcomepage from './Welcomepage'

export default function Index2() {
    const isAuth = useSelector(state=>state.isAuth)

    const [isTimer,setIstimer]= useState(false)
    useEffect(()=>{
if(isAuth){
   const timer= setTimeout(()=>{
setIstimer(true)
    },1000)
    
return ()=>clearTimeout(timer)
}

    },[isAuth])
  return (
    <div>
      {
        isAuth?(
            isTimer?
            <App/>
            : <p>LOADING...</p>
        )
      
        : <Welcomepage/>
      }
    </div>
  )
}
