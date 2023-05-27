import React from 'react';
import '../CSS/navbar.css';
import Button from './Button';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar-main'>
        <div className="navbar-left">
            Portfolio
        </div>
        <div className="navbar-right">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='projects'>Projects</NavLink>
            <NavLink to='contact'>Contact</NavLink>

        </div>
    </nav>
  )
}

export default Navbar;