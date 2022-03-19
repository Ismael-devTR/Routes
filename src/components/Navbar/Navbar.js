import React from 'react'
import { Link, NavLink } from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <div>
        <ul>
          <li>
              <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
              <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
              <NavLink to={"/users_pages"}>Users</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
