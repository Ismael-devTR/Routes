import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserPaeg() {
    const {id} = useParams()
  return (
    <div>
        <h1>{id}</h1>    
        UserPaeg
    </div> 
  )
}
