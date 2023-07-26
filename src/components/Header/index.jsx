import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Header() {
  const location = useLocation()
  return (
    <nav className="nav">
      <img src={logo} alt="Kasa" className="kasa-logo" />
      <div className="nav__links">
        <Link
          to="/"
          className={
            location.pathname === '/'
              ? 'nav__links__link active'
              : 'nav__links__link'
          }
        >
          Accueil
        </Link>
        <Link
          to="/apropos"
          className={
            location.pathname === '/apropos'
              ? 'nav__links__link active'
              : 'nav__links__link'
          }
        >
          A propos
        </Link>
      </div>
    </nav>
  )
}

export default Header
