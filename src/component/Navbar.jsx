import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    	<nav className="navbar bg-body-tertiary justify-content-center fixed-top">
				<ul className="nav">
					<li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-link">PRODUCT</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">PROFILE</Link>
          </li>
          
        </ul>
      </nav>
    </>
  )
}