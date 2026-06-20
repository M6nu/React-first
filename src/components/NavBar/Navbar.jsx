import React from 'react'
import "./Navbar.scss"
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  return (
    <div className='navbar'> 
        <div className='computer'>
            <h2 className='logo'>Rachel Beauty</h2>
            <div className='navigation'>
                <ul className="links-container">
                    <li><a href="#fashion">Fashion</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#booking">Booking</a></li>
                    </ul>
                <FiMenu className='menu-icon'/>
            </div>
        </div>
        <div className="mobile"></div>
    </div>
  )
}

export default Navbar