import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


export default function Dashboard() {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/')
    }

  return (
    <div>
        Dashboard
        <button onClick={()=>{handleClick()}}>Salir</button>
        <Outlet />
    </div>
  )
}
