import React, { useEffect } from 'react'
import "./Home.scss"
import { FaLocationDot } from "react-icons/fa6";
import {images} from "../../altro/data.js"
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Home = () => {

    const countA = useMotionValue(0)
    const countB = useMotionValue(0)
    const countC = useMotionValue(0)

    const roundedA = useTransform(countA, Math.round)
    const roundedB = useTransform(countB, Math.round)
    const roundedC = useTransform(countC, Math.round)

    useEffect( ()=>{ 
        const animationA = animate(countA, 9000, {duration: 10 })
        const animationB = animate(countB, 3150, {duration: 10 })
        const animationC = animate(countC, 421, {duration: 10 }) 
    
        return animationA.stop, animationB.stop, animationC.stop}, [])
    
    return ( 
    <div className='Home-grid'>
        <div className='info'>
            <h1>The House of Fashions & Style</h1>
            <p>You are looking for a new style, here is the place to be! African's Braids, Locks, all types of Dreads </p>

            <div className="container-search">
                <input type='text'/>
                <FaLocationDot className='icon'/>
                <span className='btn'>search</span>
            </div>
            <div className="achievements">
                <div className="item">
                    <h3>
                        <span>+</span>
                        <motion.strong>{roundedA}</motion.strong>
                    </h3>
                    <span>Fashions</span>
                </div>
                <div className="item">
                    <h3>
                        <span>+</span>
                        <motion.strong>{roundedB}</motion.strong>
                    </h3>
                    <span>Clients</span>
                </div>
                <div className="item">
                    <h3>
                        <span>+</span>
                        <motion.strong>{roundedC}</motion.strong>
                    </h3>
                    <span>Partners</span>
                </div>
            </div>
    
        </div>
        <div className="image-container">
            <img src={images.image2} alt=''></img>
        </div>
    </div>)
}
export default Home