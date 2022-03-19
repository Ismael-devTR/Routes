import React from 'react'
import { Link } from 'react-router-dom'

export default function UsersPages() {
  const userId = 10
  return (
    <div>
      Users
      <h1>
        <Link to={`/users/:${userId}`}/>
      </h1>
    </div>
  )
}
