//import {ReactComponent  as Brand} from '../imagenes/ips.svg'
import  Brand from '../imagenes/logo-ips.png';
import { ReactComponent as Hamburger } from '../imagenes/icono.svg'
import React, {useState} from "react";
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {

 const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar body">
      <div className="container">
        <div className="logo">
          <img className='imagen' src={Brand}  />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/admin/servicios">Servicios Atención</NavLink></li>
          <li>Certificados</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar