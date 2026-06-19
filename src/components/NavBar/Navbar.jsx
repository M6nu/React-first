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
                    <li className="link">Fashion</li>
                    <li className="link">About Us</li>
                    <li className="link">Contact</li>
                    <li className="link">Book</li>
                </ul>
                <FiMenu className='menu-icon'/>
            </div>
        </div>
        <div className="mobile"></div>
    </div>
  )
}

export default Navbar