import React, { useState } from 'react'
import "./Value.scss"
import { HiChevronDown } from "react-icons/hi";
import { PiShieldCheckFill } from "react-icons/pi";
import { MdVisibility } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import {images} from "../../altro/data.js"


const Value = () => {
    const [activeItem , setActiveItem] = useState("one")
    const updateActiveItem = (value) => { setActiveItem(value); }

  return (
    <div className='second-value-container'>
        <div className="grid-container-value">
            <div className="left">
                <div className="image-container">
                    <img src={images.image1} alt=""/>
                </div>
                </div>
            <div className="right">
                <span className='title'> About us</span>
                <h2 className="subtitle">who we Are</h2>
                <p className='desc-values'>trés charmant endroit pour se faire Jolie!</p>
                <div className="liste-valeurs">
                    <div className={activeItem === "one" ? "item active" : "item"} onClick={ ()=> updateActiveItem("one")}>
                        <div className="head">
                            <PiShieldCheckFill className='value-icon'/>
                            <span>Quality</span>
                            <HiChevronDown className='value-icon'/>
                        </div>
                        <p className='description'>
                            We garanteed a well being fashion!
                        </p>
                    </div>
                </div>
                <div className="liste-valeurs">
                    <div className={activeItem === "two" ? "item active" : "item"} onClick={ ()=> updateActiveItem("two")}>
                        <div className="head">
                            <MdVisibility className='value-icon'/>
                            <span>Service</span>
                            <HiChevronDown className='value-icon'/>
                        </div>
                        <p className='description'>
                            With a high number of Services garanteed!
                        </p>
                    </div>
                </div>
                <div className="liste-valeurs">
                    <div className={activeItem === "three" ? "item active" : "item"} onClick={ ()=> updateActiveItem("three")}>
                        <div className="head">
                            <FaCartArrowDown className='value-icon'/>
                            <span>Availability</span>
                            <HiChevronDown className='value-icon'/>
                        </div>
                        <p className='description'>
                            We open Everyday from 10:00 AM to 9:00 PM!
                        </p>
                    </div>
                </div>
            </div>
            </div> 

    </div>
  )
}

export default Value