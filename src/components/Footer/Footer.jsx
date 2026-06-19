import React from 'react'
import './Footer.scss'
import { AiFillTikTok } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { GrMap } from "react-icons/gr";

const Footer = () => {
  return (
    <div className='subcontainer'>
      <div className="top">
        
        <a
          href="https://www.tiktok.com/@ton_compte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTikTok className='social-media' />
        </a>

        <a
          href="https://wa.me/393123456789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiWhatsapp className='social-media' />
        </a>

        <a
          href="https://maps.google.com/?q=Votre+Adresse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrMap className='social-media' />
        </a>

      </div>

      <div className="bottom">
        © 2026 RACHEL BEAUTY EMPIRE - Designed by Manu6
      </div>
    </div>
  )
}

export default Footer